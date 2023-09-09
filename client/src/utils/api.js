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

const getProductsByCategory = async (categoryId) => {
  const response = await fetch(
    `http://localhost:8080/api/v1/products?category=${categoryId}`
  );

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

const getCategoryById = async (categoryId) => {
  const response = await fetch(
    `http://localhost:8080/api/v1/categories/${categoryId}`
  );

  const data = await response.json();

  if (!data.status === "success") {
    throw new Error(data.message);
  }

  return data;
};

const register = async (credentials) => {
  const response = await fetch("http://localhost:8080/api/v1/users/signup", {
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

const updateMe = async (headers, updatedData, raw = false) => {
  const response = await fetch("http://localhost:8080/api/v1/users/updateMe", {
    method: "PATCH",
    body: raw === true ? updatedData : JSON.stringify(updatedData),
    headers,
  });
  const data = await response.json();

  if (!data.status === "success") {
    throw new Error(data.message);
  }

  return data;
};

const updateMyPassword = async (headers, passwordData) => {
  const response = await fetch(
    "http://localhost:8080/api/v1/users/updateMyPassword",
    {
      method: "PATCH",
      body: JSON.stringify(passwordData),
      headers,
    }
  );
  const data = await response.json();

  if (!data.status === "success") {
    throw new Error(data.message);
  }

  return data;
};

// orders

const createOrder = async (orderData, headers) => {
  const response = await fetch("http://localhost:8080/api/v1/orders", {
    method: "POST",
    body: JSON.stringify(orderData),
    headers: { ...headers, "Content-Type": "application/json" },
  });

  const data = await response.json();

  if (!data.status === "success") {
    throw new Error(data.message);
  }

  return data;
};

export {
  getFeaturedProducts,
  getProductById,
  getAllProducts,
  getAllCategories,
  getCategoryById,
  getProductsByCategory,
  register,
  login,
  updateMe,
  updateMyPassword,
  createOrder,
};
