import { FocusCards } from "@/components/ui/focus-cards";
import ai from "../../public/ai.jpg"
import designer from "../../public/designer.jpg"
import development from "../../public/development.jpg"
import marketing from "../../public/marketing.jpg"
import support from "../../public/support.jpg"
import writing from "../../public/writing.jpg"

export function FocusCardsDemo() {
  const cards = [
    {
      title: "Ai Services",
      src: ai,
    },
    {
      title: "Design & Creativity",
      src: designer,
    },
    {
      title: "Development & It",
      src: development
    },
    {
      title: "Sale & Marketing",
      src: marketing
    },
    {
      title: "Admin& Customer Support",
      src: support
    },
    {
      title: "Writing",
      src: writing,
    },
  ];

  return <FocusCards cards={cards} />;
}
