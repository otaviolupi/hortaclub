
import * as React from "react"
import Link from "next/link"
import Image from "next/image";

const container = "flex container mx-auto px-24 py-6";

export function Banner() {
  const image = "/banner_horta.png";

  return (
    <div className="flex"
        style={{
            backgroundImage: `url('${image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.60)"
        }}
    >
        <div className={container + " flex-col items-center py-[64px]"}>
            <h1 className="text-white text-center text-5xl font-bold leading-normal"
                style={{
                    fontFamily: "New Spirit"
                }}
            >Horta Club</h1>
            <span className="text-white text-center text-2xl font-normal mb-[47px] leading-normal">Uma assinatura que vai mudar <b>sua vida</b>!</span>
            <input className="border-2 border-[#41AE59] bg-white pt-[10px] px-[20px] pb-[9px] w-1/3 rounded-xl text-[#5A5A5A] placeholder:text-[#5A5A5A]" placeholder="Informe seu Email" />
        </div>
    </div>
  );
}

export function Flow() {
    const title = "Como funciona?";
    const steps = [
        {
            title: "Horta",
            description: "Em parceria com hortas locais, compramos produtos livres de agrotóxico de acordo com o que foi produzido.",
            icon: "/step1.png"
        },{
            title: "Planejamento",
            description: "Combinamos dia e hora após o pagamento, para preparar tudo com muito carinho e garantir um produto sempre fresquinho.",
            icon: "/step2.png"
        },{
            title: "Sua casa",
            description: "Levamos a cesta na casa de cada um, com muito orgulho de apoiar a produção local.",
            icon: "/step3.png"
        }
    ];
  
    return (
      <div className="flex">
        <div className={container + " flex-col items-center py-[64px]"}>
            <h1 className="text-[#002B2B] text-center text-3xl font-bold leading-normal"
                style={{
                    fontFamily: "New Spirit"
                }}>{title}</h1>
            <div className="flex">
                <div>
                    {steps.map((obj, keys) => {
                    return (
                        <div className="flex items-center justify-center w-[46px] h-[46px] font-semibold rounded-full  bg-[#FED143] ">{keys + 1}</div>
                    )  
                    })}
                </div>
                <div>
                    {steps.map((obj, keys) => {
                    return (
                        <div key={keys} className="flex">
                            <div>
                                <Image src={obj.icon} alt={obj.title} width={100} height={50} />
                            </div>
                            <div>
                                <h1>{obj.title}</h1>
                                <p>{obj.description}</p>
                            </div>
                        </div>
                    )  
                    })}
                </div>
            </div>
        </div>
      </div>
    );
  }

export function Box() {
    const image = "/box_image.png";

    return (
        <div className="flex">
            <Image src={image} width={300} height={100} alt="Box Horta" />
            <div>
                <h1>O que vem na cesta?</h1>
                <span>Frutas, Verduras, Legumes e Temperos</span>
                <p>Vamos avaliar os produtos disponíveis nas hortas da sua região e enviar entre 2 a 3 porções de cada categoria. Produtos selecionados, da plantação direto para sua casa!</p>
            </div>
        </div>
    );
}
  
export function FAQ() {
    const title = "Perguntas frequentes";
    const faq = [
        {
            title: "Porque não posso escolher os itens da cesta?",
            content: ""
        },{
            title: "Como faço para comprar apenas uma vez?",
            content: ""
        },{
            title: "Quais dias eu recebo minha entrega?",
            content: ""
        },{
            title: "Outra pergunta interessante não sei o que escrever agora?",
            content: ""
        },{
            title: "Insira aqui uma pergunta frequente ou invente uma?",
            content: ""
        },{
            title: "Oi gata você é casada?",
            content: ""
        }
    ];

   return (
    <div>
        <h1>{title}</h1>
        <ul>
            {faq.map((obj, keys) => {
                return (
                    <li>
                        <span>{obj.title}</span>
                        <p>{obj.content}</p>
                    </li>
                )
            })}
        </ul>
    </div>
   )
}

 