function Carrito({
  carrito,
  eliminarDelCarrito,
  aumentarCantidad,
  disminuirCantidad
}) {

  const total = carrito.reduce(
    (total, producto) =>
      total + producto.precio * producto.cantidad,
    0
  );


  return (
    <div className="container mt-5 mb-5">

      <h1 className="titulo-seccion">
        Carrito de Compras
      </h1>


      {carrito.length === 0 ? (

        <div className="text-center mt-5">

          <i className="bi bi-cart-x fs-1"></i>

          <h3 className="mt-3">
            Tu carrito está vacío
          </h3>

          <p className="texto-pagina">
            Agrega productos para comenzar tu compra.
          </p>

        </div>

      ) : (

        <>
          <div className="table-responsive mt-4">

            <table className="table table-dark align-middle">

              <thead>

                <tr>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Subtotal</th>
                  <th></th>
                </tr>

              </thead>

              <tbody>

                {carrito.map((producto) => (

                  <tr key={producto.id}>

                    <td>

                      <div className="d-flex align-items-center">

                        <img
                          src={producto.imagen}
                          alt={producto.nombre}
                          width="80"
                          className="me-3"
                        />

                        <span>
                          {producto.nombre}
                        </span>

                      </div>

                    </td>


                    <td>
                      $
                      {producto.precio.toLocaleString(
                        "es-CL"
                      )}
                    </td>


                    <td>

                      <div className="d-flex align-items-center gap-2">

                        <button
                          className="btn btn-sm boton-cyan"
                          onClick={() =>
                            disminuirCantidad(producto.id)
                          }
                        >
                          -
                        </button>


                        <span>
                          {producto.cantidad}
                        </span>


                        <button
                          className="btn btn-sm boton-cyan"
                          onClick={() =>
                            aumentarCantidad(producto.id)
                          }
                        >
                          +
                        </button>

                      </div>

                    </td>


                    <td>

                      $
                      {(
                        producto.precio *
                        producto.cantidad
                      ).toLocaleString("es-CL")}

                    </td>


                    <td>

                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() =>
                          eliminarDelCarrito(producto.id)
                        }
                      >
                        <i className="bi bi-trash"></i>
                      </button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>


          <div className="d-flex justify-content-end mt-4">

            <div className="text-end">

              <h3>
                Total: $
                {total.toLocaleString("es-CL")}
              </h3>

              <button className="btn boton-cyan mt-3 px-5">
                CONTINUAR COMPRA
              </button>

            </div>

          </div>

        </>

      )}

    </div>
  );
}

export default Carrito;