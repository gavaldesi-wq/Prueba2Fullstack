import { Link } from "react-router-dom";

function Carrito({
  carrito,
  eliminarDelCarrito,
  aumentarCantidad,
  disminuirCantidad
}) {

  const cantidadProductos = carrito.reduce(
    (total, producto) =>
      total + (Number(producto.cantidad) || 0),
    0
  );

  const total = carrito.reduce(
    (acumulado, producto) =>
      acumulado +
      producto.precio * (Number(producto.cantidad) || 0),
    0
  );

  const totalFormateado =
    total.toLocaleString("es-CL");

  if (carrito.length === 0) {
    return (
      <section className="pagina-carrito">
        <div className="container">

          <div className="carrito-vacio">

            <i className="bi bi-cart3"></i>

            <h1>Tu carrito está vacío</h1>

            <p>
              Agrega productos para comenzar tu compra.
            </p>

            <Link
              to="/productos"
              className="boton-carrito-principal"
            >
              Ver productos
              <i className="bi bi-arrow-right"></i>
            </Link>

          </div>

        </div>
      </section>
    );
  }

  return (
    <section className="pagina-carrito">

      <div className="container">

        <div className="encabezado-carrito">

          <div>
            <h1>Carrito de Compras</h1>

            <p>
              Revisa tus productos y continúa con tu compra.
            </p>
          </div>

        </div>


        <div className="layout-carrito">


          <div className="carrito-productos">

            <div className="cabecera-carrito-productos">

              <h2>
                <i className="bi bi-cart3"></i>
                Tu Carrito
              </h2>

              <span>
                {cantidadProductos} productos
              </span>

            </div>


            <div className="lista-carrito-productos">

              {carrito.map((producto) => {

                const precio =
                  producto.precio.toLocaleString("es-CL");

                const subtotal =
                  (
                    producto.precio *
                    (Number(producto.cantidad) || 0)
                  ).toLocaleString("es-CL");

                return (

                  <div
                    className="producto-carrito-nuevo"
                    key={producto.id}
                  >

                    <div className="carrito-producto-info">

                      <img
                        src={producto.imagen}
                        alt={producto.nombre}
                        className="carrito-producto-imagen"
                      />

                      <div>

                        <h3>
                          {producto.nombre}
                        </h3>

                        <span>
                          {producto.categoria}
                        </span>

                      </div>

                    </div>


                    <div className="carrito-precio">
                      ${precio}
                    </div>


                    <div className="control-cantidad-carrito">

                      <button
                        type="button"
                        onClick={() =>
                          disminuirCantidad(producto.id)
                        }
                      >
                        −
                      </button>

                      <span>
                        {producto.cantidad}
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          aumentarCantidad(producto.id)
                        }
                      >
                        +
                      </button>

                    </div>


                    <div className="carrito-subtotal">
                      ${subtotal}
                    </div>


                    <button
                      type="button"
                      className="boton-eliminar-carrito"
                      onClick={() =>
                        eliminarDelCarrito(producto.id)
                      }
                    >
                      <i className="bi bi-trash3"></i>
                    </button>

                  </div>

                );

              })}

            </div>


            <div className="carrito-seguir">

              <Link
                to="/productos"
                className="boton-seguir-comprando"
              >
                <i className="bi bi-arrow-left"></i>
                Seguir comprando
              </Link>

            </div>

          </div>


          <aside className="resumen-carrito-nuevo">

            <div className="titulo-resumen-carrito">

              <i className="bi bi-receipt"></i>

              <h2>
                Resumen
              </h2>

            </div>


            <div className="fila-resumen">

              <span>
                Subtotal ({cantidadProductos} productos)
              </span>

              <strong>
                ${totalFormateado}
              </strong>

            </div>


            <div className="fila-resumen">

              <span>
                Envío
              </span>

              <span className="texto-envio">
                Calculado en el siguiente paso
              </span>

            </div>


            <div className="separador-resumen"></div>


            <div className="total-carrito-nuevo">

              <span>
                Total
              </span>

              <strong>
                ${totalFormateado}
              </strong>

            </div>


            <Link
              to="/checkout"
              className="boton-carrito-principal"
            >
              CONTINUAR COMPRA
              <i className="bi bi-arrow-right"></i>
            </Link>


            <div className="seguridad-carrito">

              <i className="bi bi-shield-check"></i>

              <div>
                <strong>
                  Compra segura
                </strong>

                <span>
                  Tus datos están protegidos.
                </span>
              </div>

            </div>

          </aside>

        </div>

      </div>

    </section>
  );
}

export default Carrito;