import React from "react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import Meteors from "./magicui/meteors";

export function TextEffect() {
  return (
    <div className=" h-screen bg-black flex items-center justify-center p-10">
      <Meteors number={30} />
      <TextHoverEffect text="HexaBite" />
    </div>
  );
}
