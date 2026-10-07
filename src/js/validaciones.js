export function validarNombre(nombre) {

  const regex =
    /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{3,}$/;

  return regex.test(nombre.trim());
}


export function validarCorreo(correo) {

  const regex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return regex.test(correo.trim());
}


export function validarTelefono(telefono) {

  const telefonoLimpio =
    telefono.replace(/\s/g, "");

  const regex =
    /^(?:\+?56)?9\d{8}$/;

  return regex.test(telefonoLimpio);
}


export function validarRut(rut) {

  const rutLimpio = rut
    .replace(/\./g, "")
    .replace(/\s/g, "");

  const regex =
    /^\d{7,8}-[\dkK]$/;

  return regex.test(rutLimpio);
}


export function validarPassword(password) {

  const regex =
    /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;

  return regex.test(password);
}


export function validarTexto(texto, minimo = 3) {

  return texto.trim().length >= minimo;
}