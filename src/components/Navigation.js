import React, { Component, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { GlobalVar } from "../config/GlobalVar";

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <h4 style={{ color: GlobalVar.baseColor, fontWeight: 'bold' }}>Kelompok 2</h4>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link">
                Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link">
                Rekap Penjualan
              </Link>
            </li>
          </ul>

          <Link 
          to="/login"
          className="nav-link">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
