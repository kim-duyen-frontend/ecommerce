import React from 'react';
import { Indicator } from '@mantine/core';
import { IconShoppingCart } from "@tabler/icons"

const IconListCart = () => {
    return (
        <Indicator inline label={0} size={16}>
            <IconShoppingCart size={18} />
        </Indicator>
    );
};

export default IconListCart;