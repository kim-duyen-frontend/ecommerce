import React from 'react';
import { Pagination, Group } from '@mantine/core';
import { selectCollectionEcommerceSelector, setItemPages, setPagePagination, TPaginationProducts } from '@/features';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { LIMIT_PAGE } from '@/utils/constVariable';

const PaginationProduct = ({ total }: TPaginationProducts) => {
    const { active_page } = useAppSelector(selectCollectionEcommerceSelector)
    const dispatch = useAppDispatch()

    const handleChangePage = (page: number) => {
        dispatch(setPagePagination(page));
        if (page <= 1) {
            dispatch(setItemPages({
                minItem: 0,
                maxItem: LIMIT_PAGE
            }))
        } else {
            dispatch(setItemPages({
                minItem: (page - 1) * LIMIT_PAGE,
                maxItem: page * LIMIT_PAGE
            }))
        }
    }
    return (
        <Group position='center'>
            <Pagination
                page={active_page}
                onChange={handleChangePage}
                total={Math.ceil(total / LIMIT_PAGE)}
                withEdges
                radius="xl"
            />
        </Group>
    );
};

export default PaginationProduct;