import { useState } from "react";
import { Link } from "react-router-dom";

import {
  obtenerUsuarios,
  actualizarUsuario,
  eliminarUsuario
} from "../js/usuariosBD";

import {
  validarNombre,
  validarCorreo,
  validarTelefono,
  validarRut
} from "../js/validaciones";

const formularioVacio = {
  nombre: "",
  rut: "",
  correo: "",
  telefono: ""
};

function AdminUsuarios() {
  const [usuarios, setUsuarios] = useState(() => obtenerUsuarios());
  const [idEditando, setIdEditando] = useState(null);
  const [formulario, setFormulario] = useState(formularioVacio);
  const [errores, setErrores] = useState({});
  const [mensaje, setMensaje] = useState("");

  function editarUsuario(usuario) {
    setIdEditando(usuario.id);
    setFormulario({
      nombre: usuario.nombre ?? "",
      rut: usuario.rut ?? "",
      correo: usuario.correo ?? "",
      telefono: usuario.telefono ?? ""
    });
    setErrores({});
    setMensaje("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function manejarCambio(evento) {
    const { name, value } = evento.target;
    setFormulario((anterior) => ({ ...anterior, [name]: value }));
  }

  function cancelarEdicion() {
    setIdEditando(null);
    setFormulario(formularioVacio);
    setErrores({});
  }

  function guardarEdicion(evento) {
    evento.preventDefault();

    const nuevosErrores = {};
    const nombre = formulario.nombre.trim();
    const rut = formulario.rut.trim();
    const correo = formulario.correo.trim().toLowerCase();
    const telefono = formulario.telefono.trim();

    if (!validarNombre(nombre)) nuevosErrores.nombre = "Ingresa un nombre válido.";
    if (!validarRut(rut)) nuevosErrores.rut = "Ingresa un RUT válido.";
    if (!validarCorreo(correo)) nuevosErrores.correo = "Ingresa un correo válido.";
    if (telefono && !validarTelefono(telefono)) nuevosErrores.telefono = "Ingresa un teléfono chileno válido.";

    const normalizarRut = (valor) => String(valor ?? "").replace(/[.\s]/g, "").toUpperCase();

    if (usuarios.some((usuario) => String(usuario.id) !== String(idEditando) && String(usuario.correo ?? "").toLowerCase() === correo)) {
      nuevosErrores.correo = "Este correo ya está registrado.";
    }

    if (usuarios.some((usuario) => String(usuario.id) !== String(idEditando) && normalizarRut(usuario.rut) === normalizarRut(rut))) {
      nuevosErrores.rut = "Este RUT ya está registrado.";
    }

    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores);
      setMensaje("Corrige los campos indicados.");
      return;
    }

    actualizarUsuario(idEditando, { nombre, rut, correo, telefono });
    setUsuarios(obtenerUsuarios());
    cancelarEdicion();
    setMensaje("Usuario actualizado correctamente.");
  }

  function manejarEliminacion(usuario) {
    if (usuario.rol === "admin") {
      setMensaje("La cuenta administradora no se puede eliminar.");
      return;
    }

    const confirmar = window.confirm(`¿Eliminar al usuario "${usuario.nombre}"?`);
    if (!confirmar) return;

    eliminarUsuario(usuario.id);
    setUsuarios(obtenerUsuarios());
    setMensaje("Usuario eliminado correctamente.");
  }

  return (
    <main className="adminx">
      <div className="container">
        <div className="adminx-header">
          <div>
            <span className="adminx-kicker">PC-SHOP ADMIN</span>
            <h1>Administración de usuarios</h1>
            <p>Edita datos básicos y gestiona las cuentas registradas.</p>
          </div>

          <div className="adminx-header-links">
            <Link to="/admin" className="adminx-link-principal">Productos</Link>
            <Link to="/" className="adminx-link-secundario">Ver tienda</Link>
          </div>
        </div>

        {idEditando !== null && (
          <section className="adminx-panel">
            <div className="adminx-panel-titulo">
              <h2>Editar usuario</h2>
            </div>

            <form onSubmit={guardarEdicion} className="row g-3" noValidate>
              {[
                ["nombre", "Nombre", "text"],
                ["rut", "RUT", "text"],
                ["correo", "Correo", "email"],
                ["telefono", "Teléfono", "text"]
              ].map(([campo, etiqueta, tipo]) => (
                <div className="col-12 col-md-6" key={campo}>
                  <label className="adminx-label" htmlFor={`usuario-${campo}`}>{etiqueta}</label>
                  <input
                    id={`usuario-${campo}`}
                    name={campo}
                    type={tipo}
                    className="adminx-input"
                    value={formulario[campo]}
                    onChange={manejarCambio}
                  />
                  {errores[campo] && <small className="adminx-error">{errores[campo]}</small>}
                </div>
              ))}

              <div className="col-12 adminx-actions">
                <button type="submit" className="adminx-btn-primary">Guardar cambios</button>
                <button type="button" className="adminx-btn-secondary" onClick={cancelarEdicion}>Cancelar</button>
              </div>
            </form>
          </section>
        )}

        {mensaje && <p className="adminx-mensaje" role="status">{mensaje}</p>}

        <section className="adminx-panel">
          <div className="adminx-panel-titulo">
            <h2>Usuarios registrados</h2>
            <p>{usuarios.length} cuentas guardadas.</p>
          </div>

          <div className="table-responsive adminx-tabla-wrap">
            <table className="table adminx-tabla align-middle mb-0">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>RUT</th>
                  <th>Correo</th>
                  <th>Rol</th>
                  <th>Teléfono</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {usuarios.map((usuario) => (
                  <tr key={usuario.id}>
                    <td>{usuario.nombre}</td>
                    <td>{usuario.rut}</td>
                    <td>{usuario.correo}</td>
                    <td><span className={`adminx-rol ${usuario.rol}`}>{usuario.rol}</span></td>
                    <td>{usuario.telefono || "No registrado"}</td>
                    <td>
                      <div className="adminx-table-actions">
                        <button type="button" className="adminx-btn-editar" onClick={() => editarUsuario(usuario)}>Editar</button>
                        <button type="button" className="adminx-btn-eliminar" disabled={usuario.rol === "admin"} onClick={() => manejarEliminacion(usuario)}>Eliminar</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}

export default AdminUsuarios;
