import { validarProducto } from "../src/js/validacionesProductos.js";

describe("Validaciones del administrador de productos", () => {
  const productoValido = {
    nombre: "RTX 5070",
    categoria: "Tarjetas Gráficas",
    marca: "NVIDIA",
    modelo: "RTX 5070",
    precio: "699990",
    stock: "5",
    imagen: "https://ejemplo.com/rtx.jpg",
    descripcionCorta: "Tarjeta gráfica para gaming de alto rendimiento."
  };

  it("acepta un producto correctamente completado", () => {
    expect(validarProducto(productoValido)).toEqual({});
  });

  it("rechaza un nombre demasiado corto", () => {
    const errores = validarProducto({ ...productoValido, nombre: "PC" });
    expect(errores.nombre).toBeDefined();
  });

  it("rechaza un nombre duplicado", () => {
    const errores = validarProducto(
      productoValido,
      [{ ...productoValido, id: 1 }]
    );

    expect(errores.nombre).toBeDefined();
  });

  it("permite conservar el mismo nombre al editar el mismo producto", () => {
    const productoEditado = { ...productoValido, id: 1 };
    const errores = validarProducto(productoEditado, [{ ...productoValido, id: 1 }]);

    expect(errores.nombre).toBeUndefined();
  });

  it("rechaza un precio menor o igual a cero", () => {
    const errores = validarProducto({ ...productoValido, precio: "0" });
    expect(errores.precio).toBeDefined();
  });

  it("acepta stock igual a cero", () => {
    const errores = validarProducto({ ...productoValido, stock: "0" });
    expect(errores.stock).toBeUndefined();
  });

  it("rechaza stock negativo", () => {
    const errores = validarProducto({ ...productoValido, stock: "-1" });
    expect(errores.stock).toBeDefined();
  });

  it("rechaza una ruta de imagen inválida", () => {
    const errores = validarProducto({ ...productoValido, imagen: "imagen suelta" });
    expect(errores.imagen).toBeDefined();
  });

  it("rechaza una descripción demasiado corta", () => {
    const errores = validarProducto({ ...productoValido, descripcionCorta: "Muy corta" });
    expect(errores.descripcionCorta).toBeDefined();
  });
});
