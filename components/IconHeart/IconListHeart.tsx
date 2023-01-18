import React from 'react';
import { Indicator } from '@mantine/core';
import { IconHeart } from "@tabler/icons"

const IconListHeart = () => {
    return (
        <Indicator inline label={0} size={16}>
            <IconHeart size={18} />
        </Indicator>
    );
};

export default IconListHeart;