import bannerRtx from "../assets/rtx5.jpg";
import productos from "../js/productosbd";
import ProductoCard from "./ProductoCard";

function Home({ agregarAlCarrito }) {
  return (
    <>
      
      <div className="container mt-4">
        <div className="banner-principal">
          <div>
            <h1>
              GEFORCE RTX 50-SERIES:
              <br />
              <span className="destacado">
                PODER ACTUALIZADO
              </span>
            </h1>

            <a
              href="#productos"
              className="btn boton-cyan mt-3 px-4"
            >
              Explorar Ahora
            </a>

            <img
              src={bannerRtx}
              alt="Banner Principal RTX 50 Series"
              className="img-fluid mt-3"
            />
          </div>
        </div>
      </div>


      
      <div className="container mt-5">
        <div className="row g-4 text-center">

          <div className="col-6 col-md-3">
            <div className="beneficio">
              <i className="bi bi-truck"></i>

              <p className="titulo-beneficio">
                Envío a Todo Chile
              </p>

              <p className="texto-pagina">
                Despacho rápido y seguimiento en línea.
              </p>
            </div>
          </div>


          <div className="col-6 col-md-3">
            <div className="beneficio">
              <i className="bi bi-shield-check"></i>

              <p className="titulo-beneficio">
                Compra 100% Segura
              </p>

              <p className="texto-pagina">
                Tus datos siempre protegidos.
              </p>
            </div>
          </div>


          <div className="col-6 col-md-3">
            <div className="beneficio">
              <i className="bi bi-credit-card"></i>

              <p className="titulo-beneficio">
                Múltiples Medios de Pago
              </p>

              <p className="texto-pagina">
                Tarjetas, transferencia y más.
              </p>
            </div>
          </div>


          <div className="col-6 col-md-3">
            <div className="beneficio">
              <i className="bi bi-headset"></i>

              <p className="titulo-beneficio">
                Soporte Técnico Experto
              </p>

              <p className="texto-pagina">
                Te ayudamos a elegir tus componentes.
              </p>
            </div>
          </div>

        </div>
      </div>


      {/* PRODUCTOS DESTACADOS */}
      <div
        className="container mt-5 mb-5"
        id="productos"
      >
        <h2 className="titulo-seccion">
          Productos Destacados
        </h2>

        <div className="row g-4">

          {productos
            .filter((producto) => producto.destacado)
            .map((producto) => (

              <ProductoCard
                key={producto.id}
                producto={producto}
                agregarAlCarrito={agregarAlCarrito}
              />

            ))}

        </div>
      </div>
    </>
  );
}

export default Home;