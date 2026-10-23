
import productos from "./productosbd";
// Clave que utilizaremos para guardar los datos
const CLAVE_PRODUCTOS = "productos_tienda";

// READ: obtener todos los productos
export function obtenerProductos() {
  const guardados = localStorage.getItem(CLAVE_PRODUCTOS);

  if (guardados !== null) {
    return JSON.parse(guardados);
  }

  return [...productos];
}

// Guardamos los productos en localStorage
export function guardarProductos(lista) {
  localStorage.setItem(CLAVE_PRODUCTOS, JSON.stringify(lista));
}

// CREATE: agregar un producto
export function agregarProducto(nuevoProducto) {
  const lista = obtenerProductos();

  const nuevoId = Math.max(0, ...lista.map(p => Number(p.id))) + 1;

  const producto = {
    ...nuevoProducto,
    id: nuevoId
  };

  guardarProductos([...lista, producto]);

  return producto;
}

// READ: buscar un producto por su ID
export function buscarProductoPorId(id) {
  return obtenerProductos().find(
    producto => Number(producto.id) === Number(id)
  );
}

// UPDATE: modificar un producto
export function actualizarProducto(id, cambios) {
  const lista = obtenerProductos();

  const actualizados = lista.map(producto =>
    Number(producto.id) === Number(id)
      ? { ...producto, ...cambios, id: producto.id }
      : producto
  );

  guardarProductos(actualizados);
}

// DELETE: eliminar un producto
export function eliminarProducto(id) {
  const lista = obtenerProductos();

  const actualizados = lista.filter(
    producto => Number(producto.id) !== Number(id)
  );

  guardarProductos(actualizados);
}
