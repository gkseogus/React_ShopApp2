import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import shoesData  from '../../data.js';
import axios from 'axios';
import styled from 'styled-components';


const MoreBtn = styled.button`
    margin: 20px;
    height: 50px;
    width: 100px;
`

const MainContents = () => {

    const [ shoesItems, setShoesItems ] = useState(shoesData);

    const getApi = () => {
        axios.get('https://codingapple1.github.io/shop/data2.json')
        .then((ApiData) => {
            setShoesItems( [...shoesItems, ...ApiData.data]);
        }).catch(() => {
            alert('api 요청 실패');
        });
    };

    return (
        <div>
        {
            shoesItems.map((items: any, index) => {
                return(
                    <Container key={index}>
                        <Row>
                            <Col xs={{ order: 12 }}>
                                <img src={`https://codingapple1.github.io/shop/shoes${items.id}.jpg`} alt='shoesItem' width='40%'/>
                                <h4>{items.title}</h4>
                                <p>{items.content}</p>
                                <p>{items.price}</p>
                            </Col>
                        </Row>
                    </Container>
                );
            })
        }
            <MoreBtn onClick={getApi}>더보기</MoreBtn>
        </div>
    );
};


export default React.memo(MainContents);