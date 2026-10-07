import { useState } from "react";

import {
  validarNombre,
  validarCorreo,
  validarTelefono,
  validarTexto
} from "../js/validaciones";


function Contacto() {

  const [formulario, setFormulario] =
    useState({

      nombre: "",
      correo: "",
      telefono: "",
      asunto: "",
      mensaje: ""

    });


  const [error, setError] =
    useState("");


  const [exito, setExito] =
    useState("");


  function manejarCambio(evento) {

    const { name, value } =
      evento.target;


    setFormulario({

      ...formulario,

      [name]: value

    });

  }


  function manejarEnvio(evento) {

    evento.preventDefault();

    setError("");
    setExito("");


    if (
      formulario.nombre.trim() === "" ||
      formulario.correo.trim() === "" ||
      formulario.telefono.trim() === "" ||
      formulario.asunto.trim() === "" ||
      formulario.mensaje.trim() === ""
    ) {

      setError(
        "Debes completar todos los campos."
      );

      return;
    }


    if (
      !validarNombre(
        formulario.nombre
      )
    ) {

      setError(
        "El nombre ingresado no es válido."
      );

      return;
    }


    if (
      !validarCorreo(
        formulario.correo
      )
    ) {

      setError(
        "El correo ingresado no es válido."
      );

      return;
    }


    if (
      !validarTelefono(
        formulario.telefono
      )
    ) {

      setError(
        "El teléfono ingresado no es válido."
      );

      return;
    }


    if (
      !validarTexto(
        formulario.asunto,
        3
      )
    ) {

      setError(
        "El asunto debe tener al menos 3 caracteres."
      );

      return;
    }


    if (
      !validarTexto(
        formulario.mensaje,
        10
      )
    ) {

      setError(
        "El mensaje debe tener al menos 10 caracteres."
      );

      return;
    }


    setExito(
      "Mensaje enviado correctamente."
    );


    setFormulario({

      nombre: "",
      correo: "",
      telefono: "",
      asunto: "",
      mensaje: ""

    });

  }


  return (

    <div className="container mt-5 mb-5">

      <div className="row justify-content-center">

        <div className="col-12 col-md-8 col-lg-6">

          <h1 className="titulo-seccion text-center">
            Contacto
          </h1>


          <p className="texto-pagina text-center mb-4">
            Escríbenos y nos pondremos en contacto contigo.
          </p>


          <form onSubmit={manejarEnvio}>


            <div className="mb-3">

              <label className="form-label">
                Nombre completo
              </label>

              <input
                type="text"
                className="form-control"
                name="nombre"
                value={formulario.nombre}
                onChange={manejarCambio}
              />

            </div>


            <div className="mb-3">

              <label className="form-label">
                Correo electrónico
              </label>

              <input
                type="email"
                className="form-control"
                name="correo"
                value={formulario.correo}
                onChange={manejarCambio}
              />

            </div>


            <div className="mb-3">

              <label className="form-label">
                Teléfono
              </label>

              <input
                type="tel"
                className="form-control"
                name="telefono"
                placeholder="912345678"
                value={formulario.telefono}
                onChange={manejarCambio}
              />

            </div>


            <div className="mb-3">

              <label className="form-label">
                Asunto
              </label>

              <input
                type="text"
                className="form-control"
                name="asunto"
                value={formulario.asunto}
                onChange={manejarCambio}
              />

            </div>


            <div className="mb-3">

              <label className="form-label">
                Mensaje
              </label>

              <textarea
                className="form-control"
                name="mensaje"
                rows="5"
                value={formulario.mensaje}
                onChange={manejarCambio}
              ></textarea>

            </div>


            {error && (

              <div className="alert alert-danger">
                {error}
              </div>

            )}


            {exito && (

              <div className="alert alert-success">
                {exito}
              </div>

            )}


            <button
              type="submit"
              className="btn boton-cyan w-100"
            >
              ENVIAR MENSAJE
            </button>


          </form>

        </div>

      </div>

    </div>

  );
}


export default Contacto;