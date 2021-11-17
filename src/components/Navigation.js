import React, {useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GlobalVar } from "../config/GlobalVar";
import { userSelector } from "../redux/slice/userSlice";


const Navigation = () => {
  const [isLogout, setIsLogout] = useState(false)

  const token = useSelector(userSelector)
 
  function logout(){
    localStorage.removeItem('token')
    setIsLogout(false)
  }
  useEffect(() => {
   if(token){
    setIsLogout(true)
   } else {
    setIsLogout(false)
   }
  }, [token])

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
              <Link to="#" className="nav-link">
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
          to={isLogout ? '/' : '/login'}
          className="nav-link"
          onClick={isLogout ? logout : null}>
           {isLogout ? 'Logout' : 'Login'}
          </Link>

          {/* <Link 
          to="/"
          className="nav-link"
          onClick={logout}>
            Logout
          </Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
