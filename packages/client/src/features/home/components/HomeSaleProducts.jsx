import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

const HomeSaleProducts = () => {
  const saleProducts = useSelector(state => state.homeSaleProducts.saleProducts);
  console.log(saleProducts[0]._id)
  return (
    <section>
      <h2>오늘의 판매자 특가</h2>
      <Row>
        <ul>
          {
            saleProducts.map( v => {
              return (
                // <Col md={2} >
                  <li key={v._id}>
                    <img src={`${v.imageUrl}`} alt="" />
                    <h3>{v.name}</h3>
                    <p>{v.description}</p>
                    <p>{v.price}원</p>
                  </li>
                // </Col>
              )
            })
          }
        </ul>
      </Row>
    </section>
  );
};

export default HomeSaleProducts;
