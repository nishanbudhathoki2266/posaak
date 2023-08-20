import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import React, { Fragment, useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { getIsLoggedIn, logOut } from "@/redux/reducerSlices/userSlice";
import { getTotalCartQuantity } from "@/redux/reducerSlices/cartSlice";

function Navigation() {
  const [showProfileSettings, setShowProfieSettings] = useState(false);

  function hideProfileSettings() {
    setShowProfieSettings(false);
  }

  const dispatch = useDispatch();
  const router = useRouter();
  const isLoggedIn = useSelector(getIsLoggedIn);

  const totalCartQuantity = useSelector(getTotalCartQuantity);

  return (
    <header className="text-black-600 py-10 px-6 md:py-6 border-b-[1px] border-b-black ">
      <div className="container mx-auto flex flex-wrap justify-around items-center gap-8 md:gap-0">
        <Link href="/" className="hidden md:block">
          <Image
            src="/logo.png"
            alt="Logo of Posaak"
            width={150}
            height={150}
          />
        </Link>
        <nav className="flex flex-wrap items-center text-sm md:gap-12">
          <Link
            href="/"
            className={`mr-5 hover:text-gray-900 tracking-widest uppercase cursor-pointer`}
          >
            Men
          </Link>
          <Link
            href="/"
            className="mr-5 hover:text-gray-900 tracking-widest uppercase cursor-pointer"
          >
            Women
          </Link>
          <Link
            href="/"
            className="mr-5 hover:text-gray-900 tracking-widest uppercase cursor-pointer"
          >
            Kids
          </Link>
          <Link
            href="/products"
            className={`hover:text-gray-900 ${
              router.pathname === "/products" ? "font-extrabold" : ""
            } tracking-widest uppercase cursor-pointer`}
          >
            Shop
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
                <p className="text-md bg-orange-600 text-white rounded-full text-center font-semibold text-md flex items-center justify-center h-7 w-7 absolute top-[-25px] right-[-12px]">
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
                        href="/"
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
