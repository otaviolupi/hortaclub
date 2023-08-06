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
            <div className='flex'>
                <div className='flex-1'>
                  {footer_menu.map((obj, key) =>
                    <div key={key}>
                      <h1>{obj.name}</h1>
                      <ul>
                        {obj.items.map((item, key) => 
                          <li key={key}><Link href={item.url}>{item.label}</Link></li>
                        )}
                      </ul>
                    </div>
                  )}
                </div>
                <div>
                  <Image src={image} width={100} height={60} alt='Logo Horta Club' />
                  <span>{copyright}</span>
                </div>
            </div>
        </footer>
      </React.Fragment>
      
    )
  }