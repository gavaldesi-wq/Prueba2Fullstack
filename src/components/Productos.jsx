import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import productos from "../js/productosbd";
import ProductoCard from "./ProductoCard";


function Productos({ agregarAlCarrito }) {


  const [searchParams, setSearchParams] = useSearchParams();

  const textoBusqueda = searchParams.get("buscar") || "";

  const categoriaSeleccionada =
    searchParams.get("categoria") || "Todas";

  const soloOfertas =
    searchParams.get("ofertas") === "true";


  /* =========================================
     ORDEN DE LOS PRODUCTOS
  ========================================= */

  const [orden, setOrden] = useState("normal");


  /* =========================================
     CATEGORÍAS DISPONIBLES
  ========================================= */

  const categorias = [
    "Todas",
    "Tarjetas Gráficas",
    "Procesadores",
    "Memoria RAM",
    "SSD",
    "PCs Armados",
    "Notebooks",
    "Placas Madre",
    "Fuentes de Poder",
    "Refrigeración",
    "Ventiladores"
  ];


  /* =========================================
     CAMBIAR CATEGORÍA
  ========================================= */

  function cambiarCategoria(categoria) {

    const nuevosParametros =
      new URLSearchParams(searchParams);


    if (categoria === "Todas") {
      nuevosParametros.delete("categoria");
    }
    else {
      nuevosParametros.set("categoria", categoria);
    }


    setSearchParams(nuevosParametros);
  }


  /* =========================================
     ACTIVAR / DESACTIVAR OFERTAS
  ========================================= */

  function cambiarFiltroOfertas() {

    const nuevosParametros =
      new URLSearchParams(searchParams);


    if (soloOfertas) {
      nuevosParametros.delete("ofertas");
    }
    else {
      nuevosParametros.set("ofertas", "true");
    }


    setSearchParams(nuevosParametros);
  }


  /* =========================================
     COPIA DE LOS PRODUCTOS
  ========================================= */

  let listaProductos = [...productos];


  /* =========================================
     FILTRO DEL BUSCADOR
  ========================================= */

  if (textoBusqueda !== "") {

    const texto =
      textoBusqueda.toLowerCase();


    listaProductos =
      listaProductos.filter((producto) => {

        const nombre =
          producto.nombre.toLowerCase();

        const categoria =
          producto.categoria.toLowerCase();

        const marca =
          (producto.marca || "").toLowerCase();


        return (
          nombre.includes(texto) ||
          categoria.includes(texto) ||
          marca.includes(texto)
        );

      });
  }


  /* =========================================
     FILTRO POR CATEGORÍA
  ========================================= */

  if (categoriaSeleccionada !== "Todas") {

    listaProductos =
      listaProductos.filter((producto) => {

        return (
          producto.categoria ===
          categoriaSeleccionada
        );

      });
  }


  /* =========================================
     FILTRO DE OFERTAS
  ========================================= */

  if (soloOfertas) {

    listaProductos =
      listaProductos.filter((producto) => {

        return producto.oferta === true;

      });
  }


  /* =========================================
     ORDENAR POR PRECIO
  ========================================= */

  if (orden === "menorPrecio") {

    listaProductos.sort((a, b) => {
      return a.precio - b.precio;
    });

  }


  if (orden === "mayorPrecio") {

    listaProductos.sort((a, b) => {
      return b.precio - a.precio;
    });

  }


  /* =========================================
     INTERFAZ
  ========================================= */

  return (

    <div className="container mt-5 mb-5">

      <h1 className="titulo-seccion titulo-pagina-productos">
        Productos
      </h1>


      <div className="row">


        {/* ===============================
            BARRA DE FILTROS
        =============================== */}

        <div className="col-12 col-lg-3 mb-4">

          <div className="panel-filtros-productos">


            <h3 className="titulo-filtros">
              Filtros
            </h3>


            <p className="subtitulo-filtro">
              Categorías
            </p>


            <div className="lista-categorias">

              {categorias.map((categoria) => (

                <button
                  key={categoria}
                  type="button"
                  className={
                    categoriaSeleccionada === categoria
                      ? "boton-categoria activo"
                      : "boton-categoria"
                  }
                  onClick={() =>
                    cambiarCategoria(categoria)
                  }
                >

                  {categoria}

                </button>

              ))}

            </div>


            <hr className="separador-filtros" />


            <label className="filtro-oferta">

              <input
                type="checkbox"
                checked={soloOfertas}
                onChange={cambiarFiltroOfertas}
              />

              Solo productos en oferta

            </label>

          </div>

        </div>


        {/* ===============================
            PRODUCTOS
        =============================== */}

        <div className="col-12 col-lg-9">


          <div className="barra-productos">

            <div>

              <p className="cantidad-productos">

                {listaProductos.length}
                {" "}
                productos encontrados

              </p>

            </div>


            <select
              className="selector-orden"
              value={orden}
              onChange={(evento) =>
                setOrden(evento.target.value)
              }
            >

              <option value="normal">
                Orden predeterminado
              </option>

              <option value="menorPrecio">
                Precio: menor a mayor
              </option>

              <option value="mayorPrecio">
                Precio: mayor a menor
              </option>

            </select>

          </div>


          {listaProductos.length > 0 ? (

            <div className="row g-4">

              {listaProductos.map((producto) => (

                <ProductoCard
                  key={producto.id}
                  producto={producto}
                  agregarAlCarrito={
                    agregarAlCarrito
                  }
                />

              ))}

            </div>

          ) : (

            <div className="sin-productos">

              <i className="bi bi-search"></i>

              <h3>
                No encontramos productos
              </h3>

              <p>
                Intenta cambiar los filtros o realizar otra búsqueda.
              </p>

            </div>

          )}


        </div>

      </div>

    </div>
  );
}


export default Productos;