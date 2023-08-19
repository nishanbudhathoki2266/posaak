import { getIsLoggedIn } from "@/redux/reducerSlices/userSlice";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";

function ProtectedPage({ url, children }) {
  const router = useRouter();
  const isLoggedIn = useSelector(getIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      router.push(`/${url}`);
    } else {
      toast.error("Login required!");
      router.push("/auth/login");
    }
  }, []);

  return children;
}
export default ProtectedPage;
