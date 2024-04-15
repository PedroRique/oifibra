"use client";
import Image from "next/image";
import SubscribeButton from "../SubscribeButton/SubscribeButton";
import bg from "./../../../../public/bg-banner.png";
import { ProductsCarousel } from "../ProductsCarousel/ProductsCarousel";
import styles from "./Banner.module.scss";
import { FaWhatsapp, FaPhone, FaChevronRight, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import { openWpp } from "@/app/utils";

export const Banner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isByPhone, setIsByPhone] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      setIsByPhone(false);
    }
  }, [isModalOpen]);

  return (
    <div
      className={`pb-16 mb-16 md:mb-32 ${styles.bannerBg}`}
      style={{
        backgroundImage: `url(${bg.src})`,
        width: "100%",
        height: "100%",
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

          <SubscribeButton onClick={() => setIsModalOpen(true)} />
        </div>

        {/* <h2 className="relative text-balance text-4xl md:text-6xl mb-8 mt-32 md:mt-64 z-10 font-[simplonbp]">
          Escolha a fibra que se conecta com você
        </h2> */}
      </div>
      <div className={`${styles.ctaModal} p-8 ${isModalOpen && styles.isOpen}`}>
        <div className="bg-white relative w-full md:w-2/4 rounded-md text-black p-8">
          <FaTimes
            className={`absolute top-0 right-0 mr-4 mt-8 text-2xl md:text-2xl w-8 cursor-pointer`}
            color="#40D802"
            onClick={() => setIsModalOpen(false)}
          />

          <h2 className="text-3xl mb-8 mr-2 text-balance">
            Escolha como deseja assinar:
          </h2>

          <div
            className="flex items-center cursor-pointer"
            onClick={() => {
              openWpp();
            }}
          >
            <FaWhatsapp
              className={`mr-4 text-3xl md:text-2xl w-8`}
              color="#40D802"
            />
            <span className="font-bold text-2xl">Por Whatsapp</span>

            <FaChevronRight
              className={`ml-4 text-2xl md:text-2xl w-8`}
              color="#40D802"
            />
          </div>

          <hr className="my-8" />

          {isByPhone ? (
            <div className="flex items-center">
              <FaPhone
                className={`mr-4 text-2xl md:text-2xl w-8`}
                color="#40D802"
              />
              <div className="flex flex-col">
                <span className="font-bold text-2xl">Ligue para:</span>
                <span className="text-3xl">0800 729 2621</span>
              </div>
            </div>
          ) : (
            <div
              onClick={() => setIsByPhone(true)}
              className="flex items-center cursor-pointer"
            >
              <FaPhone
                className={`mr-4 text-2xl md:text-2xl w-8`}
                color="#40D802"
              />
              <span className="font-bold text-2xl">Por Telefone</span>

              <FaChevronRight
                className={`ml-4 text-2xl md:text-2xl w-8`}
                color="#40D802"
              />
            </div>
          )}
        </div>
      </div>

      <ProductsCarousel />
    </div>
  );
};
