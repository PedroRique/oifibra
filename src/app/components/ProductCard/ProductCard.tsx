import React from "react";
import styles from "./ProductCard.module.scss";
import SubscribeButton from "../SubscribeButton/SubscribeButton";

interface ProductCardProps {
  name: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price }) => {
  return (
    <div className="ml-4 max-w-md text-center font-bold">
      <div className={`${styles.productCard} flex flex-col gap-4 items-center rounded-lg p-4`}>
        <p>oi fibra start</p>
        <div>
          <h2 className={`text-6xl ${styles.megaQtd}`} data-blur-value={name}>{name}</h2>
          <h2 className="text-4xl">Mega</h2>
        </div>

        <hr className="w-full" />
        <div className="flex items-center justify-center text-center gap-1">
          <span>por</span>
          <h6 className="text-5xl">{price}</h6>

          <div className="flex flex-col">
            <span>,90</span>
            <span>/mês</span>
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
