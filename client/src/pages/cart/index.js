import Heading from "@/components/Heading";
import ProtectedPage from "@/components/ProtectedPage";
import { getCart } from "@/redux/reducerSlices/cartSlice";
import { useSelector } from "react-redux";

function CartPage() {
  const cart = useSelector(getCart);
  return (
    <ProtectedPage url="cart">
      <Heading position="center">The Cart Page</Heading>
      <div>{JSON.stringify(cart)}</div>
    </ProtectedPage>
  );
}

export default CartPage;
