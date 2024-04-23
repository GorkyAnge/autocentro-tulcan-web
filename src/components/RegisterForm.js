import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { auth } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Swal from "sweetalert2";
import styles from '../loginForm.module.css'; 

const RegisterForm = () => {
  let navigate = useNavigate();
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const handleChange = (e) => {
    switch (e.target.name) {
      case "email":
        setCorreo(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "password2":
        setPassword2(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //Comprobar que el correo sea correo sea valido

    const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;

    if (correo === "" || password === "" || password2 === "") {
      Swal.fire({
        title: "¿Falta algo?",
        text: "Tal vez no llenaste todos los campos",
        icon: "question"
      });
      return;
    }

    if (!expresionRegular.test(correo)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El correo ingresado no es válido"
      });
      return;
    }

    if (password !== password2) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Tus contraseñas no son iguales"
      });
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, correo, password);
      Swal.fire({
        icon: "success",
        title: "Tu usuario ha sido creado",
        showConfirmButton: false,
        timer: 1500
      });
      navigate("/");
    } catch (error) {
      let mensaje;

      switch (error.code) {
        case "auth/invalid-password":
          mensaje = "La contraseña tiene que ser de al menos 6 caracteres.";
          break;
        case "auth/email-already-in-use":
          mensaje =
            "Ya existe una cuenta con el correo electrónico proporcionado.";
          break;
        case "auth/invalid-email":
          mensaje = "El correo electrónico no es válido.";
          break;
        default:
          mensaje = "Hubo un error al intentar crear la cuenta.";
          break;
      }
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: mensaje
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Crear Cuenta</title>
      </Helmet>
      <div className={styles['login-box']}> {/* Utiliza la clase CSS del módulo */}
        <h2>CREA UNA CUENTA</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles['user-box']}> {/* Utiliza la clase CSS del módulo */}
            <input
              value={correo}
              onChange={handleChange}
              type="text"
              name="email"
            />
            <label>Correo</label>
          </div>
          <div className={styles['user-box']}> {/* Utiliza la clase CSS del módulo */}
            <input
              value={password}
              onChange={handleChange}
              type="password"
              name="password"
            />
            <label>Contraseña</label>
          </div>
          <div className={styles['user-box']}> {/* Utiliza la clase CSS del módulo */}
            <input
              value={password2}
              onChange={handleChange}
              type="password"
              name="password2"
            />
            <label>Repetir contraseña</label>
          </div>
          <button type="submit">
            <span />
            <span />
            <span />
            <span />
            Crear Cuenta
          </button>
        </form>
      </div>
    </>
  );
};

export default RegisterForm;
