import { Carousel } from 'react-bootstrap';

function Slider({indicators, datas}) {
  return (
    <Carousel indicators={indicators}>
      {
        datas.map(v => (
          <Carousel.Item >
            <img src={`${v.uri}`} alt="" className='img-fluid' />
          </Carousel.Item>  
        ))
      }
    </Carousel>
  );
}

export default Slider;
