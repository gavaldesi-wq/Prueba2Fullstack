import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footerx">
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-lg-4">
            <div className="footerx-marca">
              <h2 className="footerx-logo">
                PC-<span>SHOP</span>
              </h2>

              <p className="footerx-descripcion">
                Componentes, periféricos y equipos para gaming,
                productividad y actualización de tu PC.
              </p>

              <div className="footerx-beneficios">
                <span>
                  <i className="bi bi-truck"></i>
                  Despachos a todo Chile
                </span>

                <span>
                  <i className="bi bi-shield-check"></i>
                  Compra segura
                </span>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-2">
            <h3 className="footerx-titulo">
              Tienda
            </h3>

            <div className="footerx-links">
              <Link to="/">Inicio</Link>
              <Link to="/productos">Productos</Link>
              <Link to="/carrito">Carrito</Link>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-2">
            <h3 className="footerx-titulo">
              PC-SHOP
            </h3>

            <div className="footerx-links">
              <Link to="/nosotros">Nosotros</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/contacto">Contacto</Link>
            </div>
          </div>

          <div className="col-12 col-md-4 col-lg-4">
            <h3 className="footerx-titulo">
              Tu cuenta
            </h3>

            <div className="footerx-links">
              <Link to="/login">
                <i className="bi bi-person"></i>
                Iniciar sesión
              </Link>

              <Link to="/registro">
                <i className="bi bi-person-plus"></i>
                Crear cuenta
              </Link>

              <Link to="/contacto">
                <i className="bi bi-headset"></i>
                Centro de contacto
              </Link>
            </div>
          </div>
        </div>

        <div className="footerx-linea"></div>

        <div className="footerx-bottom">
          <p>
            © 2026 PC-SHOP. Proyecto académico Fullstack 2.
          </p>

          <div className="footerx-redes">
            <a href="#" aria-label="Instagram">
              <i className="bi bi-instagram"></i>
            </a>

            <a href="#" aria-label="Facebook">
              <i className="bi bi-facebook"></i>
            </a>

            <a href="#" aria-label="Discord">
              <i className="bi bi-discord"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;