import Image from "next/image";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <div>
      <div
        className={styles.neonBg}
        style={{
          backgroundImage: `url(neonflow.png)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="container flex flex-col items-center justify-center my-16">
        <Image
          className={`${styles.logoImage} z-10 mb-16`}
          width={125}
          height={36}
          priority
          src="/oi-logo.png"
          alt="Logo Oi: Agente autorizado"
        />

        <p className="md:text-xl">Desenvolvido por Omega</p>
      </div>
    </div>
  );
};
