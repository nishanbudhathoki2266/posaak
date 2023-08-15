import { useRouter } from "next/router";
import { toast } from "react-hot-toast";

function ProtectedPage({ isLoggedIn, children }) {
  const router = useRouter();
  if (!isLoggedIn) {
    router.push("/auth/login");
    return;
  }
  return children;
}
export default ProtectedPage;
