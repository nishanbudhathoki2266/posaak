import Button from "@/components/Button";
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
  const { products, results } = props;

  if (!products.length > 0)
    return (
      <div className="container px-5 py-10 mx-auto">
        <Heading>No Product found</Heading>
      </div>
    );

  const [page, setPage] = useState(1);

  const handlePageChange = () => {
    setPage(page + 1);

    router.push(`?page=${page}`);
  };

  return (
    <section className="text-gray-600 px-5 py-8 body-font">
      <Heading position="center">All Products</Heading>
      <div className="container px-5 py-4 mx-auto w-full">
        <div className="mb-4 inline-flex gap-4 items-center border-2 rounded-lg p-2">
          <FilterButton onClick={() => router.push("?sort=price")}>
            Sort by price
          </FilterButton>
          <FilterButton onClick={() => router.push("?sort=name")}>
            Sort by name
          </FilterButton>
          <MdOutlineClear
            className="text-4xl text-black block cursor-pointer hover:-translate-y-[1px] transition-transform ease-out duration-150"
            onClick={() => {
              if (router.asPath.includes("?")) {
                router.push("/products");
              } else {
                return;
              }
            }}
          />
        </div>
        <div className="flex flex-wrap -m-4">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <Button
          variant="primary"
          className="mx-auto"
          onClick={handlePageChange}
        >
          Load More {page} of {results}
        </Button>
        )
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
    const products = await getAllProducts(`?${finedQueryStr.join("&")}`);
    return {
      props: {
        products: products.data.products,
        results: products.results,
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
