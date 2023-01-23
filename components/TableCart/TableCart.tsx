import React from 'react';
import { Table, Group, Text, ActionIcon } from '@mantine/core';
import { useAppSelector } from '@/app/hooks';
import { selectCollectionEcommerceSelector } from '@/features';
import Image from 'next/image';
import { IconX } from "@tabler/icons"

const TableCart = () => {
    const { cart } = useAppSelector(selectCollectionEcommerceSelector);
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
                                    <ActionIcon size={42} variant="default">
                                        –
                                    </ActionIcon>
                                    {item.quantity}
                                    <ActionIcon size={42} variant="default">
                                        +
                                    </ActionIcon>
                                </Group>
                            </td>
                            <td>{item.line_total.formatted}</td>
                            <td>
                                <IconX className='cursor-pointer' />
                            </td>
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