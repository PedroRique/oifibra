import React from "react";
import styles from "./ProductCard.module.scss";
import SubscribeButton from "../SubscribeButton/SubscribeButton";

interface ProductCardProps {
  name: string;
  price: number;
  mega: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, mega }) => {
  return (
    <div className="ml-4 max-w-md text-center font-bold">
      <div className={`${styles.productCard} flex flex-col gap-4 items-center rounded-lg p-4`}>
        <p className="md:text-2xl">{name}</p>
        <div>
          <h2 className={`text-6xl md:text-8xl ${styles.megaQtd}`}>{mega}</h2>
          <h2 className="text-4xl md:text-6xl">Mega</h2>
        </div>

        <hr className="w-full" />
        <div className="flex items-center justify-center text-center gap-1">
          <span className="md:text-2xl">por</span>
          <h6 className="text-5xl md:text-8xl">{price}</h6>

          <div className="flex flex-col">
            <span className="md:text-2xl">,90</span>
            <span className="md:text-2xl">/mês</span>
          </div>
        </div>
        <div className="w-full px-2">
          <SubscribeButton fullWidth />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
