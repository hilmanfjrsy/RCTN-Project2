import React from "react";
import { Switch, Route } from "react-router-dom";
import AdminDashboard from "../pages/AdminDashboard";
import Home from "../pages/Home";
import Login from "../pages/Login";

export default function BaseRouter() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/admindashboard" component={AdminDashboard} />
      <Route path="*" component={Is404} />
    </Switch>
  );

  function Is404() {
    return(
      <h1 className="text-center text-secondary">Page not found</h1>
    )
  }
}
