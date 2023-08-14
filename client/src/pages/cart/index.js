import { getIsLoggedIn } from "@/redux/reducerSlices/userSlice";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

function CartPage() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const router = useRouter();

  if (isLoggedIn) return <h1>The Cart Page</h1>;
  else {
    router.push("/auth/login");
  }
}

export default CartPage;
