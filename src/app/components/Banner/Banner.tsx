import Image from "next/image";
import SubscribeButton from "../SubscribeButton/SubscribeButton";
import ProductCard from "../ProductCard/ProductCard";
import bg from "./../../../../public/bg-banner.webp";
import Slider from "@ant-design/react-slick";

export const Banner = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: false,
    slidesToShow: 1.8,
    slidesToScroll: 1,
  };

  return (
    <div
      className="bg-banner"
      style={{
        backgroundImage: `url(${bg.src})`,
        width: "100%",
        height: "100%",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between py-8">
          <Image
            width={120}
            height={36}
            priority
            src="/oi-logo.png"
            alt="Logo Oi: Agente autorizado"
          />

          <SubscribeButton />
        </div>
        <h2 className="text-3xl mb-8 mt-32">
          Escolha a fibra que se conecta com você
        </h2>
      </div>

      <Slider {...settings}>
        <ProductCard name="500" price={89} />
        <ProductCard name="600" price={89} />
      </Slider>
    </div>
  );
};
