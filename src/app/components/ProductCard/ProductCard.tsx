import Image from "next/image";
import React from "react";
import { FaPlus } from "react-icons/fa";
import SubscribeButton from "../SubscribeButton/SubscribeButton";
import styles from "./ProductCard.module.scss";

export type Plan = {
  price: number;
  mega: number;
  priceCondition: string;
  tryPeriod?: number;
  tag?: string;
  upload: number;
};

interface ProductCardProps {
  plan: Plan;
  onPlanDetailsClick: (plan: Plan) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  plan,
  onPlanDetailsClick,
}) => {
  const { price, mega, priceCondition, tryPeriod, tag } = plan;

  return (
    <div className="ml-4 max-w-md text-center font-bold relative pt-7">
      {tag && <div className={`absolute ${styles.cardTag}`}>{tag}</div>}
      <div
        className={`${styles.productCard} flex flex-col gap-4 items-center rounded-lg p-4`}
      >
        <div>
          <h2 className={`text-7xl md:text-8xl ${styles.megaQtd}`}>
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

        <div className="w-full px-2 flex flex-col">
          <SubscribeButton fullWidth />

          <p
            className="font-normal mt-2 cursor-pointer self-center transition hover:text-green-400"
            onClick={() => {
              onPlanDetailsClick(plan);
            }}
          >
            + detalhes da oferta
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
