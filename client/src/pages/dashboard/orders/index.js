import Heading from "@/components/Heading";
import useFetch from "@/hooks/useFetch";
import { getToken } from "@/redux/reducerSlices/userSlice";
import { deliverAnOrder } from "@/utils/api";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { MdOutlineDone } from "react-icons/md";
import { useSelector } from "react-redux";

function OrdersPage() {
  const token = useSelector(getToken);
  const [isLoading, setIsLoading] = useState(false);

  const { data } = useFetch("http://localhost:8080/api/v1/orders", token);

  const handleDeliver = async (id) => {
    setIsLoading(true);
    const response = await deliverAnOrder(id, {
      Authorization: `Bearer ${token ? token : ""}`,
    });
    if (response.status === "success") {
      toast.success("Changed to delivered successfully!");
    } else {
      toast.error(response.message);
    }
    setIsLoading(false);
  };

  return (
    <main className="p-6">
      <Heading>All Orders</Heading>
      {!data ? (
        <p className="my-2 text-lg font-semibold">Loading...</p>
      ) : (
        <>
          <div className="flex flex-col justify-center items-center gap-4 overflow-auto p-4 bg-gray-200">
            {/* HEADERS */}
            <div className="flex justify-around gap-4 text-center w-full">
              <h3 className="text-md uppercase w-full font-semibold">
                Order Id
              </h3>
              <h3 className="text-md uppercase w-full font-semibold">
                Total Price
              </h3>
              <h3 className="text-md uppercase w-full font-semibold">
                Order Date
              </h3>
              <h3 className="text-md uppercase w-full font-semibold">
                Payment Type
              </h3>
              <h3 className="text-md uppercase w-full font-semibold">
                Shipping Addr
              </h3>
              <h3 className="text-md uppercase w-full font-semibold">Status</h3>
            </div>
            {data.data.orders.map((order) => (
              <div
                key={order._id}
                className="flex justify-around gap-4 text-center w-full bg-slate-300 py-4"
              >
                <p className="text-sm w-full">{order._id}</p>
                <p className="text-sm w-full">{order.totalPrice}</p>
                <p className="text-sm w-full">
                  {new Date(order.orderDate).toLocaleDateString()}
                </p>
                <p className="text-sm w-full">{order.paymentType}</p>
                <p className="text-sm w-full">{order.shippingAddress.city}</p>
                <p className="text-sm w-full flex gap-2 justify-center items-center">
                  {order.isDelivered ? "Delivered" : "Pending"}
                  {!order.isDelivered && (
                    <MdOutlineDone
                      className="bg-green-800 text-white cursor-pointer hover:scale-110 text-md"
                      aria-disabled={isLoading}
                      onClick={() => handleDeliver(order._id)}
                    />
                  )}
                </p>
              </div>
            ))}
          </div>
        </>
      )}
    </main>
  );
}

export default OrdersPage;
