import React from 'react';
import { Button } from '@mantine/core';
import { IconTrash } from "@tabler/icons"
import { useAppDispatch } from '@/app/hooks';
import { deleteCart, getCartProduct } from '@/features';

const ButtonDeleteCart = () => {
    const dispatch = useAppDispatch()

    const handleDeleteCart = async () => {
        await dispatch(deleteCart())
        await dispatch(getCartProduct())
    }
    return (
        <Button
            className='hover: bg-sky-500 hover:cursor-pointer'
            leftIcon={<IconTrash />}
            variant="filled"
            onClick={handleDeleteCart}
        >
            Delete Cart
        </Button>
    );
};

export default ButtonDeleteCart;