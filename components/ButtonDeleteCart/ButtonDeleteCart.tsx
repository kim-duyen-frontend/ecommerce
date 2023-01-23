import React from 'react';
import { Button } from '@mantine/core';
import { IconTrash } from "@tabler/icons"

const ButtonDeleteCart = () => {
    return (
        <Button
            className='hover: bg-sky-500 hover:cursor-pointer'
            leftIcon={<IconTrash />}
            variant="filled"
        >
            Delete Cart
        </Button>
    );
};

export default ButtonDeleteCart;