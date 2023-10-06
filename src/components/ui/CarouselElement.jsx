import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CarouselElement = ({ children }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1200, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 850, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel
      swipeable={true}
      draggable={true}
      keyBoardControl={true}
      responsive={responsive}
      ssr={true}
      //   infinite={false}
      showDots={false}
      containerClass=''
      itemClass=''
    >
      {children}
    </Carousel>
  );
};
export default CarouselElement;
