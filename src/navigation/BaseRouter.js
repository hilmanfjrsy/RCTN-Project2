import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import HomeAdmin from "../pages/HomeAdmin";
import Login from "../pages/Login";
import SalesRecap from "../pages/SalesRecap";
import Detail from "../pages/DetailProduct";
import Cart from "../pages/Cart";

export default function BaseRouter() {
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
