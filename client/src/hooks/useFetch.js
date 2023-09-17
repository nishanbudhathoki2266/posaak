import useSWR from "swr";
import { fetchData } from "@/utils/swr";

function useFetch(url, token) {
  const { data, error } = useSWR(
    [url, token],
    ([url, token]) => fetchData(url, token),
    { refreshInterval: 10000 }
  );

  return { data, error };
}

export default useFetch;
