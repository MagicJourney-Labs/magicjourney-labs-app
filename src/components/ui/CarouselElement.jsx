import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CarouselElement = ({ children }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1300, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 1025, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel
      swipeable={true}
      draggable={true}
      keyBoardControl={true}
      responsive={responsive}
      focusOnSelect={true}
      centerMode={true}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      showDots={false}
      containerClass=''
      itemClass='px-4 lg:px-2'
    >
      {children}
    </Carousel>
  );
};
export default CarouselElement;
