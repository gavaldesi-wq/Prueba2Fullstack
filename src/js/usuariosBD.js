const CLAVE_USUARIOS = "usuarios";


export function obtenerUsuarios() {

  const usuariosGuardados =
    localStorage.getItem(CLAVE_USUARIOS);

  if (usuariosGuardados) {
    return JSON.parse(usuariosGuardados);
  }

  return [];
}


export function guardarUsuarios(usuarios) {

  localStorage.setItem(
    CLAVE_USUARIOS,
    JSON.stringify(usuarios)
  );
}

export function buscarUsuarioPorCorreo(correo) {
  const usuarios = obtenerUsuarios();

  return usuarios.find(
    (usuario) =>
      usuario.correo.toLowerCase() ===
      correo.toLowerCase()
  );
}

export function buscarUsuarioPorRut(rut) {

  const usuarios = obtenerUsuarios();

  // Normalizamos el RUT para comparar sin puntos ni espacios
  const limpiarRut = (valor) => {
    return valor
      .replace(/[.\s]/g, "")
      .toUpperCase();
  };

  const rutLimpio = limpiarRut(rut);

  // Buscamos si el RUT ya está registrado
  return usuarios.find(
    (usuario) => limpiarRut(usuario.rut) === rutLimpio
  );
}





export function agregarUsuario(usuario) {

  const usuarios =
    obtenerUsuarios();

  const usuariosActualizados = [
    ...usuarios,
    usuario
  ];

  guardarUsuarios(
    usuariosActualizados
  );
}


export function buscarUsuarioLogin(
  correo,
  password
) {

  const usuarios =
    obtenerUsuarios();

  return usuarios.find(
    (usuario) =>
      usuario.correo.toLowerCase() ===
        correo.toLowerCase() &&
      usuario.password === password
  );
}