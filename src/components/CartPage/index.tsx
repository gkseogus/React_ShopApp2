import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const CartButton = styled.button`
    background : red;
    color : white;
    padding : 10px;
`

const CartPage = () => {

    const navigate = useNavigate();

    return (
        <div>
            <h4>카트페이지</h4>
            <CartButton onClick={() => {navigate('/cart/one')}}>one page</CartButton>
            <CartButton onClick={() => {navigate('/cart/two')}}>two page</CartButton>
            <Outlet></Outlet>
        </div>
    );
};

export default React.memo(CartPage);