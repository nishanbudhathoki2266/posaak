const getFeaturedProducts = async () => {
  const response = await fetch(
    "http://localhost:8080/api/v1/products/featured"
  );

  const data = await response.json();

  if (!data.status === "success") {
    throw new Error(data.message);
  }

  return data;
};

const getAllProducts = async () => {
  const response = await fetch("http://localhost:8080/api/v1/products");

  const data = await response.json();

  if (!data.status === "success") {
    throw new Error(data.message);
  }

  return data;
};

const getProductById = async (id) => {
  const response = await fetch(`http://localhost:8080/api/v1/products/${id}`);

  const data = await response.json();

  if (!data.status === "success") {
    console.log(data.message);
    throw new Error(data.message);
  }

  return data;
};

const getAllCategories = async () => {
  const response = await fetch("http://localhost:8080/api/v1/categories");

  const data = await response.json();

  if (!data.status === "success") {
    throw new Error(data.message);
  }

  return data;
};

const login = async (credentials) => {
  const response = await fetch("http://localhost:8080/api/v1/users/login", {
    method: "POST",
    body: JSON.stringify(credentials),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!data.status === "success") {
    throw new Error(data.message);
  }

  return data;
};

const updateMe = async (headers, updatedData) => {
  const response = await fetch("http://localhost:8080/api/v1/users/updateMe", {
    method: "PATCH",
    body: JSON.stringify(updatedData),
    headers,
  });
  const data = await response.json();

  if (!data.status === "success") {
    throw new Error(data.message);
  }
  console.log(data);

  return data;
};

export {
  getFeaturedProducts,
  getProductById,
  getAllProducts,
  getAllCategories,
  login,
  updateMe,
};
