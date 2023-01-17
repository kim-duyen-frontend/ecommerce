import React from 'react';
import { useAppSelector } from 'app/hooks'
import { selectCollectionEcommerceSelector } from '@/features';
import { Card, Button, Grid, Text, Center } from '@mantine/core';
import Image from 'next/image'

const ListProduct = () => {
    const { products } = useAppSelector(selectCollectionEcommerceSelector)
    console.log(products);

    return (
        <Grid>
            {products && products.length > 0 && products.map((product) => (
                <Grid.Col span={3} key={product.id}>
                    <Card shadow="sm" p="lg" radius="md" withBorder >
                        <Card.Section>
                            <Center>
                                {product.image && (
                                    <Image
                                        src={product.image ? product.image.url : ""}
                                        width={160}
                                        height={160}
                                        alt={product.image.filename}
                                    />)}
                            </Center>
                        </Card.Section>
                        <Text weight={500}>{product.name}</Text>
                        <Text size="sm" color="dimmed">{product.price.formatted_with_code}</Text>
                        <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                            Add to Cart
                        </Button>
                    </Card>
                </Grid.Col>
            ))}
        </Grid>
    );
};

export default ListProduct;