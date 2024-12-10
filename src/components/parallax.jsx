import { HeroParallax } from "./ui/hero-parallax";

export function Parallax() {
  return (
    <div id="gallery">
      <HeroParallax products={products} />
    </div>
  );
}
export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "shared/DSC_0080.JPG",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "shared/DSC06699.JPG",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "shared/DSC06711.JPG",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "shared/DSC06734.JPG",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "shared/DSC06844.JPG",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "shared/DSC_0115.JPG",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "shared/DSC_0140.JPG",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "shared/_MG_0130.jpg",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "shared/DSC_9364.JPG",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "shared/DSC_2439.jpg",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "shared/DSC_2454.JPG",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "shared/DSC_2502.JPG",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "shared/DSC_2454.jpg",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "shared/DSC_2089.jpg",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "shared/DSC_2453.jpg",
  },
  
];
