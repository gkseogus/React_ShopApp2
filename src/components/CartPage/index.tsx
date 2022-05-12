import React from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const CartPage = () => {

    const rootData = useSelector((state: any) => {
        return state.cartState
    })

    return (
        <Table>
            <thead>
                <tr>
                <th>#</th>
                <th>상품명</th>
                <th>수량</th>
                <th>변경하기</th>
                </tr>
            </thead>
            <tbody>
                {
                    rootData.map((items: any, index: number) => {
                        return (
                            <tr key={index}>
                                <td>{items.id}</td>
                                <td>{items.name}</td>
                                <td>{items.count}</td>
                                <td>변경</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table> 
    );
};

export default React.memo(CartPage);