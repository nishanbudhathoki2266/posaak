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

  console.log(orders);

  return <div>MyOrdersPage</div>;
};

export default MyOrdersPage;
