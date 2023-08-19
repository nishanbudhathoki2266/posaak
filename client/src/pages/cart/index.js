import Heading from "@/components/Heading";
import ProtectedPage from "@/components/ProtectedPage";

function CartPage() {
  return (
    <ProtectedPage url="/cart">
      <Heading position="center">The Cart Page</Heading>
    </ProtectedPage>
  );
}

export default CartPage;
