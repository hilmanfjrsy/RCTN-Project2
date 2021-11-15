import React, { Component, useEffect, useState } from "react";
import CardProduct from "../components/CardProduct";
import { getRequest } from "../config/GlobalFunc";

export default function Home({}) {
  const [allProducts, setAllProducts] = useState([]);

  async function getProduct() {
    let res = await getRequest(`products`);
    setAllProducts(res.data);
  }

  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((result) => result.json())
  //     .then((response) => setAllProducts(response));
  // }, []);

  useEffect(() => {
    getProduct();
  }, []);

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
