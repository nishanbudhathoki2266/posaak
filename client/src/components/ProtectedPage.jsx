import { getIsLoggedIn } from "@/redux/reducerSlices/userSlice";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function ProtectedPage({ url, children }) {
  const router = useRouter();
  const isLoggedIn = useSelector(getIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      router.push(`/${url}`);
    } else {
      router.push("/auth/login");
    }
  }, []);

  return isLoggedIn ? children : null;
}
export default ProtectedPage;
