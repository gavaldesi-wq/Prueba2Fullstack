import { Link } from "react-router-dom";
import productos from "../js/productosbd";
import ProductoCard from "./ProductoCard";

import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.png";
import bannerNotebooks from "../assets/banner-notebooks.png";


const banners = [
  {
    id: 1,
    imagen: banner1,
    destino: "/productos?buscar=RTX",
    alt: "GeForce RTX 50 Series"
  },
  {
    id: 2,
    imagen: banner2,
    destino: "/contacto",
    alt: "Armamos tu PC ideal"
  },
  {
    id: 3,
    imagen: banner3,
    destino: "/productos?buscar=Procesadores",
    alt: "CPUs de alto rendimiento"
  }
];


function Home({ agregarAlCarrito }) {

  const productosDestacados = productos
    .filter((producto) => producto.destacado)
    .slice(0, 8);

  const notebooks = productos
    .filter((producto) => producto.categoria === "Notebooks")
    .slice(0, 4);


  return (
    <main>


      {/* =================================================
          CARRUSEL PRINCIPAL
      ================================================= */}

      <section className="seccion-carrusel">

        <div className="container">

          <div
            id="carouselHome"
            className="carousel slide carrusel-home"
            data-bs-ride="carousel"
            data-bs-interval="5000"
          >


            {/* INDICADORES */}

            <div className="carousel-indicators">

              {banners.map((banner, index) => (

                <button
                  key={banner.id}
                  type="button"
                  data-bs-target="#carouselHome"
                  data-bs-slide-to={index}
                  className={index === 0 ? "active" : ""}
                  aria-current={index === 0 ? "true" : undefined}
                  aria-label={`Banner ${index + 1}`}
                />

              ))}

            </div>


            {/* IMÁGENES */}

            <div className="carousel-inner">

              {banners.map((banner, index) => (

                <div
                  key={banner.id}
                  className={
                    index === 0
                      ? "carousel-item active"
                      : "carousel-item"
                  }
                >

                  <Link
                    to={banner.destino}
                    className="d-block"
                  >

                    <img
                      src={banner.imagen}
                      alt={banner.alt}
                      className="banner-carrusel"
                    />

                  </Link>

                </div>

              ))}

            </div>


            {/* FLECHA IZQUIERDA */}

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselHome"
              data-bs-slide="prev"
            >

              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>

              <span className="visually-hidden">
                Anterior
              </span>

            </button>


            {/* FLECHA DERECHA */}

            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselHome"
              data-bs-slide="next"
            >

              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>

              <span className="visually-hidden">
                Siguiente
              </span>

            </button>

          </div>

        </div>

      </section>


      {/* =================================================
          BENEFICIOS
      ================================================= */}

      <section className="container my-5">

        <div className="row g-4 text-center">


          <div className="col-12 col-md-6 col-lg-3">

            <div className="beneficio">

              <i className="bi bi-truck"></i>

              <p className="titulo-beneficio">
                Envío a Todo Chile
              </p>

              <p className="texto-pagina mb-0">
                Despacho rápido y seguimiento en línea.
              </p>

            </div>

          </div>


          <div className="col-12 col-md-6 col-lg-3">

            <div className="beneficio">

              <i className="bi bi-shield-check"></i>

              <p className="titulo-beneficio">
                Compra 100% Segura
              </p>

              <p className="texto-pagina mb-0">
                Tus datos siempre protegidos.
              </p>

            </div>

          </div>


          <div className="col-12 col-md-6 col-lg-3">

            <div className="beneficio">

              <i className="bi bi-credit-card"></i>

              <p className="titulo-beneficio">
                Múltiples Medios de Pago
              </p>

              <p className="texto-pagina mb-0">
                Tarjetas, transferencia y más.
              </p>

            </div>

          </div>


          <div className="col-12 col-md-6 col-lg-3">

            <div className="beneficio">

              <i className="bi bi-headset"></i>

              <p className="titulo-beneficio">
                Soporte Técnico Experto
              </p>

              <p className="texto-pagina mb-0">
                Te ayudamos a elegir tus componentes.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          PRODUCTOS DESTACADOS
      ================================================= */}

      <section className="container mb-5">


        <div className="encabezado-destacados">

          <h2 className="titulo-productos-destacados">
            Productos Destacados
          </h2>

          <Link
            to="/productos"
            className="boton-ver-productos"
          >
            Ver todos

            <i className="bi bi-arrow-right"></i>
          </Link>

        </div>


        <div className="row g-4">

          {productosDestacados.map((producto) => (

            <ProductoCard
              key={producto.id}
              producto={producto}
              agregarAlCarrito={agregarAlCarrito}
            />

          ))}

        </div>

      </section>


      {/* =================================================
          BANNER NOTEBOOKS
      ================================================= */}

      <section className="container seccion-banner-notebooks">

        <Link
          to="/productos?categoria=Notebooks"
          className="enlace-banner-notebooks"
        >

          <img
            src={bannerNotebooks}
            alt="Notebooks para gaming y productividad"
            className="banner-notebooks"
          />

        </Link>

      </section>


      {/* =================================================
          NOTEBOOKS
      ================================================= */}

      <section className="container mb-5">


        <div className="encabezado-destacados">

          <h2 className="titulo-productos-destacados">
            Notebooks Destacados
          </h2>


          <Link
            to="/productos?categoria=Notebooks"
            className="boton-ver-productos"
          >
            Ver notebooks

            <i className="bi bi-arrow-right"></i>
          </Link>

        </div>


        <div className="row g-4">

          {notebooks.map((producto) => (

            <ProductoCard
              key={producto.id}
              producto={producto}
              agregarAlCarrito={agregarAlCarrito}
            />

          ))}

        </div>

      </section>


    </main>
  );
}

export default Home;