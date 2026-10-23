export function validarProducto(producto, productos = []) {
  const errores = {};

  const nombre = String(producto.nombre ?? "").trim();
  const categoria = String(producto.categoria ?? "").trim();
  const marca = String(producto.marca ?? "").trim();
  const modelo = String(producto.modelo ?? "").trim();
  const precioTexto = String(producto.precio ?? "").trim();
  const stockTexto = String(producto.stock ?? "").trim();
  const imagen = String(producto.imagen ?? "").trim();
  const descripcionCorta = String(producto.descripcionCorta ?? "").trim();

  if (nombre.length < 3 || nombre.length > 100) {
    errores.nombre = "El nombre debe tener entre 3 y 100 caracteres.";
  }
  else if (
    productos.some(
      (item) =>
        String(item.nombre ?? "").trim().toLowerCase() === nombre.toLowerCase() &&
        Number(item.id) !== Number(producto.id)
    )
  ) {
    errores.nombre = "Ya existe un producto con ese nombre.";
  }

  if (!categoria) {
    errores.categoria = "Selecciona una categoría.";
  }

  if (marca.length < 2 || marca.length > 50) {
    errores.marca = "La marca debe tener entre 2 y 50 caracteres.";
  }

  if (modelo.length < 2 || modelo.length > 80) {
    errores.modelo = "El modelo debe tener entre 2 y 80 caracteres.";
  }

  if (
    !precioTexto ||
    !/^\d+$/.test(precioTexto) ||
    Number(precioTexto) <= 0 ||
    !Number.isSafeInteger(Number(precioTexto))
  ) {
    errores.precio = "Ingresa un precio entero mayor que cero.";
  }

  if (
    stockTexto === "" ||
    !/^\d+$/.test(stockTexto) ||
    !Number.isSafeInteger(Number(stockTexto))
  ) {
    errores.stock = "El stock debe ser un número entero no negativo.";
  }

  if (
    imagen &&
    !/^(https?:\/\/|\/|\.\/|[\w-]+\/)/i.test(imagen)
  ) {
    errores.imagen = "Ingresa una URL o ruta de imagen válida.";
  }

  if (descripcionCorta.length < 10 || descripcionCorta.length > 240) {
    errores.descripcionCorta = "La descripción debe tener entre 10 y 240 caracteres.";
  }

  return errores;
}
