import Heading from "@/components/Heading";
import ProtectedPage from "@/components/ProtectedPage";

const index = () => {
  return <ProtectedPage url="cart/checkout">Checkout</ProtectedPage>;
};

export default index;
