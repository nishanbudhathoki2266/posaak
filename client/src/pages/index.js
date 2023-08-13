import FeaturedProducts from "@/components/FeaturedProducts";
import Hero from "@/components/Hero";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <FeaturedProducts />
    </Fragment>
  );
}
