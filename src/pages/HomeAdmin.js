import React, { useEffect} from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import AdminStockLoader from "../components/Loaders/AdminStockLoader";
import TableTemplate from "../components/TableTemplate";
import { userSelector } from "../redux/slice/userSlice";

const HomeAdmin = () => {
  const history = useHistory();
  const token = useSelector(userSelector);

  useEffect(() => {
    if (token !== "admin") {
      history.push("*");
    }
  }, []);
  return (
    <div className="container">
      <h1 className="mb-3 mt-3">Product</h1>
      <TableTemplate />
    </div>
  );
};

export default HomeAdmin;
