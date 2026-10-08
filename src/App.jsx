import {
  useState,
  useEffect
} from "react";

import {
  Routes,
  Route
} from "react-router-dom";


import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./components/Home";
import Productos from "./components/Productos";
import Nosotros from "./components/Nosotros";
import Blog from "./components/Blog";
import Contacto from "./components/Contacto";
import Login from "./components/Login";
import Registro from "./components/Registro";
import Carrito from "./components/Carrito";
import DetalleProducto from "./components/DetalleProducto";

import "./App.css";


function App() {



  const [carrito, setCarrito] =
    useState(() => {
      const carritoGuardado =
        localStorage.getItem(
          "carrito"
        );

      if (carritoGuardado) {
        return JSON.parse(
          carritoGuardado
        );

      }
      return [];
    });


  useEffect(() => {

    localStorage.setItem(
      "carrito",
      JSON.stringify(
        carrito
      )
    );
  }, [carrito]);

  const [
    usuarioActivo,
    setUsuarioActivo
  ] = useState(() => {

    const usuarioGuardado =
      localStorage.getItem(
        "usuarioActivo"
      );

    if (usuarioGuardado) {
      return JSON.parse(
        usuarioGuardado
      );
    }
    return null;

  });




  function iniciarSesion(usuario) {
    const sesion = {
      id:
        usuario.id,

      nombre:
        usuario.nombre,

      rut:
        usuario.rut,

      telefono:
        usuario.telefono,

      correo:
        usuario.correo,

      region:
        usuario.region,

      ciudad:
        usuario.ciudad,

      direccion:
        usuario.direccion
    };

    setUsuarioActivo(
      sesion
    );

    localStorage.setItem(
      "usuarioActivo",
      JSON.stringify(
        sesion
      )
    );
  }

  function cerrarSesion() {
    setUsuarioActivo(null);

    localStorage.removeItem("usuarioActivo");

  }

  function agregarAlCarrito(producto, cantidad = 1) {

  const cantidadAgregar =
    Number(cantidad) || 1;


  setCarrito((carritoActual) => {

    const productoExistente =
      carritoActual.find(
        (item) =>
          item.id === producto.id
      );


    if (productoExistente) {

      return carritoActual.map((item) => {

        if (item.id === producto.id) {

          return {
            ...item,

            cantidad:
              (Number(item.cantidad) || 0) +
              cantidadAgregar
          };

        }

        return item;

      });

    }

    return [
      ...carritoActual,

      {
        ...producto,
        cantidad: cantidadAgregar
      }
    ];

  });
}




  function eliminarDelCarrito(id) {
    const carritoActualizado =
      carrito.filter(
        (producto) =>
          producto.id !== id
      );

    setCarrito(
      carritoActualizado
    );
  }

  function aumentarCantidad(id) {
    const carritoActualizado =
      carrito.map((producto) => {

        if (
          producto.id === id
        ) {
          return {
            ...producto,
            cantidad:
              producto.cantidad + 1

          };
        }

        return producto;
      });

    setCarrito(
      carritoActualizado
    );

  }

  function disminuirCantidad(id) {

    const carritoActualizado =
      carrito.map((producto) => {

        if (
          producto.id === id &&
          producto.cantidad > 1
        ) {
          return {
            ...producto,
            cantidad:
              producto.cantidad - 1
          };
        }

        return producto;

      });


    setCarrito(
      carritoActualizado
    );

  }

  const cantidadCarrito =
    carrito.reduce(
      (total, producto) =>
        total +
        producto.cantidad,
      0
    );

  return (
    <>
      <Header
        cantidadCarrito={cantidadCarrito}
        usuarioActivo={usuarioActivo}
        iniciarSesion={iniciarSesion}
        cerrarSesion={cerrarSesion}
      />


      <Routes>


        <Route

          path="/"

          element={

            <Home
              agregarAlCarrito={
                agregarAlCarrito
              }
            />

          }

        />


        <Route

          path="/productos"

          element={

            <Productos
              agregarAlCarrito={
                agregarAlCarrito
              }
            />

          }

        />


        <Route

          path="/producto/:id"
          element={
            <DetalleProducto 
            agregarAlCarrito={agregarAlCarrito}
            />
          }

        />


        <Route

          path="/nosotros"

          element={

            <Nosotros />

          }

        />


        <Route

          path="/blog"

          element={

            <Blog />

          }

        />


        <Route

          path="/contacto"

          element={

            <Contacto />

          }

        />


        <Route

          path="/login"

          element={

            <Login
              iniciarSesion={
                iniciarSesion
              }
            />

          }

        />


        <Route

          path="/registro"

          element={

            <Registro />

          }

        />


        <Route

          path="/carrito"

          element={

            <Carrito

              carrito={
                carrito
              }

              eliminarDelCarrito={
                eliminarDelCarrito
              }

              aumentarCantidad={
                aumentarCantidad
              }

              disminuirCantidad={
                disminuirCantidad
              }

            />

          }

        />


      </Routes>


      <Footer />


    </>

  );

}


export default App;