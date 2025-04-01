import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from '../components/Slider';

const Home = () => {
  const banners = [
    {
      uri: 'https://shop-phinf.pstatic.net/20250401_188/1743464323414MteEj_JPEG/EB89B4EC87BCED9591_ED9988ECB59CEC8381EB8BA8_MO_1152x180282.jpg?type=a2304_jpg',
    },
    {
      uri: "https://shop-phinf.pstatic.net/20250326_129/1742955390534BsHng_PNG/EB89B4EC87BCED9591_ECB59CEC8381EB8BA8MO_1152x180.png?type=a2304_jpg"
    },
    {
      uri: "https://shop-phinf.pstatic.net/20250327_45/1743061593987NeE0J_PNG/EB89B4EC87BCED9591_ECB59CEC8381EB8BA8m_1152x180.png?type=a2304_jpg"
    }
  ];
  return (
    <>
      <main>
        <Container>
          <Slider indicators={false} datas={banners} />
        </Container>
      </main>
    </>
  );
};

export default Home;
