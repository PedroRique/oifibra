'use client'
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import styles from "./SubscribeButton.module.scss";
import { openWpp } from "@/app/utils";

const SubscribeButton: React.FC<{
  fullWidth?: boolean;
  label?: string;
  onClick?: () => void;
}> = ({
  fullWidth = false,
  label = "ASSINAR",
  onClick = () => openWpp,
}) => {
  return (
    <button
      className={`${styles.subscribeButton} flex items-center justify-center ${
        fullWidth && " w-full"
      }`}
      onClick={onClick}
    >
      <FaWhatsapp className={`${styles.whatsappIcon} md:text-2xl`} />
      <span className="md:text-2xl font-normal">{label}</span>
    </button>
  );
};

export default SubscribeButton;
