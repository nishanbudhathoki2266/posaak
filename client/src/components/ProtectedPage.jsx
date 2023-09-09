import { getIsLoggedIn } from "@/redux/reducerSlices/userSlice";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

function ProtectedPage({ url, children }) {
  const router = useRouter();
  const isLoggedIn = useSelector(getIsLoggedIn);

  if (isLoggedIn) {
    router.push(`/${url}`);
    return children;
  } else {
    router.push("/auth/login");
  }
}

export default ProtectedPage;
