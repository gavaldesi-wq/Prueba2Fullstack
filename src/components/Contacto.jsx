import { useState } from "react";

import {
  validarNombre,
  validarCorreo,
  validarTelefono,
  validarTexto
} from "../js/validaciones";


function Contacto() {

  const [formulario, setFormulario] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    asunto: "",
    mensaje: ""
  });

  const [error, setError] = useState("");
  const [exito, setExito] = useState("");


  function manejarCambio(evento) {

    const { name, value } = evento.target;

    setFormulario({
      ...formulario,
      [name]: value
    });

  }


  function manejarEnvio(evento) {

    evento.preventDefault();

    setError("");
    setExito("");


    if (
      formulario.nombre.trim() === "" ||
      formulario.correo.trim() === "" ||
      formulario.telefono.trim() === "" ||
      formulario.asunto.trim() === "" ||
      formulario.mensaje.trim() === ""
    ) {

      setError("Debes completar todos los campos.");

      return;
    }


    if (!validarNombre(formulario.nombre)) {

      setError("El nombre ingresado no es válido.");

      return;
    }


    if (!validarCorreo(formulario.correo)) {

      setError("El correo ingresado no es válido.");

      return;
    }


    if (!validarTelefono(formulario.telefono)) {

      setError("El teléfono ingresado no es válido.");

      return;
    }


    if (!validarTexto(formulario.asunto, 3)) {

      setError("El asunto debe tener al menos 3 caracteres.");

      return;
    }


    if (!validarTexto(formulario.mensaje, 10)) {

      setError("El mensaje debe tener al menos 10 caracteres.");

      return;
    }


    setExito("Mensaje enviado correctamente.");


    setFormulario({
      nombre: "",
      correo: "",
      telefono: "",
      asunto: "",
      mensaje: ""
    });

  }


  return (

    <section className="pagina-contacto">

      <div className="container">

        <div className="contenedor-contacto">


          {/* =========================
              INFORMACIÓN
          ========================= */}

          <div className="contacto-informacion">

            <div className="encabezado-contacto">

              <h1>
                Contacto
              </h1>

              <p>
                Estamos para ayudarte
              </p>

            </div>


            <div className="lista-contacto">


              <div className="dato-contacto">

                <div className="icono-contacto">
                  <i className="bi bi-headset"></i>
                </div>

                <div>

                  <h3>
                    Atención al cliente
                  </h3>

                  <p>
                    Lun a Vie de 9:00 a 18:00 hrs
                  </p>

                </div>

              </div>


              <div className="dato-contacto">

                <div className="icono-contacto">
                  <i className="bi bi-envelope"></i>
                </div>

                <div>

                  <h3>
                    Correo electrónico
                  </h3>

                  <p>
                    contacto@pcshop.cl
                  </p>

                </div>

              </div>


              <div className="dato-contacto">

                <div className="icono-contacto">
                  <i className="bi bi-telephone"></i>
                </div>

                <div>

                  <h3>
                    Teléfono
                  </h3>

                  <p>
                    +56 9 1234 5678
                  </p>

                </div>

              </div>


              <div className="dato-contacto">

                <div className="icono-contacto">
                  <i className="bi bi-geo-alt"></i>
                </div>

                <div>

                  <h3>
                    Nuestra ubicación
                  </h3>

                  <p>
                    Santiago, Chile
                  </p>

                </div>

              </div>


            </div>

          </div>


          {/* =========================
              FORMULARIO
          ========================= */}

          <div className="contacto-formulario">

            <form onSubmit={manejarEnvio}>


              <div className="campo-contacto">

                <label>
                  Nombre completo
                </label>

                <input
                  type="text"
                  name="nombre"
                  placeholder="Tu nombre completo"
                  value={formulario.nombre}
                  onChange={manejarCambio}
                />

              </div>


              <div className="campo-contacto">

                <label>
                  Correo electrónico
                </label>

                <input
                  type="email"
                  name="correo"
                  placeholder="tu@email.com"
                  value={formulario.correo}
                  onChange={manejarCambio}
                />

              </div>


              <div className="campo-contacto">

                <label>
                  Teléfono
                </label>

                <input
                  type="tel"
                  name="telefono"
                  placeholder="912345678"
                  value={formulario.telefono}
                  onChange={manejarCambio}
                />

              </div>


              <div className="campo-contacto">

                <label>
                  Asunto
                </label>

                <input
                  type="text"
                  name="asunto"
                  placeholder="¿En qué podemos ayudarte?"
                  value={formulario.asunto}
                  onChange={manejarCambio}
                />

              </div>


              <div className="campo-contacto">

                <label>
                  Mensaje
                </label>

                <textarea
                  name="mensaje"
                  rows="5"
                  placeholder="Escribe tu mensaje aquí..."
                  value={formulario.mensaje}
                  onChange={manejarCambio}
                ></textarea>

              </div>


              {error && (

                <div className="mensaje-contacto mensaje-contacto-error">

                  <i className="bi bi-exclamation-circle"></i>

                  {error}

                </div>

              )}


              {exito && (

                <div className="mensaje-contacto mensaje-contacto-exito">

                  <i className="bi bi-check-circle"></i>

                  {exito}

                </div>

              )}


              <button
                type="submit"
                className="boton-enviar-contacto"
              >

                ENVIAR MENSAJE

                <i className="bi bi-arrow-right"></i>

              </button>


            </form>

          </div>


        </div>

      </div>

    </section>

  );
}


export default Contacto;