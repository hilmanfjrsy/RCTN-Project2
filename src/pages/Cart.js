// import { iteratorSymbol } from "@reduxjs/toolkit/node_modules/immer/dist/internal";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import CartLoader from "../components/Loaders/CartLoader";
import { filterResponse, getRequest } from "../config/GlobalFunc";
import { GlobalVar } from "../config/GlobalVar";
import { addData, checkoutData } from "../redux/slice/dataSlice";

export default function Cart() {
  const loadData = [1, 2, 3, 4, 5, 6];
  const [isFetching, setIsFetching] = useState(false);
  const stock = useSelector((state) => state.data.data);
  const dispatch = useDispatch();
  const [cart, setCart] = useState([]);
  const [prices, setPrices] = useState(0);

  async function getCart() {
    setIsFetching(true);
    let res = await getRequest(`products`);
    if (res.status == 200) {
      let filter = filterResponse(res.data, stock).filter(
        (item) => item.countCart > 0
      );
      if (filter.length > 0) {
        let price = filter.map((item) =>
          item.countCart > item.totalStock ? 0 : item.totalPriceCart
        );
        price = price.reduce(
          (prev, curr) => parseFloat(prev) + parseFloat(curr)
        );
        let outStock = filter.filter(
          (item) => item.countCart > item.totalStock
        );
        if (outStock.length > 0) {
          toast.warning(outStock.length + " item can't be processed");
        }
        setPrices(price);
      }
      setCart(filter);
    }
    setIsFetching(false);
  }

  useEffect(() => {
    getCart();
  }, [stock]);

  return (
    <div className="bg-cartpage">
      <div className="container">
        <div style={{ marginBottom: 30, marginTop: 30 }}>
          <h1>My Cart</h1>
        </div>
        {isFetching ? (
          loadData.map((item) => <CartLoader item={item} />)
        ) : (
          <div>
            <table border="1" cellpadding="20">
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Unit Price</th>
                  <th>Quantity</th>
                  <th>Total Price</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <RenderItem item={item} key={index} />
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th colSpan="2"></th>
                  <th>TOTAL</th>
                  <th>${prices}</th>
                </tr>
              </tfoot>
            </table>
            <button
              onClick={() => checkoutProduct()}
              className="btn btn-primary mt-4"
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );

  async function checkoutProduct() {
    const data = cart.filter((item) => item.totalStock >= item.countCart);
    if (data.length > 0) {
      Swal.fire({
        title: "Are you sure?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: GlobalVar.baseColor,
        cancelButtonColor: "grey",
        confirmButtonText: "Confirm",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Processing!",
            timer: 2000,
            timerProgressBar: true,
            allowOutsideClick: false,
            didOpen: () => {
              Swal.showLoading();
            },
          }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
              data.map((item) => {
                dispatch(
                  checkoutData({
                    id: item.id,
                    countCart: item.countCart,
                  })
                );
              });
              Swal.fire({
                icon: "success",
                title: "Checkout successful!",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
    } else {
      console.log(data);
      toast.warning("No items can be processed");
    }
  }

  function RenderItem({ item }) {
    const [countCart, setCountCart] = useState(item.countCart);
    let isAvailable = true;
    if (item.countCart > item.totalStock) {
      isAvailable = false;
    }
    return (
      <tr>
        <td>
          {item.title}
          {isAvailable ? null : (
            <small className="text-danger">
              <br />
              *Out of stock
            </small>
          )}
        </td>
        <td>${item.price}</td>
        <td>
          <input
            type="number"
            min={0}
            placeholder="0"
            value={countCart}
            onChange={(v) => {
              setCountCart(v.target.value);
            }}
            onBlur={() => {
              changeCountCart(countCart);
            }}
          />
        </td>
        <td>${item.totalPriceCart}</td>
      </tr>
    );

    async function changeCountCart(value) {
      const data = {
        id: item.id,
        countCart: parseInt(value) - item.countCart,
        totalStock: item.totalStock,
        totalSales: item.totalSales,
      };
      dispatch(addData(data));
    }
  }
}
