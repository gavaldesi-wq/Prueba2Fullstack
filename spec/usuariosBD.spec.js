import {
  inicializarUsuarios,
  obtenerUsuarios,
  guardarUsuarios,
  buscarUsuarioPorCorreo,
  buscarUsuarioPorRut,
  agregarUsuario,
  actualizarUsuario,
  eliminarUsuario,
  buscarUsuarioLogin
} from "../src/js/usuariosBD.js";

describe("Base de datos simulada de usuarios", () => {
  let almacenamiento;

  beforeEach(() => {
    almacenamiento = {};

    Object.defineProperty(globalThis, "localStorage", {
      configurable: true,
      value: {
        getItem(clave) {
          return almacenamiento[clave] ?? null;
        },
        setItem(clave, valor) {
          almacenamiento[clave] = String(valor);
        },
        removeItem(clave) {
          delete almacenamiento[clave];
        },
        clear() {
          almacenamiento = {};
        }
      }
    });
  });

  const usuarioPrueba = {
    id: 1,
    nombre: "Gabriel Valdes",
    rut: "12.345.678-9",
    correo: "gabriel@correo.cl",
    telefono: "912345678",
    region: "Región Metropolitana",
    ciudad: "Santiago",
    direccion: "Calle de prueba 123",
    password: "clave123"
  };

  it("devuelve un arreglo vacío cuando no existen usuarios", () => {
    expect(obtenerUsuarios()).toEqual([]);
  });

  it("crea automáticamente la cuenta administradora", () => {
    inicializarUsuarios();

    const admin = buscarUsuarioPorCorreo("admin@pcshop.test");

    expect(admin).toBeDefined();
    expect(admin.rol).toBe("admin");
  });

  it("no duplica la cuenta administradora al inicializar dos veces", () => {
    inicializarUsuarios();
    inicializarUsuarios();

    const admins = obtenerUsuarios().filter((usuario) => usuario.rol === "admin");
    expect(admins.length).toBe(1);
  });

  it("guarda y recupera usuarios desde localStorage", () => {
    guardarUsuarios([usuarioPrueba]);
    expect(obtenerUsuarios()[0].correo).toBe("gabriel@correo.cl");
  });

  it("asigna rol cliente a los usuarios registrados", () => {
    const agregado = agregarUsuario(usuarioPrueba);
    expect(agregado.rol).toBe("cliente");
  });

  it("encuentra un usuario por correo sin importar mayúsculas", () => {
    agregarUsuario(usuarioPrueba);
    expect(buscarUsuarioPorCorreo("GABRIEL@CORREO.CL").nombre).toBe("Gabriel Valdes");
  });

  it("encuentra un usuario por RUT con o sin puntos", () => {
    agregarUsuario(usuarioPrueba);
    expect(buscarUsuarioPorRut("12345678-9").id).toBe(1);
  });

  it("permite iniciar sesión con credenciales correctas", () => {
    agregarUsuario(usuarioPrueba);
    expect(buscarUsuarioLogin("gabriel@correo.cl", "clave123")).toBeDefined();
  });

  it("rechaza el inicio de sesión con contraseña incorrecta", () => {
    agregarUsuario(usuarioPrueba);
    expect(buscarUsuarioLogin("gabriel@correo.cl", "incorrecta")).toBeUndefined();
  });

  it("actualiza datos del usuario conservando contraseña y rol", () => {
    agregarUsuario(usuarioPrueba);

    const actualizado = actualizarUsuario(1, { nombre: "Gabriel Actualizado" });

    expect(actualizado.nombre).toBe("Gabriel Actualizado");
    expect(actualizado.password).toBe("clave123");
    expect(actualizado.rol).toBe("cliente");
  });

  it("elimina una cuenta cliente", () => {
    agregarUsuario(usuarioPrueba);
    expect(eliminarUsuario(1)).toBeTrue();
    expect(obtenerUsuarios()).toEqual([]);
  });

  it("impide eliminar la cuenta administradora", () => {
    inicializarUsuarios();
    const admin = buscarUsuarioPorCorreo("admin@pcshop.test");

    expect(eliminarUsuario(admin.id)).toBeFalse();
    expect(buscarUsuarioPorCorreo("admin@pcshop.test")).toBeDefined();
  });
});
