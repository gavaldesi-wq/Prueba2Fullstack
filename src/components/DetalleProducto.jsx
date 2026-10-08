import {
  useState
} from "react";

import {
  Link,
  useParams
} from "react-router-dom";

import productos from "../js/productosbd";


function DetalleProducto({
  agregarAlCarrito
}) {

  const { id } = useParams();


  const productoEncontrado =
    productos.find(
      (producto) =>
        producto.id === Number(id)
    );


  const [cantidad, setCantidad] =
    useState(1);


  const [agregado, setAgregado] =
    useState(false);


  function manejarAgregar() {

    agregarAlCarrito(
      productoEncontrado,
      cantidad
    );
    setAgregado(true);
    setTimeout(() => {
      setAgregado(false);
    }, 1000);
  }


  // PRODUCTO NO EXISTE

  if (!productoEncontrado) {

    return (

      <main className="flex-grow-1">

        <div className="container mt-5">

          <div className="row">

            <div className="col-12 text-center py-5">

              <i className="bi bi-exclamation-triangle display-1 text-warning mb-3"></i>


              <h2 className="text-white mb-4">
                El producto que buscas no existe.
              </h2>


              <Link
                to="/productos"
                className="btn boton-cyan px-4"
              >
                Volver al catálogo
              </Link>

            </div>

          </div>

        </div>

      </main>

    );
  }


  return (

    <main className="flex-grow-1">

      <div className="container mt-5">

        <div className="row g-5 align-items-center">


          <div className="row g-4 text-white">


            {/* IMAGEN */}

            <div className="col-12 col-md-5 col-lg-4">

              <div
                className="
                  bg-white
                  p-4
                  rounded
                  d-flex
                  align-items-center
                  justify-content-center
                "
                style={{
                  height: "350px"
                }}
              >

                <img
                  src={
                    productoEncontrado.imagen
                  }
                  className="img-fluid"
                  style={{
                    maxHeight: "100%",
                    objectFit: "contain"
                  }}
                  alt={
                    productoEncontrado.nombre
                  }
                />

              </div>

            </div>


            {/* INFORMACIÓN CENTRAL */}

            <div className="col-12 col-md-7 col-lg-5">

              <h1 className="fs-3 fw-bold mb-2">

                {productoEncontrado.nombre}

              </h1>


              <div className="d-flex align-items-center mb-4 text-warning">

                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>

                <span
                  className="
                    text-secondary
                    ms-2
                    text-decoration-underline
                  "
                  style={{
                    fontSize: "0.9rem"
                  }}
                >
                  5 Valoraciones
                </span>

              </div>


              <h5 className="fw-bold mt-4 mb-3">
                Características principales
              </h5>


              <ul
                className="list-unstyled text-secondary"
                style={{
                  fontSize: "0.95rem"
                }}
              >

                <li className="mb-1">
                  <strong>Marca:</strong>{" "}
                  {productoEncontrado.marca}
                </li>

                <li className="mb-1">
                  <strong>Modelo:</strong>{" "}
                  {productoEncontrado.modelo}
                </li>

                <li className="mb-1">
                  <strong>Condición:</strong>{" "}
                  Nuevo y sellado
                </li>

                <li className="mb-1">
                  <strong>Despacho:</strong>{" "}
                  Envío a todo Chile
                </li>

                <li className="mb-1">
                  <strong>Garantía:</strong>{" "}
                  6 meses por fallas de fábrica
                </li>

              </ul>

            </div>


            {/* PRECIO Y CARRITO */}

            <div className="col-12 col-lg-3">

              <div
                className="p-4 border rounded"
                style={{
                  backgroundColor:
                    "rgba(255,255,255,0.05)",

                  borderColor:
                    "#333"
                }}
              >

                <p
                  className="text-secondary mb-1"
                  style={{
                    fontSize: "0.85rem"
                  }}
                >
                  Precio normal
                </p>


                <p className="text-decoration-line-through text-secondary mb-1">

                  ${" "}
                  {(
                    productoEncontrado.precio *
                    1.1
                  ).toLocaleString("es-CL")}

                </p>


                <p
                  className="text-secondary mt-3 mb-1"
                  style={{
                    fontSize: "0.85rem"
                  }}
                >
                  Precio oferta
                </p>


                <h2 className="text-info fw-bold mb-4">

                  ${" "}
                  {productoEncontrado.precio.toLocaleString(
                    "es-CL"
                  )}

                </h2>


                <hr className="border-secondary" />


                <button
                  type="button"
                  className="
                    btn
                    boton-cyan
                    w-100
                    fw-bold
                    py-2
                    mb-3
                    mt-2
                  "
                  onClick={manejarAgregar}
                  disabled={agregado}
                >

                  <i className="bi bi-cart-plus me-2"></i>

                  {agregado
                    ? "¡Agregado al carrito!"
                    : "AÑADIR AL CARRITO"}

                </button>


                <div
                  className="
                    d-flex
                    align-items-center
                    justify-content-between
                    text-secondary
                  "
                  style={{
                    fontSize: "0.85rem"
                  }}
                >

                  <span>
                    Cantidad:
                  </span>


                  <input
                    type="number"
                    value={cantidad}
                    min="1"
                    className="
                      form-control
                      text-center
                      bg-dark
                      text-white
                      border-secondary
                    "
                    style={{
                      width: "70px",
                      height: "30px"
                    }}
                    onChange={(evento) => {

                      const nuevaCantidad =
                        Number(
                          evento.target.value
                        );

                      if (nuevaCantidad >= 1) {

                        setCantidad(
                          nuevaCantidad
                        );

                      }

                    }}
                  />

                </div>

              </div>

            </div>

          </div>


          {/* DESCRIPCIÓN */}

          <div className="row text-white mt-5 pt-3">

            <div className="col-12 col-lg-9">

              <h4
                className="
                  fw-bold
                  border-bottom
                  border-secondary
                  pb-2
                  mb-4
                  d-flex
                  align-items-center
                "
              >

                Descripción

                <i className="bi bi-stars ms-2 text-info"></i>

              </h4>


              <h5 className="fw-bold">

                {productoEncontrado.nombre}

              </h5>


              <p
                className="text-secondary mt-3"
                style={{
                  lineHeight: "1.7",
                  textAlign: "justify"
                }}
              >

                {
                  productoEncontrado.descripcionLarga ||
                  "Descripción no disponible para este producto."
                }

              </p>


              <h5 className="fw-bold mt-5 mb-3">

                Características destacadas

              </h5>


              <ul
                className="text-secondary"
                style={{
                  lineHeight: "1.8"
                }}
              >

                {productoEncontrado.caracteristicas?.length > 0 ? (

                  productoEncontrado.caracteristicas.map(
                    (caracteristica, indice) => (

                      <li key={indice}>
                        {caracteristica}
                      </li>

                    )
                  )

                ) : (

                  <li>
                    Características no especificadas.
                  </li>

                )}

              </ul>

            </div>

          </div>

        </div>

      </div>

    </main>

  );
}


export default DetalleProducto;