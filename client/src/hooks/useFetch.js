import useSWR from "swr";
import { fetchData } from "@/utils/swr";

function useFetch(url, token) {
  const { data, error } = useSWR(
    [url, token],
    ([url, token]) => fetchData(url, token),
    { refreshInterval: 500 }
  );

  return { data, error };
}

export default useFetch;
