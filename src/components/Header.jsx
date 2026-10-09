import { Link, NavLink, useNavigate} from "react-router-dom";
import { useState } from "react";
import LoginPanel from "./loginPanel";
import Logo from "../assets/logo.png";

function Header({
  cantidadCarrito,
  usuarioActivo,
  iniciarSesion,
  cerrarSesion
}) {

  const navigate = useNavigate();
  const [mostrarLogin, setMostrarLogin] = useState(false);
  const [busqueda, setBusqueda] = useState("");

  function alternarLogin() {
  setMostrarLogin(!mostrarLogin); [/*ESTO ES PARA INVERTIR EL BOLEAN, OSEA ANTES QUE ESTABA EN FALSE AHORA ESTARA EN TRUE*/]
  }

  function cerrarPanelLogin() {
  setMostrarLogin(false); [/*ESTO ES PARA QUE SE CIERRE EL PANEL CUANDO EL USUARIO YA ESTA INICIADO EN LA SESION OMAIFAKINGOD*/]
}

  function manejarBusqueda(evento) {
    evento.preventDefault();
    if (busqueda.trim() === "") {
      navigate("/productos");
      return;
    }
    navigate(`/productos?buscar=${encodeURIComponent(
      busqueda.trim())}`)
  }


  return (

    <header className="header-principal">


      {/* BARRA SUPERIOR */}

      <div className="barra-anuncio">

      <div className="anuncio-movimiento">

        <div className="grupo-anuncio">
          <span>¡Retira GRATIS tus compras en nuestra tienda!</span>
          <span>¡Retira GRATIS tus compras en nuestra tienda!</span>
          <span>¡Retira GRATIS tus compras en nuestra tienda!</span>
          <span>¡Retira GRATIS tus compras en nuestra tienda!</span>
        </div>

        <div className="grupo-anuncio">
          <span>¡Retira GRATIS tus compras en nuestra tienda!</span>
          <span>¡Retira GRATIS tus compras en nuestra tienda!</span>
          <span>¡Retira GRATIS tus compras en nuestra tienda!</span>
          <span>¡Retira GRATIS tus compras en nuestra tienda!</span>
        </div>

      </div>

    </div>


      {/* HEADER PRINCIPAL */}

      <div className="barra-principal">

        <div className="container-fluid px-4 px-xl-5">

          <div className="row align-items-center g-3">


            {/* LOGO */}

            <Link to="/" className="navbar-brand logo-header-completo">

              <img
                src={Logo}
                alt="Logo PC-SHOP"
                className="logo-icono-header"
              />

              <div className="logo-textos">

                <span className="texto-logo">
                  PC-<span className="destacado">SHOP</span>
                </span>

                <span className="subtitulo-logo">
                  PC COMPONENTS
                </span>

              </div>

            </Link>


            {/* BUSCADOR */}

            <div className="col-12 col-lg-7">
              <form
                className="buscador-header"
                onSubmit={manejarBusqueda}
              >
                <input
                  type="search"
                  placeholder="Busca productos, componentes y marcas"
                  value={busqueda}
                  onChange={(evento) =>
                    setBusqueda(
                      evento.target.value
                    )
                  }
                />


                <button
                  type="submit"
                  aria-label="Buscar"
                >
                  <i className="bi bi-search"></i>
                </button>

              </form>

            </div>


            {/* USUARIO Y CARRITO */}

            <div className="col-12 col-lg-3">
              <div className="acciones-header">
                <div className="usuario-header">
                  {usuarioActivo ? (

                    <div className="usuario-conectado">
                      <i className="bi bi-person fs-4"></i>
                      <div>
                        <span className="texto-hola">
                          Hola,
                        </span>
                        <span className="nombre-usuario">
                          {usuarioActivo.nombre}
                        </span>

                      </div>


                      <button
                        type="button"
                        className="boton-cerrar-sesion"
                        onClick={cerrarSesion}
                      >
                        Salir
                      </button>

                    </div>

                  ) : (

                    <button
                      type="button"
                      className="boton-login-header"
                      onClick={alternarLogin}
                    >
                      <i className="bi bi-person fs-4"></i>
                      <div>
                        <span className="texto-hola">
                          Hola!
                        </span>
                        <span className="texto-iniciar">
                          Inicia sesión
                        </span>
                      </div>
                    </button>
                  )}
                  {!usuarioActivo &&
                    mostrarLogin && (
                      <LoginPanel
                        iniciarSesion={
                          iniciarSesion
                        }
                        cerrarPanel={
                          cerrarPanelLogin
                        }
                      />
                    )}
                </div>

                <div className="redes-header">

                <a
                  href="#"
                  aria-label="WhatsApp"
                >
                  <i className="bi bi-whatsapp"></i>
                </a>

                <a
                  href="#"
                  aria-label="Facebook"
                >
                  <i className="bi bi-facebook"></i>
                </a>

                <a
                  href="#"
                  aria-label="Instagram"
                >
                  <i className="bi bi-instagram"></i>
                </a>

              </div>

              <div className="separador-acciones"></div>


                <div className="separador-acciones"></div>

                <Link
                  to="/carrito"
                  className="enlace-carrito-header"
                >
                  <span className="position-relative">
                    <i className="bi bi-cart3 fs-4"></i>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill contador-carrito">
                      {cantidadCarrito}
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MENÚ */}

      <nav className="navbar navbar-expand-lg navbar-dark barra-navegacion py-2">

        <div className="container-fluid px-4">

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >

            <span className="navbar-toggler-icon"></span>

          </button>


          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <NavLink
                  to="/"
                  end
                  className="nav-link enlace-nav"
                >
                  Home
                </NavLink>
              </li>


              <li className="nav-item">
                <NavLink
                  to="/productos"
                  className="nav-link enlace-nav"
                >
                  Productos
                </NavLink>
              </li>


              <li className="nav-item">
                <NavLink
                  to="/nosotros"
                  className="nav-link enlace-nav"
                >
                  Nosotros
                </NavLink>
              </li>


              <li className="nav-item">
                <NavLink
                  to="/blog"
                  className="nav-link enlace-nav"
                >
                  Blogs
                </NavLink>
              </li>


              <li className="nav-item">
                <NavLink
                  to="/contacto"
                  className="nav-link enlace-nav"
                >
                  Contacto
                </NavLink>
              </li>

            </ul>

          </div>

        </div>

      </nav>

    </header>
  );
}

export default Header;

