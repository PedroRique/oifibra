import bg from "./../../../../public/bg-fibra.jpg";
import { BrandsLogos } from "../BrandsLogos/BrandsLogos";
import Image from "next/image";
import SubscribeButton from "../SubscribeButton/SubscribeButton";
import styles from "./Devices.module.scss";
import { FaBolt } from "react-icons/fa";

export const Devices = () => {
  return (
    <div
      className={styles.devicesBg}
      style={{
        backgroundImage: `url(${bg.src})`,
        width: "100%",
        height: "100%",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <BrandsLogos />

      <div className="flex flex-col justify-center my-8 p-8">
        <Image
          className={`${styles.devicesImage} z-10 mb-8`}
          width={250}
          height={70}
          priority
          src="/devices.png"
          alt="Dispositivos com aplicativos"
        />

        <div className="z-10">
          <p className={styles.subtext}>Oi Fibra, a internet 100% fibra</p>
          <h2 className="text-3xl font-bold mb-4 text-balance">
            Extraia o máximo da sua internet
          </h2>

          <SubscribeButton label="ASSINAR AGORA" />
        </div>
      </div>
    </div>
  );
};
