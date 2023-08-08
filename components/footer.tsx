'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
    const footer_menu = [
      {
        name: "Informações",
        items: [
          {
            label: "Termos e condições",
            url: ""
          },{
            label: "Política de privacidade",
            url: ""
          }
        ]
      },{
        name: "Contato",
        items: [
          {
            label: "contato@horta.club",
            url: ""
          },{
            label: "Dúvidas ou sugestões",
            url: ""
          }
        ]
      }
    ];

    const image = "/logo.png";
    const copyright = "Horta Club © 2023";

    return (
      <React.Fragment>
        <footer className='bg-[#F3F3F3]'>
            <div className='flex container-lg mx-auto px-24 py-16'>
                <div className='flex-1 flex'>
                  {footer_menu.map((obj, key) =>
                    <div className='mr-[64px]' key={key}>
                      <h1 className='text-[28px] text-[#333] leading-normal font-bold mb-[16px]'>{obj.name}</h1>
                      <ul>
                        {obj.items.map((item, key) => 
                          <li key={key}><Link className='text-[#656565] text-[18px] leading-normal font-semibold' href={item.url}>{item.label}</Link></li>
                        )}
                      </ul>
                    </div>
                  )}
                </div>
                <div>
                  <Image className='mb-[16px]' src={image} width={172} height={60} alt='Logo Horta Club' />
                  <span className='text-[#656565] text-[18px] leading-normal font-semibold'>{copyright}</span>
                </div>
            </div>
        </footer>
      </React.Fragment>
      
    )
  }