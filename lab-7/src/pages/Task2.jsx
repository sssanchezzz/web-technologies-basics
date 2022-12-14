import React from 'react';
import GoodsCard from '../components/GoodsCard';
import { products } from '../data/goods';
import styled from '@emotion/styled';

const Task2 = () => {
    return (
        <Wrapper>
            {products.map((product) => (
                <GoodsCard product={product} />
            ))}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
`;

export default Task2;
