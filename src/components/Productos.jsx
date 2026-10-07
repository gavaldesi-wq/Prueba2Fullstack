import productos from "../js/productosbd";
import ProductoCard from "./ProductoCard";

function Productos({ agregarAlCarrito }) {

  return (
    <div className="container mt-5 mb-5">

      <h1 className="titulo-seccion">
        Todos los Productos
      </h1>

      <p className="texto-pagina mb-4">
        Encuentra todos nuestros componentes disponibles.
      </p>

      <div className="row g-4">

        {productos.map((producto) => (

          <ProductoCard
            key={producto.id}
            producto={producto}
            agregarAlCarrito={agregarAlCarrito}
          />

        ))}

      </div>

    </div>
  );
}

export default Productos;