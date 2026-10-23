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

  // Quitamos puntos y espacios, y dejamos la K en mayúscula
  const rutLimpio = rut.replace(/[.\s]/g, "").toUpperCase();

  // Revisamos que tenga el formato de un RUT chileno
  const regex = /^(\d{7,8})-([\dK])$/;
  const resultado = rutLimpio.match(regex);

  if (!resultado) {
    return false;
  }

  const numero = resultado[1];
  const digitoVerificador = resultado[2];

  let suma = 0;
  let multiplicador = 2;

  // Calculamos el dígito verificador usando módulo 11
  for (let i = numero.length - 1; i >= 0; i--) {
    suma += Number(numero[i]) * multiplicador;

    multiplicador = multiplicador === 7
      ? 2
      : multiplicador + 1;
  }

  const resto = 11 - (suma % 11);

  const digitoCalculado =
    resto === 11 ? "0" :
    resto === 10 ? "K" :
    String(resto);

  return digitoVerificador === digitoCalculado;
}




export function validarPassword(password) {

  // Exigimos una mayúscula, un número y un carácter especial
  const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[^\p{L}\p{N}\s]).{6,}$/u;

  return regex.test(password);
}



export function validarTexto(texto, minimo = 3) {

  return texto.trim().length >= minimo;
}