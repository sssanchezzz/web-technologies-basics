import React from 'react';
import styled from '@emotion/styled';

const GoodsCard = ({ product }) => {
    return (
        <Card>
            <ProductImg src={product.img} alt={`${product.name} img`} />
            <Description>
                <h3>{product.name}</h3>
                <h5>Price: {product.price}</h5>
            </Description>
        </Card>
    );
};

const Card = styled.div`
    width: 20rem;
    font-family: Arial, Helvetica, sans-serif;
    border: 1px solid #eeeeee;
    border-radius: 15px;
    box-shadow: 5px 5px 5px #eeeeee;
`;

const ProductImg = styled.img`
    width: 100%;
    border-radius: 15px 15px 0 0;
    height: 20rem;
    object-fit: cover;
`;

const Description = styled.div`
    padding: 0 1rem;
    h3 {
        text-transform: uppercase;
    }
`;

export default GoodsCard;
