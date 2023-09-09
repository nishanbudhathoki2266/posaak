import ProtectedPage from "@/components/ProtectedPage";
import { getToken } from "@/redux/reducerSlices/userSlice";
import { getMyOrders } from "@/utils/api";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
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

  return (
    <ProtectedPage url="orders">
      <div className="px-[.5px] sm:px-4">
        <div className="mt-8 max-w-[1440px] justify-items-center items-center mx-auto grid grid-cols-[1fr_1fr_1fr_1fr] sm:grid-cols-[2fr_1fr_1fr_1fr] w-full gap-y-1">
          <div className="text-sm sm:text-md font-medium uppercase tracking-wide p-3">
            Products
          </div>
          <div className="text-sm sm:text-md font-medium uppercase tracking-wide p-3">
            Total Price
          </div>
          <div className="text-sm sm:text-md font-medium uppercase tracking-wide p-3">
            Status
          </div>
          <div className="text-sm sm:text-md font-medium uppercase tracking-wide p-3">
            Ordered Date
          </div>

          <div className="col-span-full border w-full mt-2" />

          {/* Cart products */}

          {orders.map((order) => {
            <p>{order._id}</p>;
          })}
        </div>
      </div>
    </ProtectedPage>
  );
};

export default MyOrdersPage;
