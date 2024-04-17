"use client";
import Image from "next/image";
import { ProductsCarousel } from "../ProductsCarousel/ProductsCarousel";
import SubscribeButton from "../SubscribeButton/SubscribeButton";
import bg from "./../../../../public/bg-banner.png";
import styles from "./Banner.module.scss";
import { PhoneCall } from "./PhoneCall";
import { Plan } from "../ProductCard/ProductCard";

export const Banner = ({ onPlanDetailsClick }: { onPlanDetailsClick: (plan: Plan) => void }) => {
  return (
    <div
      className={`pb-16 mb-16 md:mb-32 ${styles.bannerBg}`}
      style={{
        backgroundImage: `url(${bg.src})`,
        width: "100%",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        zIndex: 0,
      }}
    >
      <div className="container z-10">
        <div className="flex items-center justify-between py-8 mb-32">
          <Image
            className={`${styles.logoImage} z-10`}
            width={250}
            height={108}
            priority
            src="/oi-logo.png"
            alt="Logo Oi: Agente autorizado"
          />

          <div className="flex gap-3 md:gap-8">
            <PhoneCall />
            <SubscribeButton iconOnly />
          </div>
        </div>
      </div>

      <ProductsCarousel onPlanDetailsClick={onPlanDetailsClick}/>
    </div>
  );
};
