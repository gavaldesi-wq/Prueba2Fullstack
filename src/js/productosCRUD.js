const CLAVE_PRODUCTOS = "productos_tienda";

function normalizarProducto(producto) {
  return {
    ...producto,
    descripcionCorta:
      producto.descripcionCorta ?? producto.descripcion ?? "",
    descripcionLarga:
      producto.descripcionLarga ?? producto.descripcion ?? producto.descripcionCorta ?? "",
    caracteristicas:
      Array.isArray(producto.caracteristicas)
        ? producto.caracteristicas
        : [],
    destacado: Boolean(producto.destacado),
    oferta: Boolean(producto.oferta),
    stock: Number(producto.stock) || 0,
    precio: Number(producto.precio) || 0
  };
}

export function inicializarProductos(productosIniciales = []) {
  const existentes = localStorage.getItem(CLAVE_PRODUCTOS);

  if (existentes === null) {
    guardarProductos(productosIniciales);
  }
}

export function obtenerProductos(productosIniciales = []) {
  const guardados = localStorage.getItem(CLAVE_PRODUCTOS);

  if (guardados === null) {
    return productosIniciales.map(normalizarProducto);
  }

  try {
    const lista = JSON.parse(guardados);

    if (!Array.isArray(lista)) {
      return productosIniciales.map(normalizarProducto);
    }

    return lista.map(normalizarProducto);
  }
  catch {
    return productosIniciales.map(normalizarProducto);
  }
}

export function guardarProductos(lista) {
  localStorage.setItem(
    CLAVE_PRODUCTOS,
    JSON.stringify(lista.map(normalizarProducto))
  );
}

export function agregarProducto(nuevoProducto) {
  const lista = obtenerProductos();

  const nuevoId =
    Math.max(0, ...lista.map((producto) => Number(producto.id) || 0)) + 1;

  const producto = normalizarProducto({
    ...nuevoProducto,
    id: nuevoId
  });

  guardarProductos([
    ...lista,
    producto
  ]);

  return producto;
}

export function buscarProductoPorId(id, productosIniciales = []) {
  return obtenerProductos(productosIniciales).find(
    (producto) => Number(producto.id) === Number(id)
  );
}

export function actualizarProducto(id, cambios) {
  const lista = obtenerProductos();

  let productoActualizado = null;

  const actualizados = lista.map((producto) => {
    if (Number(producto.id) !== Number(id)) {
      return producto;
    }

    productoActualizado = normalizarProducto({
      ...producto,
      ...cambios,
      id: producto.id
    });

    return productoActualizado;
  });

  guardarProductos(actualizados);

  return productoActualizado;
}

export function eliminarProducto(id) {
  const lista = obtenerProductos();

  const actualizados = lista.filter(
    (producto) => Number(producto.id) !== Number(id)
  );

  guardarProductos(actualizados);

  return actualizados;
}
