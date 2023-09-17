import React from "react";
import Heading from "@/components/Heading";
import DashboardStatsCard from "@/components/DashboardStatsCard";
import { MdDeliveryDining } from "react-icons/md";
import { AiOutlineDollar, AiOutlineUser } from "react-icons/ai";
import { BiSolidTShirt } from "react-icons/bi";
import { useSelector } from "react-redux";
import { getToken } from "@/redux/reducerSlices/userSlice";
import useFetch from "@/hooks/useFetch";
import TopSellingCard from "@/components/TopSellingCard";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

// Function to generate a random color
const generateRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const DashboardPage = () => {
  const token = useSelector(getToken);

  const { data: products } = useFetch("http://localhost:8080/api/v1/products");

  const { data: orders } = useFetch(
    "http://localhost:8080/api/v1/orders",
    token
  );

  const { data: users } = useFetch("http://localhost:8080/api/v1/users", token);

  const { data: topSellingProducts } = useFetch(
    "http://localhost:8080/api/v1/orders/top-selling",
    token
  );

  const { data: revenue } = useFetch(
    "http://localhost:8080/api/v1/orders/revenue",
    token
  );

  const { data: productsPerCategory } = useFetch(
    "http://localhost:8080/api/v1/products/productsPerCategory"
  );

  const graphData =
    productsPerCategory?.data?.productsPerCategory?.map((product) => {
      return {
        name: product.categoryDetails[0].name,
        value: product.numProducts,
        color: generateRandomColor(),
      };
    }) || [];

  return (
    <section className="p-6">
      <Heading>Dashboard</Heading>
      <div className="grid gap-2 lg:gap-6 grid-cols-2 lg:grid-cols-4">
        <DashboardStatsCard
          icon={
            <MdDeliveryDining className="text-5xl text-red-400 font-extralight rounded-full" />
          }
          title="orders"
          text={!orders ? "..." : orders?.results}
        />
        <DashboardStatsCard
          icon={
            <AiOutlineUser className="text-5xl text-cyan-500 font-extralight rounded-full" />
          }
          title="users"
          text={!users ? "..." : users?.results}
        />
        <DashboardStatsCard
          icon={
            <AiOutlineDollar className="text-5xl text-green-500 font-extralight rounded-full" />
          }
          title="revenue"
          text={
            !revenue
              ? "..."
              : "Rs. " + revenue?.data?.totalRevenue?.[0]?.revenue + "/-"
          }
        />
        <DashboardStatsCard
          icon={
            <BiSolidTShirt className="text-5xl text-blue-600 font-extralight rounded-full" />
          }
          title="products"
          text={!products ? "..." : products.results}
        />

        <div className="bg-white col-span-2 rounded-lg h-96 flex justify-center items-center pb-8">
          <PieChart width={400} height={400}>
            <Pie
              dataKey="value"
              isAnimationActive={false}
              data={graphData}
              fill="#8884d8" // the separator color
            >
              {graphData.map((entry, index) => {
                return <Cell key={`cell-${index}`} fill={entry.color} />;
              })}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
        <div className="bg-white col-span-2 rounded-lg p-4 flex justify-center flex-col">
          {!topSellingProducts ? (
            <p className="mx-auto">Loading...</p>
          ) : (
            <>
              <h3 className="text-lg uppercase font-semibold tracking-tight">
                Top Selling Product/s
              </h3>
              <div className="flex justify-center flex-col gap-6 mt-4">
                {topSellingProducts?.data?.products?.map((product) => {
                  return (
                    <TopSellingCard
                      key={product._id}
                      product={product.productDetails[0]}
                      totalSales={product.numProductSales}
                    />
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default DashboardPage;
