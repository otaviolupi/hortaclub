'use client';

import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { NavigationMenuDemo } from '@/components/header'
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div>
      <NavigationMenuDemo />
      <div className="p-8 bg-[#002B2B] h-[90vh] flex items-center">
        <div className="max-w-[60%] px-[79px]">
          <h1 className="text-[79px] font-extrabold text-white mb-[16px] leading-[84px]">Everything you are. In one, simple link in bio.</h1>
          <p className="text-[24px] text-white mb-[32px]">Join 35M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
          <div className="flex w-full max-w-md items-center space-x-2">
            <Input type="email" placeholder="Email" />
            <Button className="bg-[#7EBA28] hover:bg-[#7EBA28] w-[40%]" type="submit">Assinar</Button>
          </div>
        </div>
        <div>
          <Image className="w-[85%]" src="/banner.png" width={1500} height={1000} alt="" />
        </div>
      </div>
      <div className="h-[100vh]">

      </div>
      <Footer />
    </div>
    
  )
}
