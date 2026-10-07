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

  const usuarios =
    obtenerUsuarios();

  return usuarios.find(
    (usuario) =>
      usuario.correo.toLowerCase() ===
      correo.toLowerCase()
  );
}


export function buscarUsuarioPorRut(rut) {

  const usuarios =
    obtenerUsuarios();

  const rutLimpio = rut
    .replace(/\./g, "")
    .replace(/\s/g, "");

  return usuarios.find(
    (usuario) =>
      usuario.rut === rutLimpio
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