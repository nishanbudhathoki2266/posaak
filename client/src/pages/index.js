import Image from "next/image";
import { Inter } from "next/font/google";
import ImageSlider from "@/components/ImageSlider";
import ShopByCategory from "@/components/ShopByCategory";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <ImageSlider />
      <ShopByCategory />
    </main>
  );
}
