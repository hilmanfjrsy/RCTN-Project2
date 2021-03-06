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
        // setIsFetching(true);
        let filter = stock.filter((item) => item.countCart > 0);
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

    useEffect(() => {
        getCart();
    }, [stock]);

    useEffect(() => {
        window.$(document).ready(function() {
            window.$('#table').DataTable();
        } );
    }, [isFetching]);

    return (
        <div className="bg-cartpage">
            <div className="container-fluid">
                <div style={{ marginBottom: 20, marginTop: 30, display: "flex", }}>
                    <p style={{ marginTop: 10, marginRight: 20 }}><i class="fas fa-shopping-cart fa-lg"></i></p>
                    <h2>My Cart</h2>
                </div>

                {isFetching ? (
                    loadData.map((item) => <CartLoader item={item} />)
                ) : (
                    <>
                        <div>
                            <table id="table" className="table" >
                                <thead>
                                    <tr className="bg-dark text-light">
                                        <th>Product Name</th>
                                        <th>Unit Price</th>
                                        <th>Quantity</th>
                                        <th>Total Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.map((item, index) => <RenderItem item={item} key={index} />)}
                                </tbody>
                            </table>
                        </div>
                        <div className="buttonOnCart d-flex justify-content-end align-items-center">
                            <div style={{ marginRight: 20 }}>
                                <span>TOTAL</span>
                                <h5 className="price">${prices}</h5>
                            </div>
                            <button
                                onClick={() => checkoutProduct()}
                                className="btn btn-warning">
                                Checkout
                            </button>
                        </div>
                    </>
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
                                        ...item,
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
        const [countCart, setCountCart] = useState(item.countCart)
        let isAvailable = true
        if (item.countCart > item.totalStock) {
            isAvailable = false
        }
        return (
            <tr>
                <td>
                    <div className="email mb-2">
                        <span>{item.title}</span>
                        <span>{item.description}</span>
                    </div>
                    <span className="category">{item.category}</span>
                    {isAvailable ? null : <small className="text-danger"><br />*Out of stock ({item.totalStock} left)</small>}
                </td>
                <td>${item.price}</td>
                <td>
                    <input
                        type="number"
                        min={0}
                        placeholder="0"
                        className="quantity form-control"
                        value={countCart}
                        onChange={(v) => { setCountCart(v.target.value); }}
                        onBlur={() => { changeCountCart(countCart) }}
                    />
                </td>
                <td>${item.totalPriceCart}</td>
            </tr>
        )

        async function changeCountCart(value) {
            const data = {
                id: item.id,
                countCart: parseInt(value),
                totalStock: item.totalStock,
                totalSales: item.totalSales,
            };
            dispatch(addData(data));
        }
    }
}
