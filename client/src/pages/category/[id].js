import Error from "@/components/Error";
import Heading from "@/components/Heading";
import ProductCard from "@/components/ProductCard";
import { getCategoryById, getProductsByCategory } from "@/utils/api";
import React from "react";

const CategoryPage = (props) => {
  // Error handling
  if (props.error) return <Error error={props.error} />;

  // If no error
  const { products, category } = props;

  if (!products.length > 0)
    return (
      <div className="container px-5 py-10 mx-auto">
        <Heading>No Product in this cateogry</Heading>
      </div>
    );

  return (
    <section className="text-gray-600 px-5 py-8 body-font">
      <Heading position="center">Category - {category.name}</Heading>
      <div className="container px-5 py-10 mx-auto">
        <div className="flex justify-center flex-wrap -m-4">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export async function getServerSideProps(context) {
  const categoryId = context.params.id;

  try {
    const products = await getProductsByCategory(categoryId);
    const category = await getCategoryById(categoryId);
    return {
      props: {
        products: products.data.products,
        category: category.data.category,
      },
    };
  } catch (err) {
    return {
      props: {
        error: "Failed to fetch",
      },
    };
  }
}

export default CategoryPage;
