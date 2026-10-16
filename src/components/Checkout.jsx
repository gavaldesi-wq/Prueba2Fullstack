import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Checkout({
  carrito,
  usuarioActivo,
  vaciarCarrito
}) {

  const navigate = useNavigate();

  const [formulario, setFormulario] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    region: "",
    ciudad: "",
    direccion: ""
  });

  const [tipoEntrega, setTipoEntrega] =
    useState("despacho");

  const [resultadoPago, setResultadoPago] =
    useState("aprobado");

  const [mensaje, setMensaje] =
    useState("");


  useEffect(() => {

    if (usuarioActivo) {

      setFormulario({
        nombre: usuarioActivo.nombre || "",
        correo: usuarioActivo.correo || "",
        telefono: usuarioActivo.telefono || "",
        region: usuarioActivo.region || "",
        ciudad: usuarioActivo.ciudad || "",
        direccion: usuarioActivo.direccion || ""
      });

    }

  }, [usuarioActivo]);


  function manejarCambio(evento) {

    const { name, value } =
      evento.target;

    setFormulario({
      ...formulario,
      [name]: value
    });

  }


  const subtotal = carrito.reduce(
    (total, producto) =>
      total +
      producto.precio *
      (Number(producto.cantidad) || 0),
    0
  );


  const costoEnvio =
    tipoEntrega === "despacho"
      ? 4990
      : 0;


  const total =
    subtotal + costoEnvio;


  function realizarCompra(evento) {

    evento.preventDefault();

    setMensaje("");


    if (
      formulario.nombre.trim() === "" ||
      formulario.correo.trim() === "" ||
      formulario.telefono.trim() === ""
    ) {

      setMensaje(
        "Debes completar tus datos personales."
      );

      return;
    }


    if (
      tipoEntrega === "despacho" &&
      (
        formulario.region.trim() === "" ||
        formulario.ciudad.trim() === "" ||
        formulario.direccion.trim() === ""
      )
    ) {

      setMensaje(
        "Debes completar la dirección de despacho."
      );

      return;
    }


    const compra = {

      id: Date.now(),

      fecha:
        new Date().toLocaleString("es-CL"),

      cliente: formulario,

      tipoEntrega: tipoEntrega,

      productos: carrito,

      subtotal: subtotal,

      costoEnvio: costoEnvio,

      total: total
    };


    localStorage.setItem(
      "ultimaCompra",
      JSON.stringify(compra)
    );


    if (resultadoPago === "rechazado") {

      navigate("/pago-fallido");

      return;
    }


    vaciarCarrito();

    navigate("/compra-exitosa");
  }


  if (carrito.length === 0) {

    return (

      <section className="container py-5">

        <div className="text-center py-5">

          <i className="bi bi-cart-x fs-1"></i>

          <h1 className="mt-3">
            No hay productos para comprar
          </h1>

          <p>
            Agrega productos al carrito antes
            de continuar.
          </p>

          <Link
            to="/productos"
            className="btn boton-cyan mt-3"
          >
            VER PRODUCTOS
          </Link>

        </div>

      </section>

    );

  }


  return (

    <section className="container py-5">

      <div className="mb-4">

        <h1 className="titulo-seccion">
          Finalizar compra
        </h1>

        <p className="text-secondary">
          Completa tus datos y selecciona
          cómo quieres recibir tu pedido.
        </p>

      </div>


      <form onSubmit={realizarCompra}>

        <div className="row g-4">


          {/* COLUMNA IZQUIERDA */}

          <div className="col-12 col-lg-8">


            {/* DATOS PERSONALES */}

            <div className="checkout-panel mb-4">

              <h2 className="checkout-titulo">
                <i className="bi bi-person me-2"></i>
                Datos personales
              </h2>


              {usuarioActivo && (

                <div className="alert alert-info py-2">
                  Tus datos fueron cargados
                  automáticamente desde tu cuenta.
                </div>

              )}


              <div className="row g-3">

                <div className="col-12 col-md-6">

                  <label className="form-label">
                    Nombre completo
                  </label>

                  <input
                    type="text"
                    name="nombre"
                    className="form-control input-checkout"
                    value={formulario.nombre}
                    onChange={manejarCambio}
                  />

                </div>


                <div className="col-12 col-md-6">

                  <label className="form-label">
                    Correo
                  </label>

                  <input
                    type="email"
                    name="correo"
                    className="form-control input-checkout"
                    value={formulario.correo}
                    onChange={manejarCambio}
                  />

                </div>


                <div className="col-12 col-md-6">

                  <label className="form-label">
                    Teléfono
                  </label>

                  <input
                    type="text"
                    name="telefono"
                    className="form-control input-checkout"
                    value={formulario.telefono}
                    onChange={manejarCambio}
                  />

                </div>

              </div>

            </div>


            {/* ENTREGA */}

            <div className="checkout-panel mb-4">

              <h2 className="checkout-titulo">
                <i className="bi bi-truck me-2"></i>
                Método de entrega
              </h2>


              <div className="row g-3 mb-4">

                <div className="col-12 col-md-6">

                  <label className="opcion-entrega">

                    <input
                      type="radio"
                      name="entrega"
                      value="despacho"
                      checked={
                        tipoEntrega === "despacho"
                      }
                      onChange={(evento) =>
                        setTipoEntrega(
                          evento.target.value
                        )
                      }
                    />

                    <div>

                      <strong>
                        Despacho a domicilio
                      </strong>

                      <span>
                        $4.990
                      </span>

                    </div>

                  </label>

                </div>


                <div className="col-12 col-md-6">

                  <label className="opcion-entrega">

                    <input
                      type="radio"
                      name="entrega"
                      value="retiro"
                      checked={
                        tipoEntrega === "retiro"
                      }
                      onChange={(evento) =>
                        setTipoEntrega(
                          evento.target.value
                        )
                      }
                    />

                    <div>

                      <strong>
                        Retiro en tienda
                      </strong>

                      <span>
                        GRATIS
                      </span>

                    </div>

                  </label>

                </div>

              </div>


              {tipoEntrega === "despacho" && (

                <div className="row g-3">

                  <div className="col-12 col-md-6">

                    <label className="form-label">
                      Región
                    </label>

                    <input
                      type="text"
                      name="region"
                      className="form-control input-checkout"
                      value={formulario.region}
                      onChange={manejarCambio}
                    />

                  </div>


                  <div className="col-12 col-md-6">

                    <label className="form-label">
                      Ciudad
                    </label>

                    <input
                      type="text"
                      name="ciudad"
                      className="form-control input-checkout"
                      value={formulario.ciudad}
                      onChange={manejarCambio}
                    />

                  </div>


                  <div className="col-12">

                    <label className="form-label">
                      Dirección
                    </label>

                    <input
                      type="text"
                      name="direccion"
                      className="form-control input-checkout"
                      value={formulario.direccion}
                      onChange={manejarCambio}
                    />

                  </div>

                </div>

              )}

            </div>


            {/* PAGO */}

            <div className="checkout-panel">

              <h2 className="checkout-titulo">
                <i className="bi bi-credit-card me-2"></i>
                Pago
              </h2>

              <p className="text-secondary">
                Para esta evaluación simularemos
                el resultado del pago.
              </p>


              <select
                className="form-select input-checkout"
                value={resultadoPago}
                onChange={(evento) =>
                  setResultadoPago(
                    evento.target.value
                  )
                }
              >

                <option value="aprobado">
                  Simular pago aprobado
                </option>

                <option value="rechazado">
                  Simular pago rechazado
                </option>

              </select>

            </div>

          </div>


          {/* RESUMEN */}

          <div className="col-12 col-lg-4">

            <div className="checkout-panel checkout-resumen">

              <h2 className="checkout-titulo">
                Resumen
              </h2>


              {carrito.map((producto) => (

                <div
                  key={producto.id}
                  className="d-flex justify-content-between gap-3 mb-3"
                >

                  <div>

                    <strong className="d-block">
                      {producto.nombre}
                    </strong>

                    <small className="text-secondary">
                      Cantidad:
                      {" "}
                      {producto.cantidad}
                    </small>

                  </div>

                  <span>
                    $
                    {(
                      producto.precio *
                      producto.cantidad
                    ).toLocaleString("es-CL")}
                  </span>

                </div>

              ))}


              <hr />


              <div className="d-flex justify-content-between mb-2">

                <span>
                  Subtotal
                </span>

                <span>
                  $
                  {subtotal.toLocaleString(
                    "es-CL"
                  )}
                </span>

              </div>


              <div className="d-flex justify-content-between mb-3">

                <span>
                  Envío
                </span>

                <span>
                  {costoEnvio === 0
                    ? "GRATIS"
                    : `$${costoEnvio.toLocaleString(
                        "es-CL"
                      )}`}
                </span>

              </div>


              <hr />


              <div className="d-flex justify-content-between align-items-center mb-4">

                <strong>
                  Total
                </strong>

                <strong className="precio-checkout">
                  $
                  {total.toLocaleString(
                    "es-CL"
                  )}
                </strong>

              </div>


              {mensaje && (

                <div className="alert alert-danger">
                  {mensaje}
                </div>

              )}


              <button
                type="submit"
                className="btn boton-cyan w-100"
              >
                REALIZAR COMPRA
                <i className="bi bi-arrow-right ms-2"></i>
              </button>


              <Link
                to="/carrito"
                className="btn btn-outline-secondary w-100 mt-3"
              >
                Volver al carrito
              </Link>

            </div>

          </div>

        </div>

      </form>

    </section>

  );
}

export default Checkout;