// ============================================================
// DOCTOR LANDING - Configuración Central Multi-Doctor
// ============================================================
// Cada doctor es un objeto en el arreglo `doctores`.
// Agrega un doctor nuevo copiando un bloque y cambiando los datos.
// El `slug` se usa para la URL: doctorlanding.co/{slug}/elegante
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
      canonical: 'https://doctorlanding.co/dr-carlos-mendoza',
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
      canonical: 'https://doctorlanding.co/dra-sofia-herrera',
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
      canonical: 'https://doctorlanding.co/dr-alejandro-ruiz',
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

  // ──────────────────────────────────────
  // DOCTOR 4: Cirujana Plástica - Medellín
  // ──────────────────────────────────────

  {
    slug: 'dra-ana-lucia-rave-martinez',

    doctor: {
      nombre: 'Ana Lucia Rave Martinez',
      titulo: 'Dra.',
      especialidad: 'Cirugía Plástica',
      subespecialidad: 'Cirugía Plástica, Reconstructiva, Estética, Maxilofacial y de la Mano',
      cedulaProfesional: 'REG-MEDICO-123',
      foto: '/images/photo/dra-ana-lucia-rave-martinez.jpg',
      frase: 'Belleza natural con manos expertas',
      biografia:
        'Soy Médica y Cirujana egresada de la Facultad de Medicina de la UPB (2002-2008), con especialización en Cirugía Plástica, Reconstructiva, Estética, Maxilofacial y de la Mano de la Universidad de Antioquia (2014). Con más de 12 años de experiencia, me dedico a realzar la belleza natural de mis pacientes con técnicas avanzadas y seguras. He complementado mi formación con entrenamientos internacionales en cirugía facial estética avanzada en Florida, EE.UU., y trasplante capilar en Saint Louis, Missouri. Cuento con certificaciones en anatomía facial avanzada para inyectables, Master Class en Sculptra de Galderma Aesthetics y formación en el Summit Regional Botox de Allergan Aesthetics. Mi compromiso es brindar resultados armónicos y naturales, siempre priorizando la seguridad y bienestar de cada paciente.',
    },

    colores: {
      primario: '#6B3A5D',
      secundario: '#E8B4B8',
    },

    logo: {
      url: '/images/logo-placeholder.webp',
      alt: 'Dra. Ana Lucia Rave Martinez - Cirujana Plástica',
    },

    servicios: [
      {
        nombre: 'Consulta de Cirugía Plástica',
        descripcion: 'Valoración integral personalizada para definir el procedimiento ideal según tus objetivos estéticos y de salud.',
        icono: 'scan-heart',
      },
      {
        nombre: 'Implantes Mamarios',
        descripcion: 'Aumento mamario con implantes de última generación, técnicas de mínima cicatriz y recuperación acelerada.',
        icono: 'shield',
      },
      {
        nombre: 'Liposucción',
        descripcion: 'Extracción de grasa localizada para lograr un contorno corporal definido y armónico con técnicas avanzadas.',
        icono: 'heart-pulse',
      },
      {
        nombre: 'Cirugía Plástica Facial',
        descripcion: 'Procedimientos estéticos faciales como rinoplastia, lifting y blefaroplastia para un aspecto rejuvenecido y natural.',
        icono: 'activity',
      },
      {
        nombre: 'Abdominoplastia',
        descripcion: 'Remodelación del abdomen para lograr un contorno firme y definido, eliminando exceso de piel y grasa.',
        icono: 'check-circle',
      },
      {
        nombre: 'Ácido Hialurónico y Botox',
        descripcion: 'Tratamientos inyectables para rejuvenecimiento facial, relleno de arrugas y perfilamiento sin cirugía.',
        icono: 'award',
      },
    ],

    horarios: [
      { dias: 'Lunes a Viernes', horas: '8:00 AM - 6:00 PM' },
    ],

    contacto: {
      telefono: '+57 300 6551343',
      whatsapp: '573006551343',
      email: 'info@draanaluciarave.com',
      direccion: 'Cra. 25a, El Poblado, Medellín, Antioquia',
      ciudad: 'Medellín',
      estado: 'Antioquia',
      pais: 'Colombia',
      googleMapsUrl: 'https://maps.app.goo.gl/rPAsD8ggpeDJVDeo6',
      googleMapsEmbed: 'https://maps.google.com/maps?q=Cra+25a+El+Poblado+Medell%C3%ADn+Antioquia+Colombia&t=&z=15&ie=UTF8&iwloc=&output=embed',
    },

    redesSociales: {
      instagram: 'https://instagram.com/dra.analuciarave',
    },

    seo: {
      siteName: 'Dra. Ana Lucia Rave Martinez - Cirujana Plástica en Medellín',
      title: 'Dra. Ana Lucia Rave Martinez | Cirujana Plástica en Medellín',
      description: 'Cirujana plástica en Medellín con más de 12 años de experiencia. Implantes mamarios, liposucción, abdominoplastia, cirugía facial y tratamientos estéticos. Agenda tu cita.',
      keywords: ['cirujana plástica medellín', 'implantes mamarios medellín', 'liposucción medellín', 'abdominoplastia medellín', 'cirugía facial medellín', 'Dra. Ana Lucia Rave Martinez'],
      ogImage: '/images/og-image.webp',
      locale: 'es_CO',
      canonical: 'https://doctorlanding.co/dra-ana-lucia-rave-martinez',
      structuredData: { type: 'Physician', priceRange: '$$$', medicalSpecialty: 'PlasticSurgery' },
    },

    cta: {
      principal: 'Agendar Cita',
      secundario: 'Conocer Más',
      whatsappMensaje: 'Hola Dra. Ana Lucia Rave, me gustaría agendar una cita para valoración de cirugía plástica.',
    },

    testimonios: [
      { nombre: 'Laura M.', texto: 'La Dra. Ana Lucia me hizo la rinoplastia y quedé feliz. Es muy detallista y el resultado se ve completamente natural. ¡Súper recomendada!', calificacion: 5 },
      { nombre: 'Carmen R.', texto: 'Me sentí súper segura desde la primera consulta. Me explicó todo el procedimiento con paciencia y los resultados superaron mis expectativas.', calificacion: 5 },
      { nombre: 'Diana P.', texto: 'Viajé desde Bogotá para operarme con ella y valió totalmente la pena. Su clínica es impecable y la atención es de primer nivel.', calificacion: 5 },
    ],

    imagenes: {
      heroFondo: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1920&q=80',
      consultorio: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=800&q=80',
      instalaciones: [
        { url: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&q=80', alt: 'Sala de consulta estética moderna' },
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
  // DOCTOR 5: Ginecólogo - Medellín
  // ──────────────────────────────────────
  {
    slug: 'dr-luis-felipe-pumarejo-garcia',

    doctor: {
      nombre: 'Luis Felipe Pumarejo Garcia',
      titulo: 'Dr.',
      especialidad: 'Ginecología',
      subespecialidad: 'Colposcopia, Cirugía Plástica Vaginal, Ginecología Laparoscópica, Estética Vaginal, Cirugía Laparoscópica',
      foto: '/images/photo/dr-luis-felipe-pumarejo-garcia.jpg',
      frase: 'Cuidado integral y humano de la salud femenina',
      biografia:
        'Soy el Dr. Luis Felipe Pumarejo, ginecólogo y obstetra con más de 14 años de experiencia dedicado al cuidado integral de la salud femenina. A lo largo de mi trayectoria he realizado numerosos procedimientos ginecológicos con excelentes resultados, entre ellos cistouretropexia, sling para manejo de incontinencia urinaria de esfuerzo, histerectomías vaginales, histeroscopias y laparoscopias de primer y segundo nivel, entre otros. También me especializo en el campo de la estética vaginal, una rama de la ginecología que busca mejorar tanto la funcionalidad sexual como la armonía estética de los genitales externos, a través de procedimientos como labioplastias (remodelación de labios mayores y menores) y vaginoplastias, que ayudan a tonificar y rejuvenecer el introito vaginal. Mi enfoque se basa en ofrecer una atención humana, respetuosa y empática, combinando el conocimiento científico con la comprensión de las necesidades de cada mujer. Mi propósito es acompañar a cada paciente en su bienestar íntimo y emocional, brindando confianza, comodidad y resultados seguros.',
    },

    colores: {
      primario: '#7B4F8E',
      secundario: '#F2C4CE',
    },

    logo: {
      url: '/images/logo-placeholder.webp',
      alt: 'Dr. Luis Felipe Pumarejo Garcia - Ginecólogo',
    },

    servicios: [
      {
        nombre: 'Visita Ginecología y Obstetricia',
        descripcion: 'Consulta integral de ginecología y obstetricia con atención personalizada y enfoque humano para el cuidado de la salud femenina.',
        icono: 'heart-pulse',
      },
      {
        nombre: 'Asesoría Preconcepcional',
        descripcion: 'Orientación especializada para parejas que desean concebir, evaluando factores de riesgo y condiciones óptimas para el embarazo.',
        icono: 'shield',
      },
      {
        nombre: 'Citología',
        descripcion: 'Examen preventivo para la detección temprana de alteraciones cervicales y enfermedades de transmisión sexual.',
        icono: 'scan-heart',
      },
      {
        nombre: 'Cesárea',
        descripcion: 'Procedimiento quirúrgico seguro para la extracción del bebé cuando el parto vaginal no es la opción más adecuada.',
        icono: 'activity',
      },
      {
        nombre: 'Consulta Médica de Ginecología',
        descripcion: 'Evaluación ginecológica completa para el diagnóstico y tratamiento de condiciones de salud íntima y reproductiva.',
        icono: 'check-circle',
      },
      {
        nombre: 'Cirugía de Piso Pélvico',
        descripcion: 'Tratamiento quirúrgico de incontinencia urinaria, prolapsos y otras alteraciones del piso pélvico con técnicas avanzadas.',
        icono: 'award',
      },
    ],

    horarios: [
      { dias: 'Lunes a Viernes', horas: '8:00 AM - 6:00 PM' },
    ],

    contacto: {
      telefono: '310 4536135',
      whatsapp: '573118201158',
      email: 'info@draanaluciarave.com',
      direccion: 'Torre Salud y Servicios - Clínica del Prado, Calle 19 A # 44 - 25, Piso 18, Consultorio 1809, El Poblado',
      ciudad: 'Medellín',
      estado: 'Antioquia',
      pais: 'Colombia',
      googleMapsUrl: 'https://maps.app.goo.gl/d9QhveC9MyAmDKnt8',
      googleMapsEmbed: 'https://maps.google.com/maps?q=Calle+19A+%2344-25+El+Poblado+Medell%C3%ADn+Antioquia+Colombia&t=&z=15&ie=UTF8&iwloc=&output=embed',
    },

    redesSociales: {
      instagram: 'https://instagram.com/dr.pumarejoginecologo',
      facebook: 'https://facebook.com/_Luis-Felipe-Pumarejo',
      linkedin: 'https://linkedin.com/in/luis-felipe-pumarejo-35612849/',
      doctoralia: 'https://doctoralia.co/luis-felipe-pumarejo-garcia/ginecologo/medellin#profile-info',
    },

    seo: {
      siteName: 'Dr. Luis Felipe Pumarejo Garcia - Ginecólogo en Medellín',
      title: 'Dr. Luis Felipe Pumarejo Garcia | Ginecólogo en Medellín',
      description: 'Ginecólogo y obstetra en Medellín con más de 14 años de experiencia. Colposcopia, estética vaginal, cirugía laparoscópica, piso pélvico y obstetricia. Agenda tu cita.',
      keywords: ['ginecólogo medellín', 'obstetra medellín', 'colposcopia medellín', 'estética vaginal medellín', 'cirugía laparoscópica medellín', 'Dr. Luis Felipe Pumarejo'],
      ogImage: '/images/og-image.webp',
      locale: 'es_CO',
      canonical: 'https://doctorlanding.co/dr-luis-felipe-pumarejo-garcia',
      structuredData: { type: 'Physician', priceRange: '$$', medicalSpecialty: 'Gynecologic' },
    },

    cta: {
      principal: 'Agendar Cita',
      secundario: 'Conocer Más',
      whatsappMensaje: 'Hola Dr. Luis Felipe Pumarejo Garcia, me gustaría agendar una cita para consulta ginecológica.',
    },

    testimonios: [
      {
        nombre: 'Emi Garrido',
        texto: 'El doctor Luis Felipe es un ejemplo de excelencia, sus conocimientos, su atención, su amabilidad, su efectividad a la hora de tratar cualquier condición, se toma más del tiempo para responder tus preguntas, uno de los mejores doctores en Medellín!',
        calificacion: 5,
      },
      {
        nombre: 'M.V',
        texto: 'Excelente atención por parte del doctor; explica todo de manera clara y demuestra un genuino interés por el bienestar integral de sus pacientes.',
        calificacion: 5,
      },
      {
        nombre: 'Yarlenis Córdoba',
        texto: 'Quiero expresarle mi más profundo agradecimiento y admiración. En un momento en el que me sentía vulnerable y preocupada por mi salud, usted se apersonó de mi situación como ningún otro profesional lo había hecho. Su dedicación, su paciencia y el cuidado genuino que me brindó hicieron una diferencia inmensa.',
        calificacion: 5,
      },
      {
        nombre: 'Carmen',
        texto: 'El doctor Pumarejo es muy orientado al detalle, su tratamiento fue eficaz, sus explicaciones son muy claras! Lo recomiendo al 100%.',
        calificacion: 5,
      },
    ],

    imagenes: {
      heroFondo: 'https://images.unsplash.com/photo-1579684453423-f84349ef60b0?w=1920&q=80',
      consultorio: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=800&q=80',
      instalaciones: [
        { url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80', alt: 'Sala de espera moderna y acogedora' },
        { url: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=600&q=80', alt: 'Consultorio ginecológico equipado' },
        { url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80', alt: 'Área de atención al paciente' },
        { url: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600&q=80', alt: 'Torre Salud y Servicios - Clínica del Prado' },
      ],
      galeria: [
        { url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80', alt: 'Consulta ginecológica especializada' },
        { url: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&q=80', alt: 'Equipos de ginecología de alta tecnología' },
        { url: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=600&q=80', alt: 'Atención integral de salud femenina' },
      ],
    },
  },

  // ──────────────────────────────────────
  // DOCTOR 6: Odontóloga - Medellín
  // ──────────────────────────────────────
  {
    slug: 'dra-olga-cristina-ramirez-ortiz',

    doctor: {
      nombre: 'Olga Cristina Ramirez Ortiz',
      titulo: 'Dra.',
      especialidad: 'Odontología',
      subespecialidad: 'Rehabilitación Oral',
      cedulaProfesional: 'REG-MEDICO-123',
      foto: '/images/photo/dra-olga-cristina-ramirez-ortiz.jpg',
      frase: 'Transformando sonrisas con ciencia y estética',
      biografia:
        'Soy rehabilitadora oral y estética apasionada por transformar sonrisas y devolverle a cada paciente la seguridad de mostrarse tal como es. Odontóloga egresada de la Universidad CES (2000) con especialización en Rehabilitación Oral de la misma universidad (2007) y más de 15 años de experiencia dedicada a reconstruir y mejorar la estética dental, así como a reemplazar dientes ausentes para recuperar la función, la armonía y la belleza natural de la sonrisa. Cada tratamiento lo diseño de forma personalizada, combinando ciencia, tecnología y sensibilidad estética, para lograr resultados que no solo se ven bien, sino que mejoran la calidad de vida. Mi misión es simple: que sonrías con confianza y disfrutes de una boca sana, funcional y estética en cada etapa de tu vida.',
    },

    colores: {
      primario: '#2D7D6F',
      secundario: '#C9A96E',
    },

    logo: {
      url: '/images/logo-placeholder.webp',
      alt: 'Dra. Olga Cristina Ramirez Ortiz - Odontóloga',
    },

    servicios: [
      {
        nombre: 'Blanqueamiento Dental',
        descripcion: 'Aclaramiento profesional para una sonrisa más blanca y luminosa, con resultados visibles desde la primera sesión.',
        icono: 'award',
      },
      {
        nombre: 'Detartraje y Profilaxis Dental',
        descripcion: 'Limpieza dental profesional con ultrasonido para remover sarro y placa bacteriana, manteniendo encías sanas y aliento fresco.',
        icono: 'check-circle',
      },
      {
        nombre: 'Rehabilitación Oral',
        descripcion: 'Restauración funcional y estética completa de tu dentadura para recuperar la armonía, la función masticatoria y la belleza de tu sonrisa.',
        icono: 'heart-pulse',
      },
      {
        nombre: 'Urgencias Odontológicas',
        descripcion: 'Atención inmediata para dolor dental, fracturas, infecciones y otras situaciones que requieren intervención odontológica urgente.',
        icono: 'activity',
      },
    ],

    horarios: [
      { dias: 'Lunes a Viernes', horas: '8:00 AM - 6:00 PM' },
    ],

    contacto: {
      telefono: '(604) 4445728',
      whatsapp: '576044445728',
      email: 'info@draolgaluciaramirez.com',
      direccion: 'Vibart Dental Clinic IPS SAS, Torre Medical, Calle 7 No. 39 - 107, Local 202-205, Sede 1, El Poblado',
      ciudad: 'Medellín',
      estado: 'Antioquia',
      pais: 'Colombia',
      codigoPostal: '050021',
      googleMapsUrl: 'https://maps.app.goo.gl/X9ivRtxbvvELoEVa7',
      googleMapsEmbed: 'https://maps.google.com/maps?q=Calle+7+No+39-107+El+Poblado+Medell%C3%ADn+Antioquia+Colombia&t=&z=15&ie=UTF8&iwloc=&output=embed',
    },

    redesSociales: {
      instagram: 'https://instagram.com/dra.vibartdentalclinic',
      facebook: 'https://facebook.com/_vibartdentalclinic',
    },

    seo: {
      siteName: 'Dra. Olga Cristina Ramirez Ortiz - Odontóloga en Medellín',
      title: 'Dra. Olga Cristina Ramirez Ortiz | Rehabilitación Oral en Medellín',
      description: 'Odontóloga especialista en rehabilitación oral en Medellín con más de 15 años de experiencia. Blanqueamiento dental, prótesis, implantes y limpieza profesional. Agenda tu cita.',
      keywords: ['odontóloga medellín', 'rehabilitación oral medellín', 'blanqueamiento dental medellín', 'Vibart Dental Clinic', 'Dra. Olga Cristina Ramirez Ortiz'],
      ogImage: '/images/og-image.webp',
      locale: 'es_CO',
      canonical: 'https://doctorlanding.co/dra-olga-cristina-ramirez-ortiz',
      structuredData: { type: 'Dentist', priceRange: '$$', medicalSpecialty: 'Dentistry' },
    },

    cta: {
      principal: 'Agendar Cita',
      secundario: 'Conocer Más',
      whatsappMensaje: 'Hola Dra. Olga Cristina Ramirez Ortiz, me gustaría agendar una cita para consulta odontológica.',
    },

    testimonios: [
      {
        nombre: 'Laura M.',
        texto: 'La Dra. Olga Cristina es muy detallista y el resultado se ve completamente natural. Su trabajo de rehabilitación oral superó todas mis expectativas. ¡Súper recomendada!',
        calificacion: 5,
      },
      {
        nombre: 'Carmen R.',
        texto: 'Me sentí súper segura desde la primera consulta. Me explicó todo el procedimiento con paciencia y los resultados superaron mis expectativas.',
        calificacion: 5,
      },
      {
        nombre: 'Diana P.',
        texto: 'Viajé desde Bogotá para atenderme con ella y valió totalmente la pena. Su clínica es impecable y la atención es de primer nivel.',
        calificacion: 5,
      },
    ],

    imagenes: {
      heroFondo: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1920&q=80',
      consultorio: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=800&q=80',
      instalaciones: [
        { url: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80', alt: 'Consultorio odontológico moderno' },
        { url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80', alt: 'Sala de espera cómoda y luminosa' },
        { url: 'https://images.unsplash.com/photo-1516841273335-e39b37888115?w=600&q=80', alt: 'Equipos de radiología dental digital' },
        { url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80', alt: 'Recepción Vibart Dental Clinic' },
      ],
      galeria: [
        { url: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&q=80', alt: 'Rehabilitación oral de alta estética' },
        { url: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&q=80', alt: 'Blanqueamiento dental profesional' },
        { url: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=600&q=80', alt: 'Tecnología dental de punta' },
      ],
    },
  },

  // ──────────────────────────────────────
  // DOCTOR 7: Pediatra - Medellín
  // ──────────────────────────────────────
  {
    slug: 'dr-alejandro-luis-sarmiento-arismendy',

    doctor: {
      nombre: 'Alejandro Luis Sarmiento Arismendy',
      titulo: 'Dr.',
      especialidad: 'Pediatría',
      cedulaProfesional: 'REG-MEDICO-123',
      foto: '/images/photo/dr-alejandro-luis-sarmiento-arismendy.jpg',
      frase: 'Cuidando la salud de tus hijos con amor y ciencia',
      biografia:
        'Médico Pediatra en Medellín, Laureles, miembro de la Sociedad Colombiana de Pediatría y del Colegio Médico Colombiano. Brindo atención pediátrica integral desde el nacimiento hasta los 18 años, acompañando a recién nacidos, niños en etapa preescolar y escolar, así como adolescentes, en cada fase de su crecimiento y desarrollo. Cuento con especial enfoque en el seguimiento del recién nacido, control de crecimiento y desarrollo, orientación a padres primerizos, asesoría en lactancia, vacunación, manejo de infecciones respiratorias, Asma, Rinitis, Bronquiolitis, enfermedades frecuentes de la infancia y acompañamiento en la etapa de la adolescencia, incluyendo orientación en pubertad, cambios propios del desarrollo, fiebre y nutrición infantil. Mi práctica se fundamenta en la medicina basada en la evidencia, la comunicación clara y el tiempo suficiente para resolver inquietudes con tranquilidad. Considero que unos padres bien informados toman decisiones más seguras para la salud de sus hijos. En cada consulta busco generar confianza, orientación precisa y un acompañamiento responsable que permita a las familias sentirse seguras y respaldadas.',
    },

    colores: {
      primario: '#5B9BD5',
      secundario: '#F5C842',
    },

    logo: {
      url: '/images/logo-placeholder.webp',
      alt: 'Dr. Alejandro Luis Sarmiento Arismendy - Pediatra',
    },

    servicios: [
      {
        nombre: 'Consulta Pediátrica Prioritaria',
        descripcion: 'Atención pediátrica prioritaria para situaciones que requieren evaluación oportuna, con diagnóstico preciso y orientación inmediata a los padres.',
        icono: 'heart-pulse',
      },
      {
        nombre: 'Visita Pediatría',
        descripcion: 'Consulta pediátrica general para el seguimiento integral de la salud del niño en cada etapa de su crecimiento.',
        icono: 'shield',
      },
      {
        nombre: 'Consulta Externa Pediátrica',
        descripcion: 'Evaluación médica completa del paciente pediátrico con diagnóstico, tratamiento y orientación detallada a la familia.',
        icono: 'check-circle',
      },
      {
        nombre: 'Control de Crecimiento y Desarrollo',
        descripcion: 'Seguimiento periódico del crecimiento físico, desarrollo psicomotor y hitos del desarrollo del niño según su edad.',
        icono: 'activity',
      },
      {
        nombre: 'Pautas de Crianza',
        descripcion: 'Orientación especializada a padres sobre herramientas y estrategias para acompañar el desarrollo emocional y conductual de sus hijos.',
        icono: 'award',
      },
      {
        nombre: 'Asesoría Nutricional Infantil',
        descripcion: 'Evaluación y orientación nutricional para lactantes, niños y adolescentes, incluyendo alimentación complementaria y hábitos saludables.',
        icono: 'bike',
      },
      {
        nombre: 'Consulta en Línea',
        descripcion: 'Atención médica pediátrica virtual para seguimientos, dudas y orientación desde la comodidad de tu hogar.',
        icono: 'monitor-heart',
      },
      {
        nombre: 'Vacunación y Esquema de Inmunización',
        descripcion: 'Revisión y aplicación del esquema de vacunación según la edad del niño, con orientación completa a los padres.',
        icono: 'scan-heart',
      },
    ],

    horarios: [
      { dias: 'Lunes a Viernes', horas: '8:00 AM - 6:00 PM' },
    ],

    contacto: {
      telefono: '(604) 3227978',
      whatsapp: '573181994836',
      email: 'info@dralejandroluisarmientoarismendy.com',
      direccion: 'Cames - Centro de Atención Médica Especializada, Cl 33A 71A-127, Piso 2 - Módulo 6',
      ciudad: 'Medellín',
      estado: 'Antioquia',
      pais: 'Colombia',
      googleMapsUrl: 'https://maps.app.goo.gl/V4oeWVuTNLv3mL9A6',
      googleMapsEmbed: 'https://maps.google.com/maps?q=Cl+33A+71A-127+Medell%C3%ADn+Antioquia+Colombia&t=&z=15&ie=UTF8&iwloc=&output=embed',
    },

    redesSociales: {
      instagram: 'https://instagram.com/alejandrosarmientoarismendy/',
      facebook: 'https://facebook.com/pediatra.alejandroluis',
      doctoralia: 'https://doctoralia.co/_alejandro-luis-sarmiento-arismendy-2/pediatra-medico-general/medellin#profile-info',
    },

    seo: {
      siteName: 'Dr. Alejandro Luis Sarmiento Arismendy - Pediatra en Medellín',
      title: 'Dr. Alejandro Sarmiento Arismendy | Pediatra en Medellín',
      description: 'Pediatra en Medellín, Laureles. Atención integral de recién nacidos, niños y adolescentes. Control de crecimiento, vacunación, nutrición infantil y pautas de crianza. Agenda tu cita.',
      keywords: ['pediatra medellín', 'pediatra laureles medellín', 'control crecimiento y desarrollo medellín', 'pediatra recién nacidos medellín', 'Dr. Alejandro Sarmiento Arismendy'],
      ogImage: '/images/og-image.webp',
      locale: 'es_CO',
      canonical: 'https://doctorlanding.co/dr-alejandro-luis-sarmiento-arismendy',
      structuredData: { type: 'Physician', priceRange: '$$', medicalSpecialty: 'Pediatric' },
    },

    cta: {
      principal: 'Agendar Cita',
      secundario: 'Conocer Más',
      whatsappMensaje: 'Hola Dr. Alejandro Luis Sarmiento Arismendy, me gustaría agendar una cita pediátrica.',
    },

    testimonios: [
      {
        nombre: 'Paola Tobón',
        texto: 'Excelente profesional, con un trato humano y dulce. Quiero agradecer y recomendar ampliamente al Doctor por la atención que le brinda a mi bebé. Como mamá, lo que más valoro es la tranquilidad que me dan sus diagnósticos; siempre son sumamente acertados y explicados con mucha claridad. Es increíblemente dulce con mi hija en cada consulta, lo que hace que ella se sienta tranquila y el ambiente sea muy ameno. ¡Totalmente recomendado!',
        calificacion: 5,
      },
      {
        nombre: 'Santiago Martínez',
        texto: 'El mejor de todos, profesional, una consulta muy completa.',
        calificacion: 5,
      },
      {
        nombre: 'Natylo',
        texto: 'Excelente médico, calidad humana, explica de manera clara y atiende las preguntas que me surgieron luego de la consulta.',
        calificacion: 5,
      },
    ],

    imagenes: {
      heroFondo: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=1920&q=80',
      consultorio: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=800&q=80',
      instalaciones: [
        { url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80', alt: 'Sala de espera pediátrica acogedora' },
        { url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80', alt: 'Consultorio pediátrico moderno' },
        { url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80', alt: 'Centro de Atención Médica Especializada - Cames' },
        { url: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600&q=80', alt: 'Área de atención infantil' },
      ],
      galeria: [
        { url: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80', alt: 'Consulta pediátrica integral' },
        { url: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&q=80', alt: 'Control de crecimiento y desarrollo infantil' },
        { url: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&q=80', alt: 'Atención pediátrica personalizada' },
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
