"use client";
import Slider from "@ant-design/react-slick";
import ProductCard from "../ProductCard/ProductCard";
import { useState } from "react";

export const ProductsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  var settings = {
    dots: true,
    arrows: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    beforeChange: (prev: number, next: number) => {
      setCurrentSlide(next);
    },
    customPaging: (i: number) => {
      if (i === products.length) return <></>;
      return (
        <div
          className="mt-4 ml-4"
          style={{
            height: 5,
            width: 25,
            borderRadius: 2,
            background: "white",
            opacity: i === currentSlide ? 1 : 0.5,
          }}
        ></div>
      );
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.8,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const products = [
    {
      name: 'oi fibra start',
      mega: 200,
      price: 79,
    },
    {
      name: 'oi fibra',
      mega: 500,
      price: 89,
    },
    {
      name: 'oi fibra',
      mega: 600,
      price: 109,
    },
    {
      name: 'oi fibra x',
      mega: 600,
      price: 149,
    },
  ];
  return (
    <div className="md:container">
      <Slider {...settings}>
        {products.map((product, i) => (
          <ProductCard key={i} {...product}/>
        ))}
        <div></div>
      </Slider>
    </div>
  );
};
