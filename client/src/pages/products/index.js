import Heading from "@/components/Heading";
import ProductCard from "@/components/ProductCard";
import React from "react";

function Page({
  data: {
    data: { products },
  },
}) {
  return (
    <section className="text-gray-600 px-5 py-14 body-font">
      <Heading position="center">All Products</Heading>
      <div className="container px-5 py-14 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:8080/api/v1/products`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default Page;
