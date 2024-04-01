import Image from "next/image";
import SubscribeButton from "../SubscribeButton/SubscribeButton";
import bg from "./../../../../public/bg-banner.webp";
import { ProductsCarousel } from "../ProductsCarousel/ProductsCarousel";
import styles from "./Banner.module.scss";

export const Banner = () => {
  return (
    <div
      className={`bg-banner mb-16 ${styles.bannerBg}`}
      style={{
        backgroundImage: `url(${bg.src})`,
        width: "100%",
        height: "100%",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container z-10">
        <div className="flex items-center justify-between py-8">
          <Image
            className="z-10"
            width={120}
            height={36}
            priority
            src="/oi-logo.png"
            alt="Logo Oi: Agente autorizado"
          />

          <SubscribeButton />
        </div>
        <h2 className="relative text-3xl mb-8 mt-32 z-10">
          Escolha a fibra que se conecta com você
        </h2>
      </div>

      <ProductsCarousel />
    </div>
  );
};
