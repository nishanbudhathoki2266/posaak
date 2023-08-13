import FeaturedProducts from "@/components/FeaturedProducts";
import Hero from "@/components/Hero";
import { getFeaturedProducts } from "@/utils/axios";
import { Fragment } from "react";

export default function Home({ featuredProducts }) {
  return (
    <Fragment>
      <Hero />
      <FeaturedProducts featuredProducts={featuredProducts} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const featuredProducts = await getFeaturedProducts();

  return {
    props: {
      featuredProducts: featuredProducts.data.featuredProducts,
    },
  };
}
