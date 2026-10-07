function Blog() {
    return (
        <>
        <div className="container mt-4">
  <h1 className="titulo-seccion">Datos curiosos</h1>
  <div className="d-flex flex-column gap-4 mb-5">
    <div className="tarjeta-blog">
      <div className="row g-0">
        <div className="col-12 col-md-5">
          <img src="img/80.jpg" className="img-fluid rounded-start" alt="Imagen del blog 1" />
        </div>
        <div className="col-12 col-md-7 contenido">
          <h3>Dato curioso 1</h3>
          <p className="texto-pagina">
            ¿Sabías que las primeras tarjetas gráficas dedicadas ni siquiera
            procesaban gráficos 3D? Las primeras tarjetas gráficas de los años 80 
            solo mostraban texto plano, dejando todo el procesamiento pesado a la CPU 
            de la computadora. La llegada de los videojuegos tridimensionales en los 
            años 90 impulsó la creación de aceleradores 3D y la primera GPU en 1999, 
            revolucionando el rendimiento gráfico. Hoy en día, esta tecnología ha 
            evolucionado para incluir Inteligencia Artificial y Trazado de Rayos, 
            simulando la física de la luz en tiempo real y alcanzando un realismo fotográfico.
          </p>
        </div>
      </div>
    </div>
    <div className="d-flex flex-column gap-4 mb-5">
      <div className="tarjeta-blog">
        <div className="row g-0">
          <div className="col-12 col-md-5">
            <img src="img/discoviejo.jpg" className="img-fluid rounded-start" alt="Imagen del blog 1" />
          </div>
          <div className="col-12 col-md-7 contenido">
            <h3>Dato curioso 2</h3>
            <p className="texto-pagina">
              ¿Sabías que los primeros discos duros del tamaño de un 
              refrigerador solo podían guardar 5 megabytes de datos?
              El primer disco duro de 1956 pesaba más de una tonelada con una capacidad de solo 5 megabytes,
              mientras que los modernos discos SSD actuales son ultrarrápidos, no tienen
              piezas móviles y almacenan millones de archivos en un tamaño mínimo. Para continuar 
              explorando datos curiosos sobre tecnología, puedes elegir entre analizar cómo funcionan
              las pantallas táctiles de los celulares, el origen de la primera red de internet o el 
              funcionamiento de las tarjetas de memoria sin energía.
            </p>
          </div>
        </div>
      </div>
      <div className="tarjeta-blog">
        <div className="row g-0">
          <div className="col-12 col-md-5">
            <img src="img/cpum.jpg" className="img-fluid rounded-start" alt="Imagen del blog 2" />
          </div>
          <div className="col-12 col-md-7 contenido">
            <h3>Dato curioso 3</h3>
            <p className="texto-pagina">
              ¿Sabías que los procesadores modernos tienen múltiples núcleos
              para mejorar el rendimiento? Los primeros procesadores de un solo núcleo llegaron a 
              un límite de sobrecalentamiento, lo que llevó a los fabricantes a introducir 
              los chips multinúcleo en 2005 para realizar tareas simultáneas de forma eficiente. Actualmente, 
              la evolución de este diseño ha derivado en una arquitectura híbrida que combina núcleos de alto 
              rendimiento con otros de bajo consumo para optimizar la batería.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    );
}
export default Blog;