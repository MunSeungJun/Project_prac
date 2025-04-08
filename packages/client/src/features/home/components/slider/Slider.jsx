import { Carousel } from 'react-bootstrap';
import styles from './slider.module.css';

function Slider({ indicators, datas }) {
  return (
    <Carousel indicators={indicators} className={styles.carousel_item_wrapper}>
      {datas.map(v => (
        <Carousel.Item key={v.id}>
          <img src={`${v.uri}`} alt="" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Slider;
