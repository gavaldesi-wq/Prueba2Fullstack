import gpuBlogImg from "../assets/80.jpg";
import discoBlogImg from "../assets/discoviejo.jpg";
import cpuBlogImg from "../assets/cpum.jpg";

function Blog() {
  return (
    <main className="pagina-blog">
      <div className="container">
        <header className="blog-encabezado">
          <span className="blog-etiqueta">PC-SHOP BLOG</span>

          <h1 className="blog-titulo">
            Datos curiosos de tecnología
          </h1>

          <p className="blog-introduccion">
            Un vistazo rápido a la evolución del hardware que usamos todos los días:
            gráficas, almacenamiento y procesadores.
          </p>
        </header>

        <section className="blog-destacado">
          <div className="blog-destacado-imagen">
            <img
              src={gpuBlogImg}
              alt="Evolución de las tarjetas gráficas"
            />
          </div>

          <div className="blog-destacado-contenido">
            <div className="blog-meta">
              <span>
                <i className="bi bi-gpu-card"></i>
                Tarjetas gráficas
              </span>

              <span>Dato #01</span>
            </div>

            <h2>
              De mostrar texto a generar mundos completos en tiempo real
            </h2>

            <p>
              Las primeras tarjetas gráficas dedicadas ni siquiera procesaban gráficos
              3D. Durante los años 80 su trabajo principal era mostrar texto y gráficos
              básicos, mientras la CPU realizaba gran parte del procesamiento.
            </p>

            <p>
              La llegada de los videojuegos tridimensionales impulsó los aceleradores 3D
              y, con el tiempo, las GPU modernas incorporaron tecnologías como Ray Tracing,
              escalado mediante inteligencia artificial y procesamiento paralelo masivo.
            </p>

            <div className="blog-dato-clave">
              <i className="bi bi-lightning-charge-fill"></i>

              <span>
                Hoy una GPU puede encargarse de gráficos, IA, renderizado y creación de
                contenido al mismo tiempo.
              </span>
            </div>
          </div>
        </section>

        <section className="blog-grid">
          <article className="blog-card">
            <div className="blog-card-imagen">
              <img
                src={discoBlogImg}
                alt="Disco duro antiguo"
              />

              <span className="blog-card-numero">02</span>
            </div>

            <div className="blog-card-contenido">
              <span className="blog-card-categoria">
                <i className="bi bi-device-hdd"></i>
                Almacenamiento
              </span>

              <h2>
                El primer disco duro ocupaba casi una habitación
              </h2>

              <p>
                En 1956 los primeros discos duros podían almacenar apenas unos pocos
                megabytes y su tamaño era comparable al de un refrigerador. Hoy un SSD
                diminuto puede almacenar terabytes y acceder a los datos en una fracción
                del tiempo.
              </p>
            </div>
          </article>

          <article className="blog-card">
            <div className="blog-card-imagen">
              <img
                src={cpuBlogImg}
                alt="Procesador moderno"
              />

              <span className="blog-card-numero">03</span>
            </div>

            <div className="blog-card-contenido">
              <span className="blog-card-categoria">
                <i className="bi bi-cpu"></i>
                Procesadores
              </span>

              <h2>
                Más núcleos en vez de subir infinitamente la frecuencia
              </h2>

              <p>
                Cuando aumentar la frecuencia comenzó a generar demasiado calor y consumo,
                los fabricantes adoptaron procesadores multinúcleo. Actualmente incluso
                existen arquitecturas híbridas con núcleos de rendimiento y de eficiencia
                trabajando juntos.
              </p>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}

export default Blog;