import { useState } from "react";
import { Link } from "react-router-dom";

import productosBase from "../js/productosbd";

import {
  inicializarProductos,
  obtenerProductos,
  agregarProducto,
  actualizarProducto,
  eliminarProducto
} from "../js/productosCRUD";

import { validarProducto } from "../js/validacionesProductos";

const formularioVacio = {
  nombre: "",
  categoria: "",
  marca: "",
  modelo: "",
  precio: "",
  stock: "",
  imagen: "",
  descripcionCorta: "",
  destacado: false
};

function AdminProductos() {
  const [productos, setProductos] = useState(() => {
    inicializarProductos(productosBase);
    return obtenerProductos();
  });

  const [idEditando, setIdEditando] = useState(null);
  const [formulario, setFormulario] = useState(formularioVacio);
  const [mensaje, setMensaje] = useState("");
  const [errores, setErrores] = useState({});

  function manejarCambio(evento) {
    const { name, value, type, checked } = evento.target;

    setFormulario((anterior) => ({
      ...anterior,
      [name]: type === "checkbox" ? checked : value
    }));
  }

  function limpiarFormulario() {
    setFormulario(formularioVacio);
    setIdEditando(null);
    setErrores({});
  }

  function manejarEdicion(producto) {
    setIdEditando(producto.id);

    setFormulario({
      nombre: producto.nombre ?? "",
      categoria: producto.categoria ?? "",
      marca: producto.marca ?? "",
      modelo: producto.modelo ?? "",
      precio: String(producto.precio ?? ""),
      stock: String(producto.stock ?? ""),
      imagen: producto.imagen ?? "",
      descripcionCorta: producto.descripcionCorta ?? "",
      destacado: Boolean(producto.destacado)
    });

    setErrores({});
    setMensaje("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function manejarRegistro(evento) {
    evento.preventDefault();

    const datosParaValidar = {
      ...formulario,
      id: idEditando
    };

    const erroresEncontrados = validarProducto(datosParaValidar, productos);
    setErrores(erroresEncontrados);

    if (Object.keys(erroresEncontrados).length > 0) {
      setMensaje("Corrige los campos indicados antes de continuar.");
      return;
    }

    const datosProducto = {
      nombre: formulario.nombre.trim(),
      categoria: formulario.categoria.trim(),
      marca: formulario.marca.trim(),
      modelo: formulario.modelo.trim(),
      precio: Number(formulario.precio),
      stock: Number(formulario.stock),
      imagen: formulario.imagen.trim() || "/favicon.svg",
      descripcionCorta: formulario.descripcionCorta.trim(),
      descripcionLarga: formulario.descripcionCorta.trim(),
      destacado: formulario.destacado,
      caracteristicas: []
    };

    if (idEditando !== null) {
      actualizarProducto(idEditando, datosProducto);
      setMensaje("Producto actualizado correctamente.");
    }
    else {
      agregarProducto(datosProducto);
      setMensaje("Producto registrado correctamente.");
    }

    setProductos(obtenerProductos());
    limpiarFormulario();
  }

  function manejarEliminacion(producto) {
    const confirmar = window.confirm(
      `¿Estás seguro de eliminar "${producto.nombre}"?`
    );

    if (!confirmar) {
      return;
    }

    eliminarProducto(producto.id);
    setProductos(obtenerProductos());

    if (Number(idEditando) === Number(producto.id)) {
      limpiarFormulario();
    }

    setMensaje(`Producto "${producto.nombre}" eliminado correctamente.`);
  }

  function obtenerEstado(producto) {
    if (Number(producto.stock) === 0) {
      return "Sin stock";
    }

    if (Number(producto.stock) <= 5) {
      return "Stock bajo";
    }

    return "Disponible";
  }

  return (
    <main className="adminx">
      <div className="container">
        <div className="adminx-header">
          <div>
            <span className="adminx-kicker">PC-SHOP ADMIN</span>
            <h1>Administración de productos</h1>
            <p>Gestiona el catálogo que se muestra en la tienda pública.</p>
          </div>

          <div className="adminx-header-links">
            <Link to="/" className="adminx-link-secundario">Ver tienda</Link>
            <Link to="/admin/usuarios" className="adminx-link-principal">Usuarios</Link>
          </div>
        </div>

        <section className="adminx-panel">
          <div className="adminx-panel-titulo">
            <div>
              <h2>{idEditando !== null ? "Editar producto" : "Registrar producto"}</h2>
              <p>Completa los datos del producto.</p>
            </div>
          </div>

          <form onSubmit={manejarRegistro} className="row g-3" noValidate>
            {[
              ["nombre", "Nombre", "text"],
              ["categoria", "Categoría", "text"],
              ["marca", "Marca", "text"],
              ["modelo", "Modelo", "text"],
              ["precio", "Precio", "number"],
              ["stock", "Stock", "number"],
              ["imagen", "URL o ruta de imagen", "text"]
            ].map(([campo, etiqueta, tipo]) => (
              <div className="col-12 col-md-6" key={campo}>
                <label className="adminx-label" htmlFor={campo}>{etiqueta}</label>
                <input
                  id={campo}
                  name={campo}
                  type={tipo}
                  min={campo === "precio" ? "1" : campo === "stock" ? "0" : undefined}
                  className="adminx-input"
                  value={formulario[campo]}
                  onChange={manejarCambio}
                />
                {errores[campo] && <small className="adminx-error">{errores[campo]}</small>}
              </div>
            ))}

            <div className="col-12">
              <label className="adminx-label" htmlFor="descripcionCorta">Descripción corta</label>
              <textarea
                id="descripcionCorta"
                name="descripcionCorta"
                rows="3"
                className="adminx-input adminx-textarea"
                value={formulario.descripcionCorta}
                onChange={manejarCambio}
              />
              {errores.descripcionCorta && <small className="adminx-error">{errores.descripcionCorta}</small>}
            </div>

            <div className="col-12">
              <label className="adminx-check">
                <input
                  type="checkbox"
                  name="destacado"
                  checked={formulario.destacado}
                  onChange={manejarCambio}
                />
                Mostrar como producto destacado
              </label>
            </div>

            <div className="col-12 adminx-actions">
              <button type="submit" className="adminx-btn-primary">
                {idEditando !== null ? "Guardar cambios" : "Registrar producto"}
              </button>

              {idEditando !== null && (
                <button type="button" className="adminx-btn-secondary" onClick={limpiarFormulario}>
                  Cancelar edición
                </button>
              )}
            </div>
          </form>

          {mensaje && <p className="adminx-mensaje" role="status">{mensaje}</p>}
        </section>

        <section className="adminx-panel">
          <div className="adminx-panel-titulo adminx-panel-titulo-fila">
            <div>
              <h2>Productos registrados</h2>
              <p>{productos.length} productos en el catálogo.</p>
            </div>
          </div>

          <div className="table-responsive adminx-tabla-wrap">
            <table className="table adminx-tabla align-middle mb-0">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Producto</th>
                  <th>Categoría</th>
                  <th>Precio</th>
                  <th>Stock</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {productos.map((producto) => (
                  <tr key={producto.id}>
                    <td>{producto.id}</td>
                    <td>{producto.nombre}</td>
                    <td>{producto.categoria}</td>
                    <td>${Number(producto.precio).toLocaleString("es-CL")}</td>
                    <td>{producto.stock}</td>
                    <td>
                      <span className={`adminx-estado ${Number(producto.stock) === 0 ? "agotado" : Number(producto.stock) <= 5 ? "bajo" : "disponible"}`}>
                        {obtenerEstado(producto)}
                      </span>
                    </td>
                    <td>
                      <div className="adminx-table-actions">
                        <button type="button" className="adminx-btn-editar" onClick={() => manejarEdicion(producto)}>Editar</button>
                        <button type="button" className="adminx-btn-eliminar" onClick={() => manejarEliminacion(producto)}>Eliminar</button>
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

export default AdminProductos;
