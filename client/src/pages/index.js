import { Rubik } from "next/font/google";
import ShopByCategory from "@/components/ShopByCategory";
import Hero from "@/components/Hero";

const rubik = Rubik({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${rubik.className}`}>
      <Hero />
    </main>
  );
}
