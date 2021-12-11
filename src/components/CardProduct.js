import React, { Component } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useHistory } from "react-router";
import { getRating } from '../config/GlobalFunc';
import { addData } from '../redux/slice/dataSlice';
import { userSelector } from '../redux/slice/userSlice';

export default function CardProduct({ item, index }) {
  const dispatch = useDispatch()
  const history = useHistory()
  const token = useSelector(userSelector);
  return (
    <div className="card-container">
      <img src={item.image} className="card-image mt-2" />
      <div className="card-text">
        <p className="category mb-1 mt-2">{item.category}</p>

        <Link to={{ pathname: `/detail/${item.id}`, state: { detail: item } }}>
        
          <p className="title clamp">{item.title}</p>
        </Link>
        {getRating(item.rating.rate, item.rating.count, 10)}
        <div className="d-flex row justify-content-between mt-2 ">
          <span className="price col-md-6">${item.price}</span>
          {item.totalStock > 0 ?
            <p className="description col-md-6" style={{ textAlign: "right" }}>
              <i className="fas fa-check text-success" style={{ fontSize: 10 }}></i>{" "}
              <span className="text-success" >Available</span>
            </p>
            :
            <p className="description col-md-6" style={{ textAlign: "right" }}>
              <i className="fas fa-times text-danger" style={{ fontSize: 10 }}></i>{" "}
              <span className="text-danger" >Out of Stock</span>
            </p>
          }
        </div>
        <button
          type="button"
          className="btn btn-dark w-100 mt-3"
          disabled={item.totalStock > 0 ? false : true}
          onClick={() => add(item)}
        >
          <i className="fas fa-cart-plus"></i> Add to cart
        </button>
        <p className="sales">Sales {item.totalSales} &#8226; Stock {item.totalStock}</p>
      </div>
    </div>
  );

  function add(item) {
    if (token) {
      const data = {
        id: item.id,
        countCart: 1,
        totalStock: item.totalStock,
        totalSales: 0
      }
      dispatch(addData(data))
      toast.success('Add to cart')
    } else {
      history.push("/login");
      toast.error("You're not logged")
    }
  }
}
