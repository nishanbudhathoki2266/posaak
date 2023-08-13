import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8080/api/v1",
});

const getFeaturedProducts = async () => {
  try {
    const response = await fetch(
      "http://127.0.0.1:8080/api/v1/products/featured"
    );

    if (!response.ok) {
      throw new Error("Something went wrong!", response.statusText);
    }

    const data = await response.json();

    console.log(data.data.featuredProducts);

    return data;
  } catch (err) {
    throw new Error(err);
  }
};

getFeaturedProducts();
export { getFeaturedProducts };
