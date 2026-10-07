
function ProductoCard({ producto, agregarAlCarrito }) {

  return (
    <div className="col-12 col-md-6 col-lg-4">

      <div className="tarjeta-producto p-3 text-center h-100">

        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="img-fluid"
        />

        <p className="producto mt-3 mb-1">
          {producto.nombre}
        </p>

        <p className="precio mb-1">
          $ {producto.precio.toLocaleString("es-CL")}
        </p>

        <p className="stock-producto">
          Stock: {producto.stock}
        </p>

        <button
          type="button"
          className="btn boton-cyan w-100"
          onClick={() => agregarAlCarrito(producto)}
        >
          <i className="bi bi-cart3 me-2"></i>
          AÑADIR AL CARRITO
        </button>

      </div>

    </div>
  );
}

export default ProductoCard;