import React, { useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router";

import { getRating } from "../config/GlobalFunc";

function Detail() {
  const { state } = useLocation();
  
  const addToCart = () => {
    
  }

  return (
    <div className="container-detailfluid">
      <div className="container-detailproduct" style={{ display: "flex" }}>
        <div className="container-detailimg" style={{ flex: 1 }}>
          <img
            src={state.detail.image}
            style={{ width: "50%" }}
            alt={state.detail.title}
          />
        </div>
        <div className="detailform" style={{ flex: 1 }}>
          <div className="detailtitle">{state.detail.title}</div>
          <div className="detailcategory">{state.detail.category}</div>
          <div className="detaildescription">{state.detail.description}</div>
          {getRating(state.detail.rating.rate, state.detail.rating.count, 10)}
          <h5 style={{ marginTop: 20 }}>Quantity</h5>
        <div className="detailquantity">
            <input type="number" name="number" value="quantity" style={{ width:50 }}/>
        </div>
          <div className="detailprice">${state.detail.price}</div>
          <button type="button" className="btn btn-dark w-100 mt-3" onClick={addToCart}>
            <i class="fas fa-cart-plus"></i> Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
