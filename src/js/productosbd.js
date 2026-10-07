import rtxImg from "../assets/rtx4070ti.jpg";
import intelImg from "../assets/inteli912.jpg";
import ramImg from "../assets/ramddr5.jpg";
import ssdImg from "../assets/ssd.jpg";
import placaImg from "../assets/placa1.jpg";
import fuenteImg from "../assets/fuente.jpg";
import coolerImg from "../assets/cooler.jpg";
import ventiladoresImg from "../assets/ventiladores.jpg";

const productos = [
  {
    id: 1,
    nombre: "ASUS ROG Strix GeForce RTX 5070 Ti OC Edition",
    precio: 749990,
    imagen: rtxImg,
    categoria: "Tarjetas de Video",
    stock: 10,
    destacado: true
  },
  {
    id: 2,
    nombre: "Intel Core i9-12900K Processor",
    precio: 589990,
    imagen: intelImg,
    categoria: "Procesadores",
    stock: 8,
    destacado: true
  },
  {
    id: 3,
    nombre: "Corsair Vengeance RGB DDR5 32GB",
    precio: 189990,
    imagen: ramImg,
    categoria: "Memorias RAM",
    stock: 15,
    destacado: true
  },
  {
    id: 4,
    nombre: "Samsung 990 Pro 2TB NVMe SSD",
    precio: 159990,
    imagen: ssdImg,
    categoria: "Almacenamiento",
    stock: 12,
    destacado: true
  },
  {
    id: 5,
    nombre: "ASUS ROG Strix Z790-E Motherboard",
    precio: 749990,
    imagen: placaImg,
    categoria: "Placas Madre",
    stock: 6,
    destacado: true
  },
  {
    id: 6,
    nombre: "Corsair RM750 750W Power Supply",
    precio: 589990,
    imagen: fuenteImg,
    categoria: "Fuentes de Poder",
    stock: 9,
    destacado: true
  },
  {
    id: 7,
    nombre: "Corsair iCUE H100i Liquid Cooler",
    precio: 189990,
    imagen: coolerImg,
    categoria: "Refrigeración",
    stock: 7,
    destacado: true
  },
  {
    id: 8,
    nombre: "Corsair LL120 RGB Case Fans (3-Pack)",
    precio: 159990,
    imagen: ventiladoresImg,
    categoria: "Ventiladores",
    stock: 20,
    destacado: true
  }
];

export default productos;