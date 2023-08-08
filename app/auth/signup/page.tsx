

'use client';

import { useInfo } from '@/context/InfoContext';
import { useState } from 'react';
import { About } from './components/About';
import { Box } from './components/Box';
import { Products } from './components/Products';
import { When } from './components/When';
import { Where } from './components/Where';
import Image from 'next/image';
import { CgChevronRightO } from "react-icons/cg";
import { VscSend } from "react-icons/vsc";

const steps = [
  { component: About, label: "Sobre você" },
  { component: Box, label: "Qual sua cesta ideal?" },
  { component: Products, label: "Quando prefere nos receber?" },
  { component: When, label: "Quando prefere nos receber?" },
  { component: Where, label: "Onde devemos entregar?" }
];

export default function Signup() {
    const image = "/banner_horta.jpeg";
    
    const [currentStep, setCurrentStep] = useState(0);

    const [formData, setFormData] = useState({ name: "", age: "" });

    const StepComponent = steps[currentStep].component;

    const progressPercentage = ((currentStep + 1) / steps.length) * 100;

    const handleSubmit = (e) => {
        e.preventDefault();
        // Faça algo com os dados do formulário, como enviar para uma API
    };

    const logo = "/logo.png";

    return (
        <div className="flex">
            <div style={{
                backgroundImage: `url('${image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.60)",
                height: "100vh",
                width: "35%"
            }}></div>
            <div className="w-[75%] flex items-center">
                <div className='flex container mx-auto px-24 py-6 max-w-[65%]'>
                    <form className='w-full flex flex-col justify-between min-h-[70vh]' onSubmit={handleSubmit}>
                        <div>
                            <h1 className="text-[#002B2B] text-left text-3xl font-bold leading-normal mb-[24px]"
                                style={{
                                    fontFamily: "New Spirit"
                            }}>{steps[currentStep].label}</h1>
                            <StepComponent setForm={setFormData} formData={formData} />
                        </div>
                        <div>
                            <span className='text-[#949494] text-[12px] font-normal leading-normal text-right w-full block py-[12px] px-[4px]'>{currentStep + 1}/{steps.length}</span>
                            <div className="overflow-hidden h-4 mb-6 text-xs flex rounded-full bg-[#E7E7E7] w-full">
                                <div style={{ width: `${progressPercentage}%` }} className="shadow-none rounded-full flex flex-col h-4 text-center w-full whitespace-nowrap text-white justify-center bg-[#41AE59]"></div>
                            </div>
                            {currentStep < steps.length - 1 ? (
                                <button className='my-[8px] flex items-center justify-between w-full py-[15px] px-[20px] text-left rounded-[10px] border-2 border-[#E3E3E3] bg-[#41AE59] text-white text-[16px] font-medium leading-normal' onClick={() => setCurrentStep((prev) => prev + 1)}>
                                    Continuar
                                    <CgChevronRightO className='w-[20px] h-[20px]' />
                                </button>
                            ) : (
                                <button className='my-[8px] flex items-center justify-between w-full py-[15px] px-[20px] text-left rounded-[10px] border-2 border-[#E3E3E3] bg-[#41AE59] text-white text-[16px] font-medium leading-normal' type="submit">
                                    Enviar
                                    <VscSend className='w-[20px] h-[20px]' />
                                </button>
                            )}
                            {currentStep > 0 && (
                                <button className='my-[8px] flex items-center justify-between w-full py-[15px] px-[20px] text-left rounded-[10px] border-2 border-[#d9d9d9] bg-[#E3E3E3] text-[#5A5A5A] text-[16px] font-medium leading-normal' disabled={currentStep === 0} onClick={() => setCurrentStep((prev) => prev - 1)}>
                                    Voltar
                                </button>
                            )
                            }
                            
                            <Image className='mt-[40px] mx-auto' src={logo} width={138} height={60} alt='Logo Horta Club' />
                        </div>
                    </form>
                </div>    
            </div>
        </div>
    )
}
