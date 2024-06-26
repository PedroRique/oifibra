import { openPhone, showPhone } from "@/app/utils";
import { FaPhone } from "react-icons/fa";
import styles from "./Banner.module.scss";

export const PhoneCall = () => {
  const shouldShowPhone = showPhone();

  if(!shouldShowPhone) return <div></div>;

  return (
    <div
      className={`${styles.phoneButton} text-nowrap flex items-center cursor-pointer`}
      data-id="header-phone-button"
      onClick={() => {
        openPhone();
      }}
    >
      <FaPhone
        className={`mr-2 md:mr-4 text-xl md:text-3xl w-8`}
        color="#FFF"
      />
      <div className={`${styles.textShadow} flex flex-col`}>
        <span className="text-nowrap text-sm md:text-xl">
          Central de vendas:
        </span>
        <span className="text-nowrap font-bold text-md md:text-2xl">
          0800 729 2621
        </span>
      </div>
    </div>
  );
};
