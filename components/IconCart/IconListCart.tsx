import React from 'react';
import { Indicator } from '@mantine/core';
import { IconShoppingCart } from "@tabler/icons"
import { useRouter } from 'next/router';
import { useAppSelector } from '@/app/hooks';
import { selectCollectionEcommerceSelector } from '@/features';

const IconListCart = () => {
    const router = useRouter()
    const { cart } = useAppSelector(selectCollectionEcommerceSelector)
    return (
        <Indicator inline label={cart?.total_items} size={16} className="cursor-pointer">
            <IconShoppingCart size={18} onClick={() => router.push("/cart")} />
        </Indicator>
    );
};

export default IconListCart;