import Image from "next/image";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#4D4D4D",
      }}
    >
      <div className="container flex flex-col items-center justify-center py-16">
        <p>
          <span>
            Usamos cookies pra melhorar sua experiência de navegação,
            personalizar conteúdos e anúncios. Pra mais informações, veja nossa{" "}
          </span>
          <a
            href="./Aviso%20de%20Privacidade%20-%20Oi%20e%20Agentes%20Autorizados.pdf"
            target="_blank"
          >
            <span className="link">Política de Privacidade </span>
          </a>
          <span>e </span>
          <a href="https://www.oi.com.br/internet/regulamento" target="_blank">
            <span className="link">Termos de Uso</span>
          </a>
        </p>

        <Image
          className={`${styles.logoImage} z-10 my-12`}
          width={250}
          height={108}
          priority
          src="/oi-logo.png"
          alt="Logo Oi: Agente autorizado"
        />

        <p className="text-sm md:text-xl font-[Arial]">Desenvolvido por Tess</p>
        <p className="text-sm md:text-xl font-[Arial]">
          CNPJ: 41.940.290/0001-30
        </p>
      </div>
    </div>
  );
};
