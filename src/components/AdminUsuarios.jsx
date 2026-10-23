
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  obtenerUsuarios,
  guardarUsuarios
} from "../js/usuariosBD";

function AdminUsuarios() {
  const [usuarios, setUsuarios] = useState(() => obtenerUsuarios());
  const [mensaje, setMensaje] = useState("");
  // Guardamos qué usuario estamos editando.
const [indiceEditando, setIndiceEditando] = useState(null);

const [formulario, setFormulario] = useState({
  nombre: "",
  rut: "",
  correo: "",
  telefono: ""
});

const [errores, setErrores] = useState({});

  function eliminarUsuario(usuario, indice) {
    const confirmar = window.confirm(
      `¿Eliminar al usuario "${usuario.nombre}"?`
    );

    if (!confirmar) return;

    // Usamos el índice porque algunos usuarios
    // podrían no tener un ID asignado.
    const actualizados = usuarios.filter(
      (_, i) => i !== indice
    );

    guardarUsuarios(actualizados);
    setUsuarios(actualizados);
    setMensaje("Usuario eliminado correctamente.");
  }
  
function editarUsuario(usuario, indice) {
  // Guardamos la posición del usuario seleccionado.
  setIndiceEditando(indice);

  // Cargamos sus datos en el formulario.
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

function manejarCambio(e) {
  const { name, value } = e.target;

  setFormulario(prev => ({
    ...prev,
    [name]: value
  }));
}

function guardarEdicion(e) {
  e.preventDefault();

  if (indiceEditando === null) return;

  const nuevosErrores = {};

  const nombre = formulario.nombre.trim();
  const rut = formulario.rut.trim();
  const correo = formulario.correo.trim().toLowerCase();
  const telefono = formulario.telefono.trim();

  if (nombre.length < 3) {
    nuevosErrores.nombre = "El nombre debe tener al menos 3 caracteres.";
  }

  if (!rut) {
    nuevosErrores.rut = "El RUT es obligatorio.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
    nuevosErrores.correo = "Ingresa un correo válido.";
  }

  const correoDuplicado = usuarios.some(
    (usuario, indice) =>
      indice !== indiceEditando &&
      String(usuario.correo ?? "").toLowerCase() === correo
  );

  if (correoDuplicado) {
    nuevosErrores.correo = "Este correo ya está registrado.";
  }

  const normalizarRut = valor =>
    String(valor ?? "").replace(/[.\s-]/g, "").toUpperCase();

  const rutDuplicado = usuarios.some(
    (usuario, indice) =>
      indice !== indiceEditando &&
      normalizarRut(usuario.rut) === normalizarRut(rut)
  );

  if (rutDuplicado) {
    nuevosErrores.rut = "Este RUT ya está registrado.";
  }

  if (Object.keys(nuevosErrores).length > 0) {
    setErrores(nuevosErrores);
    setMensaje("Corrige los campos indicados.");
    return;
  }

  // Conservamos los demás datos del usuario,
  // incluyendo su contraseña y otros atributos.
  const actualizados = usuarios.map((usuario, indice) =>
    indice === indiceEditando
      ? { ...usuario, nombre, rut, correo, telefono }
      : usuario
  );

  guardarUsuarios(actualizados);
  setUsuarios(actualizados);

  cancelarEdicion();
  setMensaje("Usuario actualizado correctamente.");
}

function cancelarEdicion() {
  setIndiceEditando(null);
  setFormulario({
    nombre: "",
    rut: "",
    correo: "",
    telefono: ""
  });
  setErrores({});
}


  return (
    <main className="container py-5">
      <h1>Administración de usuarios</h1>
      <p>Usuarios registrados en PC-SHOP</p>

      <div className="d-flex gap-2 mb-4">
        <Link to="/admin" className="btn btn-outline-light">
          Volver a productos
        </Link>
        <Link to="/registro" className="btn btn-info">
          Registrar usuario
        </Link>
      </div>

      {mensaje && <p role="status">{mensaje}</p>}
      
{indiceEditando !== null && (
  <section className="mb-4">
    <h2>Editar usuario</h2>

    <form onSubmit={guardarEdicion} noValidate>
      {[
        ["nombre", "Nombre"],
        ["rut", "RUT"],
        ["correo", "Correo"],
        ["telefono", "Teléfono"]
      ].map(([campo, etiqueta]) => (
        <div className="mb-3" key={campo}>
          <label htmlFor={campo} className="form-label">
            {etiqueta}
          </label>

          <input
            id={campo}
            name={campo}
            type={campo === "correo" ? "email" : "text"}
            className="form-control"
            value={formulario[campo]}
            onChange={manejarCambio}
          />

          {errores[campo] && (
            <small className="text-danger">
              {errores[campo]}
            </small>
          )}
        </div>
      ))}

      <div className="d-flex gap-2">
        <button type="submit" className="btn btn-info">
          Guardar cambios
        </button>

        <button
          type="button"
          className="btn btn-secondary"
          onClick={cancelarEdicion}
        >
          Cancelar
        </button>
      </div>
    </form>
  </section>
)}


      <h2>Usuarios registrados: {usuarios.length}</h2>

      <div className="table-responsive">
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>RUT</th>
              <th>Correo</th>
              <th>Teléfono</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {usuarios.map((usuario, indice) => (
              <tr key={usuario.id ?? indice}>
                <td>{usuario.nombre}</td>
                <td>{usuario.rut}</td>
                <td>{usuario.correo}</td>
                <td>{usuario.telefono || "No registrado"}</td>
                
<td>
  <div className="d-flex gap-2">
    <button
      type="button"
      className="btn btn-warning btn-sm"
      onClick={() => editarUsuario(usuario, indice)}
    >
      Editar
    </button>

    <button
      type="button"
      className="btn btn-danger btn-sm"
      onClick={() => eliminarUsuario(usuario, indice)}
    >
      Eliminar
    </button>
  </div>
</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default AdminUsuarios;
