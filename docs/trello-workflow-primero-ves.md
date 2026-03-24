# 🎯 Tablero Trello - PrimeroVes Workflow

## Nombre del Tablero: **PrimeroVes - Onboarding Doctores**

---

## 📋 LISTAS DEL TABLERO (de izquierda a derecha)

---

### 🔧 LISTA 1: Backlog Técnico
> *Tareas técnicas pendientes de asignar*

**Tarjetas:**
- [ ] Nuevo doctor identificado - Esperando datos
- [ ] Recopilar información del doctor (nombre, especialidad, foto)
- [ ] Solicitar logo o identidad visual (si existe)
- [ ] Obtener textos: biografía, servicios, testimonios
- [ ] Recopilar galería de imágenes (consultorio, procedimientos)

---

### ⚙️ LISTA 2: Configuración en Proceso
> *Configuración técnica activa*

**Tarjetas tipo plantilla:**

#### 📝 Tarjeta: "Config - [Nombre Doctor]"
**Checklist interno:**
- [ ] Crear entrada en `doctors.ts`
- [ ] Agregar slug único del doctor
- [ ] Configurar datos personales (nombre, título, especialidad)
- [ ] Subir foto principal a `/public/doctors/[slug]/`
- [ ] Configurar servicios (mínimo 4-6)
- [ ] Agregar testimonios (mínimo 3)
- [ ] Configurar datos de contacto (WhatsApp, email, dirección)
- [ ] Subir imágenes de galería
- [ ] Definir colores personalizados (opcional)
- [ ] Ejecutar `npm run build` - verificar sin errores

**Etiquetas sugeridas:**
- 🟡 Amarillo: "Esperando assets"
- 🟠 Naranja: "En configuración"
- 🔵 Azul: "Revisión técnica"

---

### ✅ LISTA 3: QA Técnico
> *Verificación antes de mostrar al prospecto*

**Tarjetas tipo plantilla:**

#### 🔍 Tarjeta: "QA - [Nombre Doctor]"
**Checklist interno:**
- [ ] Verificar las 6 plantillas cargan correctamente
- [ ] Comprobar responsive (móvil, tablet, desktop)
- [ ] Validar velocidad de carga (<3 segundos)
- [ ] Revisar SEO básico (títulos, meta descriptions)
- [ ] Probar botón de WhatsApp funciona
- [ ] Verificar galería de imágenes
- [ ] Confirmar datos de contacto correctos
- [ ] Generar URLs de demo para cada plantilla
- [ ] Capturar screenshots para WhatsApp

**Etiquetas:**
- 🔴 Rojo: "Errores encontrados"
- 🟢 Verde: "Aprobado"

---

### 🚀 LISTA 4: Demo Lista
> *Demos configurados y listos para vender*

**Tarjetas tipo plantilla:**

#### 🎬 Tarjeta: "Demo - [Nombre Doctor]"
**Descripción:**
```
👨‍⚕️ Doctor: [Nombre completo]
📍 Ubicación: [Ciudad]
🏥 Especialidad: [Especialidad]

🔗 URLs de Demo:
• Elegante: /[slug]/elegante
• Moderna: /[slug]/moderna
• Clásica: /[slug]/clasica
• Minimalista: /[slug]/minimalista
• Premium: /[slug]/premium
• Vanguardia: /[slug]/vanguardia

📱 WhatsApp prospecto: [número]
📧 Email: [correo]
```

**Etiquetas:**
- 🟢 Verde: "Listo para contacto"

---

## 📞 ACCIONES COMERCIALES

---

### 📱 LISTA 5: Primer Contacto
> *Prospectos a contactar por primera vez*

**Tarjetas tipo plantilla:**

#### 💬 Tarjeta: "Contacto - [Nombre Doctor]"
**Checklist interno:**
- [ ] Enviar mensaje inicial WhatsApp (ver guion)
- [ ] Adjuntar screenshot de la demo
- [ ] Compartir link de demo personalizado
- [ ] Registrar fecha/hora de contacto
- [ ] Esperar respuesta (máx 24h para follow-up)

**Campos personalizados sugeridos:**
- 📅 Fecha primer contacto
- 📊 Fuente del lead (Instagram, referido, Google)
- 💰 Presupuesto estimado

**Etiquetas:**
- 🟡 Amarillo: "Mensaje enviado"
- 🟠 Naranja: "Sin respuesta 24h"
- 🔵 Azul: "Respondió"

---

### 🔄 LISTA 6: Seguimiento
> *Prospectos en conversación activa*

**Tarjetas tipo plantilla:**

#### 🔄 Tarjeta: "Seguimiento - [Nombre Doctor]"
**Checklist interno:**
- [ ] Responder dudas sobre el servicio
- [ ] Enviar comparativo de plantillas (si pidió)
- [ ] Explicar proceso de personalización
- [ ] Resolver objeciones de precio
- [ ] Programar llamada/videollamada (si necesita)
- [ ] Enviar propuesta formal con precios

**Etiquetas:**
- 🟡 Amarillo: "Interesado tibio"
- 🟠 Naranja: "Interesado caliente"
- 🔴 Rojo: "Objeciones pendientes"
- 🔵 Azul: "Llamada programada"

---

### 💳 LISTA 7: Negociación
> *Prospectos listos para cerrar*

**Tarjetas tipo plantilla:**

#### 💰 Tarjeta: "Negociación - [Nombre Doctor]"
**Checklist interno:**
- [ ] Confirmar plantilla elegida
- [ ] Definir personalizaciones adicionales
- [ ] Acordar precio final
- [ ] Definir forma de pago
- [ ] Enviar link de pago / datos bancarios
- [ ] Confirmar recepción de pago (anticipo/total)

**Campos personalizados:**
- 💵 Monto acordado
- 🎨 Plantilla elegida
- 📅 Fecha cierre estimado

**Etiquetas:**
- 🟡 Amarillo: "Propuesta enviada"
- 🟠 Naranja: "Negociando precio"
- 🟢 Verde: "Aceptado - esperando pago"

---

### 🎉 LISTA 8: Cliente Ganado
> *Ventas cerradas exitosamente*

**Tarjetas tipo plantilla:**

#### ✅ Tarjeta: "Cliente - [Nombre Doctor]"
**Descripción:**
```
🎊 ¡VENTA CERRADA!

👨‍⚕️ Doctor: [Nombre]
🎨 Plantilla: [Elegida]
💵 Monto: $[cantidad]
📅 Fecha cierre: [fecha]
📅 Fecha entrega: [fecha]

📋 Siguientes pasos:
1. Configurar dominio personalizado
2. Personalizar colores/fuentes si aplica
3. Deploy a producción
4. Capacitar al doctor
5. Solicitar reseña/referido
```

**Etiquetas:**
- 🟢 Verde: "Pagado"
- 🔵 Azul: "En implementación"
- 🟣 Morado: "Entregado"

---

### ❄️ LISTA 9: En Pausa / Perdidos
> *Prospectos que no avanzaron*

**Tarjetas:**
- Prospectos que pidieron tiempo
- Prospectos que eligieron competencia
- Prospectos sin presupuesto actual
- Contactar en 3 meses (remarketing)

**Etiquetas:**
- ⚪ Gris: "Sin presupuesto"
- 🔴 Rojo: "Eligió competencia"
- 🟡 Amarillo: "Contactar después"

---

## 🏷️ SISTEMA DE ETIQUETAS (Labels)

| Color | Significado |
|-------|-------------|
| 🟢 Verde | Aprobado / Listo / Pagado |
| 🟡 Amarillo | En espera / Pendiente |
| 🟠 Naranja | Urgente / Caliente |
| 🔴 Rojo | Problema / Bloqueado |
| 🔵 Azul | En proceso / Llamada |
| 🟣 Morado | VIP / Entregado |
| ⚪ Gris | Pausado / Inactivo |

---

## 📊 CAMPOS PERSONALIZADOS SUGERIDOS

1. **Fecha de primer contacto** (Fecha)
2. **Monto potencial** (Número)
3. **Fuente del lead** (Dropdown: Instagram, Referido, Google, Otro)
4. **Plantilla preferida** (Dropdown: 6 opciones)
5. **Prioridad** (Dropdown: Alta, Media, Baja)
6. **Próximo seguimiento** (Fecha)

---

## 🔄 AUTOMATIZACIONES BUTLER (Trello Premium)

### Reglas sugeridas:
1. **Cuando** una tarjeta se mueve a "Demo Lista" → **Entonces** agregar etiqueta "Listo para contacto"
2. **Cuando** una tarjeta lleva 2 días en "Primer Contacto" → **Entonces** agregar etiqueta "Sin respuesta 24h"
3. **Cuando** una tarjeta se mueve a "Cliente Ganado" → **Entonces** agregar fecha de vencimiento +7 días (para entrega)
4. **Cada lunes a las 9am** → Enviar resumen de tarjetas en "Seguimiento"

---

## 📱 POWER-UPS RECOMENDADOS

1. **Calendar** - Ver fechas de seguimiento
2. **Card Aging** - Identificar tarjetas estancadas
3. **Custom Fields** - Campos personalizados
4. **Slack/Teams** - Notificaciones al equipo

---

## 🎯 FLUJO VISUAL DEL PROCESO

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           CONFIGURACIÓN TÉCNICA                              │
├─────────────┬─────────────┬─────────────┬─────────────┐                     │
│  Backlog    │   Config    │     QA      │    Demo     │                     │
│  Técnico    │ en Proceso  │   Técnico   │    Lista    │                     │
│     📥      │     ⚙️      │      ✅     │     🚀      │                     │
└──────┬──────┴──────┬──────┴──────┬──────┴──────┬──────┘                     │
       │             │             │             │                             │
       ▼             ▼             ▼             ▼                             │
   Identificar → Configurar → Verificar → ¡LISTO!                             │
                                                                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                           ACCIONES COMERCIALES                               │
├─────────────┬─────────────┬─────────────┬─────────────┬─────────────┐       │
│   Primer    │ Seguimiento │ Negociación │   Cliente   │  En Pausa   │       │
│  Contacto   │             │             │   Ganado    │  / Perdido  │       │
│     📱      │      🔄     │      💳     │      🎉     │      ❄️     │       │
└──────┬──────┴──────┬──────┴──────┬──────┴──────┬──────┴─────────────┘       │
       │             │             │             │                             │
       ▼             ▼             ▼             ▼                             │
   Contactar → Dar seguimiento → Cerrar → ¡CLIENTE!                           │
                                                                               │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 📝 PLANTILLA DE TARJETA RÁPIDA

### Para nuevo doctor:
```
Título: [Nombre del Doctor] - [Especialidad]
Descripción: 
📍 Ciudad: 
📱 WhatsApp: 
📧 Email: 
🔗 Instagram: 
💰 Presupuesto estimado: 
📊 Fuente: 
```

---

## ✨ TIPS DE USO

1. **Mover tarjetas rápido**: Arrastra tarjetas entre listas según avance
2. **Usar atajos**: Presiona `L` para etiquetas, `D` para fecha límite
3. **Filtrar por etiqueta**: Click en etiqueta para filtrar todo el tablero
4. **Archivar completados**: Mueve a "Cliente Ganado" y archiva mensualmente
5. **Revisar diario**: Revisa "Seguimiento" cada mañana

---

*Documento creado para PrimeroVes - Sistema de gestión de ventas para páginas web de doctores*
