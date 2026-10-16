import { Link } from "react-router-dom";

function CompraExitosa() {

  const compraGuardada =
    localStorage.getItem("ultimaCompra");

  const compra =
    compraGuardada
      ? JSON.parse(compraGuardada)
      : null;


  if (!compra) {

    return (

      <section className="container py-5 text-center">

        <h1>
          No se encontró información
          de la compra.
        </h1>

        <Link
          to="/productos"
          className="btn boton-cyan mt-3"
        >
          VOLVER A PRODUCTOS
        </Link>

      </section>

    );

  }


  return (

    <section className="container py-5">

      <div className="compra-resultado">

        <i className="bi bi-check-circle-fill icono-compra-exitosa"></i>

        <h1>
          ¡Compra realizada con éxito!
        </h1>

        <p>
          Tu pedido fue registrado correctamente.
        </p>


        <div className="checkout-panel mt-4 text-start">

          <h2 className="checkout-titulo">
            Resumen de compra
          </h2>


          <p>
            <strong>N° de compra:</strong>
            {" "}
            {compra.id}
          </p>

          <p>
            <strong>Fecha:</strong>
            {" "}
            {compra.fecha}
          </p>

          <p>
            <strong>Cliente:</strong>
            {" "}
            {compra.cliente.nombre}
          </p>

          <p>
            <strong>Entrega:</strong>
            {" "}
            {compra.tipoEntrega === "despacho"
              ? "Despacho a domicilio"
              : "Retiro en tienda"}
          </p>


          <hr />


          {compra.productos.map(
            (producto) => (

              <div
                key={producto.id}
                className="d-flex justify-content-between mb-2"
              >

                <span>
                  {producto.nombre}
                  {" x "}
                  {producto.cantidad}
                </span>

                <span>
                  $
                  {(
                    producto.precio *
                    producto.cantidad
                  ).toLocaleString("es-CL")}
                </span>

              </div>

            )
          )}


          <hr />


          <div className="d-flex justify-content-between fs-5">

            <strong>
              Total
            </strong>

            <strong>
              $
              {compra.total.toLocaleString(
                "es-CL"
              )}
            </strong>

          </div>

        </div>


        <Link
          to="/productos"
          className="btn boton-cyan mt-4"
        >
          SEGUIR COMPRANDO
        </Link>

      </div>

    </section>

  );
}

export default CompraExitosa;