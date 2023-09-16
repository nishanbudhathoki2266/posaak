import Button from "@/components/Button";
import Error from "@/components/Error";
import FilterButton from "@/components/FilterButton";
import Heading from "@/components/Heading";
import Loader from "@/components/Loader";
import ProductCard from "@/components/ProductCard";
import { getAllProducts } from "@/utils/api";
import { useRouter } from "next/router";
import { useState } from "react";
import toast from "react-hot-toast";
import {
  MdOutlineArrowLeft,
  MdOutlineArrowRight,
  MdOutlineClear,
  MdSearch,
} from "react-icons/md";

function AllProducts(props) {
  const router = useRouter();

  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState(null);
  const [searchText, setSearchText] = useState("");

  // Error handling
  if (props.error) return <Error error={props.error} />;

  // If no error
  const { products, results } = props;

  const handlePageNextClick = () => {
    if (page === results) return;
    setPage((page) => {
      if (sortBy) {
        router.push(`?sort=${sortBy}&page=${page + 1}`);
      } else {
        router.push(`?page=${page + 1}`);
      }
      return page + 1;
    });
  };

  const handlePagePrevClick = () => {
    if (page === 1) return;
    setPage((page) => {
      if (sortBy) {
        router.push(`?sort=${sortBy}&page=${page - 1}`);
      } else {
        router.push(`?page=${page - 1}`);
      }
      return page - 1;
    });
  };

  if (!products.length > 0)
    return (
      <div className="container px-5 py-10 mx-auto">
        <Heading>No Product found</Heading>
      </div>
    );

  return (
    <section className="text-gray-600 px-5 py-8 body-font">
      <Heading position="center">All Products</Heading>
      <div className="container px-5 py-4 mx-auto w-full">
        <div className="mb-4 inline-flex gap-4 items-center border-2 rounded-lg p-2">
          <FilterButton
            onClick={() => {
              setSortBy((currState) => {
                if (searchText) {
                  router.push(`?search=${searchText}&sort=price&page=${page}`);
                } else {
                  router.push(`?sort=price&page=${page}`);
                }
                return "price";
              });
            }}
          >
            Sort by price
          </FilterButton>
          <FilterButton
            onClick={() => {
              setSortBy((currState) => {
                if (searchText) {
                  router.push(`?search=${searchText}&sort=name&page=${page}`);
                } else {
                  router.push(`?sort=name&page=${page}`);
                }
                return "name";
              });
            }}
          >
            Sort by name
          </FilterButton>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (sortBy) {
                router.push(
                  `?search=${searchText}&sort=${sortBy}&page=${page}`
                );
              } else {
                router.push(`?search=${searchText}&page=${page}`);
              }
            }}
          >
            <input
              type="text"
              placeholder="Type to search..."
              className="border-2 rounded-lg py-[5.5px] px-2 outline-none"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </form>
          <MdOutlineClear
            className="text-4xl text-black block cursor-pointer hover:-translate-y-[1px] transition-transform ease-out duration-150"
            onClick={() => {
              if (router.asPath.includes("?")) {
                toast.success("Filter cleared!");
                setSearchText("");
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
      <div className="flex justify-between container mx-auto mt-4">
        {page !== 1 && (
          <Button
            variant="primary"
            className="flex justify-center items-center"
            onClick={handlePagePrevClick}
          >
            Prev <MdOutlineArrowLeft className="text-4xl" />
          </Button>
        )}
        {page !== results && (
          <Button
            variant="primary"
            className="flex justify-center items-center"
            onClick={handlePageNextClick}
          >
            Next <MdOutlineArrowRight className="text-4xl" />
          </Button>
        )}
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
        results: products.total,
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
