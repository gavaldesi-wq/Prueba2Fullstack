import { Link, NavLink } from "react-router-dom";

function Header({
  cantidadCarrito,
  usuarioActivo,
  cerrarSesion
}) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark barra-navegacion py-2">
      <div className="container-fluid">

     
        <Link className="navbar-brand" to="/">
          <span className="texto-logo fs-4">
            PC<span className="destacado">-SHOP</span>
          </span>

          <span className="subtitulo-logo">
            PC COMPONENTS
          </span>
        </Link>


        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
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
                className={({ isActive }) =>
                  isActive
                    ? "nav-link enlace-nav active"
                    : "nav-link enlace-nav"
                }
              >
                Home
              </NavLink>
            </li>


            <li className="nav-item">
              <NavLink
                to="/productos"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link enlace-nav active"
                    : "nav-link enlace-nav"
                }
              >
                Productos
              </NavLink>
            </li>


            <li className="nav-item">
              <NavLink
                to="/nosotros"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link enlace-nav active"
                    : "nav-link enlace-nav"
                }
              >
                Nosotros
              </NavLink>
            </li>


            <li className="nav-item">
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link enlace-nav active"
                    : "nav-link enlace-nav"
                }
              >
                Blogs
              </NavLink>
            </li>


            <li className="nav-item">
              <NavLink
                to="/contacto"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link enlace-nav active"
                    : "nav-link enlace-nav"
                }
              >
                Contacto
              </NavLink>
            </li>

          </ul>


          {/* USUARIO */}
          <div className="d-flex align-items-center me-4 enlaces-usuario">

            {usuarioActivo ? (

              <>
                <span className="me-3">
                  Hola, {usuarioActivo.nombre}
                </span>

                <button
                  type="button"
                  className="boton-cerrar-sesion"
                  onClick={cerrarSesion}
                >
                  Cerrar sesión
                </button>
              </>

            ) : (

              <>
                <NavLink
                  to="/login"
                  className="me-3"
                >
                  Iniciar sesión
                </NavLink>

                <NavLink to="/registro">
                  Registrar usuario
                </NavLink>
              </>

            )}

          </div>


          {/* CARRITO ORIGINAL */}
          <Link
            to="/carrito"
            className="enlace-carrito d-flex align-items-center"
          >

            <span className="position-relative me-1">

              <i className="bi bi-cart3 fs-4"></i>

              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill contador-carrito">
                {cantidadCarrito}
              </span>

            </span>

            <span>
              Carrito ({cantidadCarrito})
            </span>

          </Link>

        </div>
      </div>
    </nav>
  );
}

export default Header;