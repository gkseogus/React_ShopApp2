import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import shoesData from '../../data';

const Inputbar = styled.input`
    width: 200px;
    height: 25px;
    padding: 10px;
`

const DetailPage = () => {

    const [ shoesItems ] = useState(shoesData);
    const [ isAlertHide, setIsAlertHide ] = useState(false);
    const [ inputTarget, setInputTarget ] = useState('');

    const handleChange = (e: any) => {
        const regExp = /^[0-9\b -]{0,13}$/;
        if(regExp.test(e.target.value)){
            setInputTarget(e.target.value);
        };
    };

    useEffect(() => {
        const timer = setTimeout(() => { setIsAlertHide(true) }, 2000);
        
        return () => {
            clearTimeout(timer);
        }
    }, []);

    return (
        <div className="container">
            {
                isAlertHide === false ?  <div className='alert alert-warning'>2초이내 구매시 할인</div> : null
            }
            <div className="row">
                <div className="col-md-6">
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" alt='shoesItem'/>
                </div>
                <div className="col-md-6">
                    <Inputbar placeholder="숫자만 입력하세요." type='text' value={inputTarget} onChange={handleChange}/>
                    <h4 className="pt-5">{shoesItems[0].title}</h4>
                    <p>{shoesItems[0].content}</p>
                    <p>{shoesItems[0].price}</p>
                    <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>
        </div> 
    );
};

export default React.memo(DetailPage);