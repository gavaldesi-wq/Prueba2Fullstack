import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import productosBase from "../js/productosbd";
import { buscarProductoPorId } from "../js/productosCRUD";

function DetalleProducto({ agregarAlCarrito }) {
  const { id } = useParams();

  const productoEncontrado = buscarProductoPorId(id, productosBase);

  const [cantidad, setCantidad] = useState(1);
  const [agregado, setAgregado] = useState(false);

  if (!productoEncontrado) {
    return (
      <main className="detalle-producto-pagina">
        <div className="container">
          <div className="detalle-no-encontrado">
            <div className="detalle-no-encontrado-icono">
              <i className="bi bi-exclamation-triangle"></i>
            </div>

            <h1>Producto no encontrado</h1>

            <p>
              El producto que intentas abrir no existe o fue eliminado del catálogo.
            </p>

            <Link
              to="/productos"
              className="detalle-volver-catalogo"
            >
              <i className="bi bi-arrow-left"></i>
              Volver al catálogo
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const stock = Number(productoEncontrado.stock) || 0;
  const hayStock = stock > 0;

  const tienePrecioAnterior =
    Number(productoEncontrado.precioAnterior) >
    Number(productoEncontrado.precio);

  const descuento = tienePrecioAnterior
    ? Math.round(
        (
          (productoEncontrado.precioAnterior -
            productoEncontrado.precio) /
          productoEncontrado.precioAnterior
        ) * 100
      )
    : 0;

  function disminuirCantidad() {
    setCantidad(
      (cantidadActual) =>
        Math.max(1, cantidadActual - 1)
    );
  }

  function aumentarCantidad() {
    setCantidad((cantidadActual) => {
      if (!hayStock) return 1;

      return Math.min(
        stock,
        cantidadActual + 1
      );
    });
  }

  function manejarCantidad(evento) {
    const nuevaCantidad =
      Number(evento.target.value);

    if (!Number.isFinite(nuevaCantidad)) {
      return;
    }

    const cantidadValida = Math.max(
      1,
      Math.min(
        hayStock ? stock : 1,
        nuevaCantidad
      )
    );

    setCantidad(cantidadValida);
  }

  function manejarAgregar() {
    if (!hayStock || agregado) {
      return;
    }

    agregarAlCarrito(
      productoEncontrado,
      cantidad
    );

    setAgregado(true);

    setTimeout(() => {
      setAgregado(false);
    }, 1200);
  }

  return (
    <main className="detalle-producto-pagina">
      <div className="container">

        <div className="detalle-migas">
          <Link to="/productos">
            <i className="bi bi-arrow-left"></i>
            Productos
          </Link>

          <span>/</span>

          <span>
            {productoEncontrado.categoria}
          </span>
        </div>

        <section className="detalle-producto-principal">
          <div className="row g-4">

            <div className="col-12 col-lg-5">
              <div className="detalle-imagen-panel">

                {productoEncontrado.oferta &&
                  tienePrecioAnterior && (
                    <span className="detalle-badge-oferta">
                      -{descuento}%
                    </span>
                  )}

                <img
                  src={productoEncontrado.imagen}
                  alt={productoEncontrado.nombre}
                  className="detalle-imagen"
                />

              </div>
            </div>

            <div className="col-12 col-lg-4">
              <div className="detalle-info-panel">

                <span className="detalle-categoria">
                  {productoEncontrado.categoria}
                </span>

                <h1 className="detalle-titulo">
                  {productoEncontrado.nombre}
                </h1>

                <p className="detalle-descripcion-corta">
                  {productoEncontrado.descripcionCorta}
                </p>

                <div className="detalle-separador"></div>

                <div className="detalle-datos-grid">

                  <div className="detalle-dato">
                    <span>Marca</span>

                    <strong>
                      {productoEncontrado.marca ||
                        "No especificada"}
                    </strong>
                  </div>

                  <div className="detalle-dato">
                    <span>Modelo</span>

                    <strong>
                      {productoEncontrado.modelo ||
                        "No especificado"}
                    </strong>
                  </div>

                  <div className="detalle-dato">
                    <span>Condición</span>

                    <strong>
                      Nuevo
                    </strong>
                  </div>

                  <div className="detalle-dato">
                    <span>Disponibilidad</span>

                    <strong
                      className={
                        hayStock
                          ? "detalle-stock-ok"
                          : "detalle-stock-no"
                      }
                    >
                      {hayStock
                        ? `${stock} unidades`
                        : "Sin stock"}
                    </strong>
                  </div>

                </div>

                <div className="detalle-beneficios">

                  <div>
                    <i className="bi bi-truck"></i>
                    <span>
                      Despacho a todo Chile
                    </span>
                  </div>

                  <div>
                    <i className="bi bi-shield-check"></i>
                    <span>
                      Compra protegida
                    </span>
                  </div>

                  <div>
                    <i className="bi bi-box-seam"></i>
                    <span>
                      Producto nuevo y sellado
                    </span>
                  </div>

                </div>

              </div>
            </div>

            <div className="col-12 col-lg-3">
              <aside className="detalle-compra-panel">

                <span className="detalle-precio-label">
                  Precio
                </span>

                {tienePrecioAnterior && (
                  <div className="detalle-precio-anterior-fila">

                    <del>
                      $
                      {Number(
                        productoEncontrado.precioAnterior
                      ).toLocaleString("es-CL")}
                    </del>

                    <span>
                      Ahorras $
                      {(
                        productoEncontrado.precioAnterior -
                        productoEncontrado.precio
                      ).toLocaleString("es-CL")}
                    </span>

                  </div>
                )}

                <div className="detalle-precio-actual">
                  $
                  {Number(
                    productoEncontrado.precio
                  ).toLocaleString("es-CL")}
                </div>

                <div className="detalle-compra-separador"></div>

                <label className="detalle-cantidad-label">
                  Cantidad
                </label>

                <div className="detalle-cantidad-control">

                  <button
                    type="button"
                    onClick={disminuirCantidad}
                    disabled={
                      cantidad <= 1 ||
                      !hayStock
                    }
                    aria-label="Disminuir cantidad"
                  >
                    <i className="bi bi-dash-lg"></i>
                  </button>

                  <input
                    type="number"
                    min="1"
                    max={Math.max(1, stock)}
                    value={cantidad}
                    onChange={manejarCantidad}
                    disabled={!hayStock}
                  />

                  <button
                    type="button"
                    onClick={aumentarCantidad}
                    disabled={
                      !hayStock ||
                      cantidad >= stock
                    }
                    aria-label="Aumentar cantidad"
                  >
                    <i className="bi bi-plus-lg"></i>
                  </button>

                </div>

                <button
                  type="button"
                  className={
                    `detalle-boton-carrito ${
                      agregado ? "agregado" : ""
                    }`
                  }
                  onClick={manejarAgregar}
                  disabled={!hayStock}
                >

                  {hayStock ? (
                    agregado ? (
                      <>
                        <i className="bi bi-check-lg"></i>
                        Agregado al carrito
                      </>
                    ) : (
                      <>
                        <i className="bi bi-cart-plus"></i>
                        Agregar al carrito
                      </>
                    )
                  ) : (
                    <>
                      <i className="bi bi-x-circle"></i>
                      Sin stock
                    </>
                  )}

                </button>

                <p className="detalle-compra-ayuda">
                  <i className="bi bi-lock"></i>

                  Tus datos se utilizan únicamente
                  para simular el proceso de compra
                  del proyecto.
                </p>

              </aside>
            </div>

          </div>
        </section>

        <section className="detalle-informacion-extra">

          <div className="row g-4">

            <div className="col-12 col-lg-7">

              <article className="detalle-bloque-info">

                <div className="detalle-bloque-titulo">

                  <i className="bi bi-file-text"></i>

                  <h2>
                    Descripción
                  </h2>

                </div>

                <p>
                  {productoEncontrado.descripcionLarga ||
                    "Descripción no disponible para este producto."}
                </p>

              </article>

            </div>

            <div className="col-12 col-lg-5">

              <article className="detalle-bloque-info">

                <div className="detalle-bloque-titulo">

                  <i className="bi bi-list-check"></i>

                  <h2>
                    Características destacadas
                  </h2>

                </div>

                {productoEncontrado
                  .caracteristicas?.length > 0 ? (

                  <ul className="detalle-caracteristicas">

                    {productoEncontrado
                      .caracteristicas
                      .map(
                        (
                          caracteristica,
                          indice
                        ) => (

                          <li key={indice}>

                            <i className="bi bi-check-circle-fill"></i>

                            <span>
                              {caracteristica}
                            </span>

                          </li>

                        )
                      )}

                  </ul>

                ) : (

                  <p>
                    No hay características
                    adicionales disponibles.
                  </p>

                )}

              </article>

            </div>

          </div>

        </section>

      </div>
    </main>
  );
}

export default DetalleProducto;