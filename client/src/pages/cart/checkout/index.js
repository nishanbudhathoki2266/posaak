import ProtectedPage from "@/components/ProtectedPage";
import { useState } from "react";

const index = () => {
  const [isCheckedOut, setIsCheckedOut] = useState(false);
  return (
    <ProtectedPage url="cart/checkout">
      {isCheckedOut ? (
        <div>Successfully checkedout</div>
      ) : (
        <div className="max-w-[1440px] mx-auto mt-8"></div>
      )}
    </ProtectedPage>
  );
};

export default index;
