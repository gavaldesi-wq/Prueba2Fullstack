import productos from "../js/productosbd";
import ProductoCard from "./ProductoCard";
import { useSearchParams } from "react-router-dom";
function Productos({ agregarAlCarrito }) {

  const [searchParams] = useSearchParams();
  const textoBusqueda =
  searchParams.get("buscar") || "";

  const productosFiltrados =
  productos.filter((producto) => {

    const texto =
      textoBusqueda.toLowerCase();

    return (
      producto.nombre
        .toLowerCase()
        .includes(texto)
      ||
      producto.categoria
        .toLowerCase()
        .includes(texto)
      ||
      (producto.marca || "")
        .toLowerCase()
        .includes(texto)
    );
  });

  return (
    <div className="container mt-5 mb-5">

      <h1 className="titulo-seccion">
        Todos los Productos
      </h1>

      <p className="texto-pagina mb-4">
        Encuentra todos nuestros componentes disponibles.
      </p>

      <div className="row g-4">

        {productosFiltrados.map((producto) => (

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