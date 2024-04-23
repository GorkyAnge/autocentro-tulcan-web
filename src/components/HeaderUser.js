import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebaseConfig";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const HeaderUser = () => {

  const navigate = useNavigate();

  const cerrarSesion = async () => {    
    try {
      await signOut(auth);
      navigate("/");
    }catch(error) {
      console.log(error);
    }
  }



  return (
    <header id="header" className="fixed-top ">
      <div className="container d-flex align-items-center justify-content-lg-between">
        <h1 className="logo me-auto me-lg-0">
          <a href="index.html">
            ACT<span>.</span>
          </a>
        </h1>
        {/* Uncomment below if you prefer to use an image logo */}
        {/* <a href="index.html" class="logo me-auto me-lg-0"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li>
              <Link className="nav-link scrollto active" to={'/'} href="#hero">
                Home
              </Link>
            </li>
            <li>
              <a className="nav-link scrollto" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="nav-link scrollto " href="#portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#team">
                Team
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#contact">
                Contact
              </a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle" />
        </nav>
        {/* .navbar */}
        <Link onClick={cerrarSesion} className="get-started-btn scrollto">
          Cerrar Sesion
        </Link>
      </div>
    </header>
  );
};

export default HeaderUser;
