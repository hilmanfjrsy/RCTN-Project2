import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation, useParams } from "react-router";
import { toast } from "react-toastify";

import { getRating } from "../config/GlobalFunc";
import { addData } from "../redux/slice/dataSlice";
import { userSelector } from "../redux/slice/userSlice";

function Detail() {
  const { state } = useLocation();
  const token = useSelector(userSelector);
  const dispatch = useDispatch()
  const history = useHistory()
  const [currentStock, setCurrentStock] = useState(0)

  const addToCart = () => {
    if (token) {
      const data = {
        ...state.detail,
        countCart: currentStock,
        totalStock: state.detail.totalStock,
        totalSales: state.detail.totalSales
      }
      dispatch(addData(data))
      setCurrentStock(0)
      toast.success('Add to cart')
    } else {
      history.push("/login");
      toast.error("You're not logged")
    }
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
          <div className="category">{state.detail.category}</div>
          <div className="detaildescription mb-2">{state.detail.description}</div>

          {getRating(state.detail.rating.rate, state.detail.rating.count, 10)}
          <div className="detailprice">${state.detail.price}</div>
          {state.detail.totalStock > 0 ?
            <p className="description" style={{ textAlign: "right" }}>
              <i className="fas fa-check text-success" style={{ fontSize: 10 }}></i>{" "}
              <span className="text-success" >Available</span>
            </p>
            :
            <p className="description" style={{ textAlign: "right" }}>
              <i className="fas fa-times text-danger" style={{ fontSize: 10 }}></i>{" "}
              <span className="text-danger" >Out of Stock</span>
            </p>
          }
          <div className="d-flex justify-content-between mt-3">
            <input type="number" className="form-control" value={currentStock} min={0} onChange={(v) => setCurrentStock(v.target.value)} style={{ width: 100, marginRight:20 }} />
            <button
              type="button"
              className="btn btn-dark w-100"
              onClick={addToCart}
              disabled={state.detail.totalStock > 0 ? false : true}>
              <i class="fas fa-cart-plus"></i> Add to cart
            </button>
          </div>
          <p className="sales">Sales {state.detail.totalSales} &#8226; Stock {state.detail.totalStock}</p>
        </div>
      </div>
    </div>
  );
}

export default Detail;
