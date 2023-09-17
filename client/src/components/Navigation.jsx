import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import React, { Fragment, useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import {
  getIsLoggedIn,
  getUserDetails,
  logOut,
} from "@/redux/reducerSlices/userSlice";
import { getTotalCartQuantity } from "@/redux/reducerSlices/cartSlice";
import categoryNames from "@/utils/categoryNames";

function Navigation() {
  const dispatch = useDispatch();
  const router = useRouter();
  const userId = useSelector(getUserDetails)?._id;
  const isLoggedIn = useSelector(getIsLoggedIn);
  const [showProfileSettings, setShowProfieSettings] = useState(false);

  function hideProfileSettings() {
    setShowProfieSettings(false);
  }

  const totalCartQuantity = useSelector(getTotalCartQuantity(userId));

  return (
    <header className="text-black-600 py-8 px-6 md:py-6 border-b-[1px] border-b-black ">
      <div className="container mx-auto flex flex-wrap justify-around items-center gap-8 md:gap-0">
        <Link href="/" className="hidden md:block">
          <Image
            src="/logo.png"
            alt="Logo of Posaak"
            className="h-14 w-auto"
            width={150}
            height={150}
          />
        </Link>
        <nav className="flex flex-wrap items-center text-sm md:gap-2">
          <Link
            href={`/category/${categoryNames.men}`}
            className={`mr-5 hover:text-gray-900 tracking-widest uppercase cursor-pointer ${
              router.asPath === `/category/${categoryNames.men}`
                ? "font-extrabold"
                : ""
            }`}
          >
            Men
          </Link>
          <Link
            href={`/category/${categoryNames.women}`}
            className={`mr-5 hover:text-gray-900 tracking-widest uppercase cursor-pointer ${
              router.asPath === `/category/${categoryNames.women}`
                ? "font-extrabold"
                : ""
            }`}
          >
            Women
          </Link>
          <Link
            href={`/category/${categoryNames.kids}`}
            className={`mr-5 hover:text-gray-900 tracking-widest uppercase cursor-pointer ${
              router.asPath === `/category/${categoryNames.kids}`
                ? "font-extrabold"
                : ""
            }`}
          >
            Kids
          </Link>
          <Link
            href="/products"
            className={`hover:text-gray-900 ${
              router.pathname === "/products" ? "font-extrabold" : ""
            } tracking-widest uppercase cursor-pointer`}
          >
            All products
          </Link>
        </nav>

        <div className="flex flex-row items-center justify-center gap-4 text-sm">
          {isLoggedIn || (
            <Fragment>
              <Link
                href="/auth/login"
                className={`hover:text-gray-900 ${
                  router.pathname === "/auth/login" ? "font-extrabold" : ""
                } tracking-widest uppercase cursor-pointer`}
              >
                Login
              </Link>
              <Link
                href="/auth/register"
                className={`hover:text-gray-900 ${
                  router.pathname === "/auth/register" ? "font-extrabold" : ""
                } tracking-widest uppercase cursor-pointer`}
              >
                Register
              </Link>{" "}
            </Fragment>
          )}
          {isLoggedIn && (
            <div className="flex gap-4 items-center">
              <Link href="/cart" className="relative ">
                <AiOutlineShoppingCart className="cursor-pointer text-3xl" />
                <p className="text-md bg-orange-600 text-white rounded-full text-center font-normal text-md flex items-center justify-center p-4 h-6 w-6 absolute top-[-28px] right-[-12px]">
                  {totalCartQuantity}
                </p>
              </Link>
              <div className="relative flex items-center justify-center">
                <AiOutlineUser
                  className="cursor-pointer text-3xl"
                  onClick={() =>
                    setShowProfieSettings((currState) => !currState)
                  }
                />
                {showProfileSettings && (
                  <div
                    className="absolute z-50 top-10 bg-white shadow-2xl shadow-gray-400 flex justify-center items-center h-auto py-4 w-40 rounded-md"
                    onMouseLeave={hideProfileSettings}
                  >
                    <div className="flex flex-col justify-center items-center gap-2">
                      <Link
                        href="/profile"
                        className="text-[#67595E] cursor-pointer hover:font-bold text-sm font-medium tracking-widest"
                        onClick={hideProfileSettings}
                      >
                        My Profile
                      </Link>
                      <Link
                        href="/orders"
                        className=" text-[#67595E] cursor-pointer hover:font-bold text-sm font-medium tracking-widest"
                        onClick={hideProfileSettings}
                      >
                        My Orders
                      </Link>

                      <Link
                        href="/wishlist"
                        className=" text-[#67595E] cursor-pointer hover:font-bold text-sm font-medium tracking-widest"
                        onClick={hideProfileSettings}
                      >
                        My wishlist
                      </Link>

                      <Link
                        href="/auth/login"
                        className="text-sm text-[#67595E] cursor-pointer hover:font-bold text-md font-medium tracking-widest"
                        onClick={() => {
                          dispatch(logOut());
                          toast.success("Logged out successfully!");
                        }}
                      >
                        Log out
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navigation;
