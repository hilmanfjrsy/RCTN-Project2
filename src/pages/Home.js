import React, { Component, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CardProduct from "../components/CardProduct";
import { filterResponse, getRequest } from "../config/GlobalFunc";

export default function Home({ }) {
  const [allProducts, setAllProducts] = useState([]);
  const stock = useSelector((state) => state.data.data)

  async function getProduct() {
    let res = await getRequest(`products`);
    if (res.status == 200) {
      let filter = filterResponse(res.data, stock)
      setAllProducts(filter);
    }
  }

  useEffect(() => {
    getProduct();
  }, [stock]);

  return (
    <div className="container-fluid">
      <div className="wrap">
        {allProducts.map((item, index) => (
          <CardProduct item={item} index={index} key={index} />
        ))}
      </div>
    </div>
  );
}
