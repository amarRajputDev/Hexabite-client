"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";
import project from "../../public/project.jpg";
import aihero from "../../public/aihero.jpg";
import designer from "../../public/designer.jpg";
import development from "../../public/development.jpg";
import marketing from "../../public/marketing.jpg";
import support from "../../public/support.jpg";
import writing from "../../public/writing.jpg";
// import marketing from "../../public/marketing.jpg";


export function HeroParallaxDemo() {
  const products = [
    {
      title: "Moonbeam",
      link: "https://gomoonbeam.com",
      thumbnail: support,
    },
    {
      title: "Cursor",
      link: "https://cursor.so",
      thumbnail: aihero,
    },
    {
      title: "Rogue",
      link: "https://userogue.com",
      thumbnail: designer,
    },
    {
      title: "Editorially",
      link: "https://editorially.org",
      thumbnail: development,
    },
    {
      title: "Editrix AI",
      link: "https://editrix.ai",
      thumbnail: marketing,
    },
    {
      title: "Pixel Perfect",
      link: "https://app.pixelperfect.quest",
      thumbnail: writing,
    },
    {
      title: "Algochurn",
      link: "https://algochurn.com",
      thumbnail: support,
    },
    {
      title: "Aceternity UI",
      link: "https://ui.aceternity.com",
      thumbnail: aihero,
    },
    {
      title: "Tailwind Master Kit",
      link: "https://tailwindmasterkit.com",
      thumbnail: designer,
    },
    {
      title: "SmartBridge",
      link: "https://smartbridgetech.com",
      thumbnail: development,
    },
    {
      title: "Renderwork Studio",
      link: "https://renderwork.studio",
      thumbnail: project,
    },
    {
      title: "Creme Digital",
      link: "https://cremedigital.com",
      thumbnail: project,
    },
    {
      title: "Invoker Labs",
      link: "https://invoker.lol",
      thumbnail: project,
    },
    {
      title: "E Free Invoice",
      link: "https://efreeinvoice.com",
      thumbnail: project,
    },
  ];

  return <HeroParallax products={products} />;
}
