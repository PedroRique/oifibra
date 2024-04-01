import Image from "next/image";
import SubscribeButton from "../SubscribeButton/SubscribeButton";
import bg from "./../../../../public/bg-banner.png";
import { ProductsCarousel } from "../ProductsCarousel/ProductsCarousel";
import styles from "./Banner.module.scss";

export const Banner = () => {
  return (
    <div
      className={`pb-16 mb-16 md:mb-32 ${styles.bannerBg}`}
      style={{
        backgroundImage: `url(${bg.src})`,
        width: "100%",
        height: "100%",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container z-10">
        <div className="flex items-center justify-between py-8">
          <Image
            className={`${styles.logoImage} z-10`}
            width={125}
            height={36}
            priority
            src="/oi-logo.png"
            alt="Logo Oi: Agente autorizado"
          />

          <SubscribeButton />
        </div>
        <h2 className="relative text-balance text-4xl md:text-6xl mb-8 mt-32 md:mt-64 z-10 font-[simplonbp]">
          Escolha a fibra que se conecta com você
        </h2>
      </div>

      <ProductsCarousel />
    </div>
  );
};
