import bg from "./../../../../public/bg-fibra.jpg";
import { BrandsLogos } from "../BrandsLogos/BrandsLogos";
import Image from "next/image";
import SubscribeButton from "../SubscribeButton/SubscribeButton";
import styles from "./Devices.module.scss";

export const Devices = () => {
  return (
    <div
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
          className={styles.devicesImage}
          width={250}
          height={70}
          priority
          src="/devices.png"
          alt="Dispositivos com aplicativos"
        />

        <div>
          <p className={styles.subtext}>Oi Fibra, a internet 100% fibra</p>
          <h2 className="text-3xl text-bold mb-4">Extraia o máximo da sua internet</h2>

          <SubscribeButton />
        </div>
      </div>
    </div>
  );
};
