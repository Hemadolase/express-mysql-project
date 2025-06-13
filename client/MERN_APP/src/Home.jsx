import React from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4">Welcome to MyStore</h1>
      <p className="lead">
        Discover the best products at unbeatable prices. Shop with us today!
      </p>
      <NavLink to="/products" className="btn btn-primary mt-3">
        Browse Products
      </NavLink>
    </div>
  );
}
