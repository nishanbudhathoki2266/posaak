import CategoryCard from "./CategoryCard";
import Heading from "./Heading";

function ShopByCategory({ categories }) {
  return (
    <section className="text-gray-600 py-14 md:py-24 flex justify-center flex-wrap gap-9">
      {categories.map((category) => (
        <CategoryCard key={category._id} category={category} />
      ))}
    </section>
  );
}

export default ShopByCategory;
