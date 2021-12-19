import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import HomeAdmin from "../pages/HomeAdmin";
import Login from "../pages/Login";
import SalesRecap from "../pages/SalesRecap";
import Detail from "../pages/DetailProduct";
import Cart from "../pages/Cart";
import { getRequest } from "../config/GlobalFunc";
import { useDispatch, useSelector } from "react-redux";
import { addFirstLoad } from "../redux/slice/dataSlice";

export default function BaseRouter() {
  const dispatch = useDispatch()
  const stock = useSelector((state)=>state.data.data)

  async function firstLoad() {
    if(stock.length==0){
      let temp = []
      let res = await getRequest(`products`);
      if (res.status == 200) {
        res.data.map((item, index) => {
          const newItem = Object.assign({}, item, {
            countCart: 0,
            totalStock: 20,
            totalSales: 0,
            totalPriceCart: 0,
            totalPriceSales: 0
          });
          temp.push(newItem)
        })
      }
      dispatch(addFirstLoad(temp))
    }
  }
  useEffect(()=>{
    firstLoad()
  },[])
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/home-admin" component={HomeAdmin} />
      <Route path="/rekap-penjualan" component={SalesRecap} />
      <Route path="/detail/:itemID" component={Detail} />
      <Route path="/cart" component={Cart} />
      <Route path="*" component={Is404} />
    </Switch>
  );

  function Is404() {
    return <h1 className="text-center text-secondary">Page not found</h1>;
  }
}
