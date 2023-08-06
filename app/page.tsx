'use client';

import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Header from '@/components/header'
import { Footer } from '@/components/footer';
import {Banner, Flow, Box, FAQ} from '@/components/home';

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Flow />
      <Box /> 
      <FAQ /> 
      <Footer />
    </div>
    
  )
}
