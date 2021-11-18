import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Detail from "../pages/DetailProduct";

export default function BaseRouter() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/detail/:itemID" component={Detail} />
      <Route path="*" component={Is404} />
    </Switch>
  );

  function Is404() {
    return <h1 className="text-center text-secondary">Page not found</h1>;
  }
}
