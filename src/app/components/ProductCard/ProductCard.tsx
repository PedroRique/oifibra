import React from "react";
import styles from "./ProductCard.module.scss";
import SubscribeButton from "../SubscribeButton/SubscribeButton";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";

interface ProductCardProps {
  name: string;
  price: number;
  mega: number;
  priceCondition: string;
  tryPeriod?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  mega,
  priceCondition,
  tryPeriod,
}) => {
  return (
    <div className="ml-4 max-w-md text-center font-bold">
      <div
        className={`${styles.productCard} flex flex-col gap-4 items-center rounded-lg p-4`}
      >
        <p className="md:text-2xl">{name}</p>
        <div>
          <h2 className={`text-6xl md:text-8xl ${styles.megaQtd}`}>
            {mega >= 1000 ? mega / 1000 : mega}
          </h2>
          <h2 className="text-4xl md:text-6xl">
            {mega >= 1000 ? "Giga" : "Mega"}
          </h2>
        </div>

        {mega >= 600 && (
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center gap-4">
              <FaPlus />
              <Image
                className={styles.maxLogo}
                width={100}
                height={20}
                src={"/logos/max.svg"}
                alt="Logo Streaming MAX"
              />
            </div>
            {tryPeriod && (
              <p className="text-balance font-normal text-[12px] md:text-sm mt-1">
                por {tryPeriod} meses
              </p>
            )}
          </div>
        )}

        <hr className="w-full" />
        <div>
          <div className="flex items-center justify-center text-center gap-1">
            <span className="md:text-2xl">por</span>
            <h6 className="text-5xl md:text-8xl">{price}</h6>

            <div className="flex flex-col">
              <span className="md:text-2xl">,90</span>
              <span className="md:text-2xl">/mês</span>
            </div>
          </div>

          <p className="text-balance font-normal text-[12px] md:text-sm">
            {priceCondition}
          </p>
        </div>

        <div className="w-full px-2">
          <SubscribeButton fullWidth />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
