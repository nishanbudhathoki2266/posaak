// Note that this project uses both fetch and swr implemented! hence, for admin dashboard I am using SWR

export const fetchData = async (url, token) => {
  const headers = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(url, { headers });

  const data = await response.json();

  if (!data.status === "success") {
    throw new Error(data.message);
  }

  return data;
};
