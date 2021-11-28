import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { toast } from "react-toastify";
import { filterResponse, getRequest } from "../config/GlobalFunc";
import DataRecap from "./DataRecap";
import DataUpdate from "./DataUpdate";

const TableTemplate = () => {
  const [products, setProducts] = useState([]);
  const stock = useSelector((state) => state.cart.data)
  const { pathname } = useLocation();
  const [totalPrice, setTotalPrice] = useState(0)

  async function getAllProducts() {
    let res = await getRequest("products");
    if (res.status == 200) {
      let filter = filterResponse(res.data, stock)
      if (pathname === "/home-admin") {
        const outStock = filter.filter((item) => item.totalStock == 0)
        if (outStock.length > 0) {
          toast.error(outStock.length + ' Product out of stock!')
        }
      }
      setProducts(filter);
      let price = filter.filter((v) => v.totalSales > 0).map((item) => item.price * item.totalSales).reduce((prev, curr) => prev + curr).toFixed(2)
      setTotalPrice(price)
    }
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
          products.map((item) => { return <DataUpdate key={item.id} item={item} /> })
        ) : (
          products.filter((v) => v.totalSales > 0).map((item) => { return <DataRecap key={item.id} item={item} /> })
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
            <th>${totalPrice}</th>
          </tr>
        )}
      </tfoot>
    </table>
  );
};
export default TableTemplate;
