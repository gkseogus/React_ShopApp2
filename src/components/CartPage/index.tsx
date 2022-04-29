import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const CartPage = () => {

    const navigate = useNavigate();

    return (
        <div>
            <h4>카트페이지</h4>
            <button onClick={() => {navigate('/cart/one')}}>one page</button>
            <button onClick={() => {navigate('/cart/two')}}>two page</button>
            <Outlet></Outlet>
        </div>
    );
};

export default React.memo(CartPage);