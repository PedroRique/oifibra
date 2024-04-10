import Image from "next/image";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <div style={{
      backgroundColor: '#4D4D4D'
    }}>
      {/* <div
        className={styles.neonBg}
        style={{
          backgroundImage: `url(neonflow.png)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div> */}
      <div className="container flex flex-col items-center justify-center py-16">
        <p className="text-sm md:text-xl font-[Arial]">Desenvolvido por Tess</p>
        <p className="text-sm md:text-xl font-[Arial]">CNPJ: 41.940.290/0001-30</p>
        <Image
          className={`${styles.logoImage} z-10 mt-16`}
          width={250}
          height={108}
          priority
          src="/oi-logo.png"
          alt="Logo Oi: Agente autorizado"
        />

      </div>
    </div>
  );
};
