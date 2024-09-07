"use client"
import Image from "next/image";
import {BackgroundBeamsWithCollisionDemo} from "../components/Page1"
import { NavbarDemo } from "@/components/Navbar";
// import { FloatingDockDemo } from "../components/Floatdoc"
import { HeroParallaxDemo } from "@/components/Heroparalex";
import { Gemini } from "../components/gemini";
import { FocusCardsDemo } from "@/components/Page5";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { TextEffect } from "@/components/Texteffect";
import { FloatingDock } from "@/components/ui/floating-dock";
import Script from "next/script";
import { LampDemo } from "@/components/lamp";
import { useEffect } from "react";
import useUserStore from "@/Store/UserStore";
import { useRouter } from "next/navigation";

export default function Home() {

  const { setUser} = useUserStore()
  const router=useRouter()

  useEffect(() => {
    const fetchdata = async() =>{
      const response = await fetch('http://localhost:8000/user/getdata', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        
         credentials: 'include'
    });

    const result = await response.json(); // Assuming the server returns a JSON response
      console.log(result.userdata);
      setUser(result.userdata)

      if (response.status === 200) {
        router.push("/home/profile")
      }

    }
    fetchdata()

    }
   
  , [])
  

  return (
    <div >

       {/* Inline script for embeddedChatbotConfig */}
       <Script id="chatbot-config" strategy="afterInteractive">
        {`
          window.embeddedChatbotConfig = {
            chatbotId: "1UcNR-IJCh4vXpHug6oGA",
            domain: "www.chatbase.co"
          };
        `}
      </Script>

      {/* External script to load the chatbot */}
      <Script
        src="https://www.chatbase.co/embed.min.js"
        strategy="afterInteractive"
        defer
      />
     
        {/* <TextEffect/> */}
        <LampDemo />
     
      <NavbarDemo/>
      {/* <FloatingDockDemo/> */}
      <BackgroundBeamsWithCollisionDemo />
      <HeroParallaxDemo/>
      <Gemini />
      <div className=" h-screen flex flex-col gap-4 pt-5 pb-10">
        <div className=" w-full">
          <h1 className=" text-center text-5xl font-semibold">Browse talent by category</h1>
        </div>

<FocusCardsDemo/>
  
      </div>

     
    </div>
  );
}
