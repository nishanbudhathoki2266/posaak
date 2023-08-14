import Heading from "./Heading";

function ShopByCategory({ categories }) {
  return (
    <section className="text-gray-600 px-5 py-8 body-font">
      <Heading position="center">Shop By Category</Heading>
      <div className="container px-5 py-14 mx-auto">
        <div className="flex flex-wrap justify-center -m-4 text-center cursor-pointer">
          {categories.map((category) => (
            <div key={category._id} className="p-4 md:w-1/4  sm:w-1/2 w-full">
              <div className="border-2 flex items-center justify-center hover:scale-105 transition-all duration-150 bg-emerald-700 border-gray-200  px-4 h-52 w-auto py-6 rounded-lg">
                <h2 className="title-font tracking-wide font-medium text-2xl text-white">
                  {category.name.toUpperCase()}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ShopByCategory;
