import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import styles from "./SubscribeButton.module.scss";

const SubscribeButton: React.FC<{ fullWidth?: boolean; label?: string }> = ({
  fullWidth = false,
  label = "ASSINAR",
}) => {
  return (
    <button
      className={`${styles.subscribeButton} flex items-center justify-center ${
        fullWidth && " w-full"
      }`}
    >
      <FaWhatsapp className={`${styles.whatsappIcon} md:text-2xl`} />
      <span className="md:text-2xl font-normal">{label}</span>
    </button>
  );
};

export default SubscribeButton;
