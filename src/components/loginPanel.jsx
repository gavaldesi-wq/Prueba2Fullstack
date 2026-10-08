import { useState } from "react";
import { Link } from "react-router-dom";

import {  validarCorreo} from "../js/validaciones";

import {buscarUsuarioLogin} from "../js/usuariosBD";


function LoginPanel({
  iniciarSesion,
  cerrarPanel
}) {

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


    cerrarPanel();
  }


  return (

    <div className="panel-login">

      <form onSubmit={manejarLogin}>

        <div className="mb-3">

          <label className="form-label">
            Correo
          </label>

          <input
            type="email"
            className="form-control input-login-header"
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
            className="form-control input-login-header"
            value={password}
            onChange={(evento) =>
              setPassword(
                evento.target.value
              )
            }
          />

        </div>


        {mensaje && (

          <div className="alert alert-danger py-2">
            {mensaje}
          </div>

        )}


        <button
          type="submit"
          className="btn boton-cyan w-100"
        >
          INICIAR SESIÓN
        </button>


        <hr className="separador-login" />


        <p className="text-center texto-registro-header">
          ¿No estás registrado?
        </p>


        <Link
          to="/registro"
          className="btn boton-registro-header w-100"
          onClick={cerrarPanel}
        >
          REGISTRARME
        </Link>

      </form>

    </div>

  );
}


export default LoginPanel;