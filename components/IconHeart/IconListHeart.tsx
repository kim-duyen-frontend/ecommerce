import React from 'react';
import { Indicator } from '@mantine/core';
import { IconHeart } from "@tabler/icons"
import { useAppSelector } from '@/app/hooks';
import { selectCollectionEcommerceSelector } from '@/features';

const IconListHeart = () => {
    const { heartList } = useAppSelector(selectCollectionEcommerceSelector)
    return (
        <Indicator inline label={heartList?.length} size={16} className="cursor-pointer">
            <IconHeart size={18} />
        </Indicator>
    );
};

export default IconListHeart;