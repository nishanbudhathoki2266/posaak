import React from "react";
import Heading from "@/components/Heading";
import DashboardStatsCard from "@/components/DashboardStatsCard";
import { MdDeliveryDining } from "react-icons/md";
import { AiOutlineDollar, AiOutlineUser } from "react-icons/ai";
import { BiSolidTShirt } from "react-icons/bi";
import useSWR from "swr";
import { fetchData } from "@/utils/swr";
import { useSelector } from "react-redux";
import { getToken } from "@/redux/reducerSlices/userSlice";

const DashboardPage = () => {
  const token = useSelector(getToken);

  const header = {
    authorization: `Bearer ${token}`,
  };

  const { data: products, error } = useSWR(
    "http://localhost:8080/api/v1/products",
    fetchData
  );
  return (
    <section className="p-6">
      <Heading>Dashboard</Heading>
      <div className="grid gap-2 lg:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <DashboardStatsCard
          icon={
            <MdDeliveryDining className="text-5xl text-red-400 font-extralight rounded-full" />
          }
          title="orders"
          text="12"
        />
        <DashboardStatsCard
          icon={
            <AiOutlineUser className="text-5xl text-cyan-500 font-extralight rounded-full" />
          }
          title="users"
          text="30"
        />
        <DashboardStatsCard
          icon={
            <AiOutlineDollar className="text-5xl text-green-500 font-extralight rounded-full" />
          }
          title="revenue"
          text="12000"
        />
        <DashboardStatsCard
          icon={
            <BiSolidTShirt className="text-5xl text-blue-600 font-extralight rounded-full" />
          }
          title="products"
          text={!products ? "..." : products.results}
        />
      </div>
    </section>
  );
};

export default DashboardPage;
