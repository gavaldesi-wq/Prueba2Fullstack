import { Link } from "react-router-dom";


function ProductoCard({ producto, agregarAlCarrito }) {

  const precioFormateado =
    producto.precio.toLocaleString("es-CL");

  const precioAnteriorFormateado =
    producto.precioAnterior?.toLocaleString("es-CL");


  return (

    <div className="col-12 col-sm-6 col-lg-3">

      <div className="tarjeta-producto">


        <div className="contenedor-imagen-producto">

          {producto.oferta && (
            <span className="etiqueta-oferta">
              Oferta
            </span>
          )}


          <Link to={`/producto/${producto.id}`}>

            <img
              src={producto.imagen}
              alt={producto.nombre}
            />

          </Link>

        </div>


        <div className="contenido-producto">

          <h3 className="nombre-producto">
            {producto.nombre}
          </h3>


          <span className="texto-desde">
            Desde:
          </span>


          {producto.oferta && (

            <p className="precio-anterior">
              ${precioAnteriorFormateado}
            </p>

          )}


          <p className="precio-producto">
            ${precioFormateado}
          </p>


          <p className="descripcion-producto">
            {producto.descripcionCorta}
          </p>


          <Link
            to={`/producto/${producto.id}`}
            className="boton-ver-producto"
          >
            Ver producto
          </Link>


          <button
            type="button"
            className="boton-agregar-card"
            onClick={() =>
              agregarAlCarrito(producto)
            }
          >

            <i className="bi bi-cart3"></i>

            Agregar al carrito

          </button>

        </div>

      </div>

    </div>

  );
}


export default ProductoCard;