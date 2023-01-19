import React from 'react';
import { TextInput } from '@mantine/core';

const SearchProduct = () => {
    return (
        <div className='xs:w-full sm:w-full md:w-1/2'>
            <TextInput placeholder='Tìm sản phẩm...' />
        </div>
    );
};

export default SearchProduct;