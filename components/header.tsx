'use client';

import * as React from "react"
import Link from "next/link"
import Image from "next/image";

export default function Header() {
  const image = "/logo.png";
  const url = "/";
  const login = "";

  return (
    <header className="flex container mx-auto px-24 py-6">
      <Link href={url} ><Image src={image} width={138} height={50} alt="Logo Horta Club" /></Link>
      <div className="flex flex-1 justify-end items-center">
        <Link className="text-[#41AE59] border-2 border-[#41AE59] rounded-[8px] flex justify-center items-center px-[16px] py-[2px]" href={login}>Entrar</Link>
      </div>
    </header>
  );
}
