import React from 'react';
import { Table, Group, Text } from '@mantine/core';
import { useAppSelector } from '@/app/hooks';
import { selectCollectionEcommerceSelector } from '@/features';
import Image from 'next/image';

const TableCart = () => {
    const { cart } = useAppSelector(selectCollectionEcommerceSelector);
    return (
        <div>
            <Table verticalSpacing="sm" highlightOnHover fontSize="md">
                <thead>
                    <tr>
                        <th>Hình ảnh</th>
                        <th>Tên sản phẩm</th>
                        <th>Số lượng</th>
                        <th>Giá</th>
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
                            <td>{item.quantity}</td>
                            <td>{item.line_total.formatted}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Group position="right">
                <Text tt="capitalize" size="lg">tổng tiền: {cart.subtotal.formatted}</Text>
            </Group>
        </div>
    );
};

export default TableCart;