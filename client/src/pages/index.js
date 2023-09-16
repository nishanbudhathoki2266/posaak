import Banner from "@/components/Banner";
import Error from "@/components/Error";
import FeaturedProducts from "@/components/FeaturedProducts";
import Heading from "@/components/Heading";
import Hero from "@/components/Hero";
import ShopByCategory from "@/components/ShopByCategory";
import { getAllCategories, getFeaturedProducts } from "@/utils/api";
import Gallery from "@/components/Gallery";

export default function HomePage(props) {
  // Error handling
  if (props.error) return <Error error={props.error} />;

  // If no error
  const { featuredProducts, categories } = props;
  return (
    <section className="max-w-[1440px] mx-auto px-4 py-8">
      <Hero />
      <FeaturedProducts featuredProducts={featuredProducts} />
      <Heading className="mb-6">What's new?</Heading>
      <Banner
        heading="Dashain is Here"
        paragraph="Dashain offers! Dashain Savings at Posaak!"
        spanParagraph="Explore our massive 40% discounts today."
        src="/images/durga.jpg"
      />
      <Banner
        heading="Posaak Kids"
        paragraph="Dress your kids in fashion that matches their personality,"
        spanParagraph="Check out our new arrivals."
        src="/images/kid.jpg"
        imagePosition="right"
        link="/category/64cf77c69f091e1de25a870e"
      />
      <Banner
        heading="Posaak formals"
        paragraph="Posaak introduces chic and sophisticated formal wear,"
        spanParagraph="Get ready to turn heads."
        src="/images/couple.jpg"
      />
      <ShopByCategory categories={categories} />
      <Gallery />
    </section>
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
