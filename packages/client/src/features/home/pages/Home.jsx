import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import Slider from '../components/slider/Slider';
import HomeSale from '../components/homesale/HomeSale';
import Category from '../components/category/category';
import { getSale } from '../slices/homeSaleProductsslice';
import '../../../styles/home.css';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSale());
  }, [dispatch]);

  const banners = useSelector(state => state.banner.banners);

  return (
    <>
      <Row>
        <Col md={3}>
          <section>
            <Category />
          </section>
        </Col>
        <Col md={9}>
          <section className='h-100'>
            <Slider indicators={false} datas={banners} />
          </section>
        </Col>
      </Row>
      <section>
        <HomeSale />
      </section>
    </>
  );
};

export default Home;
