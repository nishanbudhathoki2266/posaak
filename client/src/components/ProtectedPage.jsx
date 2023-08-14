import { useRouter } from "next/router";

function ProtectedPage({ isLoggedIn, children }) {
  const router = useRouter();
  if (!isLoggedIn) {
    router.push("/auth/login");
    return;
  }
  return children;
}
export default ProtectedPage;
