import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import shoesData from '../../data';

const DetailPage = () => {

    const [ shoesItems, setShoesItems ] = useState(shoesData);
    const {paramsId} = useParams();
    
    console.log(paramsId);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" alt='shoesItem'/>
                </div>
                <div className="col-md-6">
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