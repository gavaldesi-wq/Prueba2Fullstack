

import rtxImg from "../assets/rtx5070ti.jpg";
import rtx5060TiImg from "../assets/rtx5060ti.jpg";
import rx9070XtImg from "../assets/rx9070xt.jpg";
import intelImg from "../assets/inteli912.jpg";
import ryzen7800X3DImg from "../assets/ryzen7800x3d.jpg";
import ryzen57600Img from "../assets/ryzen57600.jpg";
import ramImg from "../assets/ramddr5.jpg";
import kingstonRamImg from "../assets/kingstonddr5.jpg";
import gskillRamImg from "../assets/gskillddr5.jpg";
import ssdImg from "../assets/ssd.jpg";
import kingstonNv3Img from "../assets/kingstonnv3.jpg";
import sn850xImg from "../assets/sn850x.jpg";
import pc5060TiImg from "../assets/pc5060ti.jpg";
import pc5070Img from "../assets/pc5070.jpg";
import pc9070XtImg from "../assets/pc9070xt.jpg";
import placaImg from "../assets/placa1.jpg";
import fuenteImg from "../assets/fuente.jpg";
import coolerImg from "../assets/cooler.jpg";
import ventiladoresImg from "../assets/ventiladores.jpg";
import asusTufImg from "../assets/asustuf.jpg";
import legion5Img from "../assets/legion5.jpg";
import acerNitroImg from "../assets/acernitro.jpg";
import hpVictusImg from "../assets/hpvictus.jpg";


const productos = [

  /* =====================================================
     TARJETAS GRÁFICAS
  ===================================================== */

  {
    id: 1,
    nombre: "ASUS ROG Strix GeForce RTX 5070 Ti OC Edition",
    categoria: "Tarjetas Gráficas",
    marca: "ASUS",
    modelo: "ROG Strix RTX 5070 Ti",
    precio: 749990,
    stock: 8,
    imagen: rtxImg,
    descripcionCorta:
      "Tarjeta gráfica de alto rendimiento diseñada para gaming en 1440p y altas tasas de FPS.",
    descripcionLarga:
      "La ASUS ROG Strix GeForce RTX 5070 Ti está orientada a jugadores que buscan alto rendimiento, Ray Tracing y tecnologías modernas de NVIDIA.",
    caracteristicas: [
      "Arquitectura NVIDIA GeForce RTX",
      "Compatible con Ray Tracing",
      "Compatible con DLSS",
      "Refrigeración de múltiples ventiladores",
      "Orientada a gaming en 1440p"
    ],
    destacado: true
  },

  {
    id: 2,
    nombre: "Gigabyte GeForce RTX 5060 Ti 16GB",
    categoria: "Tarjetas Gráficas",
    marca: "Gigabyte",
    modelo: "RTX 5060 Ti 16GB",
    precio: 699990,
    stock: 12,
    imagen: rtx5060TiImg,
    descripcionCorta:
      "GPU NVIDIA con 16 GB de memoria gráfica para gaming en 1080p y 1440p.",
    descripcionLarga:
      "La Gigabyte GeForce RTX 5060 Ti ofrece una gran capacidad de memoria gráfica para videojuegos modernos y creación de contenido.",
    caracteristicas: [
      "16 GB de memoria gráfica",
      "Compatible con Ray Tracing",
      "Compatible con DLSS",
      "Refrigeración Gigabyte",
      "Gaming en 1080p y 1440p"
    ],
    destacado: true
  },

  {
    id: 3,
    nombre: "Sapphire Radeon RX 9070 XT 16GB",
    categoria: "Tarjetas Gráficas",
    marca: "Sapphire",
    modelo: "Radeon RX 9070 XT",
    precio: 829990,
    stock: 6,
    imagen: rx9070XtImg,
    descripcionCorta:
      "Tarjeta gráfica AMD de 16 GB orientada al gaming en 1440p y 4K.",
    descripcionLarga:
      "La Sapphire Radeon RX 9070 XT combina una gran cantidad de memoria gráfica con alto rendimiento para juegos exigentes.",
    caracteristicas: [
      "16 GB de memoria gráfica",
      "Arquitectura AMD Radeon",
      "Compatible con AMD FSR",
      "Gaming en 1440p y 4K",
      "Refrigeración de múltiples ventiladores"
    ],
    destacado: false
  },


  /* =====================================================
     PROCESADORES
  ===================================================== */

  {
    id: 4,
    nombre: "Intel Core i9-12900K Processor",
    categoria: "Procesadores",
    marca: "Intel",
    modelo: "Core i9-12900K",
    precio: 589990,
    stock: 7,
    imagen: intelImg,
    descripcionCorta:
      "Procesador Intel Core i9 de alto rendimiento para gaming y productividad.",
    descripcionLarga:
      "El Intel Core i9-12900K está diseñado para videojuegos, creación de contenido y aplicaciones exigentes.",
    caracteristicas: [
      "Arquitectura híbrida Intel",
      "Socket LGA1700",
      "Alto rendimiento multinúcleo",
      "Compatible con DDR4 y DDR5",
      "Gaming y productividad"
    ],
    destacado: true
  },

  {
    id: 5,
    nombre: "AMD Ryzen 7 7800X3D",
    categoria: "Procesadores",
    marca: "AMD",
    modelo: "Ryzen 7 7800X3D",
    precio: 429990,
    stock: 9,
    imagen: ryzen7800X3DImg,
    descripcionCorta:
      "Procesador gaming de 8 núcleos equipado con tecnología AMD 3D V-Cache.",
    descripcionLarga:
      "El Ryzen 7 7800X3D está orientado al gaming de alto rendimiento gracias a la tecnología AMD 3D V-Cache.",
    caracteristicas: [
      "8 núcleos",
      "16 hilos",
      "Tecnología 3D V-Cache",
      "Socket AM5",
      "Compatible con DDR5"
    ],
    destacado: true
  },

  {
    id: 6,
    nombre: "AMD Ryzen 5 7600",
    categoria: "Procesadores",
    marca: "AMD",
    modelo: "Ryzen 5 7600",
    precio: 219990,
    stock: 15,
    imagen: ryzen57600Img,
    descripcionCorta:
      "Procesador de 6 núcleos ideal para computadores gaming de gama media y alta.",
    descripcionLarga:
      "El Ryzen 5 7600 ofrece un excelente equilibrio entre rendimiento, consumo y precio en la plataforma AM5.",
    caracteristicas: [
      "6 núcleos",
      "12 hilos",
      "Socket AM5",
      "Compatible con DDR5",
      "Arquitectura AMD Ryzen"
    ],
    destacado: false
  },


  /* =====================================================
     MEMORIA RAM
  ===================================================== */

  {
    id: 7,
    nombre: "Corsair Vengeance RGB DDR5 32GB",
    categoria: "Memoria RAM",
    marca: "Corsair",
    modelo: "Vengeance RGB DDR5",
    precio: 189990,
    stock: 18,
    imagen: ramImg,
    descripcionCorta:
      "Kit DDR5 de 32 GB con iluminación RGB para computadores gaming modernos.",
    descripcionLarga:
      "Corsair Vengeance RGB DDR5 combina gran capacidad, altas velocidades e iluminación RGB.",
    caracteristicas: [
      "32 GB",
      "Kit de dos módulos",
      "DDR5",
      "Iluminación RGB",
      "Disipadores de calor"
    ],
    destacado: true
  },

  {
    id: 8,
    nombre: "Kingston Fury Beast DDR5 32GB",
    categoria: "Memoria RAM",
    marca: "Kingston",
    modelo: "Fury Beast DDR5",
    precio: 159990,
    stock: 21,
    imagen: kingstonRamImg,
    descripcionCorta:
      "Memoria DDR5 de 32 GB diseñada para gaming y multitarea.",
    descripcionLarga:
      "Kingston Fury Beast DDR5 ofrece capacidad, velocidad y estabilidad para computadores modernos.",
    caracteristicas: [
      "32 GB",
      "DDR5",
      "Dual Channel",
      "Disipadores de calor",
      "Gaming y productividad"
    ],
    destacado: false
  },

  {
    id: 9,
    nombre: "G.Skill Trident Z5 Neo RGB 32GB",
    categoria: "Memoria RAM",
    marca: "G.Skill",
    modelo: "Trident Z5 Neo RGB",
    precio: 199990,
    stock: 10,
    imagen: gskillRamImg,
    descripcionCorta:
      "Kit DDR5 de 32 GB de alto rendimiento con iluminación RGB.",
    descripcionLarga:
      "La G.Skill Trident Z5 Neo RGB está orientada a computadores gaming de alto rendimiento.",
    caracteristicas: [
      "32 GB",
      "DDR5",
      "Iluminación RGB",
      "Disipador metálico",
      "Kit de dos módulos"
    ],
    destacado: false
  },


  /* =====================================================
     SSD
  ===================================================== */

  {
    id: 10,
    nombre: "Samsung 990 Pro 2TB NVMe SSD",
    categoria: "SSD",
    marca: "Samsung",
    modelo: "990 Pro 2TB",
    precio: 159990,
    stock: 16,
    imagen: ssdImg,
    descripcionCorta:
      "SSD NVMe PCIe 4.0 de 2 TB para gaming y aplicaciones de alto rendimiento.",
    descripcionLarga:
      "Samsung 990 Pro ofrece altas velocidades de lectura y escritura para computadores modernos.",
    caracteristicas: [
      "2 TB",
      "M.2",
      "NVMe",
      "PCIe 4.0",
      "Alto rendimiento"
    ],
    destacado: true
  },

  {
    id: 11,
    nombre: "Kingston NV3 1TB NVMe SSD",
    categoria: "SSD",
    marca: "Kingston",
    modelo: "NV3 1TB",
    precio: 79990,
    stock: 25,
    imagen: kingstonNv3Img,
    descripcionCorta:
      "SSD M.2 NVMe PCIe 4.0 de 1 TB compacto y rápido.",
    descripcionLarga:
      "Kingston NV3 entrega almacenamiento NVMe de alta velocidad para computadores modernos.",
    caracteristicas: [
      "1 TB",
      "M.2 2280",
      "NVMe",
      "PCIe 4.0",
      "Diseño compacto"
    ],
    destacado: false
  },

  {
    id: 12,
    nombre: "WD Black SN850X 2TB NVMe SSD",
    categoria: "SSD",
    marca: "Western Digital",
    modelo: "SN850X",
    precio: 179990,
    stock: 13,
    imagen: sn850xImg,
    descripcionCorta:
      "SSD NVMe PCIe 4.0 de 2 TB diseñado especialmente para gaming.",
    descripcionLarga:
      "El WD Black SN850X ofrece altas velocidades y tiempos de carga reducidos.",
    caracteristicas: [
      "2 TB",
      "M.2",
      "NVMe",
      "PCIe 4.0",
      "Orientado a gaming"
    ],
    destacado: false
  },


  /* =====================================================
     PCS ARMADOS
  ===================================================== */

  {
    id: 13,
    nombre: "PC Gamer Ryzen 5 7600 + RTX 5060 Ti",
    categoria: "PCs Armados",
    marca: "PC-SHOP",
    modelo: "Gaming Starter 1440p",
    precio: 1299990,
    stock: 4,
    imagen: pc5060TiImg,
    descripcionCorta:
      "PC Gamer con Ryzen 5, RTX 5060 Ti y 32 GB de RAM para gaming en 1440p.",
    descripcionLarga:
      "Equipo armado por PC-SHOP orientado a videojuegos modernos en 1080p y 1440p.",
    caracteristicas: [
      "AMD Ryzen 5 7600",
      "RTX 5060 Ti 16GB",
      "32 GB DDR5",
      "SSD NVMe 1 TB",
      "Fuente 750 W",
      "Windows 11"
    ],
    destacado: true
  },

  {
    id: 14,
    nombre: "PC Gamer Intel Core i5 + RTX 5070",
    categoria: "PCs Armados",
    marca: "PC-SHOP",
    modelo: "Gaming Performance 1440p",
    precio: 1599990,
    stock: 3,
    imagen: pc5070Img,
    descripcionCorta:
      "Equipo gaming de alto rendimiento equipado con Intel Core i5 y RTX 5070.",
    descripcionLarga:
      "PC Gamer orientado a videojuegos exigentes en resolución 1440p.",
    caracteristicas: [
      "Intel Core i5",
      "RTX 5070 12GB",
      "32 GB DDR5",
      "SSD NVMe 2 TB",
      "Fuente 850 W",
      "Windows 11"
    ],
    destacado: true
  },

  {
    id: 15,
    nombre: "PC Gamer Ryzen 7 7800X3D + RX 9070 XT",
    categoria: "PCs Armados",
    marca: "PC-SHOP",
    modelo: "Gaming Ultimate",
    precio: 1999990,
    stock: 2,
    imagen: pc9070XtImg,
    descripcionCorta:
      "PC Gamer premium con Ryzen 7 7800X3D y Radeon RX 9070 XT.",
    descripcionLarga:
      "Equipo de gama alta preparado para videojuegos exigentes en 1440p y 4K.",
    caracteristicas: [
      "Ryzen 7 7800X3D",
      "RX 9070 XT 16GB",
      "32 GB DDR5",
      "SSD NVMe 2 TB",
      "Fuente 850 W",
      "Refrigeración líquida"
    ],
    destacado: false
  },


  /* =====================================================
     NOTEBOOKS
  ===================================================== */

  {
    id: 20,
    nombre: "ASUS TUF Gaming A15 Ryzen 7 RTX 4060",
    categoria: "Notebooks",
    marca: "ASUS",
    modelo: "TUF Gaming A15",
    precio: 999990,
    stock: 7,
    imagen: asusTufImg,
    descripcionCorta:
      "Notebook gamer con Ryzen 7 y RTX 4060 para gaming y productividad.",
    descripcionLarga:
      "ASUS TUF Gaming A15 combina un procesador AMD Ryzen 7 con gráficos NVIDIA GeForce RTX para videojuegos y aplicaciones exigentes.",
    caracteristicas: [
      "AMD Ryzen 7",
      "GeForce RTX 4060",
      "16 GB RAM",
      "SSD NVMe 1 TB",
      "Pantalla 144 Hz"
    ],
    destacado: false
  },

  {
    id: 21,
    nombre: "Lenovo Legion 5 Ryzen 7 RTX 4070",
    categoria: "Notebooks",
    marca: "Lenovo",
    modelo: "Legion 5",
    precio: 1399990,
    stock: 5,
    imagen: legion5Img,
    descripcionCorta:
      "Notebook gaming de alto rendimiento con Ryzen 7 y GeForce RTX 4070.",
    descripcionLarga:
      "Lenovo Legion 5 está diseñado para usuarios que buscan alto rendimiento en gaming, creación de contenido y productividad.",
    caracteristicas: [
      "AMD Ryzen 7",
      "GeForce RTX 4070",
      "16 GB RAM",
      "SSD NVMe 1 TB",
      "Pantalla de alta frecuencia"
    ],
    destacado: false
  },

  {
    id: 22,
    nombre: "Acer Nitro V Intel Core i7 RTX 4060",
    categoria: "Notebooks",
    marca: "Acer",
    modelo: "Nitro V",
    precio: 1099990,
    stock: 8,
    imagen: acerNitroImg,
    descripcionCorta:
      "Notebook gaming con Intel Core i7 y RTX 4060 para jugar y trabajar.",
    descripcionLarga:
      "Acer Nitro V ofrece una combinación equilibrada de CPU Intel Core y gráficos NVIDIA GeForce RTX para videojuegos y aplicaciones exigentes.",
    caracteristicas: [
      "Intel Core i7",
      "GeForce RTX 4060",
      "16 GB RAM",
      "SSD NVMe 512 GB",
      "Pantalla 144 Hz"
    ],
    destacado: false
  },

  {
    id: 23,
    nombre: "HP Victus 16 Ryzen 7 RTX 4050",
    categoria: "Notebooks",
    marca: "HP",
    modelo: "Victus 16",
    precio: 899990,
    stock: 10,
    imagen: hpVictusImg,
    descripcionCorta:
      "Notebook gaming equilibrado con Ryzen 7 y gráficos NVIDIA GeForce RTX.",
    descripcionLarga:
      "HP Victus 16 está orientado a gaming, estudio y productividad, ofreciendo un diseño sobrio y componentes de buen rendimiento.",
    caracteristicas: [
      "AMD Ryzen 7",
      "GeForce RTX 4050",
      "16 GB RAM",
      "SSD NVMe 512 GB",
      "Pantalla de 16 pulgadas"
    ],
    destacado: false
  },


  {
    id: 16,
    nombre: "ASUS ROG Strix Z790-E Motherboard",
    categoria: "Placas Madre",
    marca: "ASUS",
    modelo: "ROG Strix Z790-E",
    precio: 749990,
    stock: 5,
    imagen: placaImg,
    descripcionCorta:
      "Placa madre ASUS ROG de gama alta para computadores gaming.",
    descripcionLarga:
      "La ASUS ROG Strix Z790-E ofrece conectividad avanzada y múltiples opciones de expansión.",
    caracteristicas: [
      "Chipset Intel Z790",
      "Formato ATX",
      "Múltiples conexiones M.2",
      "Soporte para componentes modernos"
    ],
    destacado: false
  },

  {
    id: 17,
    nombre: "Corsair RM750 750W Power Supply",
    categoria: "Fuentes de Poder",
    marca: "Corsair",
    modelo: "RM750",
    precio: 119990,
    stock: 14,
    imagen: fuenteImg,
    descripcionCorta:
      "Fuente de poder de 750 W para computadores gaming.",
    descripcionLarga:
      "La Corsair RM750 entrega alimentación estable y eficiente para componentes de alto rendimiento.",
    caracteristicas: [
      "750 W",
      "Diseño modular",
      "Ventilador silencioso",
      "Protecciones eléctricas"
    ],
    destacado: false
  },

  {
    id: 18,
    nombre: "Corsair iCUE H100i Liquid Cooler",
    categoria: "Refrigeración",
    marca: "Corsair",
    modelo: "iCUE H100i",
    precio: 149990,
    stock: 10,
    imagen: coolerImg,
    descripcionCorta:
      "Sistema de refrigeración líquida AIO para procesadores de alto rendimiento.",
    descripcionLarga:
      "Corsair iCUE H100i ayuda a mantener controladas las temperaturas del procesador.",
    caracteristicas: [
      "AIO",
      "Radiador 240 mm",
      "Dos ventiladores",
      "Compatible con Corsair iCUE"
    ],
    destacado: false
  },

  {
    id: 19,
    nombre: "Corsair LL120 RGB Case Fans 3-Pack",
    categoria: "Ventiladores",
    marca: "Corsair",
    modelo: "LL120 RGB",
    precio: 89990,
    stock: 20,
    imagen: ventiladoresImg,
    descripcionCorta:
      "Pack de tres ventiladores RGB de 120 mm para gabinete.",
    descripcionLarga:
      "Los Corsair LL120 combinan refrigeración e iluminación RGB configurable.",
    caracteristicas: [
      "Pack de 3",
      "120 mm",
      "RGB",
      "Compatible con Corsair iCUE"
    ],
    destacado: false
  }
];
export default productos;