import React, { useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router";
import { getRequest } from "../config/GlobalFunc";
import { getRating } from "../config/GlobalFunc";

function Detail() {
  const history = useHistory();
  const { state } = useLocation();
  const params = useParams();

  return (
    <div className="container-fluid">
      <div className="container-product" style={{ display: "flex" }}>
        <div className="container-img" style={{ flex: 1 }}>
          <img
            src={state.detail.image}
            style={{ width: "50%" }}
            alt={state.detail.title}
          />
        </div>
        <div style={{ flex: 1 }}>
          <h1>{state.detail.title}</h1>
          <h3>{state.detail.category}</h3>
          <p>{state.detail.description}</p>
          {getRating(state.detail.rating.rate, state.detail.rating.count, 10)}

          <h3>{state.detail.price}</h3>

          <button type="button" className="btn btn-dark w-100 mt-3">
            <i class="fas fa-cart-plus"></i> Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
