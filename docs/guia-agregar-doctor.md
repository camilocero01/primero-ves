# 🛠️ Guía Rápida: Agregar Nuevo Doctor al Sistema

## Pre-requisitos
- VS Code instalado
- Acceso al repositorio de PrimeroVes
- Cuenta de Vercel conectada (deploy automático)

---

## Paso 1: Abrir el archivo de configuración

```
📁 src/config/siteConfig.ts
```

---

## Paso 2: Copiar plantilla de doctor

Busca el último doctor en el archivo y copia todo el bloque desde `{` hasta `},`.

Pégalo justo antes del cierre del array `];`

---

## Paso 3: Generar el SLUG

El slug es la URL única del doctor. Formato recomendado:

| Tipo | Ejemplo |
|------|---------|
| Doctor hombre | `dr-nombre-apellido` |
| Doctora mujer | `dra-nombre-apellido` |
| Clínica | `clinica-nombre` |

**Reglas:**
- Todo en minúsculas
- Sin acentos (á → a, ñ → n)
- Guiones en lugar de espacios
- Sin caracteres especiales

**Ejemplos:**
```
Dr. Carlos Andrés Pérez López → dr-carlos-perez
Dra. María José García → dra-maria-garcia
Clínica Dental Sonrisas → clinica-dental-sonrisas
```

---

## Paso 4: Completar datos del doctor

### 4.1 Datos personales
```typescript
slug: 'dr-nuevo-doctor', // ← CAMBIAR

doctor: {
  nombre: 'Nombre Completo',        // ← CAMBIAR
  titulo: 'Dr.',                     // ← Dr. o Dra.
  especialidad: 'Especialidad',      // ← CAMBIAR
  subespecialidad: 'Sub si tiene',   // ← CAMBIAR o borrar línea
  cedulaProfesional: 'RM-XXXXX',     // ← CAMBIAR o borrar
  foto: '/images/photo/dr-nuevo.png', // ← Subir foto o usar placeholder
  frase: 'Frase motivacional',       // ← CAMBIAR
  biografia: 'Descripción...',       // ← CAMBIAR
},
```

### 4.2 Colores (elegir según especialidad)
```typescript
colores: {
  primario: '#1B4D6E',    // ← Color principal
  secundario: '#C9A96E',  // ← Color secundario
},
```

**Paletas sugeridas:**

| Especialidad | Primario | Secundario |
|--------------|----------|------------|
| Cardiología | `#1B4D6E` | `#C9A96E` |
| Cirugía Plástica | `#8B5E83` | `#D4A574` |
| Dermatología | `#2D8B7A` | `#F4EDE4` |
| Pediatría | `#4A9ED4` | `#FFD166` |
| Ginecología | `#9B6B8E` | `#E8D4E4` |
| Traumatología | `#2C3E50` | `#95A5A6` |
| Oftalmología | `#3498DB` | `#27AE60` |
| Odontología | `#17A2B8` | `#F8F9FA` |
| Neurología | `#5B4B8A` | `#C4B7D4` |
| Nutrición | `#7CB342` | `#FFF8E1` |

### 4.3 Servicios (mínimo 4)
```typescript
servicios: [
  {
    nombre: 'Consulta General',
    descripcion: 'Descripción del servicio...',
    icono: 'heart-pulse', // Ver lista de iconos abajo
  },
  // ... más servicios
],
```

**Iconos disponibles:**
- `heart-pulse` - Corazón con pulso
- `scan-heart` - Escaneo de corazón
- `activity` - Línea de actividad
- `monitor-heart` - Monitor cardíaco
- `bike` - Bicicleta (ejercicio)
- `clock` - Reloj
- `shield` - Escudo
- `check-circle` - Check
- `award` - Premio

### 4.4 Horarios
```typescript
horarios: [
  { dias: 'Lunes a Viernes', horas: '8:00 AM - 12:00 PM' },
  { dias: 'Lunes a Viernes', horas: '2:00 PM - 6:00 PM' },
  { dias: 'Sábados', horas: '8:00 AM - 12:00 PM' },
],
```

### 4.5 Contacto
```typescript
contacto: {
  telefono: '+57 601 123 4567',      // ← Con código de país
  whatsapp: '573101234567',          // ← Solo números, con código de país
  email: 'contacto@doctor.com',      
  direccion: 'Calle X # Y-Z, Consultorio 123',
  ciudad: 'Ciudad',
  estado: 'Departamento/Estado',
  pais: 'País',
  codigoPostal: '110111',
  googleMapsUrl: 'https://maps.google.com/?q=...',      // ← URL de Google Maps
  googleMapsEmbed: 'https://maps.google.com/maps?...',  // ← Embed de Maps
},
```

**¿Cómo obtener Google Maps Embed?**
1. Ir a Google Maps
2. Buscar la dirección
3. Click en "Compartir"
4. Click en "Insertar un mapa"
5. Copiar solo la URL del `src="..."`

### 4.6 Redes sociales
```typescript
redesSociales: {
  facebook: 'https://facebook.com/...',    // ← Si tiene
  instagram: 'https://instagram.com/...',  // ← Si tiene
  linkedin: 'https://linkedin.com/in/...', // ← Si tiene
  doctoralia: 'https://doctoralia.co/...',  // ← Si tiene
  // youtube, tiktok también disponibles
},
```

### 4.7 SEO
```typescript
seo: {
  siteName: 'Dr. Nombre - Especialidad en Ciudad',
  title: 'Dr. Nombre | Especialidad en Ciudad',
  description: 'Descripción de 150-160 caracteres para Google...',
  keywords: ['palabra clave 1', 'palabra clave 2'],
  ogImage: '/images/og-image.webp',
  locale: 'es_CO',  // es_MX para México, es_ES para España
  canonical: 'https://primeroves.com/dr-slug',
  structuredData: { 
    type: 'Physician',  // o 'Dentist', 'MedicalClinic'
    priceRange: '$$$', 
    medicalSpecialty: 'Especialidad' 
  },
},
```

### 4.8 CTA (Llamadas a la acción)
```typescript
cta: {
  principal: 'Agendar Cita',
  secundario: 'Conocer Más',
  whatsappMensaje: 'Hola Dr. Nombre, me gustaría agendar una cita.',
},
```

### 4.9 Testimonios
```typescript
testimonios: [
  { 
    nombre: 'María G.', 
    texto: 'Excelente doctor, muy profesional...', 
    calificacion: 5 
  },
  // Mínimo 3 testimonios
],
```

### 4.10 Imágenes
```typescript
imagenes: {
  heroFondo: '/images/users/X/hero.webp',  // ← Subir imagen o usar Unsplash
  consultorio: 'https://images.unsplash.com/...',
  instalaciones: [
    { url: 'https://...', alt: 'Descripción' },
  ],
  galeria: [
    { url: 'https://...', alt: 'Descripción' },
  ],
},
```

---

## Paso 5: Guardar y hacer Push

```bash
# En terminal de VS Code:
git add .
git commit -m "feat: agregar doctor dr-nombre-apellido"
git push origin main
```

---

## Paso 6: Verificar Deploy

1. Ir a [Vercel Dashboard](https://vercel.com)
2. Esperar que el deploy termine (2-3 minutos)
3. Verificar las URLs:

```
https://primero-ves.vercel.app/[SLUG]/elegante
https://primero-ves.vercel.app/[SLUG]/moderna
https://primero-ves.vercel.app/[SLUG]/clasica
```

---

## Plantilla Completa para Copiar

```typescript
  // ──────────────────────────────────────
  // DOCTOR NUEVO: [Especialidad] - [Ciudad]
  // ──────────────────────────────────────
  {
    slug: 'dr-nombre-apellido',

    doctor: {
      nombre: 'Nombre Completo del Doctor',
      titulo: 'Dr.',
      especialidad: 'Especialidad',
      subespecialidad: 'Subespecialidad',
      cedulaProfesional: 'RM-XXXXX',
      foto: '/images/photo/dr-nombre.png',
      frase: 'Frase motivacional del doctor',
      biografia: 'Biografía completa del doctor con experiencia, estudios y certificaciones.',
    },

    colores: {
      primario: '#1B4D6E',
      secundario: '#C9A96E',
    },

    logo: {
      url: '/images/logo-placeholder.webp',
      alt: 'Dr. Nombre - Especialidad',
    },

    servicios: [
      { nombre: 'Servicio 1', descripcion: 'Descripción del servicio 1.', icono: 'heart-pulse' },
      { nombre: 'Servicio 2', descripcion: 'Descripción del servicio 2.', icono: 'activity' },
      { nombre: 'Servicio 3', descripcion: 'Descripción del servicio 3.', icono: 'shield' },
      { nombre: 'Servicio 4', descripcion: 'Descripción del servicio 4.', icono: 'check-circle' },
    ],

    horarios: [
      { dias: 'Lunes a Viernes', horas: '8:00 AM - 12:00 PM' },
      { dias: 'Lunes a Viernes', horas: '2:00 PM - 6:00 PM' },
      { dias: 'Sábados', horas: '8:00 AM - 12:00 PM' },
    ],

    contacto: {
      telefono: '+57 601 123 4567',
      whatsapp: '573101234567',
      email: 'contacto@doctor.com',
      direccion: 'Dirección completa',
      ciudad: 'Ciudad',
      estado: 'Estado',
      pais: 'Colombia',
      codigoPostal: '110111',
      googleMapsUrl: 'https://maps.google.com/?q=direccion',
      googleMapsEmbed: 'https://maps.google.com/maps?q=direccion&output=embed',
    },

    redesSociales: {
      facebook: 'https://facebook.com/doctor',
      instagram: 'https://instagram.com/doctor',
      doctoralia: 'https://doctoralia.co/doctor',
    },

    seo: {
      siteName: 'Dr. Nombre - Especialidad en Ciudad',
      title: 'Dr. Nombre | Especialidad en Ciudad',
      description: 'Descripción SEO de 150-160 caracteres.',
      keywords: ['especialidad ciudad', 'dr nombre'],
      ogImage: '/images/og-image.webp',
      locale: 'es_CO',
      canonical: 'https://primeroves.com/dr-nombre-apellido',
      structuredData: { type: 'Physician', priceRange: '$$$', medicalSpecialty: 'Especialidad' },
    },

    cta: {
      principal: 'Agendar Cita',
      secundario: 'Conocer Más',
      whatsappMensaje: 'Hola Dr. Nombre, me gustaría agendar una cita.',
    },

    testimonios: [
      { nombre: 'Paciente 1', texto: 'Testimonio del paciente 1.', calificacion: 5 },
      { nombre: 'Paciente 2', texto: 'Testimonio del paciente 2.', calificacion: 5 },
      { nombre: 'Paciente 3', texto: 'Testimonio del paciente 3.', calificacion: 5 },
    ],

    imagenes: {
      heroFondo: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=1920&q=80',
      consultorio: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800&q=80',
      instalaciones: [
        { url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80', alt: 'Instalación 1' },
        { url: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=600&q=80', alt: 'Instalación 2' },
      ],
      galeria: [
        { url: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=600&q=80', alt: 'Galería 1' },
        { url: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=600&q=80', alt: 'Galería 2' },
      ],
    },
  },
```

---

## Errores Comunes

| Error | Solución |
|-------|----------|
| Build falla | Revisar comas al final de cada campo |
| Página no carga | Verificar que el slug no tenga caracteres especiales |
| Imagen no aparece | Verificar URL de la imagen o ruta local |
| WhatsApp no funciona | El número debe ser solo dígitos con código de país |

---

*Guía v1.0 - PrimeroVes*
