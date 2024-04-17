"use client";
import Slider from "@ant-design/react-slick";
import ProductCard, { Plan } from "../ProductCard/ProductCard";
import { useState } from "react";

const CREDIT_CARD_CONDITION = "No cartão de crédito";
const DEBIT_CARD_CONDITION = "No cartão de crédito ou débito em conta";

export const ProductsCarousel = ({
  onPlanDetailsClick,
}: {
  onPlanDetailsClick: (plan: Plan) => void;
}) => {
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

  const products: Plan[] = [
    {
      mega: 200,
      price: 79,
      priceCondition: CREDIT_CARD_CONDITION,
      tag: "MENOR PREÇO",
      upload: 100,
    },
    {
      mega: 500,
      price: 89,
      priceCondition: DEBIT_CARD_CONDITION,
      tag: "MELHOR OFERTA",
      upload: 200,
    },
    {
      mega: 600,
      priceCondition: DEBIT_CARD_CONDITION,
      price: 109,
      tryPeriod: 3,
      upload: 250,
    },
    {
      mega: 700,
      priceCondition: DEBIT_CARD_CONDITION,
      price: 139,
      tryPeriod: 6,
      upload: 250,
    },
    {
      mega: 1000,
      priceCondition: DEBIT_CARD_CONDITION,
      price: 189,
      tryPeriod: 12,
      upload: 250,
    },
  ];
  return (
    <div className="md:container">
      <Slider {...settings}>
        {products.map((product, i) => (
          <ProductCard
            key={i}
            onPlanDetailsClick={onPlanDetailsClick}
            plan={product}
          />
        ))}
        <div></div>
      </Slider>
    </div>
  );
};
