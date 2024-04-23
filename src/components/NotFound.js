import React from "react";
import "../NotFound.css";
import Header from "./Header";
import Footer from "./Footer";

const NotFound = () => {
  return (
    <>
    <Header/>
    <div id="main">
  <div className="fof">
    <h1>Error 404</h1>
    <p>La página que buscas no existe o se ha cambiado de lugar.</p>
  </div>
</div>
<Footer/>

    </>
    





  );
};

export default NotFound;
