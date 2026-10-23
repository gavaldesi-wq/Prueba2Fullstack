import {
  inicializarProductos,
  obtenerProductos,
  guardarProductos,
  agregarProducto,
  buscarProductoPorId,
  actualizarProducto,
  eliminarProducto
} from "../src/js/productosCRUD.js";

describe("CRUD de productos", () => {
  let almacenamiento;

  beforeEach(() => {
    almacenamiento = {};

    Object.defineProperty(globalThis, "localStorage", {
      configurable: true,
      value: {
        getItem(clave) {
          return almacenamiento[clave] ?? null;
        },
        setItem(clave, valor) {
          almacenamiento[clave] = String(valor);
        },
        removeItem(clave) {
          delete almacenamiento[clave];
        },
        clear() {
          almacenamiento = {};
        }
      }
    });
  });

  const productosIniciales = [
    {
      id: 1,
      nombre: "RTX de prueba",
      categoria: "Tarjetas Gráficas",
      marca: "Gigabyte",
      modelo: "RTX TEST",
      precio: 500000,
      stock: 5,
      imagen: "/rtx.jpg",
      descripcionCorta: "Tarjeta gráfica utilizada para las pruebas.",
      destacado: true
    }
  ];

  it("inicializa la base con los productos entregados", () => {
    inicializarProductos(productosIniciales);

    expect(obtenerProductos().length).toBe(1);
    expect(obtenerProductos()[0].nombre).toBe("RTX de prueba");
  });

  it("no reemplaza productos si la base ya fue inicializada", () => {
    guardarProductos([{ ...productosIniciales[0], nombre: "Producto guardado" }]);

    inicializarProductos(productosIniciales);

    expect(obtenerProductos()[0].nombre).toBe("Producto guardado");
  });

  it("agrega un producto y genera un nuevo ID", () => {
    inicializarProductos(productosIniciales);

    const nuevo = agregarProducto({
      nombre: "Ryzen de prueba",
      categoria: "Procesadores",
      marca: "AMD",
      modelo: "Ryzen Test",
      precio: 200000,
      stock: 8,
      imagen: "/ryzen.jpg",
      descripcionCorta: "Procesador utilizado para las pruebas."
    });

    expect(nuevo.id).toBe(2);
    expect(obtenerProductos().length).toBe(2);
  });

  it("busca un producto por su ID", () => {
    inicializarProductos(productosIniciales);

    const encontrado = buscarProductoPorId(1);

    expect(encontrado).toBeDefined();
    expect(encontrado.nombre).toBe("RTX de prueba");
  });

  it("actualiza un producto sin cambiar su ID", () => {
    inicializarProductos(productosIniciales);

    const actualizado = actualizarProducto(1, {
      precio: 450000,
      stock: 3
    });

    expect(actualizado.id).toBe(1);
    expect(actualizado.precio).toBe(450000);
    expect(buscarProductoPorId(1).stock).toBe(3);
  });

  it("elimina un producto por su ID", () => {
    inicializarProductos(productosIniciales);

    eliminarProducto(1);

    expect(obtenerProductos()).toEqual([]);
  });
});
