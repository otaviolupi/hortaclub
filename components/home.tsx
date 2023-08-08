
import React, { useState } from 'react';
import Link from "next/link"
import Image from "next/image";
import { useInfo } from '@/context/InfoContext';
import { useRouter } from 'next/navigation'

const container = "flex container mx-auto px-24 py-6";

export function Banner() {
  const image = "/banner_horta.jpeg";
  const { setInfo } = useInfo();
  const [inputValue, setInputValue] = useState('');
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault();
    setInfo(inputValue);
    router.push('/auth/signup');
  };

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
            <form onSubmit={handleSubmit} className="w-1/3">
                <input 
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="border-2 border-[#41AE59] bg-white pt-[10px] px-[20px] pb-[9px] w-full rounded-xl text-[#5A5A5A] placeholder:text-[#5A5A5A]" placeholder="Informe seu Email" />
            </form>
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
        <div className={container + " flex-col items-center py-[64px] "}>
            <h1 className="text-[#002B2B] text-center text-3xl font-bold leading-normal mb-[62px]"
                style={{
                    fontFamily: "New Spirit"
                }}>{title}</h1>
            <div className="flex max-w-[50%]">
                <div className="mr-[24px] flex justify-around flex-col">
                    {steps.map((obj, keys) => {
                    let after_class = "after:content-[''] after:h-[170px] after:border-2 after:border-dashed after:border-[#FED143] after:absolute after:top-[100%]";
                    if (keys == steps.length - 1) after_class = "";
                    return (
                        <div className={`${after_class} flex relative items-center justify-center w-[46px] h-[46px] font-semibold rounded-full text-[22px] bg-[#FED143] mb-[32px] mt-[-24px]`}>{keys + 1}</div>
                    )  
                    })}
                </div>
                <div>
                    {steps.map((obj, keys) => {
                    return (
                        <div key={keys} className="flex mb-[59px] items-center">
                            <div className="rounded-[20px] border-4 border-[#FED143] flex justify-center items-center mr-[32px] w-[164px] h-[144px]" style={{
                                backgroundColor: "rgba(254, 209, 67, 0.20)"
                            }}>
                                <Image src={obj.icon} alt={obj.title} width={79} height={79} />
                            </div>
                            <div className="max-w-[50%]">
                                <h1 className="text-[#5A5A5A] text-[22px] leading-normal mb-[16px]">{obj.title}</h1>
                                <p className="text-[#5A5A5A] text-[16px] leading-normal font-normal">{obj.description}</p>
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
    const image = "/box_image2.png";

    return (
        <div className="flex">
            <Image className="w-[45%]" src={image} width={300} height={100} alt="Box Horta" />
            <div className="bg-[#41AE59] px-[64px] py-[48px] w-[55%]">
                <div className="flex flex-col w-[50%]">
                    <h1 className="text-white text-[40px] leading-normal font-bold mb-[38px]"
                        style={{
                            fontFamily: "New Spirit"
                        }}
                    >O que vem na <b className="text-[#FED143]">cesta</b>?</h1>
                    <span className="text-white text-[26px] leading-normal font-semibold mb-[21px]">Frutas, Verduras, Legumes e Temperos</span>
                    <p className="text-white text-[22px] leading-normal font-normal mb-[38px]">Vamos avaliar os produtos disponíveis nas hortas da sua região e enviar entre 2 a 3 porções de cada categoria.</p>
                    <span className="text-white text-[22px] leading-normal font-semibold">Produtos selecionados, <b className="text-[#FED143]">da plantação direto para sua casa!</b></span>
                </div>
            </div>
        </div>
    );
}
  
export function FAQ() {
    const title = "Perguntas frequentes";
    const faq = [
        {
            title: "Porque não posso escolher os itens da cesta?",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",

        },{
            title: "Como faço para comprar apenas uma vez?",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it"
        },{
            title: "Quais dias eu recebo minha entrega?",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it"
        },{
            title: "Outra pergunta interessante não sei o que escrever agora?",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it"
        },{
            title: "Insira aqui uma pergunta frequente ou invente uma?",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it"
        },{
            title: "Oi gata você é casada?",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it"
        }
    ];

    const [isOpen, setIsOpen] = useState(-1);

    const toggleOpen = (key) => {
        if(key == isOpen){
            setIsOpen(-1);
        } else {
            setIsOpen(key);
        }
    };

   return (
    <div>
        <div className={container + " flex-col items-center py-[64px] "}>
            <h1 className="text-[#002B2B] text-center text-3xl font-bold leading-normal mb-[62px]"
                style={{
                    fontFamily: "New Spirit"
                }}>{title}</h1>
            <ul className="rounded-[21px] border-2 border-[#D4D4D4] w-[85%]">
                {faq.map((obj, keys) => {
                    let class_border = "border-b-2 border-b-[#D4D4D4]";
                    if(keys == faq.length - 1)
                        class_border = ""; 
                    return (
                        <li className={`${class_border} py-[14px] px-[49px]`} onClick={() => toggleOpen(keys)} style={{ cursor: 'pointer' }}>
                            <span className="text-[#5A5A5A] text-[22px] leading-normal font-normal">{obj.title}</span>
                            <div className={`${isOpen == keys && obj.content ? "max-h-[200px]" : "max-h-0"} overflow-hidden transition-all ease-in-out duration-400`}>
                                <p className="p-2">{obj.content}</p>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    </div>
   )
}

 