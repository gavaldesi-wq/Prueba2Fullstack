import {
  validarNombre,
  validarCorreo,
  validarTelefono,
  validarRut,
  validarPassword,
  validarTexto
} from "../src/js/validaciones.js";

describe("Validaciones de formularios", () => {

  it("acepta un nombre válido", () => {
    expect(validarNombre("Gabriel Valdes")).toBeTrue();
  });

  it("rechaza un nombre que contiene números", () => {
    expect(validarNombre("Gabriel123")).toBeFalse();
  });

  it("acepta un correo con formato válido", () => {
    expect(validarCorreo("gabriel@correo.cl")).toBeTrue();
  });

  it("rechaza un correo sin arroba", () => {
    expect(validarCorreo("gabrielcorreo.cl")).toBeFalse();
  });

  it("acepta un teléfono chileno válido", () => {
    expect(validarTelefono("+56912345678")).toBeTrue();
  });

  it("rechaza un teléfono demasiado corto", () => {
    expect(validarTelefono("91234")).toBeFalse();
  });

  it("acepta un RUT con formato válido", () => {
    expect(validarRut("12.345.678-9")).toBeTrue();
  });

  it("rechaza un RUT sin guion", () => {
    expect(validarRut("123456789")).toBeFalse();
  });

  it("acepta una contraseña con letras, números y mínimo 6 caracteres", () => {
    expect(validarPassword("clave123")).toBeTrue();
  });

  it("rechaza una contraseña sin números", () => {
    expect(validarPassword("clavesecreta")).toBeFalse();
  });

  it("valida texto usando el mínimo indicado", () => {
    expect(validarTexto("Santiago", 3)).toBeTrue();
    expect(validarTexto("St", 3)).toBeFalse();
  });

});
