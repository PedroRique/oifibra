import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import styles from "./SubscribeButton.module.scss";

const SubscribeButton: React.FC<{ fullWidth?: boolean }> = ({ fullWidth = false }) => {
  return (
    <button
      className={`${styles.subscribeButton} flex items-center justify-center ${
        fullWidth && " w-full"
      }`}
    >
      <FaWhatsapp className={styles.whatsappIcon} />
      <span>ASSINAR</span>
    </button>
  );
};

export default SubscribeButton;
