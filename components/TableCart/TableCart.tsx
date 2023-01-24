import React from 'react';
import { Table, Group, Text, ActionIcon } from '@mantine/core';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { decreamentQuantity, getCartProduct, increamentQuantity, removeProductFromCart, selectCollectionEcommerceSelector, TAddCart } from '@/features';
import Image from 'next/image';
import { IconX } from "@tabler/icons"

const TableCart = () => {
    const { cart } = useAppSelector(selectCollectionEcommerceSelector);
    const dispatch = useAppDispatch()

    const handleRemoveProduct = async (id: string) => {
        await dispatch(removeProductFromCart(id))
        await dispatch(getCartProduct())
    }
    const increamentQty = async (productCart: TAddCart) => {
        await dispatch(increamentQuantity({ id: productCart.id, quantity: productCart.quantity }))
        await dispatch(getCartProduct())
    }
    const decreamentQty = async (productCart: TAddCart) => {
        await dispatch(decreamentQuantity({ id: productCart.id, quantity: productCart.quantity }))
        await dispatch(getCartProduct())
    }
    return (
        <div className='overflow-x-auto'>
            <Table verticalSpacing="sm" highlightOnHover fontSize="md">
                <thead>
                    <tr>
                        <th>Hình ảnh</th>
                        <th>Tên sản phẩm</th>
                        <th>Số lượng</th>
                        <th>Giá</th>
                        <th>Xoá</th>
                    </tr>
                </thead>
                <tbody>
                    {cart?.line_items.map((item) => (
                        <tr key={item.id}>
                            <td>
                                {item.image && (
                                    <Image src={item.image.url} width={80} height={80} alt={item.name} />
                                )}
                            </td>
                            <td>{item.name}</td>
                            <td>
                                <Group spacing={5}>
                                    <ActionIcon size={42} variant="default" onClick={() => decreamentQty(item)}>
                                        –
                                    </ActionIcon>
                                    {item.quantity}
                                    <ActionIcon size={42} variant="default" onClick={() => increamentQty(item)}>
                                        +
                                    </ActionIcon>
                                </Group>
                            </td>
                            <td>{item.line_total.formatted}</td>
                            <td>
                                <IconX className='cursor-pointer' onClick={() => handleRemoveProduct(item.id)} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Group position="right">
                <Text tt="capitalize" size="lg">tổng tiền: {cart.subtotal.formatted}</Text>
            </Group>
        </div >
    );
};

export default TableCart;