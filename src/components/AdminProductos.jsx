
import { useState } from "react";
import { Link } from "react-router-dom";

import {
  obtenerProductos,
  agregarProducto,
  actualizarProducto,
  eliminarProducto
} from "../js/productosCRUD";

import { validarProducto } from "../js/validacionesProductos";

function AdminProductos() {
  // Cargamos los productos que ya tenemos guardados.
const [productos, setProductos] = useState(() => obtenerProductos());
// Guardamos el ID del producto que estamos editando.
// Si es null, el formulario funciona como registro.
const [idEditando, setIdEditando] = useState(null);

  // Guardamos temporalmente los datos del formulario.
  const [formulario, setFormulario] = useState({
    nombre: "",
    categoria: "",
    marca: "",
    modelo: "",
    precio: "",
    stock: "",
    imagen: "",
    descripcion: ""
  });

  const [mensaje, setMensaje] = useState("");
  const [errores, setErrores] = useState({});

  // Actualizamos el campo que el usuario esté escribiendo.
  function manejarCambio(e) {
    const { name, value } = e.target;

    setFormulario(prev => ({
      ...prev,
      [name]: value
    }));
  }

  // Registramos un producto nuevo.
  
function manejarEdicion(producto) {
  // Identificamos el producto que queremos modificar.
  setIdEditando(producto.id);

  // Cargamos sus datos en el formulario.
  setFormulario({
    nombre: producto.nombre ?? "",
    categoria: producto.categoria ?? "",
    marca: producto.marca ?? "",
    modelo: producto.modelo ?? "",
    precio: String(producto.precio ?? ""),
    stock: String(producto.stock ?? ""),
    imagen: producto.imagen ?? "",
    descripcion: producto.descripcion ?? ""
  });

  // Limpiamos los mensajes anteriores.
  setErrores({});
  setMensaje("");

  // Volvemos al inicio para ver el formulario.
  window.scrollTo({ top: 0, behavior: "smooth" });
}

  

function manejarRegistro(e) {
  e.preventDefault();

  // Si estamos editando, incluimos el ID para que
  // la validación no detecte el mismo producto como duplicado.
  const datosParaValidar = {
    ...formulario,
    id: idEditando
  };

  const erroresEncontrados = validarProducto(
    datosParaValidar,
    productos
  );

  setErrores(erroresEncontrados);

  if (Object.keys(erroresEncontrados).length > 0) {
    setMensaje("Corrige los campos indicados.");
    return;
  }

  const datosProducto = {
    ...formulario,
    nombre: formulario.nombre.trim(),
    categoria: formulario.categoria.trim(),
    marca: formulario.marca.trim(),
    modelo: formulario.modelo.trim(),
    precio: Number(formulario.precio),
    stock: Number(formulario.stock)
  };

  if (idEditando !== null) {
    // UPDATE: modificamos el producto existente.
    actualizarProducto(idEditando, datosProducto);
    setMensaje("Producto actualizado correctamente.");
  } else {
    // CREATE: registramos un producto nuevo.
    agregarProducto({
      ...datosProducto,
      destacado: false,
      caracteristicas: []
    });
    setMensaje("Producto registrado correctamente.");
  }

  // Actualizamos la tabla.
  setProductos(obtenerProductos());

  // Limpiamos el formulario y salimos del modo edición.
  setIdEditando(null);
  setErrores({});

  setFormulario({
    nombre: "",
    categoria: "",
    marca: "",
    modelo: "",
    precio: "",
    stock: "",
    imagen: "",
    descripcion: ""
  });
}


function cancelarEdicion() {
  setIdEditando(null);

  setFormulario({
    nombre: "",
    categoria: "",
    marca: "",
    modelo: "",
    precio: "",
    stock: "",
    imagen: "",
    descripcion: ""
  });

  setErrores({});
  setMensaje("");
}

function manejarEliminacion(producto) {
  // Pedimos confirmación antes de borrar.
  const confirmar = window.confirm(
    `¿Estás seguro de eliminar "${producto.nombre}"?`
  );

  if (!confirmar) {
    return;
  }

  // Eliminamos el producto de localStorage.
  eliminarProducto(producto.id);

  // Actualizamos la tabla sin recargar la página.
  setProductos(obtenerProductos());

  // Si estábamos editando ese producto, cancelamos.
  if (Number(idEditando) === Number(producto.id)) {
    cancelarEdicion();
  }

  setMensaje(`Producto "${producto.nombre}" eliminado correctamente.`);
}



  // Revisamos las existencias de cada producto.
  function obtenerEstado(producto) {
    if (Number(producto.stock) === 0) {
      return "Sin stock";
    }

    if (
      producto.stockCritico !== null &&
      producto.stockCritico !== undefined &&
      producto.stockCritico !== "" &&
      Number(producto.stock) <= Number(producto.stockCritico)
    ) {
      return "Stock crítico";
    }

    return "Disponible";
  }

  return (
    <main className="container py-5">
      <h1>Panel de administración</h1>
      <p>Administración de productos de PC-SHOP</p>

      <Link to="/" className="btn btn-outline-light mb-4">
        Volver a la tienda
      </Link>
        
<section className="mb-5">
<h2>
  {idEditando !== null ? "Editar producto" : "Registrar producto"}
</h2>  <p>Completa los datos del nuevo producto.</p>

<form onSubmit={manejarRegistro} className="row g-3" noValidate>    {[
      ["nombre", "Nombre"],
      ["categoria", "Categoría"],
      ["marca", "Marca"],
      ["modelo", "Modelo"],
      ["precio", "Precio"],
      ["stock", "Stock"],
      ["imagen", "Ruta de imagen"],
      ["descripcion", "Descripción"]
    ].map(([campo, etiqueta]) => (
      <div className="col-md-6" key={campo}>
        <label htmlFor={campo} className="form-label">
          {etiqueta}
        </label>

        <input
          id={campo}
          name={campo}
          type={
            campo === "precio" || campo === "stock"
              ? "number"
              : "text"
          }
          min={campo === "precio" ? "1" : campo === "stock" ? "0" : undefined}
          step={campo === "precio" || campo === "stock" ? "1" : undefined}
          className="form-control"
          value={formulario[campo]}
          onChange={manejarCambio}
        />
        {errores[campo] && (
  <small className="text-danger d-block mt-1">
    {errores[campo]}
  </small>
)}
      </div>
    ))}

    
<div className="col-12 d-flex gap-2">
  <button type="submit" className="btn btn-info">
    {idEditando !== null
      ? "Guardar cambios"
      : "Registrar producto"}
  </button>

  {idEditando !== null && (
    <button
      type="button"
      className="btn btn-secondary"
      onClick={cancelarEdicion}
    >
      Cancelar edición
    </button>
  )}
</div>

  </form>

  {mensaje && (
    <p className="mt-3" role="status">
      {mensaje}
    </p>
  )}
</section>

      <h2>Productos</h2>
      <p>Productos registrados: {productos.length}</p>

      <div className="table-responsive">
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th>Código</th>
              <th>Nombre</th>
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
                <td>{producto.codigo || producto.id}</td>
                <td>{producto.nombre}</td>
                <td>{producto.categoria}</td>
                <td>
                  ${Number(producto.precio).toLocaleString("es-CL")}
                </td>
                <td>{producto.stock}</td>
                
                <td>{obtenerEstado(producto)}</td>
                
<td>
  <div className="d-flex gap-2">
    <button
      type="button"
      className="btn btn-warning btn-sm"
      onClick={() => manejarEdicion(producto)}
    >
      Editar
    </button>

    <button
      type="button"
      className="btn btn-danger btn-sm"
      onClick={() => manejarEliminacion(producto)}
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

export default AdminProductos;
