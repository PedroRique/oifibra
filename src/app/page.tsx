"use client";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Banner } from "./components/Banner/Banner";
import { Devices } from "./components/Devices/Devices";
import { Benefits } from "./components/Benefits/Benefits";
import { Footer } from "./components/Footer/Footer";
import { useMemo, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Plan } from "./components/ProductCard/ProductCard";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPlan, setCurrentPlan] = useState<Plan>();

  const planName = useMemo(() => {
    if (!currentPlan) return <></>;
    return (
      <>
        {" "}
        {currentPlan.mega >= 1000
          ? currentPlan.mega / 1000
          : currentPlan.mega}{" "}
        {currentPlan.mega >= 1000 ? "GIGA" : "MEGA"}{" "}
      </>
    );
  }, [currentPlan]);

  return (
    <main
      className={`w-screen h-screen ${!isModalOpen && "overflow-y-scroll"}`}
    >
      <Banner
        onPlanDetailsClick={(plan) => {
          setCurrentPlan(plan);
          setIsModalOpen(true);
        }}
      />

      <Devices />

      <Benefits />

      <Footer />

      <div className={`details-modal ${isModalOpen && "open p-8"}`}>
        <div className="flex items-center justify-center p-8 absolute top-0">
          <div className="bg-white relative w-full md:w-2/4 rounded-md text-black p-8">
            <FaTimes
              className={`absolute top-0 right-0 mr-4 mt-8 text-2xl md:text-2xl w-8 cursor-pointer`}
              color="#40D802"
              onClick={() => setIsModalOpen(false)}
            />

            {currentPlan && (
              <div>
                <div className="px-0">
                  <h3 className="text-green-400 font-bold text-2xl">
                    Detalhes da oferta
                  </h3>
                  <ul id="plan-details">
                    <li>
                      <p>
                        <span className="velocidade-title">{planName}</span>
                        <br />
                        <span className="preco-oferta">
                          R$ {currentPlan.price},90
                        </span>
                        /mês
                      </p>
                      <p className="forma-pagamento-details">
                        {currentPlan.priceCondition}
                      </p>
                      <p></p>

                      <div className="separador-detalhe">&nbsp;</div>

                      <p className="mt-4 subtitle">Desconto de R$ 20</p>

                      <p>
                        Valor mensal reduzido em R$ 20,00/mês pra clientes que
                        ativarem o Débito Automático em Conta ou Cartão de
                        Crédito. O desconto é válido somente pra novas
                        assinaturas no ato da compra. Em caso de cancelamento do
                        Débito Automático ou Cartão de Crédito, o benefício é
                        suspenso. O desconto é válido por tempo indeterminado.
                      </p>
                    </li>
                    <li>
                      <span className="subtitle">Taxa de Habilitação</span>
                      <p>
                        A oferta possui taxa de habilitação grátis mediante
                        permanência de 12 meses. Caso a banda larga seja
                        cancelada ant es desse período, será cobrado o valor de
                        R$ 540,00 de forma proporcional aos meses restantes.
                      </p>
                    </li>
                    <li>
                      <span className="subtitle">Instalação</span>
                      <p>
                        O dia da instalação da Oi Fibra será agendado de acordo
                        com as datas e horários disponíveis.
                      </p>
                    </li>
                    <li>
                      <span className="subtitle">Equipamento</span>
                      <p>O roteador Wi-Fi será entregue em comodato.</p>
                    </li>
                    <li>
                      <span className="subtitle">Velocidade da Oferta</span>
                      <p>
                        <span className="velocidade-title">{planName}</span> de
                        internet: Até
                        <span className="velocidade-title">{planName}</span> de
                        download, até
                        <span className="upload-title">{planName}</span> de
                        upload.
                        <br />
                        <br />
                        Essas são as velocidades máximas nominais. A velocidade
                        pode variar devido a fatores externos. Velocidade
                        contratada é a taxa de transmissão ou velocidade da
                        conexão. É o quão rápido um pacote de dados do seu
                        dispositivo vai ser levado até a operadora e vice-versa.
                        A velocidade do serviço de banda larga da Oi contratada
                        pelo assinante está sujeita a verificação de viabilidade
                        técnica no ato da instalação.
                      </p>
                    </li>
                    <li>
                      <span className="subtitle">Franquia de dados</span>
                      <p>A franquia de dados é ilimitada.</p>
                    </li>
                    <li>
                      <span className="subtitle">
                        Informações importantes para uma melhor experiência de
                        navegação
                      </span>
                      <p>
                        <span>
                          Os dispositivos (smartphone, computador etc.) precisam
                          ter as configurações mínimas necessárias para que
                          atinjam o máximo de desempenho, tanto via cabo como
                          via Wi-Fi. O roteador é dual-band, ou seja, tem
                          frequência de 2,4 GHz e 5 GHz no Wi-Fi. Verifique se
                          os seus dispositivos permitem a navegação em ambas
                          frequências. A conexão via cabo proporciona maior
                          estabilidade e não sofre tantas interferências quanto
                          a rede Wi-Fi. Saiba mais{" "}
                          <a
                            className="link"
                            href="https://www.oi.com.br/internet/lp/boas-vindas-fibra"
                            target="_blank"
                          >
                            aqui.
                          </a>
                        </span>
                      </p>
                    </li>
                    <li>
                      <span className="subtitle">Validade da oferta</span>
                      <p>
                        A oferta está com preço promocional e é válida por 12
                        meses a partir da data de adesão e prorrogável
                        automaticamente a cada 30 dias. Caso a oferta seja
                        cancelada pela Oi, comunicaremos com 30 dias de
                        antecedência.
                      </p>
                    </li>
                    <li>
                      <span className="subtitle">Regulamento da oferta</span>
                      <p>
                        <span>
                          <a
                            className="link"
                            href="https://www.oi.com.br/internet/regulamento"
                            target="_blank"
                          >
                            Consulte todas as regras.
                          </a>
                        </span>
                      </p>
                    </li>
                    <li>
                      <span className="subtitle">Reajuste anual</span>
                      <p>
                        O valor mensal da oferta poderá, a critério da Oi, ser
                        reajustada anualmente de acordo com a variação positiva
                        do IGP-DI ou índice geral que o substitua.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
