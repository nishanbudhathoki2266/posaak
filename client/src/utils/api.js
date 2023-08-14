const getFeaturedProducts = async () => {
  try {
    const response = await fetch(
      "http://127.0.0.1:8080/api/v1/products/featured"
    );

    if (!response.ok) {
      throw new Error("Something went wrong!", response.statusText);
    }

    const data = await response.json();

    return data;
  } catch (err) {
    console.log(err.message);
    throw new Error("Something went wrong!");
  }
};

const getAllProducts = async () => {
  try {
    const response = await fetch("http://127.0.0.1:8080/api/v1/products");

    if (!response.ok) {
      throw new Error("Something went wrong!", response.statusText);
    }

    const data = await response.json();

    return data;
  } catch (err) {
    console.log(err.message);
    throw new Error("Something went wrong!");
  }
};

const getProductById = async (id) => {
  try {
    const response = await fetch(`http://127.0.0.1:8080/api/v1/products/${id}`);

    if (!response.ok) {
      throw new Error("Something went wrong!", response.status);
    }

    const data = await response.json();

    return data;
  } catch (err) {
    console.log(err.message);
    throw new Error("Something went wrong");
  }
};

const getAllCategories = async () => {
  try {
    const response = await fetch("http://127.0.0.1:8080/api/v1/categories");

    if (!response.ok) {
      throw new Error("Something went wrong!");
    }

    const data = await response.json();

    return data;
  } catch (err) {
    console.log(err.message);
    throw new Error("Something went wrong!");
  }
};

export {
  getFeaturedProducts,
  getProductById,
  getAllProducts,
  getAllCategories,
};
