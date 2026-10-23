function Nosotros() {
  return (
    <main className="nosotrosx">
      <div className="container">

        <section className="nosotrosx-hero">
          <span className="nosotrosx-etiqueta">
            PC-SHOP
          </span>

          <h1 className="nosotrosx-titulo">
            Sobre Nosotros
          </h1>

          <p className="nosotrosx-texto">
            En PC-SHOP reunimos componentes, periféricos y equipos pensados
            para quienes buscan armar, mejorar o renovar su computador.
            Nuestro objetivo es ofrecer una experiencia simple, clara y
            enfocada en encontrar el hardware adecuado para cada necesidad.
          </p>
        </section>


        <section className="nosotrosx-valores">
          <div className="row g-4">

            <div className="col-12 col-md-4">
              <article className="nosotrosx-card">

                <div className="nosotrosx-icono">
                  <i className="bi bi-cpu"></i>
                </div>

                <h2 className="nosotrosx-card-titulo">
                  Hardware seleccionado
                </h2>

                <p className="nosotrosx-card-texto">
                  Organizamos nuestro catálogo por categorías para facilitar
                  la búsqueda de componentes y equipos.
                </p>

              </article>
            </div>


            <div className="col-12 col-md-4">
              <article className="nosotrosx-card">

                <div className="nosotrosx-icono">
                  <i className="bi bi-cart-check"></i>
                </div>

                <h2 className="nosotrosx-card-titulo">
                  Compra simple
                </h2>

                <p className="nosotrosx-card-texto">
                  Diseñamos una navegación directa, con carrito, registro y
                  checkout para completar una compra de forma sencilla.
                </p>

              </article>
            </div>


            <div className="col-12 col-md-4">
              <article className="nosotrosx-card">

                <div className="nosotrosx-icono">
                  <i className="bi bi-lightning-charge"></i>
                </div>

                <h2 className="nosotrosx-card-titulo">
                  Enfoque en rendimiento
                </h2>

                <p className="nosotrosx-card-texto">
                  Priorizamos productos orientados a gaming, productividad y
                  actualización de computadores modernos.
                </p>

              </article>
            </div>

          </div>
        </section>


        <section className="nosotrosx-equipo">

          <div className="nosotrosx-equipo-encabezado">

            <span className="nosotrosx-subtitulo">
              NUESTRO EQUIPO
            </span>

            <h2 className="nosotrosx-equipo-titulo">
              Desarrollo del proyecto
            </h2>

          </div>


          <div className="row g-4 justify-content-center">

            <div className="col-12 col-sm-6 col-lg-4">

              <article className="nosotrosx-miembro">

                <div className="nosotrosx-miembro-icono">
                  <i className="bi bi-code-slash"></i>
                </div>

                <p className="nosotrosx-miembro-nombre">
                  Gabriel Valdes
                </p>

                <p className="nosotrosx-miembro-rol">
                  Desarrollo FrontEnd
                </p>

              </article>

            </div>


            <div className="col-12 col-sm-6 col-lg-4">

              <article className="nosotrosx-miembro">

                <div className="nosotrosx-miembro-icono">
                  <i className="bi bi-braces"></i>
                </div>

                <p className="nosotrosx-miembro-nombre">
                  Fabian Aguilar
                </p>

                <p className="nosotrosx-miembro-rol">
                  Desarrollo JavaScript
                </p>

              </article>

            </div>

          </div>

        </section>

      </div>
    </main>
  );
}

export default Nosotros;