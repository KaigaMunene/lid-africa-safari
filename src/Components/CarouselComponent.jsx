import Carousel from "react-bootstrap/Carousel";
import "../Sass/layout/_carousel.scss";

import image1 from "../Assets/Images/slider-1.png";
import image2 from "../Assets/Images/slider-2.png";
import image3 from "../Assets/Images/slider-3.png";

function CarouselComponent() {
  return (
    <Carousel controls={false} fade pause={false}>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={image1} alt="First slide" />
        <Carousel.Caption>
          <h1>Tour the landscapes with Lid Africa Safari&apos;s</h1>
          <p>New adventures and scenery await </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={image2} alt="Second slide" />

        <Carousel.Caption>
          <h1>Tour the landscapes with Lid Africa Safari&apos;s</h1>
          <p>New adventures and scenery await </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={image3} alt="Third slide" />

        <Carousel.Caption>
          <h1>Tour the landscapes with Lid Africa Safari&apos;s</h1>
          <p>New adventures and scenery await </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
