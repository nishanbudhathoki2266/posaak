import FeaturedProducts from "@/components/FeaturedProducts";
import Hero from "@/components/Hero";
import ShopByCategory from "@/components/ShopByCategory";
import { getAllCategories, getFeaturedProducts } from "@/utils/api";

export default function HomePage({ featuredProducts, categories }) {
  return (
    <div className="max-w-[1440px] mx-auto px-4 py-8">
      <Hero />
      <FeaturedProducts featuredProducts={featuredProducts} />
      <ShopByCategory categories={categories} />
    </div>
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
    revalidate: 80,
  };
}
