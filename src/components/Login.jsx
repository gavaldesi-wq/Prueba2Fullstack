import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  validarCorreo
} from "../js/validaciones";

import {
  buscarUsuarioLogin
} from "../js/usuariosBD";


function Login({ iniciarSesion }) {

  const navigate =
    useNavigate();


  const [correo, setCorreo] =
    useState("");


  const [password, setPassword] =
    useState("");


  const [mensaje, setMensaje] =
    useState("");


  function manejarLogin(evento) {

    evento.preventDefault();

    setMensaje("");


    if (
      correo.trim() === "" ||
      password === ""
    ) {

      setMensaje(
        "Debes completar todos los campos."
      );

      return;
    }


    if (!validarCorreo(correo)) {

      setMensaje(
        "El correo no tiene un formato válido."
      );

      return;
    }


    const usuarioEncontrado =
      buscarUsuarioLogin(
        correo.trim(),
        password
      );


    if (!usuarioEncontrado) {

      setMensaje(
        "Correo o contraseña incorrectos."
      );

      return;
    }


    iniciarSesion(
      usuarioEncontrado
    );


    navigate("/");
  }


  return (

    <div className="container mt-5 mb-5">

      <div className="row justify-content-center">

        <div className="col-12 col-md-8 col-lg-5">

          <h1 className="titulo-seccion text-center">
            Iniciar Sesión
          </h1>


          <form
            className="mt-4"
            onSubmit={manejarLogin}
          >


            <div className="mb-3">

              <label className="form-label">
                Correo electrónico
              </label>

              <input
                type="email"
                className="form-control"
                value={correo}
                onChange={(evento) =>
                  setCorreo(
                    evento.target.value
                  )
                }
              />

            </div>


            <div className="mb-3">

              <label className="form-label">
                Contraseña
              </label>

              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(evento) =>
                  setPassword(
                    evento.target.value
                  )
                }
              />

            </div>


            {mensaje && (

              <div className="alert alert-danger">
                {mensaje}
              </div>

            )}


            <button
              type="submit"
              className="btn boton-cyan w-100"
            >
              INICIAR SESIÓN
            </button>


          </form>

        </div>

      </div>

    </div>

  );
}


export default Login;