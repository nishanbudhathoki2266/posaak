import CategoryCard from "./CategoryCard";

function ShopByCategory({ categories }) {
  return (
    <section className="text-gray-600 px-20 py-8 md:py-24  body-font flex justify-center flex-wrap gap-9">
      {categories.map((category) => (
        <CategoryCard key={category._id} category={category} />
      ))}
    </section>
  );
}

export default ShopByCategory;
