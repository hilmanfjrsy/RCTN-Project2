import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { getRequest } from "../config/GlobalFunc";
import DataRecap from "./DataRecap";
import DataUpdate from "./DataUpdate";

const TableTemplate = () => {
  const [products, setProducts] = useState([]);
  const { pathname } = useLocation();

  async function getAllProducts() {
    let res = await getRequest("products");
    setProducts(res.data);
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  console.log(products)
  return (
    <table className="table table-striped" style={{ width: "100%" }}>
      <thead className="bg-dark text-light">
        <tr>
          <th>Product</th>
          <th>{pathname === "/home-admin" ? "Description" : "Harga"}</th>
          <th>{pathname === "/home-admin" ? "Stock" : "Terjual"}</th>
          <th>{pathname === "/home-admin" ? "Action" : "Pendapatan"}</th>
        </tr>
      </thead>
      <tbody>
        {pathname === "/home-admin" ? (
           products.map((item)=>{return <DataUpdate key={item.id} item={item}/>})
        ) : (
            products.map((item)=>{return <DataRecap key={item.id} item={item}/>})
        )}
      </tbody>
      <tfoot
        className={pathname === "/home-admin" ? "bg-dark text-light" : null}
      >
        {pathname == "/home-admin" ? (
          <tr>
            <th>Product</th>
            <th>Description</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        ) : (
          <tr>
            <th colSpan="2"></th>
            <th>TOTAL PENDAPATAN</th>
            <th>18 USD</th>
          </tr>
        )}
      </tfoot>
    </table>
  );
};
export default TableTemplate;
