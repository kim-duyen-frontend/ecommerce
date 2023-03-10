import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { addToCart, getCartProduct, selectCollectionEcommerceSelector, setHeartList } from "@/features";
import {
  Card,
  Button,
  Grid,
  Badge,
  Center,
  Group,
  Transition,
  Rating,
} from "@mantine/core";
import { IconHeart } from "@tabler/icons";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@chec/commerce.js/types/product";

const ListProduct = () => {
  const { products, type_sort, text_search, likes, starList } =
    useAppSelector(selectCollectionEcommerceSelector);
  const dispatch = useAppDispatch()
  const [isHovering, setIsHovered] = useState(false);

  const handleAddToCart = async (data: Product) => {
    await dispatch(addToCart({ id: data.id, quantity: 1 }))
    await dispatch(getCartProduct())
  }

  return (
    <Grid>
      {products?.length > 0 &&
        products
          .slice()
          .sort((a, b) => {
            switch (type_sort) {
              case "price asc":
                return a.price.raw > b.price.raw ? 1 : -1;
              case "price desc":
                return a.price.raw < b.price.raw ? 1 : -1;
              default:
                return 0;
            }
          })
          .slice()
          .filter((list) =>
            list.name.toLowerCase().includes(text_search.toLowerCase())
          )
          .map((product) => (
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
                            className="bg-white p-3 cursor-pointer"
                            onClick={() => dispatch(setHeartList(product))}
                          >
                            <IconHeart className={`${likes.includes(product.id) ? "fill-red-500 text-red-500" : ""}`} />
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
                <Group>
                  {starList.some((item) => item.id == product.id) ? <Rating defaultValue={starList[0]?.stars} /> : ""}
                </Group>
                <Group position="apart" mt="md" mb="xs">
                  <p className="text-[#FF424E] font-medium">
                    {product.price.formatted_with_code}
                  </p>
                  <Badge color="pink" variant="light">
                    Freeship
                  </Badge>
                </Group>
                <Button
                  variant="light"
                  color="blue"
                  fullWidth
                  mt="md"
                  radius="md"
                  className="hover: bg-sky-100"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </Button>
              </Card>
            </Grid.Col>
          ))}
    </Grid>
  );
};

export default ListProduct;
