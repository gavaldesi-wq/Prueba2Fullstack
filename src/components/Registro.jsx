import { useState } from "react";
import { Link } from "react-router-dom";

import {
  validarNombre,
  validarCorreo,
  validarTelefono,
  validarTexto
} from "../js/validaciones";

function Registro() {

  const [formulario, setFormulario] = useState({
    nombre: "",
    rut: "",
    correo: "",
    telefono: "",
    region: "",
    ciudad: "",
    direccion: "",
    contrasena: "",
    confirmarContrasena: ""
  });

  const [error, setError] = useState("");
  const [exito, setExito] = useState("");

  function manejarCambio(evento) {
    const { name, value } = evento.target;

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
      formulario.rut.trim() === "" ||
      formulario.correo.trim() === "" ||
      formulario.telefono.trim() === "" ||
      formulario.region.trim() === "" ||
      formulario.ciudad.trim() === "" ||
      formulario.direccion.trim() === "" ||
      formulario.contrasena.trim() === "" ||
      formulario.confirmarContrasena.trim() === ""
    ) {
      setError("Debes completar todos los campos.");
      return;
    }

    if (!validarNombre(formulario.nombre)) {
      setError("El nombre ingresado no es válido.");
      return;
    }

    if (!validarCorreo(formulario.correo)) {
      setError("El correo ingresado no es válido.");
      return;
    }

    if (!validarTelefono(formulario.telefono)) {
      setError("El teléfono ingresado no es válido.");
      return;
    }

    if (!validarTexto(formulario.region, 2)) {
      setError("La región ingresada no es válida.");
      return;
    }

    if (!validarTexto(formulario.ciudad, 2)) {
      setError("La ciudad ingresada no es válida.");
      return;
    }

    if (!validarTexto(formulario.direccion, 5)) {
      setError("La dirección ingresada no es válida.");
      return;
    }

    if (formulario.contrasena.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    if (formulario.contrasena !== formulario.confirmarContrasena) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    const usuariosGuardados =
      JSON.parse(localStorage.getItem("usuariosRegistrados")) || [];

    const correoExistente = usuariosGuardados.find(
      (usuario) =>
        usuario.correo.toLowerCase() === formulario.correo.toLowerCase()
    );

    if (correoExistente) {
      setError("Ya existe una cuenta con ese correo.");
      return;
    }

    const nuevoUsuario = {
      id: Date.now(),
      nombre: formulario.nombre,
      rut: formulario.rut,
      correo: formulario.correo,
      telefono: formulario.telefono,
      region: formulario.region,
      ciudad: formulario.ciudad,
      direccion: formulario.direccion,
      contrasena: formulario.contrasena
    };

    localStorage.setItem(
      "usuariosRegistrados",
      JSON.stringify([...usuariosGuardados, nuevoUsuario])
    );

    setExito("Cuenta creada correctamente.");

    setFormulario({
      nombre: "",
      rut: "",
      correo: "",
      telefono: "",
      region: "",
      ciudad: "",
      direccion: "",
      contrasena: "",
      confirmarContrasena: ""
    });
  }

  return (
    <section className="pagina-registro">
      <div className="container">

        <div className="registro-contenedor">

          <div className="registro-info">

            <div>
              <h1>Crea tu cuenta</h1>
              <p>
                Únete a PC-SHOP y disfruta de una mejor experiencia.
              </p>
            </div>

            <div className="registro-beneficios">

              <div className="registro-beneficio">
                <div className="registro-icono">
                  <i className="bi bi-shield-check"></i>
                </div>

                <div>
                  <h3>Compra de forma segura</h3>
                  <p>Tus datos están protegidos.</p>
                </div>
              </div>

              <div className="registro-beneficio">
                <div className="registro-icono">
                  <i className="bi bi-truck"></i>
                </div>

                <div>
                  <h3>Seguimiento de tus pedidos</h3>
                  <p>Revisa el estado de tus compras.</p>
                </div>
              </div>

              <div className="registro-beneficio">
                <div className="registro-icono">
                  <i className="bi bi-gear"></i>
                </div>

                <div>
                  <h3>Una mejor experiencia</h3>
                  <p>Compra más rápido y fácil.</p>
                </div>
              </div>

            </div>

          </div>

          <div className="registro-formulario">

            <h2>Crear cuenta</h2>

            <p className="registro-subtitulo">
              Completa tus datos para registrarte.
            </p>

            <form onSubmit={manejarEnvio}>

              <div className="registro-grid">

                <div className="campo-registro">
                  <label>Nombre completo</label>

                  <input
                    type="text"
                    name="nombre"
                    placeholder="Tu nombre completo"
                    value={formulario.nombre}
                    onChange={manejarCambio}
                  />
                </div>

                <div className="campo-registro">
                  <label>RUT</label>

                  <input
                    type="text"
                    name="rut"
                    placeholder="12.345.678-9"
                    value={formulario.rut}
                    onChange={manejarCambio}
                  />
                </div>

                <div className="campo-registro">
                  <label>Correo electrónico</label>

                  <input
                    type="email"
                    name="correo"
                    placeholder="tu@email.com"
                    value={formulario.correo}
                    onChange={manejarCambio}
                  />
                </div>

                <div className="campo-registro">
                  <label>Teléfono</label>

                  <input
                    type="tel"
                    name="telefono"
                    placeholder="912345678"
                    value={formulario.telefono}
                    onChange={manejarCambio}
                  />
                </div>

                <div className="campo-registro">
                  <label>Región</label>

                  <input
                    type="text"
                    name="region"
                    placeholder="Región Metropolitana"
                    value={formulario.region}
                    onChange={manejarCambio}
                  />
                </div>

                <div className="campo-registro">
                  <label>Ciudad</label>

                  <input
                    type="text"
                    name="ciudad"
                    placeholder="Santiago"
                    value={formulario.ciudad}
                    onChange={manejarCambio}
                  />
                </div>

                <div className="campo-registro campo-registro-completo">
                  <label>Dirección</label>

                  <input
                    type="text"
                    name="direccion"
                    placeholder="Tu dirección"
                    value={formulario.direccion}
                    onChange={manejarCambio}
                  />
                </div>

                <div className="campo-registro">
                  <label>Contraseña</label>

                  <input
                    type="password"
                    name="contrasena"
                    placeholder="Mínimo 6 caracteres"
                    value={formulario.contrasena}
                    onChange={manejarCambio}
                  />
                </div>

                <div className="campo-registro">
                  <label>Confirmar contraseña</label>

                  <input
                    type="password"
                    name="confirmarContrasena"
                    placeholder="Repite tu contraseña"
                    value={formulario.confirmarContrasena}
                    onChange={manejarCambio}
                  />
                </div>

              </div>

              {error && (
                <div className="registro-mensaje registro-error">
                  <i className="bi bi-exclamation-circle"></i>
                  {error}
                </div>
              )}

              {exito && (
                <div className="registro-mensaje registro-exito">
                  <i className="bi bi-check-circle"></i>
                  {exito}
                </div>
              )}

              <button
                type="submit"
                className="boton-crear-cuenta"
              >
                CREAR CUENTA
                <i className="bi bi-arrow-right"></i>
              </button>

            </form>

            <div className="registro-login">
              <span>¿Ya tienes una cuenta?</span>
              <Link to="/login">
                Iniciar sesión
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Registro;