# 📋 FICHA DE CAPTURA RÁPIDA - Nuevo Doctor

```
================================================================================
                          PRIMERO VES - NUEVO CLIENTE
================================================================================

📅 Fecha de contacto: ____/____/______
👤 Vendedor: _________________________
📱 Fuente: [ ] Puerta fría  [ ] Referido de: ____________

================================================================================
                              DATOS DEL DOCTOR
================================================================================

Slug (para URL): dr-_____________________  
                 (minúsculas, sin espacios, usar guiones)
                 Ejemplo: dr-carlos-mendoza

---

IDENTIDAD
---------
Nombre completo    : _________________________________________________
Título             : [ ] Dr.  [ ] Dra.
Especialidad       : _________________________________________________
Subespecialidad    : _________________________________________________
Cédula/Registro    : _________________________________________________
Frase/Lema         : _________________________________________________

BIOGRAFÍA (2-3 oraciones):
___________________________________________________________________________
___________________________________________________________________________
___________________________________________________________________________

================================================================================
                               UBICACIÓN
================================================================================

Dirección completa : _________________________________________________
                     _________________________________________________
Ciudad             : _________________________________________________
Estado/Depto       : _________________________________________________
País               : _________________________________________________
Código Postal      : _________________________________________________

Google Maps URL    : _________________________________________________
(Buscar en Google Maps, clic derecho → "Compartir" → copiar link)

================================================================================
                               CONTACTO
================================================================================

Teléfono           : +_______ _______________________________
WhatsApp           : ___________________ (solo números, con código país)
                     Ejemplo: 573101234567
Email              : _________________________________________________

================================================================================
                               HORARIOS
================================================================================

[ ] Lunes      : ________ AM/PM  a  ________ AM/PM
[ ] Martes     : ________ AM/PM  a  ________ AM/PM
[ ] Miércoles  : ________ AM/PM  a  ________ AM/PM
[ ] Jueves     : ________ AM/PM  a  ________ AM/PM
[ ] Viernes    : ________ AM/PM  a  ________ AM/PM
[ ] Sábado     : ________ AM/PM  a  ________ AM/PM
[ ] Domingo    : ________ AM/PM  a  ________ AM/PM

================================================================================
                               SERVICIOS
================================================================================

1. Nombre: ___________________________
   Descripción: _______________________________________________________

2. Nombre: ___________________________
   Descripción: _______________________________________________________

3. Nombre: ___________________________
   Descripción: _______________________________________________________

4. Nombre: ___________________________
   Descripción: _______________________________________________________

5. Nombre: ___________________________
   Descripción: _______________________________________________________

6. Nombre: ___________________________
   Descripción: _______________________________________________________

================================================================================
                            REDES SOCIALES
================================================================================

Facebook   : https://facebook.com/______________________________
Instagram  : https://instagram.com/______________________________
LinkedIn   : https://linkedin.com/in/______________________________
YouTube    : https://youtube.com/______________________________
TikTok     : https://tiktok.com/@______________________________
Doctoralia : https://doctoralia.com.co/______________________________

================================================================================
                              MATERIAL
================================================================================

[ ] Foto profesional recibida
[ ] Logo recibido
[ ] Fotos del consultorio recibidas
[ ] Google Maps verificado

================================================================================
                           PREFERENCIAS
================================================================================

Colores preferidos : Primario: ____________  Secundario: ____________
                     (O dejar en blanco para sugerir según especialidad)

Diseño favorito    : [ ] Elegante  [ ] Moderna  [ ] Clásica  [ ] Por definir

================================================================================
                            SEGUIMIENTO
================================================================================

Estado: [ ] Demo pendiente  
        [ ] Demo enviado  
        [ ] Esperando respuesta
        [ ] Negociación
        [ ] Cerrado ✓
        [ ] Perdido ✗

Notas:
___________________________________________________________________________
___________________________________________________________________________
___________________________________________________________________________

Próximo contacto: ____/____/______ a las ______:______

================================================================================
```

---

## CONVERSIÓN RÁPIDA A CÓDIGO

Una vez llenada la ficha, copiar este template y reemplazar los valores:

```typescript
// ===== AGREGAR EN siteConfig.ts =====
{
  slug: '{{SLUG}}',

  doctor: {
    nombre: '{{NOMBRE_COMPLETO}}',
    titulo: '{{TITULO}}',
    especialidad: '{{ESPECIALIDAD}}',
    subespecialidad: '{{SUBESPECIALIDAD}}',
    cedulaProfesional: '{{CEDULA}}',
    foto: '/images/photo/{{SLUG}}.webp',
    frase: '{{FRASE}}',
    biografia: '{{BIOGRAFIA}}',
  },

  colores: {
    primario: '{{COLOR_PRIMARIO}}',
    secundario: '{{COLOR_SECUNDARIO}}',
  },

  logo: {
    url: '/images/logo-placeholder.webp',
    alt: '{{TITULO}} {{NOMBRE_COMPLETO}} - {{ESPECIALIDAD}}',
  },

  servicios: [
    { nombre: '{{SERVICIO_1}}', descripcion: '{{DESC_1}}', icono: 'heart-pulse' },
    { nombre: '{{SERVICIO_2}}', descripcion: '{{DESC_2}}', icono: 'activity' },
    { nombre: '{{SERVICIO_3}}', descripcion: '{{DESC_3}}', icono: 'shield' },
  ],

  horarios: [
    { dias: '{{DIAS_1}}', horas: '{{HORAS_1}}' },
    { dias: '{{DIAS_2}}', horas: '{{HORAS_2}}' },
  ],

  contacto: {
    telefono: '{{TELEFONO}}',
    whatsapp: '{{WHATSAPP}}',
    email: '{{EMAIL}}',
    direccion: '{{DIRECCION}}',
    ciudad: '{{CIUDAD}}',
    estado: '{{ESTADO}}',
    pais: '{{PAIS}}',
    codigoPostal: '{{CP}}',
    googleMapsUrl: '{{GMAPS_URL}}',
    googleMapsEmbed: '{{GMAPS_EMBED}}',
  },

  redesSociales: {
    facebook: '{{FACEBOOK}}',
    instagram: '{{INSTAGRAM}}',
    linkedin: '{{LINKEDIN}}',
    doctoralia: '{{DOCTORALIA}}',
  },

  seo: {
    siteName: '{{TITULO}} {{NOMBRE_COMPLETO}} - {{ESPECIALIDAD}} en {{CIUDAD}}',
    title: '{{TITULO}} {{NOMBRE_COMPLETO}} | {{ESPECIALIDAD}} en {{CIUDAD}}',
    description: '{{ESPECIALIDAD}} en {{CIUDAD}}. {{FRASE}}. Agenda tu cita hoy.',
    keywords: ['{{ESPECIALIDAD}} {{CIUDAD}}', '{{NOMBRE_COMPLETO}}', '{{SUBESPECIALIDAD}}'],
    ogImage: '/images/og-image.webp',
    locale: 'es_CO',
    canonical: 'https://primeroves.com/{{SLUG}}',
    structuredData: { 
      type: 'Physician',
      priceRange: '$$$', 
      medicalSpecialty: '{{ESPECIALIDAD}}' 
    },
  },

  cta: {
    principal: 'Agendar Cita',
    secundario: 'Conocer Más',
    whatsappMensaje: 'Hola {{TITULO}} {{NOMBRE_COMPLETO}}, me gustaría agendar una cita.',
  },

  testimonios: [
    { nombre: 'Paciente A.', texto: 'Excelente profesional, muy recomendado.', calificacion: 5 },
    { nombre: 'Paciente B.', texto: 'Atención de primera calidad.', calificacion: 5 },
    { nombre: 'Paciente C.', texto: 'Muy satisfecho con la atención recibida.', calificacion: 5 },
  ],

  imagenes: {
    heroFondo: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=1920&q=80',
    consultorio: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800&q=80',
    instalaciones: [],
    galeria: [],
  },
},
```

---

## COMANDOS DESPUÉS DE AGREGAR

```bash
# 1. Guardar el archivo siteConfig.ts

# 2. Compilar el proyecto
npm run build

# 3. Verificar que no hay errores

# 4. Probar localmente (opcional)
npm run preview

# 5. Subir a producción
git add .
git commit -m "Agregar doctor: {{SLUG}}"
git push

# El deploy a Vercel es automático
```

---

## URLs DEL DEMO

Una vez desplegado, las URLs serán:

- **Elegante**: `https://primero-ves.vercel.app/{{SLUG}}/elegante`
- **Moderna**: `https://primero-ves.vercel.app/{{SLUG}}/moderna`  
- **Clásica**: `https://primero-ves.vercel.app/{{SLUG}}/clasica`
