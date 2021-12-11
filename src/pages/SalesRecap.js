import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import TableTemplate from "../components/TableTemplate";
import { userSelector } from "../redux/slice/userSlice";

const SalesRecap = () => {
  const history = useHistory();
  const token = useSelector(userSelector);

  useEffect(() => {
    if (token !== "admin") {
      history.push("*");
    }
  }, []);
  return (
    <div className="container-fluid mb-5">
      <h2 className="mb-3 mt-3">Rekap Penjualan</h2>
      <TableTemplate />
    </div>
  );
};

export default SalesRecap;
