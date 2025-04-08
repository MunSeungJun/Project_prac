import React from 'react';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import StarRating from '../../../../components/atoms/starrating/StarRating';
import styles from './homeSale.module.css'

const HomeSale = () => {
  const saleProducts = useSelector(state => state.homeSale.saleProducts);
  return (
    <div className={styles.homeSale_wrap}>
      <div className={styles.homeSale_header}>
        <h2>오늘의 <span>판매자 특가</span></h2>
      </div>
      <div className={styles.homeSale_content}>
        <ul>
          <Row className="justify-content-center">
            {saleProducts.map(v => {
              return (
                <Col md={2}>
                  <li key={v._id} className={styles.homeSale_content_item}>
                    <Link to={`products/${v._id}`}>
                      <img src={`${v.imageUrl}`} alt="" className="img-fluid" />
                      <div className={styles.sale_badge}>특가진행중</div>
                      <div className={styles.homeSale_item_info}>
                        <h3>{v.name}</h3>
                        <p>{v.description}</p>
                        <div className={styles.homeSale_item_price}>
                          <p>{v.price}원</p>
                        </div>
                        <StarRating ratings={v.averageRatings}/>
                      </div>
                    </Link>
                  </li>
                </Col>
              );
            })}
          </Row>
        </ul>
      </div>
    </div>
  );
};

export default HomeSale;
