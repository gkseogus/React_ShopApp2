import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import shoesData  from '../../data.js';

const MainContents = () => {

    const [ shoesItems, setShoesItems ] = useState(shoesData);

    return (
        <div>
        {
            shoesItems.map((items: any) => {
                return(
                    <Container>
                        <Row>
                            <Col xs={{ order: 12 }} >
                                <img src={`https://codingapple1.github.io/shop/shoes${items.id}.jpg`} alt='shoesItem' width='40%'/>
                                <h4>{items.title}</h4>
                                <p>{items.content}</p>
                                <p>{items.price}</p>
                            </Col>
                        </Row>
                    </Container>
                );
            })
        };
        </div>
    );
};


export default React.memo(MainContents);