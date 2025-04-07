import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Slider from '../components/Slider';
import HomeSaleProducts from '../components/HomeSaleProducts';
import '../../../styles/home.css';

const Home = () => {
  const banners = useSelector(state => state.banner.banners);

  return (
    <>
      <section>
        <Row>
          <div className="category col-4">
            <ul>
              <li>
                <Link>Woman's Fashion</Link>
              </li>
              <li>
                <Link>Mens's Fashion</Link>
              </li>
              <li>
                <Link>Electronics</Link>
              </li>
              <li>
                <Link>Home & Lifestyle</Link>
              </li>
              <li>
                <Link>Medicine</Link>
              </li>
              <li>
                <Link>Sports & Outdoor</Link>
              </li>
              <li>
                <Link>Baby's & Toys</Link>
              </li>
              <li>
                <Link>Groceries & Pets</Link>
              </li>
              <li>
                <Link>Health & Beauty</Link>
              </li>
            </ul>
          </div>
          <div className="col-8">
            <Slider indicators={false} datas={banners} />
          </div>
        </Row>
      </section>
      <HomeSaleProducts/>
    </>
  );
};

export default Home;
