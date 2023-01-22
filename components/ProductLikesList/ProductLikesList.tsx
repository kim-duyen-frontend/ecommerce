import React, { useState } from 'react';
import {
    Card,
    Grid,
    Badge,
    Center,
    Group,
    Transition,
} from "@mantine/core";
import { useAppSelector } from '@/app/hooks';
import { selectCollectionEcommerceSelector } from '@/features';
import Link from "next/link";
import Image from "next/image";
import { IconHeartOff } from "@tabler/icons";

const ProductLikesList = () => {
    const { heartList } = useAppSelector(selectCollectionEcommerceSelector)
    const [isHovering, setIsHovered] = useState(false);
    return (
        <Grid>
            {heartList.map((product) => (
                <Grid.Col md={3} sm={6} xs={12} key={product.id}>
                    <Card shadow="sm" p="lg" radius="md" withBorder>
                        <Card.Section>
                            <div
                                className="relative group cursor-pointer"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                <Center>
                                    {product.image && (
                                        <div className="relative">
                                            <Image
                                                src={product.image ? product.image.url : ""}
                                                width={160}
                                                height={160}
                                                alt={product.image.filename}
                                            />
                                        </div>
                                    )}
                                </Center>
                                <div className="opacity-0 group-hover:opacity-100 absolute top-0 left-1/2 -translate-x-1/2 w-full h-full flex items-center justify-center">
                                    <Transition
                                        mounted={isHovering}
                                        transition="slide-down"
                                        duration={400}
                                        timingFunction="ease"
                                    >
                                        {(styles) => (
                                            <div
                                                style={styles}
                                                className="bg-white p-3 cursor-pointer">
                                                <IconHeartOff />
                                            </div>
                                        )}
                                    </Transition>
                                </div>
                            </div>
                        </Card.Section>

                        <div className="h-12 mt-6">
                            <h3 className="font-bold text-xs leading-5 m-0 break-words">
                                <Link href={`/${product.permalink}`}>{product.name}</Link>
                            </h3>
                        </div>
                        <Group position="apart" mt="md" mb="xs">
                            <p className="text-[#FF424E] font-medium">
                                {product.price.formatted_with_code}
                            </p>
                            <Badge color="pink" variant="light">
                                Freeship
                            </Badge>
                        </Group>
                    </Card>
                </Grid.Col>
            ))}
        </Grid>
    );
};

export default ProductLikesList;