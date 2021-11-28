import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { GlobalVar } from "../config/GlobalVar";
import { userSelector } from "../redux/slice/userSlice";
import { getToken, removeToken } from "../redux/slice/userSlice";

const Navigation = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const token = useSelector(userSelector);
  const dispatch = useDispatch();
  function logout() {
    dispatch(removeToken());
  }
  useEffect(() => {
    if (token === "admin") {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, [token]);

  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <h4 style={{ color: GlobalVar.baseColor, fontWeight: "bold" }}>
            Kelompok 2
          </h4>
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
              {isAdmin ? (
                <Link to="/home-admin" className="nav-link">
                  Home
                </Link>
              ) : (
                <Link to="/" className="nav-link">
                  Home
                </Link>
              )}
            </li>
            {token ? (
              <li className="nav-item">
                {isAdmin ? null : (
                  <Link to="/cart" className="nav-link">
                    Cart
                  </Link>
                )}
              </li>
            ) : null}

            {isAdmin ? (
              <li className="nav-item">
                <Link to="/rekap-penjualan" className="nav-link">
                  Rekap Penjualan
                </Link>
              </li>
            ) : null}
          </ul>

          <Link
            to={token ? "/" : "/login"}
            className="nav-link"
            onClick={token ? logout : null}
          >
            {token ? "Logout" : "Login"}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
