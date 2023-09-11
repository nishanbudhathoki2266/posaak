import Image from "next/legacy/image";
import Link from "next/link";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWishList,
  getWishList,
} from "@/redux/reducerSlices/wishListSlice";
import { getUserDetails } from "@/redux/reducerSlices/userSlice";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const router = useRouter();

  // Get user
  const userId = useSelector(getUserDetails)?._id;

  // Get wishList from the store
  const wishList = useSelector(getWishList(userId));

  // function that checks if the product is already in the wishList
  const currProductInWishList = wishList.find(
    (wishListProduct) => wishListProduct.id === product._id
  );

  function handleAddToWishList() {
    if (!userId) {
      router.push("auth/login");
      toast.error("Login required!");
      return;
    }

    const newProduct = {
      id: product._id,
      userId,
      name: product.name,
      price: product.price,
      image: product.images[0],
    };

    dispatch(addToWishList(newProduct));
  }

  return (
    <div className="w-full lg:w-1/5 md:w-1/3 p-4">
      <div className="aspect-square rounded bg-red overflow-hidden relative">
        <Image
          alt="ecommerce"
          className="hover:scale-[1.10] transition-all duration-500 ease-out"
          src={`http://localhost:8080/img/products/${product.images[0]}`}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <h3 className="text-gray-500 text-xs tracking-widest title-font mt-2 mb-1">
        Category - {product.category.name}
      </h3>
      <h2 className="text-gray-900 title-font text-lg font-medium">
        {product.name}
      </h2>
      <p className="mt-1">Rs. {product.price}/-</p>
      <div className="flex items-center justify-between mt-2">
        <Link
          href={`/products/${product._id}`}
          className="text-[#67595E] text-lg font-semibold inline-block hover:translate-x-1 duration-200"
        >
          View &rarr;
        </Link>
        {/* Add to wishlist */}
        {currProductInWishList ? (
          <AiFillHeart
            className={`text-red-600 text-3xl cursor-pointer`}
            onClick={handleAddToWishList}
          />
        ) : (
          <AiOutlineHeart
            className={`text-red-600 text-3xl cursor-pointer`}
            onClick={handleAddToWishList}
          />
        )}
      </div>
    </div>
  );
}

export default ProductCard;
