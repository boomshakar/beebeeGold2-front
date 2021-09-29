import React from "react";
import { Switch, Route } from "react-router-dom";
import Products from "./products/Products";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Cart from "./cart/Cart";

const Pages = () => {
  return (
    <Switch>
      <Route path="/" exact component={Products} />
      <Route path="/" exact component={Cart} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
    </Switch>
  );
};

export default Pages;
