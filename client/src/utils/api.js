const getFeaturedProducts = async () => {
  let response;
  try {
    response = await fetch("http://127.0.0.1:8080/api/v1/products/featured");

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
  let response;
  try {
    response = await fetch("http://127.0.0.1:8080/api/v1/products");

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
  let response;
  try {
    response = await fetch(`http://127.0.0.1:8080/api/v1/products/${id}`);

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
  let response;
  try {
    response = await fetch("http://127.0.0.1:8080/api/v1/categories");

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

const login = async (credentials) => {
  const response = await fetch("http://127.0.0.1:8080/api/v1/users/login", {
    method: "POST",
    body: JSON.stringify(credentials),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  return data;
};

export {
  getFeaturedProducts,
  getProductById,
  getAllProducts,
  getAllCategories,
  login,
};
