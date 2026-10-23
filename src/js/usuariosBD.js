const CLAVE_USUARIOS = "usuarios";

const ADMIN_PREDETERMINADO = {
  id: "admin-demo",
  nombre: "Administrador PC-SHOP",
  rut: "11111111-1",
  correo: "admin@pcshop.test",
  password: "Admin123!",
  telefono: "912345678",
  region: "Región Metropolitana",
  ciudad: "Santiago",
  direccion: "Administración PC-SHOP",
  rol: "admin"
};

function normalizarRut(rut) {
  return String(rut ?? "")
    .replace(/[.\s]/g, "")
    .toUpperCase();
}

function normalizarUsuario(usuario) {
  return {
    ...usuario,
    rol: usuario.rol ?? "cliente"
  };
}

export function inicializarUsuarios() {
  const usuarios = obtenerUsuarios();

  const existeAdmin = usuarios.some(
    (usuario) =>
      String(usuario.correo ?? "").toLowerCase() ===
      ADMIN_PREDETERMINADO.correo.toLowerCase()
  );

  if (!existeAdmin) {
    guardarUsuarios([
      ...usuarios,
      ADMIN_PREDETERMINADO
    ]);
  }
}

export function obtenerUsuarios() {
  const usuariosGuardados =
    localStorage.getItem(CLAVE_USUARIOS);

  if (!usuariosGuardados) {
    return [];
  }

  try {
    const usuarios = JSON.parse(usuariosGuardados);

    if (!Array.isArray(usuarios)) {
      return [];
    }

    return usuarios.map(normalizarUsuario);
  }
  catch {
    return [];
  }
}

export function guardarUsuarios(usuarios) {
  localStorage.setItem(
    CLAVE_USUARIOS,
    JSON.stringify(usuarios.map(normalizarUsuario))
  );
}

export function buscarUsuarioPorCorreo(correo) {
  const correoBuscado = String(correo ?? "").trim().toLowerCase();

  return obtenerUsuarios().find(
    (usuario) =>
      String(usuario.correo ?? "").trim().toLowerCase() === correoBuscado
  );
}

export function buscarUsuarioPorRut(rut) {
  const rutBuscado = normalizarRut(rut);

  return obtenerUsuarios().find(
    (usuario) => normalizarRut(usuario.rut) === rutBuscado
  );
}

export function agregarUsuario(usuario) {
  const usuarios = obtenerUsuarios();

  const nuevoUsuario = normalizarUsuario({
    ...usuario,
    rol: usuario.rol ?? "cliente"
  });

  guardarUsuarios([
    ...usuarios,
    nuevoUsuario
  ]);

  return nuevoUsuario;
}

export function actualizarUsuario(id, cambios) {
  const usuarios = obtenerUsuarios();

  let usuarioActualizado = null;

  const actualizados = usuarios.map((usuario) => {
    if (String(usuario.id) !== String(id)) {
      return usuario;
    }

    usuarioActualizado = normalizarUsuario({
      ...usuario,
      ...cambios,
      id: usuario.id,
      password: usuario.password,
      rol: usuario.rol
    });

    return usuarioActualizado;
  });

  guardarUsuarios(actualizados);

  return usuarioActualizado;
}

export function eliminarUsuario(id) {
  const usuarios = obtenerUsuarios();

  const objetivo = usuarios.find(
    (usuario) => String(usuario.id) === String(id)
  );

  if (!objetivo || objetivo.rol === "admin") {
    return false;
  }

  guardarUsuarios(
    usuarios.filter(
      (usuario) => String(usuario.id) !== String(id)
    )
  );

  return true;
}

export function buscarUsuarioLogin(correo, password) {
  const correoBuscado = String(correo ?? "").trim().toLowerCase();

  return obtenerUsuarios().find(
    (usuario) =>
      String(usuario.correo ?? "").trim().toLowerCase() === correoBuscado &&
      usuario.password === password
  );
}
