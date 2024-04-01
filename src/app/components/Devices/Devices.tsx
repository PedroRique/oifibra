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

      <div className="flex flex-col justify-center my-8 p-8 mb:p-16">
        <Image
          className={`${styles.devicesImage} z-10 mb-8 lg:w-2/4 md:w-3/4 w-full`}
          width={912}
          height={549}
          priority
          src="/devices-lg.png"
          alt="Dispositivos com aplicativos"
        />

        <div className="container z-10">
          <p className={`${styles.subtext} md:text-4xl`}>Oi Fibra, a internet 100% fibra</p>
          <h2 className="text-3xl md:text-6xl font-bold mb-4 text-balance">
            Extraia o máximo da sua internet
          </h2>

          <SubscribeButton label="ASSINAR AGORA" />
        </div>
      </div>
    </div>
  );
};
