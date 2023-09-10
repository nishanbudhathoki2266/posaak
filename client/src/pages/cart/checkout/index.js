import ProtectedPage from "@/components/ProtectedPage";
import { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";

import Button from "@/components/Button";
import FormError from "@/components/FormError";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  getCart,
  getTotalCartPrice,
} from "@/redux/reducerSlices/cartSlice";
import { getToken, getUserDetails } from "@/redux/reducerSlices/userSlice";
import Link from "next/link";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useRouter } from "next/router";
import { createOrder } from "@/utils/api";

const ShippingSchema = Yup.object().shape({
  tole: Yup.string().required("Tole is required"),
  city: Yup.string().required("City name is required"),
  postalCode: Yup.string().required("Postal code is required"),
});

const index = () => {
  const router = useRouter();

  const dispatch = useDispatch();

  const token = useSelector(getToken);

  const userId = useSelector(getUserDetails)._id;

  const cart = useSelector(getCart(userId));

  const totalPrice = useSelector(getTotalCartPrice(userId));

  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async (values) => {
    setIsLoading(true);
    const response = await createOrder(
      {
        products: cart.map((product) => ({
          product: product.id,
          name: product.name,
          quantity: product.quantity,
          image: product.image,
          color: product.color,
          size: product.size,
          price: product.price,
        })),
        shippingAddress: {
          tole: values.tole,
          city: values.city,
          postalCode: values.postalCode,
        },
        totalPrice,
      },
      { Authorization: `Bearer ${token ? token : ""}` }
    );

    setIsLoading(false);
    if (response.status === "success") {
      dispatch(clearCart(userId));
      toast.success("Order placed successfully");
      setTimeout(() => {
        toast.success("Cart cleared!");
      }, 2000);

      router.push("/orders");
    } else {
      toast.error(response.message);
    }
  };

  if (cart.length <= 0)
    return (
      <ProtectedPage url="cart/checkout">
        <div className="h-[50vh] flex items-center justify-center">
          <div className="flex-col space-y-4 text-left px-6">
            <div className="text-5xl font-bold text-[#67595E]">EMPTY CART!</div>
            <div className="text-stone-500 font-medium">
              Looks like your cart is empty! Please add some items in the cart
              to checkout!
            </div>
            <div className="flex space-x-4 items-center justify-start">
              <Link href="/cart">
                <div className="bg-[#67595E] px-4 py-1 text-white font-medium border-2 border-gray-400 hover:scale-105 cursor-pointer">
                  <MdOutlineKeyboardBackspace />
                </div>
              </Link>
              <div className="text-md font-medium text-stone-500">
                Back to Cart
              </div>
            </div>
          </div>
        </div>
      </ProtectedPage>
    );

  return (
    <ProtectedPage url="cart/checkout">
      <div className="px-2 md:px-8 max-w-3xl mx-auto mt-8">
        <Formik
          initialValues={{ city: "", tole: "", postalCode: "" }}
          validationSchema={ShippingSchema}
          onSubmit={async (values) => {
            handleCheckout(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              {" "}
              <div className="relative mb-4">
                <label
                  htmlFor="city"
                  className="leading-7 text-sm text-gray-600"
                >
                  City
                </label>
                <Field
                  type="text"
                  id="city"
                  name="city"
                  className="w-full bg-white rounded border border-gray-300 focus:border-[#67595E] focus:ring-2 focus:ring-[#67595E] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <FormError>
                  {errors.city && touched.city ? errors.city : ""}
                </FormError>
              </div>
              <div className="mb-4 relative">
                <label
                  htmlFor="tole"
                  className="leading-7 text-sm text-gray-600"
                >
                  Tole
                </label>
                <Field
                  type="text"
                  id="tole"
                  name="tole"
                  className="w-full bg-white rounded border border-gray-300 focus:border-[#67595E] focus:ring-2 focus:ring-[#67595E]  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                ></Field>
                <FormError>
                  {errors.tole && touched.tole ? errors.tole : ""}
                </FormError>
              </div>
              <div className="mb-4 relative">
                <label
                  htmlFor="code"
                  className="leading-7 text-sm text-gray-600"
                >
                  Postal Code
                </label>
                <Field
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  className="w-full bg-white rounded border border-gray-300 focus:border-[#67595E] focus:ring-2 focus:ring-[#67595E]  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                ></Field>
                <FormError>
                  {errors.postalCode && touched.postalCode
                    ? errors.postalCode
                    : ""}
                </FormError>
              </div>
              <p className="text-xs font-normal tracking-wide mb-4">
                Please note that we only have{" "}
                <span className="text-md font-bold tracking-tighter uppercase">
                  Cash on Delivery
                </span>{" "}
                payment type available currently 🚚💵
              </p>
              <Button
                disabled={isLoading}
                type="submit"
                variant="primary"
                className="flex justify-center text-lg uppercase tracking-wide"
              >
                {isLoading ? "Processing..." : "Process"}
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </ProtectedPage>
  );
};

export default index;
