import React, { Component } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { getRating } from "../config/GlobalFunc";

export default function CardProduct({ item, index }) {
  return (
    <div className="card-container">
      <img src={item.image} className="card-image" />
      <div className="card-text">
        <p className="category mb-1 mt-2">{item.category}</p>
        <Link to="/detail">
          <p className="title clamp">{item.title}</p>
        </Link>
        {getRating(item.rating.rate, item.rating.count, 10)}
        <div className="d-flex row justify-content-between mt-2 ">
          <span className="price col-md-6">${item.price}</span>
          <p className="description col-md-6" style={{ textAlign: "right" }}>
            <i class="fas fa-check text-success" style={{ fontSize: 10 }}></i>{" "}
            Available
          </p>
        </div>
        <button
          type="button"
          class="btn btn-dark w-100 mt-3"
          onClick={() => addCart()}
        >
          <i class="fas fa-cart-plus"></i> Add to cart
        </button>
        <p className="sales">Sales 4000 &#8226; Stock 10</p>
      </div>
    </div>
  );

  function addCart() {
    toast.success("Add to cart");
  }
}
