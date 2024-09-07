"use client";
import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
// import { FloatingDockDemo } from "./Floatdoc";
import SparklesText from "./magicui/sparkles-text";

export function BackgroundBeamsWithCollisionDemo() {
  return (
    <div className="h-screen bg-white">
    <BackgroundBeamsWithCollision className=" h-[100vh] ">
      <h2 className="text-2xl relative flex flex-col gap-4 z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
      
      Welcome to <SparklesText text="HexaBite" />{" "}
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className=""> Empowering the Future of Work</span>
          </div>
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            <span className=""> Empowering the Future of Work</span>
          </div>
        </div>
      </h2>
    </BackgroundBeamsWithCollision>
    <div className=" w-full flex items-center justify-center">

    </div>
    </div>
  );
}
