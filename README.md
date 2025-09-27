# OneInfinity Checkout - Pasarela de Pago

Este proyecto implementa una **pasarela de checkout con OneInfinity**, pensada para integrarse fácilmente en aplicaciones web y móviles.  
El objetivo es simplificar el flujo de pagos con una experiencia de **checkout rápida, segura y personalizable**.

## ✨ Características

- 🔐 **Pagos seguros** con integración a OneInfinity.
- ⚡ **Checkout rápido** con confirmación en tiempo real.
- 🎨 **Diseño personalizable**, adaptable a tu marca.
- 📦 **Estructura escalable**, ideal para proyectos de ecommerce.
- 🛠️ **Backend con [NestJS/Express/etc.]** (ajusta según tu stack).
- 🌍 Preparado para múltiples métodos de pago.

## 📂 Estructura del proyecto

```bash
.
├── src/
│   ├── modules/        # Lógica de integración
│   ├── services/       # Servicios de comunicación con OneInfinity
│   ├── dto/            # Validaciones y contratos
│   └── ...
├── package.json
├── README.md
└── ...

```

## 🚀 Instalación y Uso

1. **Clona el repositorio**

```bash
git clone https://github.com/tuusuario/oneinfinity-checkout.git
cd oneinfinity-checkout
```

2. **Instala las dependencias**

```bash
npm install
```

3. **Configura tus variables de entorno (.env)**

```bash
ONE_API_KEY=tu_Api_key
ONE_SECRET_KEY=tu_secret_key
ONE_API_BASE_PROD=your_api_base_produccion
NEXT_PUBLIC_BASE_URL=your_public_base_url
```

4. **Levanta el servidor**

```bash
npm run start:dev
```

## ⚙️ Variables de Entorno

| Variable              | Descripción                              |
| --------------------- | ---------------------------------------- |
| `ONE_API_KEY`         | Tu API Key privada de OneInfinity        |
| `ONE_SECRET_KEY`      |tu secret key de OneInfinity              |
| `ONE_API_BASE_PROD`   | base one url                             |
|` NEXT_PUBLIC_BASE_URL`| tu url publica                           |

## 📖 Documentación

- [**Docs oficiales de OneInfinity**](https://oneinfinite.gitbook.io/v1)

  <img width="500" height="600" alt="imagen" src="https://github.com/Mateo-Alvarez1/oneinfinity-checkout/blob/master/readme-image.png" />


## 🤝 Contribuciones

¡Las contribuciones son bienvenidas!
Si quieres colaborar, abre un issue o envía un pull request con mejoras.

## ⭐ ¿Te sirvió?

Seguime en tiktok que subo contenido sobre desarrollo , automatizaciones y experiencias
👉 **@matualvarez\_**
