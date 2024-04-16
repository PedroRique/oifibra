"use client";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import styles from "./SubscribeButton.module.scss";
import { openWpp } from "@/app/utils";

const SubscribeButton: React.FC<{
  fullWidth?: boolean;
  label?: string;
  iconOnly?: boolean;
  onClick?: () => void;
}> = ({
  fullWidth = false,
  label = "ASSINAR",
  iconOnly = false,
  onClick = () => {
    openWpp();
  },
}) => {
  return (
    <button
      className={`${styles.subscribeButton} flex items-center justify-center ${
        fullWidth && " w-full"
      }`}
      onClick={onClick}
    >
      <FaWhatsapp className={`${iconOnly ? 'text-3xl' : 'mr-2'} md:text-2xl md:mr-2`} />
      <span className="hidden md:flex md:text-2xl font-normal">{label}</span>
    </button>
  );
};

export default SubscribeButton;
