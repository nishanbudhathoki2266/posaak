import Heading from "@/components/Heading";
import Loader from "@/components/Loader";
import OrderCard from "@/components/OrderCard";
import ProtectedPage from "@/components/ProtectedPage";
import { getToken } from "@/redux/reducerSlices/userSlice";
import { getMyOrders } from "@/utils/api";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import toast from "react-hot-toast";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useSelector } from "react-redux";

const MyOrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const token = useSelector(getToken);

  useEffect(() => {
    async function fetchOrders() {
      setIsLoading(true);
      const response = await getMyOrders({
        Authorization: `Bearer ${token ? token : ""}`,
      });

      setIsLoading(false);
      if (response.status === "success") {
        setOrders(response.data.orders);
      } else {
        toast.error(response.message);
      }
    }
    fetchOrders();
  }, []);

  if (isLoading)
    return (
      <div className="h-[60vh] flex justify-center items-center">
        <Loader />
      </div>
    );

  if (!isLoading && !orders.length > 0)
    return (
      <div className="h-[50vh] flex items-center justify-center">
        <div className="flex-col space-y-4 text-left px-6">
          <div className="text-4xl font-bold text-[#67595E]">No orders</div>
          <div className="text-stone-500 font-medium">
            You haven't made any orders yet! 😭
          </div>
          <div className="flex space-x-4 items-center justify-start">
            <Link href="/products">
              <div className="bg-[#67595E] px-4 py-1 text-white font-medium border-2 border-gray-400 hover:scale-105 cursor-pointer">
                <MdOutlineKeyboardBackspace />
              </div>
            </Link>
            <div className="text-md font-medium text-stone-500">Go to shop</div>
          </div>
        </div>
      </div>
    );
  return (
    <ProtectedPage url="orders">
      <Heading position="center" className="mt-8">
        Your orders
      </Heading>
      <div className="px-[.5px] sm:px-4">
        <div className="mt-8 max-w-[1440px] justify-items-center items-center mx-auto grid grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-y-1 overflow-auto">
          <div className="text-sm sm:text-md font-medium uppercase tracking-wide p-3">
            Products
          </div>
          <div className="text-sm sm:text-md font-medium uppercase tracking-wide p-3">
            Total Price
          </div>
          <div className="text-sm sm:text-md font-medium uppercase tracking-wide p-3">
            Order Status
          </div>
          <div className="text-sm sm:text-md font-medium uppercase tracking-wide p-3">
            Order Date
          </div>
          <div className="text-sm sm:text-md font-medium uppercase tracking-wide p-3">
            Payment Type
          </div>

          <div className="col-span-full border w-full mt-2" />

          {orders.map((order) => (
            <Fragment key={order.id}>
              <OrderCard order={order} />
              <div className="col-span-full border w-full mt-2" />
            </Fragment>
          ))}
        </div>
      </div>
    </ProtectedPage>
  );
};

export default MyOrdersPage;
