import FeaturedProducts from "@/components/FeaturedProducts";
import Hero from "@/components/Hero";
import ShopByCategory from "@/components/ShopByCategory";
import { getAllCategories, getFeaturedProducts } from "@/utils/api";
import { Fragment } from "react";

export default function HomePage({ featuredProducts, categories }) {
  return (
    <Fragment>
      <Hero />
      <FeaturedProducts featuredProducts={featuredProducts} />
      <ShopByCategory categories={categories} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const featuredProducts = await getFeaturedProducts();
  const categories = await getAllCategories();

  return {
    props: {
      featuredProducts: featuredProducts.data.featuredProducts,
      categories: categories.data.categories,
    },
    revalidate: 100,
  };
}
