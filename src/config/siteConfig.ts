// ============================================================
// PRIMEROVES - Configuración Central del Sitio
// ============================================================
// Este archivo es TODO lo que necesitas editar para personalizar
// el sitio de un médico. Cada campo es parametrizable.
// ============================================================

export interface SiteConfig {
  // --- PLANTILLA ---
  template: 'elegante' | 'moderna' | 'clasica';

  // --- IDENTIDAD DEL DOCTOR ---
  doctor: {
    nombre: string;
    titulo: string; // Ej: "Dr.", "Dra."
    especialidad: string;
    subespecialidad?: string;
    cedulaProfesional?: string;
    foto: string; // ruta a la imagen
    frase: string; // slogan personal
    biografia: string;
  };

  // --- COLORES CORPORATIVOS ---
  colores: {
    primario: string; // hex color
    secundario: string; // hex color
  };

  // --- LOGO ---
  logo: {
    url: string; // ruta a la imagen del logo
    alt: string;
  };

  // --- SERVICIOS ---
  servicios: Array<{
    nombre: string;
    descripcion: string;
    icono: string; // nombre del icono (lucide icons)
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
    principal: string; // texto del botón principal
    secundario: string; // texto del botón secundario
    whatsappMensaje: string; // mensaje pre-llenado de WhatsApp
  };

  // --- TESTIMONIOS ---
  testimonios: Array<{
    nombre: string;
    texto: string;
    calificacion: number; // 1-5
  }>;
}

// ============================================================
// EJEMPLO: Configuración de demostración para un cardiólogo
// ============================================================
export const siteConfig: SiteConfig = {
  template: 'elegante',

  doctor: {
    nombre: 'Carlos Mendoza Rivera',
    titulo: 'Dr.',
    especialidad: 'Cardiología',
    subespecialidad: 'Hemodinámica e Intervencionismo',
    cedulaProfesional: '12345678',
    foto: '/images/doctor-placeholder.svg',
    frase: 'Tu corazón en las mejores manos',
    biografia:
      'Con más de 15 años de experiencia en cardiología intervencionista, me dedico a brindar atención de la más alta calidad. Egresado del Instituto Nacional de Cardiología, con subespecialidad en hemodinámica y múltiples certificaciones internacionales.',
  },

  colores: {
    primario: '#1B4D6E',
    secundario: '#C9A96E',
  },

  logo: {
    url: '/images/logo-placeholder.webp',
    alt: 'Dr. Carlos Mendoza - Cardiólogo',
  },

  servicios: [
    {
      nombre: 'Consulta Cardiológica',
      descripcion:
        'Evaluación integral de tu salud cardiovascular con tecnología de punta y atención personalizada.',
      icono: 'heart-pulse',
    },
    {
      nombre: 'Ecocardiograma',
      descripcion:
        'Estudio de ultrasonido del corazón para evaluar su estructura y funcionamiento en tiempo real.',
      icono: 'scan-heart',
    },
    {
      nombre: 'Cateterismo Cardíaco',
      descripcion:
        'Procedimiento mínimamente invasivo para diagnosticar y tratar enfermedades de las arterias coronarias.',
      icono: 'activity',
    },
    {
      nombre: 'Electrocardiograma',
      descripcion:
        'Registro de la actividad eléctrica del corazón para detectar arritmias y otras alteraciones.',
      icono: 'monitor-heart',
    },
    {
      nombre: 'Prueba de Esfuerzo',
      descripcion:
        'Evaluación del comportamiento del corazón durante el ejercicio físico controlado.',
      icono: 'bike',
    },
    {
      nombre: 'Holter de 24 horas',
      descripcion:
        'Monitoreo continuo del ritmo cardíaco durante 24 horas para detectar anomalías intermitentes.',
      icono: 'clock',
    },
  ],

  horarios: [
    { dias: 'Lunes a Viernes', horas: '9:00 AM - 2:00 PM' },
    { dias: 'Lunes a Viernes', horas: '4:00 PM - 7:00 PM' },
    { dias: 'Sábados', horas: '9:00 AM - 1:00 PM' },
  ],

  contacto: {
    telefono: '+52 33 1234 5678',
    whatsapp: '5213312345678',
    email: 'contacto@drcarlosmendoza.com',
    direccion: 'Av. Américas 1254, Col. Country Club',
    ciudad: 'Guadalajara',
    estado: 'Jalisco',
    pais: 'México',
    codigoPostal: '44610',
    googleMapsUrl: 'https://maps.google.com/?q=Av+Americas+1254+Guadalajara',
    googleMapsEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.!2d-103.39!3d20.67!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1',
  },

  redesSociales: {
    facebook: 'https://facebook.com/drcarlosmendoza',
    instagram: 'https://instagram.com/drcarlosmendoza',
    linkedin: 'https://linkedin.com/in/drcarlosmendoza',
    doctoralia: 'https://doctoralia.com.mx/drcarlosmendoza',
  },

  seo: {
    siteName: 'Dr. Carlos Mendoza - Cardiólogo en Guadalajara',
    title: 'Dr. Carlos Mendoza | Cardiólogo Intervencionista en Guadalajara',
    description:
      'Cardiólogo intervencionista en Guadalajara con más de 15 años de experiencia. Consulta cardiológica, ecocardiograma, cateterismo cardíaco. Agenda tu cita hoy.',
    keywords: [
      'cardiólogo guadalajara',
      'cardiólogo intervencionista',
      'ecocardiograma guadalajara',
      'cateterismo cardíaco',
      'médico del corazón guadalajara',
      'consulta cardiológica',
      'Dr. Carlos Mendoza',
    ],
    ogImage: '/images/og-image.webp',
    locale: 'es_MX',
    canonical: 'https://drcarlosmendoza.com',
    structuredData: {
      type: 'Physician',
      priceRange: '$$$',
      medicalSpecialty: 'Cardiovascular',
    },
  },

  cta: {
    principal: 'Agendar Cita',
    secundario: 'Conocer Más',
    whatsappMensaje:
      'Hola Dr. Mendoza, me gustaría agendar una cita para consulta cardiológica.',
  },

  testimonios: [
    {
      nombre: 'María G.',
      texto:
        'Excelente doctor, muy profesional y humano. Me explicó todo con detalle y me sentí muy segura durante todo el procedimiento.',
      calificacion: 5,
    },
    {
      nombre: 'Roberto S.',
      texto:
        'Lo recomiendo ampliamente. Después de visitar varios cardiólogos, el Dr. Mendoza fue quien realmente me dio un diagnóstico acertado.',
      calificacion: 5,
    },
    {
      nombre: 'Ana L.',
      texto:
        'Atención de primera, instalaciones impecables y el doctor es muy atento. Sin duda el mejor cardiólogo de Guadalajara.',
      calificacion: 5,
    },
  ],
};
