import ProtectedPage from "@/components/ProtectedPage";
import { useState } from "react";

const index = () => {
  const [isCheckedOut, setIsCheckedOut] = useState(false);
  return (
    <ProtectedPage url="cart/checkout">
      {isCheckedOut ? <div>Successfully checkedout</div> : <div>Checkout</div>}
    </ProtectedPage>
  );
};

export default index;
