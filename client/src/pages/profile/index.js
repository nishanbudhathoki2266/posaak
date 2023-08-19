import { getUserDetails } from "@/redux/reducerSlices/userSlice";
import { useSelector } from "react-redux";

function index() {
  const user = useSelector(getUserDetails);
  console.log(user);

  return <div>{user.name}</div>;
}

export default index;
