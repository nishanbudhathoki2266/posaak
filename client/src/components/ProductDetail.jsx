import Image from "next/image";
import Button from "./Button";
import { Fragment, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "@/redux/reducerSlices/cartSlice";
import { toast } from "react-hot-toast";
import {
  addToWishList,
  getWishList,
} from "@/redux/reducerSlices/wishListSlice";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { getIsLoggedIn, getUserDetails } from "@/redux/reducerSlices/userSlice";

function ProductDetail({ product }) {
  const dispatch = useDispatch();

  // For displaying large image upon the user selection
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // For choosing the color
  const [activeColor, setActiveColor] = useState(0);

  // ref for getting the user selected size
  const sizeRef = useRef(null);

  // An array of product images
  const images = product.images;

  // get userId
  const userId = useSelector(getUserDetails)?._id;

  // getLoggedIn
  const isLoggedIn = useSelector(getIsLoggedIn);

  // Wish List
  const wishList = useSelector(getWishList(userId));

  // function that checks if the product is already in the wishList
  const currProductInWishList = wishList.find(
    (wishListProduct) => wishListProduct.id === product._id
  );

  function handleActiveImageIndex(index) {
    if (activeImageIndex !== index) {
      setActiveImageIndex(index);
    }
  }

  // Add to wishList
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

  // Add to cart
  function handleAddToCart() {
    const newProduct = {
      id: product._id,
      name: product.name,
      userId,
      // Just keeping the first image in the cart
      image: product.images[0],
      quantity: 1,
      color: product.colors[activeColor].name.toLowerCase(),
      size: sizeRef.current.value.toLowerCase(),
      price: product.price,
    };

    dispatch(addProduct(newProduct));
    toast.success("Item added to cart!");
  }

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap items-center justify-center">
          <div className="flex flex-col gap-2">
            <Image
              alt={`Image of ${product.name}`}
              className="w-full h-auto object-cover object-center rounded"
              src={`http://localhost:8080/img/products/${product.images[activeImageIndex]}`}
              width={350}
              height={350}
            />
            <div className="flex gap-4 justify-center">
              {images.map((image, i) => (
                <Image
                  key={i}
                  alt={`Image ${i + 1} of ${product.name}`}
                  className={`h-20 w-20 object-cover object-center rounded cursor-pointer ${
                    activeImageIndex === i
                      ? "ring-[3px] ring-offset-2 ring-[#67595E]"
                      : ""
                  }`}
                  src={`http://localhost:8080/img/products/${image}`}
                  width={350}
                  height={350}
                  onClick={() => handleActiveImageIndex(i)}
                />
              ))}
            </div>
          </div>

          <div className="lg:w-2/3 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <div className="flex justify-between items-center">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                Category - {product.category.name}
              </h2>
              {/* Add to wishlist */}
              {isLoggedIn ? (
                <Fragment>
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
                </Fragment>
              ) : null}
            </div>
            <h1 className="text-gray-900 text-3xl font-medium mb-1">
              {product.name}
            </h1>

            <p className="leading-relaxed text-sm tracking-wider">
              {product.description} Fam locavore kickstarter distillery. Mixtape
              chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO
              fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday
              carry +1 seitan poutine tumeric.
            </p>
            <div className="flex mt-6 items-center pb-5 mb-5">
              <div className="flex gap-[1px]">
                <span className="mr-3">Color</span>
                {product.colors.map((color, i) => {
                  const hexCode = color.hexCode;
                  return (
                    <button
                      onClick={() => setActiveColor(i)}
                      style={{ backgroundColor: hexCode }}
                      key={color.name}
                      className={`border-2 ${
                        activeColor === i ? "ring-2" : ""
                      } ring-[#67595E] ml-1 rounded-full w-6 h-6 focus:outline-none`}
                    ></button>
                  );
                })}
              </div>
              <div className="flex ml-6 items-center">
                <span className="mr-3">Size</span>
                <div className="relative">
                  <select
                    ref={sizeRef}
                    className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10"
                  >
                    {product.sizes.map((size) => (
                      <option key={size} value={size.toLowerCase()}>
                        {size}
                      </option>
                    ))}
                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <p className="leading-relaxed text-[13px] mb-2 tracking-wider">
              Want to set a quantity ? Chill! 😋 Add it to cart and you can set
              the quantity in the cart 🛒
            </p>
            <div className="flex items-center border-t-2 pt-4">
              <span className="title-font font-medium text-2xl text-gray-900">
                Rs. {product.price - product.priceDiscount} /-
              </span>
              <div className="ml-auto">
                <Button variant="primary" onClick={handleAddToCart}>
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;
