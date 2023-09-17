// Note that this project uses both fetch and swr implemented! hence, for admin dashboard I am using SWR

export const fetchData = async (...args) => {
  const response = await fetch(...args);

  const data = await response.json();

  if (!data.status === "success") {
    throw new Error(data.message);
  }

  return data;
};
