import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  validarNombre,
  validarCorreo,
  validarTelefono,
  validarRut,
  validarPassword,
  validarTexto
} from "../js/validaciones";

import {
  buscarUsuarioPorCorreo,
  buscarUsuarioPorRut,
  agregarUsuario
} from "../js/usuariosBD";


function Registro() {

  const navigate = useNavigate();


  const [formulario, setFormulario] =
    useState({

      nombre: "",
      rut: "",
      telefono: "",
      correo: "",
      region: "",
      ciudad: "",
      direccion: "",
      password: "",
      confirmarPassword: ""

    });


  const [mensaje, setMensaje] =
    useState("");


  function manejarCambio(evento) {

    const { name, value } =
      evento.target;

    setFormulario({
      ...formulario,
      [name]: value
    });

  }


  function manejarRegistro(evento) {

    evento.preventDefault();

    setMensaje("");


    // CAMPOS VACÍOS

    if (
      formulario.nombre.trim() === "" ||
      formulario.rut.trim() === "" ||
      formulario.telefono.trim() === "" ||
      formulario.correo.trim() === "" ||
      formulario.region === "" ||
      formulario.ciudad.trim() === "" ||
      formulario.direccion.trim() === "" ||
      formulario.password === "" ||
      formulario.confirmarPassword === ""
    ) {

      setMensaje(
        "Debes completar todos los campos."
      );

      return;
    }


    // NOMBRE

    if (!validarNombre(formulario.nombre)) {

      setMensaje(
        "El nombre solo debe contener letras y espacios."
      );

      return;
    }


    // RUT

    if (!validarRut(formulario.rut)) {

      setMensaje(
        "El RUT debe tener un formato válido. Ej: 12345678-9."
      );

      return;
    }


    // TELÉFONO

    if (!validarTelefono(formulario.telefono)) {

      setMensaje(
        "Ingresa un teléfono válido. Ej: 912345678."
      );

      return;
    }


    // CORREO

    if (!validarCorreo(formulario.correo)) {

      setMensaje(
        "El correo no tiene un formato válido."
      );

      return;
    }


    // CIUDAD

    if (!validarTexto(formulario.ciudad, 2)) {

      setMensaje(
        "Ingresa una ciudad válida."
      );

      return;
    }


    // DIRECCIÓN

    if (!validarTexto(formulario.direccion, 5)) {

      setMensaje(
        "La dirección debe tener al menos 5 caracteres."
      );

      return;
    }


    // CONTRASEÑA

    if (!validarPassword(formulario.password)) {

      setMensaje(
        "La contraseña debe tener al menos 6 caracteres, una letra y un número."
      );

      return;
    }


    // CONFIRMAR CONTRASEÑA

    if (
      formulario.password !==
      formulario.confirmarPassword
    ) {

      setMensaje(
        "Las contraseñas no coinciden."
      );

      return;
    }


    // CORREO REPETIDO

    const correoExistente =
      buscarUsuarioPorCorreo(
        formulario.correo
      );


    if (correoExistente) {

      setMensaje(
        "Ya existe un usuario con ese correo."
      );

      return;
    }


    // RUT REPETIDO

    const rutExistente =
      buscarUsuarioPorRut(
        formulario.rut
      );


    if (rutExistente) {

      setMensaje(
        "Ya existe un usuario con ese RUT."
      );

      return;
    }


    // LIMPIAR RUT

    const rutLimpio =
      formulario.rut
        .replace(/\./g, "")
        .replace(/\s/g, "");


    // LIMPIAR TELÉFONO

    const telefonoLimpio =
      formulario.telefono
        .replace(/\s/g, "");


    // CREAR USUARIO

    const nuevoUsuario = {

      id: Date.now(),

      nombre:
        formulario.nombre.trim(),

      rut:
        rutLimpio,

      telefono:
        telefonoLimpio,

      correo:
        formulario.correo
          .trim()
          .toLowerCase(),

      region:
        formulario.region,

      ciudad:
        formulario.ciudad.trim(),

      direccion:
        formulario.direccion.trim(),

      password:
        formulario.password

    };


    // GUARDAR USUARIO

    agregarUsuario(
      nuevoUsuario
    );


    alert(
      "Usuario registrado correctamente."
    );


    navigate("/login");
  }


  return (

    <div className="container mt-5 mb-5">

      <div className="row justify-content-center">

        <div className="col-12 col-md-8 col-lg-6">

          <h1 className="titulo-seccion text-center">
            Crear Cuenta
          </h1>


          <form
            className="mt-4"
            onSubmit={manejarRegistro}
          >


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
                RUT
              </label>

              <input
                type="text"
                className="form-control"
                name="rut"
                placeholder="12345678-9"
                value={formulario.rut}
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
                Región
              </label>

              <select
                className="form-select"
                name="region"
                value={formulario.region}
                onChange={manejarCambio}
              >

                <option value="">
                  Selecciona una región
                </option>

                <option value="Arica y Parinacota">
                  Arica y Parinacota
                </option>

                <option value="Tarapaca">
                  Tarapacá
                </option>

                <option value="Antofagasta">
                  Antofagasta
                </option>

                <option value="Atacama">
                  Atacama
                </option>

                <option value="Coquimbo">
                  Coquimbo
                </option>

                <option value="Valparaiso">
                  Valparaíso
                </option>

                <option value="Metropolitana">
                  Metropolitana
                </option>

                <option value="OHiggins">
                  O'Higgins
                </option>

                <option value="Maule">
                  Maule
                </option>

                <option value="Nuble">
                  Ñuble
                </option>

                <option value="Biobio">
                  Biobío
                </option>

                <option value="Araucania">
                  La Araucanía
                </option>

                <option value="Los Rios">
                  Los Ríos
                </option>

                <option value="Los Lagos">
                  Los Lagos
                </option>

                <option value="Aysen">
                  Aysén
                </option>

                <option value="Magallanes">
                  Magallanes
                </option>

              </select>

            </div>


            <div className="mb-3">

              <label className="form-label">
                Ciudad
              </label>

              <input
                type="text"
                className="form-control"
                name="ciudad"
                value={formulario.ciudad}
                onChange={manejarCambio}
              />

            </div>


            <div className="mb-3">

              <label className="form-label">
                Dirección
              </label>

              <input
                type="text"
                className="form-control"
                name="direccion"
                value={formulario.direccion}
                onChange={manejarCambio}
              />

            </div>


            <div className="mb-3">

              <label className="form-label">
                Contraseña
              </label>

              <input
                type="password"
                className="form-control"
                name="password"
                value={formulario.password}
                onChange={manejarCambio}
              />

              <small className="text-secondary">
                Mínimo 6 caracteres, una letra y un número.
              </small>

            </div>


            <div className="mb-3">

              <label className="form-label">
                Confirmar contraseña
              </label>

              <input
                type="password"
                className="form-control"
                name="confirmarPassword"
                value={formulario.confirmarPassword}
                onChange={manejarCambio}
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
              REGISTRARSE
            </button>


          </form>

        </div>

      </div>

    </div>

  );
}


export default Registro;