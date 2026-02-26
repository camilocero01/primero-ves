# PrimeroVes

Plataforma para mostrar sitios web pre-construidos a médicos especialistas. El doctor ve su sitio terminado con su información real antes de pagar. Sin riesgo.

**Producción:** https://primero-ves.vercel.app

---

## Concepto de Negocio

1. **Diseñamos** → Creamos el sitio web con la información real del doctor
2. **Lo ves** → Le enviamos un link personalizado: `/?doctor=slug-del-doctor`
3. **Decides** → Si le gusta, paga y lo publicamos. Si no, no paga nada

Cada doctor ve 3 propuestas de diseño (Elegante, Moderna, Clásica) ya funcionando con sus datos, colores, servicios e imágenes.

---

## Stack Tecnológico

- **Astro** — Generador de sitios estáticos (output: `static`)
- **Tailwind CSS v4** — Estilos con `@tailwindcss/vite`
- **@astrojs/vercel** — Adapter para deploy en Vercel
- **@astrojs/sitemap** — Generación automática de sitemap
- **TypeScript** — Tipado estricto en configuraciones
- **Google Fonts** — Playfair Display (headings) + Inter (body)

---

## Estructura del Proyecto

```text
src/
├── config/
│   └── siteConfig.ts            # Configuración central de todos los doctores
├── layouts/
│   └── BaseLayout.astro         # Layout base con SEO, Schema.org y colores dinámicos
├── pages/
│   ├── index.astro              # Landing + vista personalizada por ?doctor=slug
│   └── [doctor]/
│       └── [plantilla].astro    # Ruta dinámica: /{slug}/{elegante|moderna|clasica}
├── components/
│   ├── Header.astro             # Navegación (adapta colores en hero oscuro)
│   ├── Footer.astro             # Pie de página + selector de plantilla
│   ├── Icon.astro               # ~25 iconos SVG inline parametrizables
│   ├── WhatsAppFloat.astro      # Botón flotante de WhatsApp
│   ├── elegante/                # 7 secciones con estilo sofisticado
│   │   ├── HeroElegante.astro
│   │   ├── ServiciosElegante.astro
│   │   ├── GaleriaElegante.astro
│   │   ├── SobreMiElegante.astro
│   │   ├── InstalacionesElegante.astro
│   │   ├── TestimoniosElegante.astro
│   │   └── ContactoElegante.astro
│   ├── moderna/                 # 7 secciones con estilo audaz
│   │   ├── HeroModerna.astro
│   │   ├── ServiciosModerna.astro
│   │   ├── GaleriaModerna.astro
│   │   ├── SobreMiModerna.astro
│   │   ├── InstalacionesModerna.astro
│   │   ├── TestimoniosModerna.astro
│   │   └── ContactoModerna.astro
│   └── clasica/                 # 7 secciones con estilo tradicional
│       ├── HeroClasica.astro
│       ├── ServiciosClasica.astro
│       ├── GaleriaClasica.astro
│       ├── SobreMiClasica.astro
│       ├── InstalacionesClasica.astro
│       ├── TestimoniosClasica.astro
│       └── ContactoClasica.astro
└── styles/
    └── global.css               # Tailwind theme + CSS custom properties
```

---

## Configuración de un Doctor (`siteConfig.ts`)

Cada doctor es un objeto `DoctorConfig` con:

| Sección          | Descripción                                              |
|------------------|----------------------------------------------------------|
| `slug`           | Identificador URL: `/dr-nombre/elegante`                 |
| `doctor`         | Nombre, título, especialidad, foto, biografía, frase     |
| `colores`        | `primario` y `secundario` (CSS custom properties)        |
| `logo`           | URL y alt del logotipo                                   |
| `servicios`      | Array de `{ nombre, descripcion, icono }`                |
| `horarios`       | Array de `{ dias, horas }`                               |
| `contacto`       | Teléfono, WhatsApp, email, dirección, Google Maps        |
| `redesSociales`  | Facebook, Instagram, LinkedIn, Doctoralia, etc.          |
| `seo`            | Title, description, keywords, Schema.org                 |
| `cta`            | Textos de llamadas a la acción                           |
| `testimonios`    | Array de `{ nombre, texto, calificacion }`               |
| `imagenes`       | Hero fondo, consultorio, instalaciones[], galería[]      |

### Agregar un doctor nuevo

1. Copiar un bloque existente en el arreglo `doctores` de `siteConfig.ts`
2. Cambiar `slug`, datos del doctor, colores, servicios, imágenes, etc.
3. Ejecutar `npm run build` → se generan automáticamente las 3 páginas
4. Enviar al doctor: `https://primero-ves.vercel.app/?doctor=su-slug`

---

## Flujo de URLs

| URL                                         | Muestra                                      |
|---------------------------------------------|----------------------------------------------|
| `/`                                         | Landing genérica de PrimeroVes               |
| `/?doctor=dra-sofia-herrera`                | 3 propuestas para la Dra. Sofía Herrera      |
| `/dra-sofia-herrera/elegante`               | Sitio completo plantilla Elegante            |
| `/dra-sofia-herrera/moderna`                | Sitio completo plantilla Moderna             |
| `/dra-sofia-herrera/clasica`                | Sitio completo plantilla Clásica             |

---

## Secciones por Plantilla

Cada plantilla renderiza 7 secciones en este orden:

1. **Hero** — Imagen de fondo alusiva a la especialidad + CTA
2. **Servicios** — Grid de servicios con iconos
3. **Galería** — Imágenes de la especialidad (procedimientos, tecnología)
4. **Sobre Mí** — Biografía, foto del doctor, credenciales
5. **Instalaciones** — Fotos del consultorio y equipos
6. **Testimonios** — Reseñas de pacientes
7. **Contacto** — Formulario, mapa, horarios, redes sociales

---

## Doctores Demo (Colombia)

| Slug                   | Doctor                      | Especialidad          | Ciudad   |
|------------------------|-----------------------------|-----------------------|----------|
| `dr-carlos-mendoza`    | Carlos Mendoza Rivera       | Cardiología           | Bogotá   |
| `dra-sofia-herrera`    | Sofía Herrera Castillo      | Cirugía Plástica      | Medellín |
| `dr-alejandro-ruiz`    | Alejandro Ruiz Domínguez    | Odontología Estética  | Cali     |

---

## Comandos

Se ejecutan desde la raíz del proyecto:

| Comando                   | Acción                                             |
| :------------------------ | :------------------------------------------------- |
| `npm install`             | Instala dependencias                               |
| `npm run dev`             | Servidor local en `localhost:4321`                 |
| `npm run build`           | Build de producción en `./dist/`                   |
| `npm run preview`         | Preview local del build                            |
| `vercel deploy --prod`    | Deploy manual a producción en Vercel               |

---

## Deploy

El proyecto se despliega en **Vercel** con la CLI:

```sh
npm run build
vercel deploy --prod --yes
```

Para deploy automático, conectar el repo de GitHub en el dashboard de Vercel.

---

## Arquitectura Clave

- **CSS Custom Properties** — Los colores del doctor se inyectan como `--color-primario` y `--color-secundario` vía `define:vars` en `BaseLayout.astro`
- **Rutas dinámicas** — `[doctor]/[plantilla].astro` genera todas las combinaciones doctor × plantilla en build time con `getStaticPaths`
- **Query params client-side** — `/?doctor=slug` usa un `<script is:inline>` para mostrar/ocultar secciones sin depender de CSS externo
- **Imágenes parametrizables** — Hero, galería de especialidad e instalaciones configurables por doctor en `siteConfig.ts`
- **21 componentes de plantilla** — 7 secciones × 3 estilos visuales, todos reciben `config: DoctorConfig` como prop
