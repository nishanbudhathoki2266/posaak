import Heading from "@/components/Heading";
import ProtectedPage from "@/components/ProtectedPage";
import { getIsLoggedIn } from "@/redux/reducerSlices/userSlice";
import { useSelector } from "react-redux";

function CartPage() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <ProtectedPage url="/cart">
      <Heading position="center">The Cart Page</Heading>
    </ProtectedPage>
  );
}

export default CartPage;
