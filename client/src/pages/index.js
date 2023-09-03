import Error from "@/components/Error";
import FeaturedProducts from "@/components/FeaturedProducts";
import Hero from "@/components/Hero";
import ShopByCategory from "@/components/ShopByCategory";
import { getAllCategories, getFeaturedProducts } from "@/utils/api";

export default function HomePage(props) {
  // Error handling
  if (props.error) return <Error error={props.error} />;

  // If no error
  const { featuredProducts, categories } = props;
  return (
    <div className="max-w-[1440px] mx-auto px-4 py-8">
      <Hero />
      <FeaturedProducts featuredProducts={featuredProducts} />
      <ShopByCategory categories={categories} />
    </div>
  );
}

export async function getStaticProps() {
  try {
    const featuredProducts = await getFeaturedProducts();
    const categories = await getAllCategories();
    return {
      props: {
        featuredProducts: featuredProducts.data.featuredProducts,
        categories: categories.data.categories,
      },
      revalidate: 80,
    };
  } catch (err) {
    return {
      props: {
        error: "Couldn't fetch data",
      },
    };
  }
}
