import React from 'react';
import { TextInput } from '@mantine/core';
import { useAppDispatch } from '@/app/hooks';
import { getListSearchProduct } from '@/features';

const SearchProduct = () => {
    const dispatch = useAppDispatch()

    return (
        <div className='xs: w-full sm: w-full md: w-1/2'>
            <TextInput placeholder='Tìm sản phẩm...' onChange={(event) => dispatch(getListSearchProduct(event.target.value))} />
        </div>
    );
};

export default SearchProduct;