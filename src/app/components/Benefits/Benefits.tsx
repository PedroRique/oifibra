import Image from "next/image";
import styles from "./Benefits.module.scss";
import SubscribeButton from "../SubscribeButton/SubscribeButton";

export const Benefits = () => {
  const benefits = [
    {
      img: "watching.png",
      title: "Assista as suas novelas, filmes e séries favoritas.",
      description:
        "Oi Fibra tem ofertas especiais pra quem ama streamings. Agora, você pode assinar Oi Fibra com MAX incluído. Assista séries, filmes, novelas, documentários, futebol ao vivo, jornalismo, conteúdo infantil e muito mais.",
    },
    {
      img: "gamer.png",
      title: "Jogue com a conexão mais estável do brasil!",
      description:
        "Pare de se preocupar com a sua conexão. Oi Fibra tem planos de até 1 Giga de internet e muita estabilidade de sinal. Dá pra jogar online sem lag, trabalhar e fazer transmissões ao vivo. Tudo ao mesmo tempo.",
    },
  ];

  return (
    <div className="md:container flex flex-col py-16">
      <h1 className="headline text-center text-2xl md:text-5xl mb-8">
        PARA CADA NECESSIDADE, <br />
        <span className="text-[#FBD84B]">UM PLANO OI FIBRA</span>
      </h1>
      {benefits.map((benefit, i) => {
        return (
          <div className="mb-8 flex flex-col" key={i}>
            <div
              className={`${styles.benefitImage} ${
                i % 2 === 0 ? styles.benefitImageRight : styles.benefitImageLeft
              }`}
              style={{
                backgroundImage: `url(${benefit.img})`,
                backgroundSize: "cover",
              }}
            ></div>

            <div className="p-8">
              <h2 className="text-2xl md:text-4xl lg:text-5xl md:mb-8 font-bold">{benefit.title}</h2>
              <p className="text-sm md:text-2xl lg:text-3xl font-light">{benefit.description}</p>
            </div>
          </div>
        );
      })}

      <div className="flex items-center justify-center mb-8">
        <SubscribeButton label="ASSINAR AGORA" />
      </div>
    </div>
  );
};
