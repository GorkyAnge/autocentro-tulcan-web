import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import styles from '../loginForm.module.css'; 

const LoginForm = () => {
  let navigate = useNavigate();
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setCorreo(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //Comprobar que el correo sea correo sea valido

    const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;

    if (correo === "" || password === "") {
      Swal.fire({
        title: "¿Falta algo?",
        text: "Tal vez no llenaste todos los campos",
        icon: "question",
      });
      return;
    }

    if (!expresionRegular.test(correo)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El correo ingresado no es válido",
      });
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, correo, password);
      navigate("/keys-portal");
    } catch (error) {
      let mensaje = error.mensaje;

      switch (error.code) {
        case "auth/wrong-password":
          mensaje = "Contraseña incorrecta."
          break;
        case "auth/user-not-found":
          mensaje = "No se encontró una cuenta con ese correo electrónico"
          break;
        default:
          mensaje = "Hubo un error al intentar Iniciar Sesión.";
          break;
      }
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: mensaje,
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Iniciar Sesión</title>
      </Helmet>
      <div className={styles['login-box']}> {/* Usa la clase CSS como propiedad del objeto styles */}
        <h2>INICIA SESIÓN</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles['user-box']}> {/* Usa la clase CSS como propiedad del objeto styles */}
            <input
              value={correo}
              onChange={handleChange}
              type="text"
              name="email"
            />
            <label>Usuario</label>
          </div>
          <div className={styles['user-box']}> {/* Usa la clase CSS como propiedad del objeto styles */}
            <input
              value={password}
              onChange={handleChange}
              type="password"
              name="password"
            />
            <label>Contraseña</label>
          </div>
          <button type="submit">
            <span />
            <span />
            <span />
            <span />
            INGRESAR
          </button>
          <Link to="/register">
            <span />
            <span />
            <span />
            <span />
            Registrarme
          </Link>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
