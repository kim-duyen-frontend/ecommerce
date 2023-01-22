import React from 'react';
import { Indicator } from '@mantine/core';
import { IconHeart } from "@tabler/icons"
import { useAppSelector } from '@/app/hooks';
import { selectCollectionEcommerceSelector } from '@/features';
import { useRouter } from 'next/router';

const IconListHeart = () => {
    const { heartList } = useAppSelector(selectCollectionEcommerceSelector)
    const router = useRouter()
    return (
        <Indicator inline label={heartList?.length} size={16} className="cursor-pointer">
            <IconHeart size={18} onClick={() => router.push("/likes")} />
        </Indicator>
    );
};

export default IconListHeart;