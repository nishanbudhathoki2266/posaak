import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function ImageSlider() {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      stopOnHover={true}
      showThumbs={false}
    >
      <div>
        <img src="https://img.freepik.com/free-psd/man-fashion-concept-banner-template_23-2148626645.jpg?w=1380&t=st=1691207588~exp=1691208188~hmac=a2b4f1006dd61257a70db78ba0f500dbfc69090ac2904fba592de9433ff9b98b" />
      </div>
      <div>
        <img src="https://img.freepik.com/free-psd/flat-design-thrift-store-template_23-2150128548.jpg?w=1380&t=st=1691207624~exp=1691208224~hmac=c84868533f060253c4f0ff34b188aa9302cfc2783deee79bb92d72b048fe3d36" />
      </div>
    </Carousel>
  );
}

export default ImageSlider;
