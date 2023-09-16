import { useRouter } from "next/router";
import CategoryCard from "./CategoryCard";

function ShopByCategory({ categories }) {
  const router = useRouter();
  return (
    <section className="text-gray-600 my-6 md:my-24 flex justify-center flex-wrap gap-9">
      {categories.map((category) => (
        <CategoryCard
          key={category._id}
          category={category}
          onClick={() => router.push(`/category/${category._id}`)}
        />
      ))}
    </section>
  );
}

export default ShopByCategory;
