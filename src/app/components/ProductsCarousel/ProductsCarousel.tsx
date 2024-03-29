"use client";
import Slider from "@ant-design/react-slick";
import ProductCard from "../ProductCard/ProductCard";

export const ProductsCarousel = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: false,
    slidesToShow: 1.8,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <ProductCard name="500" price={89} />
      <ProductCard name="600" price={89} />
    </Slider>
  );
};
