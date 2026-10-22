function Nosotros() {

  return (

    <main className="pagina-nosotros">

      <div className="container">


        <section className="nosotros-presentacion">

          <h1 className="titulo-nosotros">
            Sobre Nosotros
          </h1>


          <div className="row justify-content-center">

            <div className="col-lg-8 text-center">

              <p className="texto-pagina fs-5">
                PC-SHOP ES LA CUSPIDE DE LA INTELIGENCIA HUMANA HECHA PAGINA,
                EN ESTA FAKIN TIENDA SE VENDE DE TODO PARA EL PC GEIMER QUE
                PRONTAMENTE CORRERA EL GTA 6.
              </p>

              <p className="texto-pagina">
                Desde tarjetas gráficas hasta refrigeración líquida,
                seleccionamos cada producto pensando en el rendimiento
                real que necesitas.
              </p>

            </div>

          </div>

        </section>


        <section className="seccion-equipo">

          <h2 className="titulo-equipo">
            Nuestro Equipo
          </h2>


          <div className="row g-4 justify-content-center">

            <div className="col-6 col-md-4 col-lg-3">

              <div className="tarjeta-equipo">

                <p className="producto mb-0">
                  Gabriel Valdes
                </p>

                <p className="rol mb-0">
                  Desarrollo FrontEnd
                </p>

              </div>

            </div>


            <div className="col-6 col-md-4 col-lg-3">

              <div className="tarjeta-equipo">

                <p className="producto mb-0">
                  Fabian Aguilar
                </p>

                <p className="rol mb-0">
                  Desarrollo JavaScript
                </p>

              </div>

            </div>

          </div>

        </section>


      </div>

    </main>

  );

}


export default Nosotros;