import React, { Component, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CardLoader from "../components/Loaders/CardLoader";
import CardProduct from "../components/CardProduct";
import { filterResponse, getRequest } from "../config/GlobalFunc";

export default function Home({ }) {
  const loadData = [1, 2, 3, 4, 5, 6, 7, 8]
  const [allProducts, setAllProducts] = useState([]);
  const [isFetching, setIsFetching] = useState(false)

  const stock = useSelector((state) => state.data.data)

  async function getProduct() {
    setIsFetching(true)
    let res = await getRequest(`products`);
    if (res.status == 200) {
      let filter = filterResponse(res.data, stock)
      setAllProducts(filter); 
    }
    setIsFetching(false)
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
        {isFetching ? loadData.map((item)=> <CardLoader key={item}/>) : null}
      </div>
    </div>
  );
}
