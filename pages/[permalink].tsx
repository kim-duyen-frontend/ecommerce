import commerce from '@/utils/api';
import { Product } from '@chec/commerce.js/types/product';
import { GetStaticProps, GetStaticPaths } from 'next';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import { Grid, Container, Flex, Title, Group, Rating } from '@mantine/core';
import Image from 'next/image';
import { setStarsProduct } from '@/features';
import { useAppDispatch } from '@/app/hooks';

interface IParams extends ParsedUrlQuery {
    permalink: string
}

export const getStaticProps: GetStaticProps = async (context) => {
    const { permalink } = context.params as IParams;

    const product = await commerce.products.retrieve(permalink, {
        type: 'permalink',
    });

    return {
        props: {
            product,
        },
    };
}

export const getStaticPaths: GetStaticPaths = async () => {
    const { data: products } = await commerce.products.list();

    return {
        paths: products.map((product) => ({
            params: {
                permalink: product.permalink,
            },
        })),
        fallback: false,
    };
}

const DetailProduct = ({ product }: { product: Product }) => {
    const dispatch = useAppDispatch();
    const handleChangeStar = (product: Product, value: number) => {
        dispatch(setStarsProduct({ id: product.id, stars: value }))
    }

    return (
        <Container fluid >
            <Grid grow>
                <Grid.Col xs={12} md={2} lg={2}>
                    <Flex
                        bg="rgba(239, 239, 239, 1)"
                        gap="sm"
                        direction="row"
                        wrap="wrap"
                        justify="center"
                        className="p-2"
                    >
                        {product.assets.map((item) => (
                            <div className='sm: w-[49%] md: w-[48%]' key={item.id}>
                                <Image
                                    className='object-cover w-full h-full'
                                    src={item.url}
                                    width={500}
                                    height={200}
                                    alt={item.filename}
                                />
                            </div>
                        ))}
                    </Flex>
                </Grid.Col>
                <Grid.Col md={4} lg={4}>
                    <Title order={2}>{product.name}</Title>
                    <Group>
                        <Rating onChange={(value: number) => handleChangeStar(product, value)} />
                    </Group>
                    <Title order={3}>{product.price.formatted_with_code}</Title>
                    {<div dangerouslySetInnerHTML={{ __html: `${product.description}` }} />}
                </Grid.Col>
            </Grid>
        </Container>
    );
};

export default DetailProduct