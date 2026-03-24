/**
 * Script para configurar automáticamente el tablero de Trello para PrimeroVes
 * 
 * INSTRUCCIONES:
 * 1. Ve a https://trello.com/power-ups/admin
 * 2. Crea un nuevo Power-Up (o usa uno existente)
 * 3. Copia tu API Key
 * 4. Ve a: https://trello.com/1/authorize?expiration=never&scope=read,write&response_type=token&key=TU_API_KEY
 * 5. Copia el Token generado
 * 6. Ejecuta: node scripts/setup-trello.js TU_API_KEY TU_TOKEN
 */

const API_KEY = process.argv[2];
const TOKEN = process.argv[3];

if (!API_KEY || !TOKEN) {
  console.error('\n❌ Error: Debes proporcionar API_KEY y TOKEN');
  console.log('\n📖 Uso: node scripts/setup-trello.js TU_API_KEY TU_TOKEN');
  console.log('\n🔗 Obtener credenciales:');
  console.log('   1. API Key: https://trello.com/power-ups/admin');
  console.log('   2. Token: https://trello.com/1/authorize?expiration=never&scope=read,write&response_type=token&key=TU_API_KEY\n');
  process.exit(1);
}

const BASE_URL = 'https://api.trello.com/1';

// Configuración del tablero
const BOARD_NAME = 'PrimeroVes - Onboarding Doctores';

const LISTS = [
  { name: '📥 Backlog Técnico', pos: 1 },
  { name: '⚙️ Configuración en Proceso', pos: 2 },
  { name: '✅ QA Técnico', pos: 3 },
  { name: '🚀 Demo Lista', pos: 4 },
  { name: '📱 Primer Contacto', pos: 5 },
  { name: '🔄 Seguimiento', pos: 6 },
  { name: '💳 Negociación', pos: 7 },
  { name: '🎉 Cliente Ganado', pos: 8 },
  { name: '❄️ En Pausa / Perdidos', pos: 9 },
];

const LABELS = [
  { name: 'Aprobado / Listo', color: 'green' },
  { name: 'Pendiente / En espera', color: 'yellow' },
  { name: 'Urgente / Caliente', color: 'orange' },
  { name: 'Problema / Bloqueado', color: 'red' },
  { name: 'En proceso / Llamada', color: 'blue' },
  { name: 'VIP / Entregado', color: 'purple' },
];

// Tarjetas plantilla para cada lista
const TEMPLATE_CARDS = {
  '📥 Backlog Técnico': [
    {
      name: '📋 PLANTILLA: Nuevo Doctor',
      desc: `## Datos a recopilar

- [ ] Nombre completo del doctor
- [ ] Especialidad médica
- [ ] Foto profesional (alta resolución)
- [ ] Logo o identidad visual (si existe)
- [ ] Biografía / Sobre mí
- [ ] Lista de servicios (mínimo 4-6)
- [ ] Testimonios de pacientes (mínimo 3)
- [ ] Galería de imágenes (consultorio, procedimientos)
- [ ] Datos de contacto (WhatsApp, email, dirección)
- [ ] Redes sociales

---
📍 Ciudad:
📱 WhatsApp prospecto:
📧 Email:
🔗 Instagram:
💰 Presupuesto estimado:
📊 Fuente del lead:`
    }
  ],
  '⚙️ Configuración en Proceso': [
    {
      name: '⚙️ PLANTILLA: Config Doctor',
      desc: `## Configuración Técnica

- [ ] Crear entrada en \`doctors.ts\`
- [ ] Definir slug único: \`/dr-nombre-apellido\`
- [ ] Configurar datos personales
- [ ] Subir foto a \`/public/doctors/[slug]/\`
- [ ] Agregar servicios (mínimo 4-6)
- [ ] Agregar testimonios (mínimo 3)
- [ ] Configurar datos de contacto
- [ ] Subir galería de imágenes
- [ ] Definir colores personalizados (opcional)
- [ ] Ejecutar \`npm run build\`
- [ ] Verificar sin errores

---
**Slug:** 
**Plantilla sugerida:**`
    }
  ],
  '✅ QA Técnico': [
    {
      name: '🔍 PLANTILLA: QA Doctor',
      desc: `## Verificación de Calidad

### Funcionalidad
- [ ] ✅ Las 6 plantillas cargan correctamente
- [ ] 📱 Responsive: móvil, tablet, desktop
- [ ] ⚡ Velocidad de carga < 3 segundos
- [ ] 💬 Botón WhatsApp funciona
- [ ] 🖼️ Galería de imágenes carga bien
- [ ] 📍 Datos de contacto correctos

### SEO
- [ ] Títulos correctos en cada plantilla
- [ ] Meta descriptions configuradas
- [ ] Imágenes con alt text

### Entregables
- [ ] Generar URLs de demo
- [ ] Capturar screenshots para WhatsApp

---
**URLs de Demo:**
- Elegante: /[slug]/elegante
- Moderna: /[slug]/moderna
- Clásica: /[slug]/clasica
- Minimalista: /[slug]/minimalista
- Premium: /[slug]/premium
- Vanguardia: /[slug]/vanguardia`
    }
  ],
  '🚀 Demo Lista': [
    {
      name: '🎬 PLANTILLA: Demo Listo',
      desc: `## Demo Configurado

👨‍⚕️ **Doctor:** [Nombre completo]
📍 **Ciudad:** [Ciudad]
🏥 **Especialidad:** [Especialidad]

---

### 🔗 URLs de Demo
| Plantilla | URL |
|-----------|-----|
| Elegante | /[slug]/elegante |
| Moderna | /[slug]/moderna |
| Clásica | /[slug]/clasica |
| Minimalista | /[slug]/minimalista |
| Premium | /[slug]/premium |
| Vanguardia | /[slug]/vanguardia |

---

### 📱 Contacto del Prospecto
- WhatsApp: 
- Email: 
- Instagram: 

### 📸 Screenshots
(Adjuntar capturas de las plantillas)`
    }
  ],
  '📱 Primer Contacto': [
    {
      name: '💬 PLANTILLA: Primer Contacto',
      desc: `## Primer Contacto con Prospecto

### Checklist
- [ ] Enviar mensaje inicial por WhatsApp
- [ ] Adjuntar screenshot de la demo
- [ ] Compartir link personalizado
- [ ] Registrar fecha/hora de contacto

---

### 📝 Guion sugerido:
> Hola Dr./Dra. [Nombre], soy [Tu nombre] de PrimeroVes.
> 
> Vi su perfil y me tomé la libertad de crear una página web de muestra para usted. 
> 
> 👉 [LINK DE DEMO]
> 
> Puede ver 6 diseños diferentes usando el botón flotante. ¿Le gustaría que le cuente más?

---

📅 **Fecha contacto:**
📊 **Fuente:**
📱 **WhatsApp:**`
    }
  ],
  '🔄 Seguimiento': [
    {
      name: '🔄 PLANTILLA: Seguimiento',
      desc: `## Seguimiento Activo

### Checklist
- [ ] Responder dudas sobre el servicio
- [ ] Enviar comparativo de plantillas
- [ ] Explicar proceso de personalización
- [ ] Resolver objeciones de precio
- [ ] Programar llamada/videollamada
- [ ] Enviar propuesta formal

---

### 📝 Notas de conversación:


---

### 🎯 Próxima acción:

📅 **Fecha próximo seguimiento:**`
    }
  ],
  '💳 Negociación': [
    {
      name: '💰 PLANTILLA: Negociación',
      desc: `## Negociación en Curso

### Checklist
- [ ] Confirmar plantilla elegida
- [ ] Definir personalizaciones adicionales
- [ ] Acordar precio final
- [ ] Definir forma de pago
- [ ] Enviar link/datos de pago
- [ ] Confirmar recepción de pago

---

### 💵 Propuesta
- **Plantilla elegida:**
- **Personalizaciones:**
- **Precio acordado:** $
- **Forma de pago:**
- **Anticipo:** $
- **Saldo:** $

---

📅 **Fecha cierre estimado:**`
    }
  ],
  '🎉 Cliente Ganado': [
    {
      name: '✅ PLANTILLA: Cliente Ganado',
      desc: `## 🎊 ¡VENTA CERRADA!

### Datos del Cliente
- 👨‍⚕️ **Doctor:** 
- 🎨 **Plantilla elegida:** 
- 💵 **Monto total:** $
- 📅 **Fecha cierre:** 
- 📅 **Fecha entrega:** 

---

### 📋 Post-venta
- [ ] Configurar dominio personalizado
- [ ] Personalizar colores/fuentes
- [ ] Deploy a producción
- [ ] Capacitar al doctor
- [ ] Solicitar reseña Google
- [ ] Pedir referidos

---

### 🔗 URL Final:
`
    }
  ],
  '❄️ En Pausa / Perdidos': [
    {
      name: '❄️ PLANTILLA: En Pausa',
      desc: `## Prospecto en Pausa

### Motivo:
- [ ] Sin presupuesto actual
- [ ] Pidió tiempo para decidir
- [ ] Eligió competencia
- [ ] No respondió después de 3 intentos
- [ ] Otro: 

---

### 📝 Notas:


---

📅 **Fecha para recontactar:**
🔔 **Recordatorio configurado:** Sí / No`
    }
  ]
};

// Funciones de API
async function apiCall(endpoint, method = 'GET', body = null) {
  const url = `${BASE_URL}${endpoint}?key=${API_KEY}&token=${TOKEN}`;
  
  const options = {
    method,
    headers: { 'Content-Type': 'application/json' },
  };
  
  if (body) {
    options.body = JSON.stringify(body);
  }
  
  const response = await fetch(url, options);
  
  if (!response.ok) {
    const error = await response.text();
    throw new Error(`API Error: ${response.status} - ${error}`);
  }
  
  return response.json();
}

async function createBoard(name) {
  console.log(`\n📋 Creando tablero: "${name}"...`);
  const board = await apiCall('/boards', 'POST', {
    name,
    defaultLists: false,
    prefs_background: 'blue',
  });
  console.log(`   ✅ Tablero creado: ${board.shortUrl}`);
  return board;
}

async function createList(boardId, name, pos) {
  const list = await apiCall('/lists', 'POST', {
    name,
    idBoard: boardId,
    pos: pos * 1000,
  });
  console.log(`   ✅ Lista: ${name}`);
  return list;
}

async function createLabel(boardId, name, color) {
  const label = await apiCall('/labels', 'POST', {
    name,
    color,
    idBoard: boardId,
  });
  return label;
}

async function createCard(listId, name, desc) {
  const card = await apiCall('/cards', 'POST', {
    name,
    desc,
    idList: listId,
    pos: 'bottom',
  });
  return card;
}

async function main() {
  console.log('\n🚀 Configurando tablero de Trello para PrimeroVes...\n');
  
  try {
    // 1. Crear tablero
    const board = await createBoard(BOARD_NAME);
    
    // 2. Crear etiquetas
    console.log('\n🏷️  Creando etiquetas...');
    for (const label of LABELS) {
      await createLabel(board.id, label.name, label.color);
      console.log(`   ✅ Etiqueta: ${label.name} (${label.color})`);
    }
    
    // 3. Crear listas
    console.log('\n📝 Creando listas...');
    const createdLists = {};
    for (const list of LISTS) {
      const created = await createList(board.id, list.name, list.pos);
      createdLists[list.name] = created.id;
    }
    
    // 4. Crear tarjetas plantilla
    console.log('\n📄 Creando tarjetas plantilla...');
    for (const [listName, cards] of Object.entries(TEMPLATE_CARDS)) {
      const listId = createdLists[listName];
      if (listId) {
        for (const card of cards) {
          await createCard(listId, card.name, card.desc);
          console.log(`   ✅ Tarjeta en "${listName}": ${card.name}`);
        }
      }
    }
    
    // Resultado final
    console.log('\n' + '='.repeat(60));
    console.log('🎉 ¡TABLERO CONFIGURADO EXITOSAMENTE!');
    console.log('='.repeat(60));
    console.log(`\n🔗 Abre tu tablero: ${board.shortUrl}\n`);
    console.log('📋 Resumen:');
    console.log(`   • ${LISTS.length} listas creadas`);
    console.log(`   • ${LABELS.length} etiquetas configuradas`);
    console.log(`   • ${Object.values(TEMPLATE_CARDS).flat().length} tarjetas plantilla\n`);
    console.log('💡 Tip: Copia las tarjetas "PLANTILLA" para crear nuevos doctores\n');
    
  } catch (error) {
    console.error('\n❌ Error:', error.message);
    console.log('\n🔧 Posibles soluciones:');
    console.log('   1. Verifica que tu API Key y Token sean correctos');
    console.log('   2. Asegúrate de tener conexión a internet');
    console.log('   3. Verifica que el Token tenga permisos de escritura\n');
    process.exit(1);
  }
}

main();
