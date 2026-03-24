// ============================================================
// PRIMEROVES - Configuración Central Multi-Doctor
// ============================================================
// Cada doctor es un objeto en el arreglo `doctores`.
// Agrega un doctor nuevo copiando un bloque y cambiando los datos.
// El `slug` se usa para la URL: primeroves.com/{slug}/elegante
// ============================================================

export interface DoctorConfig {
  // --- IDENTIFICADOR ÚNICO (URL) ---
  slug: string; // ej: "dr-carlos-mendoza" → /dr-carlos-mendoza/elegante

  // --- IDENTIDAD DEL DOCTOR ---
  doctor: {
    nombre: string;
    titulo: string;
    especialidad: string;
    subespecialidad?: string;
    cedulaProfesional?: string;
    foto: string;
    frase: string;
    biografia: string;
  };

  // --- COLORES CORPORATIVOS ---
  colores: {
    primario: string;
    secundario: string;
  };

  // --- LOGO ---
  logo: {
    url: string;
    alt: string;
  };

  // --- SERVICIOS ---
  servicios: Array<{
    nombre: string;
    descripcion: string;
    icono: string;
  }>;

  // --- HORARIOS ---
  horarios: Array<{
    dias: string;
    horas: string;
  }>;

  // --- CONTACTO ---
  contacto: {
    telefono: string;
    whatsapp: string;
    email: string;
    direccion: string;
    ciudad: string;
    estado: string;
    pais: string;
    codigoPostal?: string;
    googleMapsUrl: string;
    googleMapsEmbed: string;
  };

  // --- REDES SOCIALES ---
  redesSociales: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
    tiktok?: string;
    doctoralia?: string;
  };

  // --- SEO ---
  seo: {
    siteName: string;
    title: string;
    description: string;
    keywords: string[];
    ogImage: string;
    locale: string;
    canonical: string;
    googleVerification?: string;
    structuredData: {
      type: 'Physician' | 'Dentist' | 'MedicalClinic';
      priceRange: string;
      medicalSpecialty: string;
    };
  };

  // --- LLAMADAS A LA ACCIÓN ---
  cta: {
    principal: string;
    secundario: string;
    whatsappMensaje: string;
  };

  // --- TESTIMONIOS ---
  testimonios: Array<{
    nombre: string;
    texto: string;
    calificacion: number;
  }>;

  // --- IMÁGENES ---
  imagenes: {
    /** Imagen de fondo del hero, alusiva a la especialidad (1920×1080px, .webp) */
    heroFondo: string;
    /** Imagen principal del consultorio / clínica (800×600px, .webp) */
    consultorio: string;
    /** Galería de instalaciones: sala de espera, equipos, fachada, etc. */
    instalaciones: Array<{
      url: string;
      alt: string;
    }>;
    /** Imágenes alusivas a la especialidad: procedimientos, tecnología, etc. */
    galeria: Array<{
      url: string;
      alt: string;
    }>;
  };
}

// ============================================================
// CATÁLOGO DE DOCTORES
// ============================================================
export const doctores: DoctorConfig[] = [
  // ──────────────────────────────────────
  // DOCTOR 1: Cardiólogo - Bogotá
  // ──────────────────────────────────────
  {
    slug: 'dr-carlos-mendoza',

    doctor: {
      nombre: 'Carlos Mendoza Rivera',
      titulo: 'Dr.',
      especialidad: 'Cardiología',
      subespecialidad: 'Hemodinámica e Intervencionismo',
      cedulaProfesional: 'RM-12345',
      foto: '/images/photo/dr-carlos-mendoza.PNG',
      frase: 'Tu corazón en las mejores manos',
      biografia:
        'Con más de 15 años de experiencia en cardiología intervencionista, me dedico a brindar atención de la más alta calidad. Egresado de la Universidad Nacional de Colombia, con subespecialidad en hemodinámica en la Fundación Cardioinfantil y múltiples certificaciones internacionales.',
    },

    colores: {
      primario: '#1B4D6E',
      secundario: '#C9A96E',
    },

    logo: {
      url:  '/images/logo-placeholder.webp',
      alt: 'Dr. Carlos Mendoza - Cardiólogo',
    },

    servicios: [
      {
        nombre: 'Consulta Cardiológica',
        descripcion: 'Evaluación integral de tu salud cardiovascular con tecnología de punta y atención personalizada.',
        icono: 'heart-pulse',
      },
      {
        nombre: 'Ecocardiograma',
        descripcion: 'Estudio de ultrasonido del corazón para evaluar su estructura y funcionamiento en tiempo real.',
        icono: 'scan-heart',
      },
      {
        nombre: 'Cateterismo Cardíaco',
        descripcion: 'Procedimiento mínimamente invasivo para diagnosticar y tratar enfermedades de las arterias coronarias.',
        icono: 'activity',
      },
      {
        nombre: 'Electrocardiograma',
        descripcion: 'Registro de la actividad eléctrica del corazón para detectar arritmias y otras alteraciones.',
        icono: 'monitor-heart',
      },
      {
        nombre: 'Prueba de Esfuerzo',
        descripcion: 'Evaluación del comportamiento del corazón durante el ejercicio físico controlado.',
        icono: 'bike',
      },
      {
        nombre: 'Holter de 24 horas',
        descripcion: 'Monitoreo continuo del ritmo cardíaco durante 24 horas para detectar anomalías intermitentes.',
        icono: 'clock',
      },
    ],

    horarios: [
      { dias: 'Lunes a Viernes', horas: '7:00 AM - 12:00 PM' },
      { dias: 'Lunes a Viernes', horas: '2:00 PM - 6:00 PM' },
      { dias: 'Sábados', horas: '8:00 AM - 12:00 PM' },
    ],

    contacto: {
      telefono: '+57 601 745 6789',
      whatsapp: '573101234567',
      email: 'contacto@drcarlosmendoza.com',
      direccion: 'Calle 127 # 20-78, Consultorio 405, Centro Médico del Norte',
      ciudad: 'Bogotá',
      estado: 'Cundinamarca',
      pais: 'Colombia',
      codigoPostal: '110111',
      googleMapsUrl: 'https://maps.google.com/?q=Calle+127+20-78+Bogota',
      googleMapsEmbed: 'https://maps.google.com/maps?q=Centro+M%C3%A9dico+del+Norte+Calle+127+Bogot%C3%A1+Colombia&t=&z=15&ie=UTF8&iwloc=&output=embed',
    },

    redesSociales: {
      facebook: 'https://facebook.com/drcarlosmendoza',
      instagram: 'https://instagram.com/drcarlosmendoza',
      linkedin: 'https://linkedin.com/in/drcarlosmendoza',
      doctoralia: 'https://www.doctoralia.co/drcarlosmendoza',
    },

    seo: {
      siteName: 'Dr. Carlos Mendoza - Cardiólogo en Bogotá',
      title: 'Dr. Carlos Mendoza | Cardiólogo Intervencionista en Bogotá',
      description: 'Cardiólogo intervencionista en Bogotá con más de 15 años de experiencia. Consulta cardiológica, ecocardiograma, cateterismo cardíaco.',
      keywords: ['cardiólogo bogotá', 'cardiólogo intervencionista bogotá', 'ecocardiograma bogotá', 'cateterismo cardíaco', 'Dr. Carlos Mendoza'],
      ogImage: '/images/og-image.webp',
      locale: 'es_CO',
      canonical: 'https://primeroves.com/dr-carlos-mendoza',
      structuredData: { type: 'Physician', priceRange: '$$$', medicalSpecialty: 'Cardiovascular' },
    },

    cta: {
      principal: 'Agendar Cita',
      secundario: 'Conocer Más',
      whatsappMensaje: 'Hola Dr. Mendoza, me gustaría agendar una cita para consulta cardiológica.',
    },

    testimonios: [
      { nombre: 'María G.', texto: 'Excelente doctor, muy profesional y humano. Me explicó todo con detalle y me sentí muy segura durante todo el procedimiento.', calificacion: 5 },
      { nombre: 'Roberto S.', texto: 'Lo recomiendo ampliamente. Después de visitar varios cardiólogos, el Dr. Mendoza fue quien realmente me dio un diagnóstico acertado.', calificacion: 5 },
      { nombre: 'Ana L.', texto: 'Atención de primera, instalaciones impecables y el doctor es muy atento. Sin duda el mejor cardiólogo de Bogotá.', calificacion: 5 },
    ],

    imagenes: {
      heroFondo: '\\images\\users\\1\\dr-carlos-mendoza-herofondo-v2.webp',
      consultorio: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800&q=80',
      instalaciones: [
        { url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80', alt: 'Sala de espera moderna y confortable' },
        { url: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=600&q=80', alt: 'Consultorio equipado con tecnología de punta' },
        { url: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600&q=80', alt: 'Área de procedimientos cardíacos' },
        { url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80', alt: 'Recepción y área administrativa' },
      ],
      galeria: [
        { url: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=600&q=80', alt: 'Ecocardiograma en tiempo real' },
        { url: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=600&q=80', alt: 'Monitoreo cardíaco avanzado' },
        { url: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&q=80', alt: 'Equipo de cateterismo cardíaco' },
      ],
    },
  },

  // ──────────────────────────────────────
  // DOCTOR 2: Cirujana Plástica - Medellín
  // ──────────────────────────────────────
  {
    slug: 'dra-sofia-herrera',

    doctor: {
      nombre: 'Sofía Herrera Castillo',
      titulo: 'Dra.',
      especialidad: 'Cirugía Plástica',
      subespecialidad: 'Cirugía Estética y Reconstructiva',
      cedulaProfesional: 'RM-87654',
      foto: '/images/photo/dra-sofia-herrera.PNG',
      frase: 'Realza tu belleza natural con seguridad',
      biografia:
        'Cirujana plástica certificada con más de 12 años de experiencia. Especialista en procedimientos estéticos faciales y corporales con técnicas mínimamente invasivas. Egresada de la Universidad de Antioquia con fellowship en cirugía estética en São Paulo, Brasil. Miembro de la Sociedad Colombiana de Cirugía Plástica (SCCP).',
    },

    colores: {
      primario: '#8B5E83',
      secundario: '#D4A574',
    },

    logo: {
      url: '/images/logo-placeholder.webp',
      alt: 'Dra. Sofía Herrera - Cirujana Plástica',
    },

    servicios: [
      { nombre: 'Consulta de Valoración', descripcion: 'Evaluación personalizada con simulación digital 3D para que visualices tus resultados antes del procedimiento.', icono: 'scan-heart' },
      { nombre: 'Rinoplastia', descripcion: 'Cirugía estética y funcional de nariz con técnicas de preservación para resultados naturales.', icono: 'activity' },
      { nombre: 'Liposucción VASER', descripcion: 'Extracción de grasa localizada con tecnología ultrasónica para un contorno corporal definido y armónico.', icono: 'heart-pulse' },
      { nombre: 'Aumento Mamario', descripcion: 'Implantes de última generación con técnicas de mínima cicatriz y recuperación acelerada.', icono: 'shield' },
      { nombre: 'Lifting Facial', descripcion: 'Rejuvenecimiento facial quirúrgico y no quirúrgico para un aspecto fresco y natural.', icono: 'check-circle' },
      { nombre: 'Toxina Botulínica y Rellenos', descripcion: 'Tratamientos inyectables para arrugas, volumen facial y perfilamiento sin cirugía.', icono: 'award' },
    ],

    horarios: [
      { dias: 'Lunes a Viernes', horas: '8:00 AM - 12:00 PM' },
      { dias: 'Lunes a Viernes', horas: '2:00 PM - 6:00 PM' },
      { dias: 'Sábados', horas: '8:00 AM - 12:00 PM' },
    ],

    contacto: {
      telefono: '+57 604 312 4567',
      whatsapp: '573209876543',
      email: 'citas@drasofiaherrera.com',
      direccion: 'Calle 7 # 39-197, Consultorio 712, Clínica El Rosario Sede Tesoro',
      ciudad: 'Medellín',
      estado: 'Antioquia',
      pais: 'Colombia',
      codigoPostal: '050021',
      googleMapsUrl: 'https://maps.google.com/?q=Clinica+El+Rosario+Tesoro+Medellin',
      googleMapsEmbed: 'https://maps.google.com/maps?q=Cl%C3%ADnica+El+Rosario+Sede+Tesoro+Medell%C3%ADn+Colombia&t=&z=15&ie=UTF8&iwloc=&output=embed',
    },

    redesSociales: {
      instagram: 'https://instagram.com/drasofiaherrera',
      facebook: 'https://facebook.com/drasofiaherrera',
      tiktok: 'https://tiktok.com/@drasofiaherrera',
      doctoralia: 'https://www.doctoralia.co/drasofiaherrera',
    },

    seo: {
      siteName: 'Dra. Sofía Herrera - Cirujana Plástica en Medellín',
      title: 'Dra. Sofía Herrera | Cirujana Plástica en Medellín',
      description: 'Cirujana plástica certificada en Medellín. Rinoplastia, liposucción, aumento mamario y procedimientos estéticos. Miembro de la SCCP. Agenda tu cita.',
      keywords: ['cirujana plástica medellín', 'rinoplastia medellín', 'liposucción medellín', 'aumento mamario medellín', 'Dra. Sofía Herrera'],
      ogImage: '/images/og-image.webp',
      locale: 'es_CO',
      canonical: 'https://primeroves.com/dra-sofia-herrera',
      structuredData: { type: 'Physician', priceRange: '$$$', medicalSpecialty: 'PlasticSurgery' },
    },

    cta: {
      principal: 'Agendar Valoración',
      secundario: 'Ver Procedimientos',
      whatsappMensaje: 'Hola Dra. Herrera, me gustaría agendar una valoración de cirugía plástica.',
    },

    testimonios: [
      { nombre: 'Laura M.', texto: 'La Dra. Sofía me hizo la rinoplastia y quedé feliz. Es muy detallista y el resultado se ve completamente natural. ¡Súper recomendada!', calificacion: 5 },
      { nombre: 'Carmen R.', texto: 'Me sentí súper segura desde la primera consulta. Me explicó todo el procedimiento con paciencia y los resultados superaron mis expectativas.', calificacion: 5 },
      { nombre: 'Diana P.', texto: 'Viajé desde Bogotá para operarme con ella y valió totalmente la pena. Su clínica es impecable y la atención es de primer nivel.', calificacion: 5 },
    ],

    imagenes: {
      heroFondo: '\\images\\users\\1\\dra-sofia-herrera-herofondo.webp',
      consultorio: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=800&q=80',
      instalaciones: [
        { url: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=600&q=80', alt: 'Sala de consulta estética moderna' },
        { url: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=600&q=80', alt: 'Quirófano equipado para cirugía plástica' },
        { url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80', alt: 'Sala de espera elegante y acogedora' },
        { url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80', alt: 'Área de recuperación post-operatoria' },
      ],
      galeria: [
        { url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80', alt: 'Procedimiento estético facial' },
        { url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80', alt: 'Tecnología láser de última generación' },
        { url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80', alt: 'Consulta de valoración personalizada' },
      ],
    },
  },

  // ──────────────────────────────────────
  // DOCTOR 3: Odontólogo Estético - Cali
  // ──────────────────────────────────────
  {
    slug: 'dr-alejandro-ruiz',

    doctor: {
      nombre: 'Alejandro Ruiz Domínguez',
      titulo: 'Dr.',
      especialidad: 'Odontología Estética',
      subespecialidad: 'Diseño de Sonrisa y Rehabilitación Oral',
      cedulaProfesional: 'RM-11223',
      foto: '/images/photo/dr-alejandro-ruiz.PNG',
      frase: 'Diseñamos la sonrisa que siempre soñaste',
      biografia:
        'Odontólogo estético con 18 años de experiencia. Especialista en diseño de sonrisa, carillas en porcelana e implantología dental. Egresado de la Universidad del Valle con posgrado en rehabilitación oral en la Universidad CES de Medellín. Miembro de la Federación Odontológica Colombiana.',
    },

    colores: {
      primario: '#2D5016',
      secundario: '#B8860B',
    },

    logo: {
      url: '/images/logo-placeholder.webp',
      alt: 'Dr. Alejandro Ruiz - Odontólogo Estético',
    },

    servicios: [
      { nombre: 'Diseño de Sonrisa', descripcion: 'Planificación digital de tu sonrisa ideal con carillas en porcelana de alta estética y durabilidad.', icono: 'award' },
      { nombre: 'Blanqueamiento Dental', descripcion: 'Aclaramiento profesional con tecnología LED para una sonrisa más blanca y luminosa en una sola sesión.', icono: 'check-circle' },
      { nombre: 'Implantes Dentales', descripcion: 'Reemplazo de dientes perdidos con implantes de titanio de última generación y carga inmediata.', icono: 'shield' },
      { nombre: 'Ortodoncia Invisible', descripcion: 'Alineadores transparentes para corregir tu sonrisa de forma discreta y cómoda.', icono: 'activity' },
      { nombre: 'Rehabilitación Oral', descripcion: 'Restauración funcional y estética completa de tu dentadura con materiales de alta calidad.', icono: 'heart-pulse' },
      { nombre: 'Limpieza y Profilaxis', descripcion: 'Limpieza dental profesional con ultrasonido para mantener encías sanas y prevenir enfermedades.', icono: 'bike' },
    ],

    horarios: [
      { dias: 'Lunes a Viernes', horas: '8:00 AM - 12:00 PM' },
      { dias: 'Lunes a Viernes', horas: '2:00 PM - 6:00 PM' },
      { dias: 'Sábados', horas: '8:00 AM - 1:00 PM' },
    ],

    contacto: {
      telefono: '+57 602 456 7890',
      whatsapp: '573155557890',
      email: 'citas@drruizsonrisa.com',
      direccion: 'Av. 9 Norte # 10-45, Consultorio 301, Centro Médico Imbanaco',
      ciudad: 'Cali',
      estado: 'Valle del Cauca',
      pais: 'Colombia',
      codigoPostal: '760020',
      googleMapsUrl: 'https://maps.google.com/?q=Centro+Medico+Imbanaco+Cali',
      googleMapsEmbed: 'https://maps.google.com/maps?q=Centro+M%C3%A9dico+Imbanaco+Cali+Colombia&t=&z=15&ie=UTF8&iwloc=&output=embed',
    },

    redesSociales: {
      instagram: 'https://instagram.com/drruizsonrisa',
      facebook: 'https://facebook.com/drruizsonrisa',
      linkedin: 'https://linkedin.com/in/drruizsonrisa',
      doctoralia: 'https://www.doctoralia.co/drruizsonrisa',
    },

    seo: {
      siteName: 'Dr. Alejandro Ruiz - Odontólogo Estético en Cali',
      title: 'Dr. Alejandro Ruiz | Diseño de Sonrisa en Cali',
      description: 'Odontólogo estético en Cali especialista en diseño de sonrisa, carillas y blanqueamiento dental. Implantes dentales con tecnología de punta. Agenda tu cita.',
      keywords: ['odontólogo estético cali', 'diseño de sonrisa cali', 'carillas porcelana cali', 'implantes dentales cali', 'Dr. Alejandro Ruiz'],
      ogImage: '/images/og-image.webp',
      locale: 'es_CO',
      canonical: 'https://primeroves.com/dr-alejandro-ruiz',
      structuredData: { type: 'Dentist', priceRange: '$$$', medicalSpecialty: 'CosmeticDentistry' },
    },

    cta: {
      principal: 'Agendar Valoración',
      secundario: 'Conocer Más',
      whatsappMensaje: 'Hola Dr. Ruiz, me gustaría agendar una valoración para diseño de sonrisa.',
    },

    testimonios: [
      { nombre: 'Jorge L.', texto: 'Me hizo el diseño de sonrisa y quedé impactado con el resultado. Se ve completamente natural y la atención fue de primer nivel.', calificacion: 5 },
      { nombre: 'Patricia V.', texto: 'Llevé a mi mamá para implantes dentales. El Dr. Ruiz fue muy claro, le explicó todo y el resultado quedó perfecto. Muy agradecida.', calificacion: 5 },
      { nombre: 'Miguel Á.', texto: 'El mejor odontólogo que he visitado en Cali. Después de las carillas me siento como otra persona. Súper profesional y cálido.', calificacion: 5 },
    ],

    imagenes: {
      heroFondo: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1920&q=80',
      consultorio: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=800&q=80',
      instalaciones: [
        { url: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80', alt: 'Consultorio odontológico moderno' },
        { url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80', alt: 'Sala de espera cómoda y luminosa' },
        { url: 'https://images.unsplash.com/photo-1516841273335-e39b37888115?w=600&q=80', alt: 'Equipos de radiología dental digital' },
        { url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80', alt: 'Recepción y área de atención al paciente' },
      ],
      galeria: [
        { url: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&q=80', alt: 'Diseño de sonrisa digital' },
        { url: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&q=80', alt: 'Procedimiento de blanqueamiento dental' },
        { url: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=600&q=80', alt: 'Tecnología CAD/CAM para carillas' },
      ],
    },
  },
];

// ============================================================
// HELPERS
// ============================================================

/** Obtiene un doctor por su slug */
export function getDoctorBySlug(slug: string): DoctorConfig | undefined {
  return doctores.find((d) => d.slug === slug);
}

/** Obtiene todos los slugs disponibles */
export function getAllSlugs(): string[] {
  return doctores.map((d) => d.slug);
}

/** Lista de plantillas disponibles */
export const plantillas = ['elegante', 'moderna', 'clasica', 'minimalista', 'premium', 'vanguardia'] as const;
export type Plantilla = (typeof plantillas)[number];
