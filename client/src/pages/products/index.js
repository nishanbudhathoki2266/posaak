import ProductCard from "@/components/ProductCard";
import React from "react";

function Page({
  data: {
    data: { products },
  },
}) {
  return (
    <section className="text-gray-600 px-10 body-font">
      <div className="flex flex-wrap m-4 gap-6 justify-center items-center">
        {products?.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:8080/api/v1/products`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default Page;
