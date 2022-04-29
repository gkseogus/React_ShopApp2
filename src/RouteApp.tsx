import React from 'react';
import NavBar from './components/NavBar';
import MainContents from './components/MainContents';
import { Routes, Route } from 'react-router-dom';
import DetailPage from './components/DetailPage';
import styled from 'styled-components';
import CartPage from './components/CartPage';

const MainImg = styled.img`
  height: 200px;
  width: 100%;
`

const RoutesApp = () => {
    return (
        <Routes>
            <Route path="/" element={
                <div>
                    <NavBar/>
                    <MainImg src='/Img/mainImg.jpg' />
                    <MainContents/>
                </div>
            }/>
            <Route path="/detail/:id" element={
                <div>
                    <NavBar/>
                    <DetailPage/>
                </div>
            }/>
            <Route path="/detail/" element={
                <div>
                    <NavBar/>
                    <DetailPage/>
                </div>
            }/>
            <Route path="/cart" element={
                <div>
                    <NavBar/>
                    <CartPage/>
                </div>
            }>
                <Route path='one' element={
                    <div>
                        <h4>첫 주문시 양배추즙서비스</h4>
                    </div>}
                />
                <Route path='two' element={
                    <div>
                        <h4>생일기념 쿠폰받기</h4>
                    </div>}
                />
            </Route>
            <Route path="*" element={<div>404 error</div>}/>
        </Routes>
    );
};

export default React.memo(RoutesApp);