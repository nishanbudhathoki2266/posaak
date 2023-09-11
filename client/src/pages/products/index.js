import Error from "@/components/Error";
import FilterButton from "@/components/FilterButton";
import Heading from "@/components/Heading";
import Loader from "@/components/Loader";
import ProductCard from "@/components/ProductCard";
import { getAllProducts } from "@/utils/api";
import { useRouter } from "next/router";
import { useState } from "react";
import { MdOutlineClear, MdSearch } from "react-icons/md";

function AllProducts(props) {
  const router = useRouter();
  const [searchInputText, setSearchInputText] = useState("");
  const [query, setQuery] = useState("");

  // Error handling
  if (props.error) return <Error error={props.error} />;

  // If no error
  const { products } = props;

  if (!products.length > 0)
    return (
      <div className="container px-5 py-10 mx-auto">
        <Heading>No Product found</Heading>
      </div>
    );

  const searchedProducts = products?.filter((product) =>
    product.name.toLowerCase().includes(query.toLocaleLowerCase())
  );

  return (
    <section className="text-gray-600 px-5 py-8 body-font">
      <Heading position="center">All Products</Heading>
      <div className="container px-5 py-4 mx-auto">
        <div className="mb-4 flex gap-4 items-center border-2 rounded-lg p-2">
          <FilterButton onClick={() => router.push("?sort=price")}>
            Sort by price
          </FilterButton>
          <FilterButton onClick={() => router.push("?sort=name")}>
            Sort by name
          </FilterButton>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Type to search..."
              onChange={(e) => setSearchInputText(e.target.value)}
              value={searchInputText}
              className="border-2 outline-none px-2 py-[5px] rounded-lg"
            />
            <FilterButton onClick={() => setQuery(searchInputText)}>
              <MdSearch />
            </FilterButton>
          </div>
          <MdOutlineClear
            className="text-4xl text-black block cursor-pointer hover:-translate-y-[1px] transition-transform ease-out duration-150"
            onClick={() => router.push("/products")}
          />
        </div>
        <div className="flex flex-wrap -m-4">
          {searchedProducts.length > 0 ? (
            searchedProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          ) : (
            <p className="ml-2 mt-4 text-5xl">No product found!</p>
          )}
        </div>
      </div>
    </section>
  );
}

export async function getServerSideProps(context) {
  const queryStr = context.query;

  // ?sort=name&price[gt]=200
  const finedQueryStr = Object.entries(queryStr).map(
    (str) => str[0] + "=" + str[1].replace("'", "")
  );

  try {
    // Some query string manipulations and joining array
    const products = await getAllProducts(`?${finedQueryStr.join("&")}&page=1`);
    return {
      props: {
        products: products.data.products,
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

export default AllProducts;
