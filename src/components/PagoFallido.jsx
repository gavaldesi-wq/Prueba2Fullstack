import { Link } from "react-router-dom";

function PagoFallido() {

  return (

    <section className="container py-5">

      <div className="compra-resultado">

        <i className="bi bi-x-circle-fill icono-pago-fallido"></i>

        <h1>
          No pudimos procesar tu pago
        </h1>

        <p>
          El pago fue rechazado.
          Tus productos siguen en el carrito.
        </p>


        <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mt-4">

          <Link
            to="/checkout"
            className="btn boton-cyan"
          >
            INTENTAR NUEVAMENTE
          </Link>

          <Link
            to="/carrito"
            className="btn btn-outline-secondary"
          >
            VOLVER AL CARRITO
          </Link>

        </div>

      </div>

    </section>

  );
}

export default PagoFallido;