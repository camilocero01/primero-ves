# 📱 Guión de Ventas PrimeroVes - WhatsApp

## 🎯 Modelo de Negocio: Demo First

**Filosofía:** No vendemos promesas, mostramos resultados. El médico ve su sitio web funcionando ANTES de la primera llamada.

---

## 📋 FASE 1: Prospección y Levantamiento de Datos

### Fuentes de información del médico:
- **Doctoralia** → Especialidad, foto, ubicación, horarios, reseñas
- **Google Maps** → Dirección exacta, teléfono, horarios, reseñas
- **Instagram/Facebook** → Fotos del consultorio, servicios, estilo visual
- **Página de la clínica** → Servicios detallados, precios, biografía
- **LinkedIn** → Formación académica, certificaciones
- **Registro médico nacional** → Cédula profesional (validar legitimidad)

### Checklist de datos a recolectar:

```
□ Nombre completo y título (Dr./Dra.)
□ Especialidad y subespecialidad
□ Cédula profesional (si está disponible)
□ Foto profesional (descargar de Doctoralia/redes)
□ Frase o lema (si tiene, o crear una alusiva)
□ Biografía resumida (estudios, experiencia, certificaciones)

□ Lista de servicios principales (mínimo 4-6)
□ Horarios de atención
□ Dirección completa del consultorio
□ Ciudad, estado, país
□ Teléfono de contacto
□ WhatsApp (usualmente el mismo)
□ Email profesional

□ Redes sociales activas
□ Perfil de Doctoralia (link)
□ Google Maps URL (para el mapa)

□ Testimonios reales (copiar de Google/Doctoralia)
□ Imágenes del consultorio (si están disponibles)
```

---

## 📝 FASE 2: Configuración del Demo

### Archivo a editar: `src/config/siteConfig.ts`

1. **Copiar bloque de doctor existente** como plantilla
2. **Generar slug único:** `dr-nombre-apellido` o `dra-nombre-apellido`
3. **Completar TODOS los campos** con datos reales
4. **Elegir colores** que reflejen la especialidad:
   - Cardiología: Azul/Rojo (#1B4D6E, #C9A96E)
   - Cirugía Plástica: Rosa/Dorado (#8B5E83, #D4A574)
   - Dermatología: Verde menta/Blanco (#2D8B7A, #F4EDE4)
   - Pediatría: Celeste/Amarillo (#4A9ED4, #FFD166)
   - Ginecología: Rosa suave/Violeta (#9B6B8E, #E8D4E4)
   - Traumatología: Azul oscuro/Gris (#2C3E50, #95A5A6)
   - Oftalmología: Azul cielo/Verde (#3498DB, #27AE60)

5. **Deploy automático** a Vercel (push a main)

### URLs generadas:
```
https://primero-ves.vercel.app/{slug}/elegante
https://primero-ves.vercel.app/{slug}/moderna  
https://primero-ves.vercel.app/{slug}/clasica
```

---

## 💬 FASE 3: Primer Contacto WhatsApp

### ⏰ Mejor horario para contactar:
- **Médicos:** Entre 12:00 PM - 2:00 PM (hora de comida) o después de 6:00 PM
- **Evitar:** Horarios de consulta, lunes temprano, viernes tarde

---

### 📨 MENSAJE 1: Apertura (Hook + Demo)

**Versión A - Directa con valor:**
```
Hola Dr(a). [Nombre] 👋

Vi su consultorio de [Especialidad] en [Ciudad] y me tomé la libertad de crear algo para usted.

Le diseñé 3 opciones de página web profesional con su información real:

🔗 Elegante: [link]
🔗 Moderna: [link]  
🔗 Clásica: [link]

No tiene que responder ahora, solo quería que viera cómo se vería su presencia digital profesional.

[Tu nombre]
PrimeroVes - Páginas web para médicos
```

**Versión B - Con beneficio específico:**
```
Hola Dr(a). [Nombre] 👋

Soy [Tu nombre] de PrimeroVes. Ayudamos a médicos especialistas a captar más pacientes privados con presencia web profesional.

Le preparé algo especial 👇

Creé su página web con sus datos reales para que vea exactamente cómo funcionaría:

✨ [link al demo elegante]

(Tiene 3 estilos para elegir)

¿Le puedo explicar cómo funciona?
```

**Versión C - Ultra corta:**
```
Dr(a). [Nombre], buenas tardes 🙌

Le diseñé su página web de [Especialidad]:
[link]

¿Qué le parece? 👀
```

---

### 📨 MENSAJE 2: Follow-up (Si no responde en 24-48h)

**Si vio el mensaje pero no respondió:**
```
Dr(a). [Nombre], ¿tuvo oportunidad de ver su página web? 

Me encantaría saber su opinión, aunque sea brevemente 🙏

Si tiene alguna pregunta sobre cómo funciona, con gusto le explico.
```

**Si no vio el mensaje:**
```
Hola Dr(a). [Nombre] 👋

Le comparto nuevamente el demo que le creé de su página web profesional:

🔗 [link]

Quedo atento a sus comentarios cuando tenga un momento.
```

---

### 📨 MENSAJE 3: Segundo follow-up (5-7 días después)

```
Dr(a). [Nombre], buen día

Le comparto un dato: el 73% de los pacientes buscan a su médico en Google antes de agendar cita.

Su página web sigue activa aquí: [link]

Si en algún momento le interesa activarla oficialmente, me avisa 👍

Que tenga excelente semana.
```

---

## 🗣️ FASE 4: Manejo de Conversación

### Respuestas a preguntas frecuentes:

---

**❓ "¿Cuánto cuesta?"**

```
Tenemos 2 planes simples:

📌 Plan Básico: $XX USD/mes
   - Página web profesional
   - Dominio personalizado (drsuapellido.com)
   - SSL/Seguridad incluida
   - Botón de WhatsApp
   - SEO básico

📌 Plan Premium: $XX USD/mes  
   - Todo lo anterior +
   - Google Ads básico
   - Estadísticas de visitas
   - Actualizaciones ilimitadas
   - Soporte prioritario

¿Cuál le interesa conocer más a detalle?
```

---

**❓ "Ya tengo página web"**

```
¡Excelente! Tener presencia web es fundamental 👍

¿Puedo preguntarle? ¿Su página actual:
- Aparece en Google cuando buscan "[especialidad] en [ciudad]"?
- Tiene botón de WhatsApp para agendar fácil?
- Se ve bien en celular?
- Tiene SSL (el candadito verde)?

Si le interesa, puedo revisar su página actual sin costo y darle recomendaciones de mejora.
```

---

**❓ "No necesito página web, mis pacientes llegan por referidos"**

```
Tiene mucha razón, la recomendación médica es oro 💯

Lo interesante es que muchos de esos pacientes referidos igual lo buscan en Google antes de llamar, para:
- Ver su foto y confirmar que es usted
- Leer sus servicios
- Encontrar la dirección exacta

La página web refuerza esa primera impresión profesional.

¿Le parece si dejamos la demo activa y la revisa cuando tenga tiempo?
```

---

**❓ "Lo voy a pensar"**

```
Perfecto, tómese su tiempo 🙌

Le dejo activa su página demo por 30 días para cuando esté listo.

¿Puedo preguntarle qué es lo que más le gustaría resolver con una página web? Así le preparo información más específica.
```

---

**❓ "¿Cómo funciona?"**

```
Super simple:

1️⃣ Usted elige el diseño que más le gustó (Elegante, Moderna o Clásica)

2️⃣ Me confirma que los datos están correctos o me dice qué ajustar

3️⃣ Configuramos su dominio (drsuapellido.com)

4️⃣ En 24-48 horas está en línea 🚀

El pago es mensual, puede cancelar cuando quiera, y las actualizaciones de texto o fotos están incluidas.

¿Le gustaría proceder con alguno de los diseños?
```

---

**❓ "¿Por qué confiar en ustedes?"**

```
Muy buena pregunta 👍

PrimeroVes se especializa SOLO en páginas web para médicos. 

✅ +XX médicos ya confían en nosotros
✅ Especializados en salud (conocemos las regulaciones)
✅ Soporte en español por WhatsApp
✅ Servers en la nube (velocidad garantizada)
✅ Puede cancelar cuando quiera

El mejor ejemplo: la página que le compartí está funcionando en línea ahora mismo con SUS datos. Así trabajamos.
```

---

**❓ "Es muy caro" / "No tengo presupuesto"**

```
Entiendo, el presupuesto siempre es importante 💡

Piénselo así: ¿cuánto cobra por una consulta? 

Con UNA consulta adicional al mes que llegue por la página, ya está cubierta la inversión.

Y la realidad es que una página profesional bien hecha atrae más que eso.

¿Le parece si empezamos con el plan básico y después escalamos?
```

---

## ✅ FASE 5: Cierre de Venta

### Señales de compra:
- Pregunta por precio específico
- Pregunta por formas de pago
- Pide hacer cambios al demo
- Pregunta por el dominio
- Dice "me gusta" o "se ve bien"

### Mensaje de cierre:

```
Perfecto Dr(a). [Nombre] 🎉

Para activar su página oficialmente necesito:

1. Confirmar diseño: ¿Elegante, Moderna o Clásica?
2. Dominio deseado: ¿drsuapellido.com está bien?
3. Ajustes al demo: ¿Algo que quiera cambiar?

El proceso es:
- Hoy: Registramos su dominio
- 24-48h: Su página en línea
- Facturación: [explicar método de pago]

¿Procedemos? 🚀
```

---

## 📊 Métricas de Seguimiento

| Etapa | Métrica | Objetivo |
|-------|---------|----------|
| Demo creado | Demos/semana | 20+ |
| Primer contacto | Mensajes enviados | 100% de demos |
| Respuesta | Tasa de respuesta | >30% |
| Conversación | Demos vistos | >60% |
| Cierre | Conversión | >15% |

---

## 🚫 Lo que NO hacer:

1. ❌ **No enviar audios largos** en el primer mensaje
2. ❌ **No hablar de precio** antes de que pregunten
3. ❌ **No presionar** si no responden en el día
4. ❌ **No usar jerga técnica** (hosting, DNS, CMS, etc.)
5. ❌ **No ser genérico** - siempre personalizar con nombre y especialidad
6. ❌ **No mentir** sobre características o tiempos
7. ❌ **No criticar** su página actual si tiene una

---

## ✨ Tips Pro:

1. **El demo ES el pitch** - Deja que el producto hable solo
2. **Personalización mata objeciones** - Mientras más específico, más confían
3. **Responde rápido** - <1 hora en horario laboral
4. **Usa notas de voz cortas** - Después del primer mensaje texto, el audio humaniza
5. **Celebra pequeñas victorias** - "¡Excelente elección!" cuando toman decisiones
6. **Pide feedback siempre** - Aunque no compren, mejorarás el producto

---

## 📁 Plantilla de Mensaje Rápido

Para copiar/pegar y solo cambiar datos:

```
Hola [TITULO] [APELLIDO] 👋

Vi su consultorio de [ESPECIALIDAD] en [CIUDAD] y le creé 3 opciones de página web profesional:

🔗 Elegante: https://primero-ves.vercel.app/[SLUG]/elegante
🔗 Moderna: https://primero-ves.vercel.app/[SLUG]/moderna
🔗 Clásica: https://primero-ves.vercel.app/[SLUG]/clasica

Todo con sus datos reales. ¿Qué le parece?

[TU NOMBRE]
PrimeroVes
```

**Variables a reemplazar:**
- `[TITULO]` → Dr. / Dra.
- `[APELLIDO]` → Solo apellido (más profesional)
- `[ESPECIALIDAD]` → La especialidad exacta
- `[CIUDAD]` → Ciudad donde consulta
- `[SLUG]` → El slug del siteConfig.ts
- `[TU NOMBRE]` → Tu nombre

---

## 🔄 Flujo Completo Resumido

```
┌─────────────────────────────────────────────────────────────┐
│  1. PROSPECCIÓN (30 min)                                     │
│     └─ Investigar datos del médico en web                   │
├─────────────────────────────────────────────────────────────┤
│  2. CONFIGURACIÓN (15 min)                                   │
│     └─ Editar siteConfig.ts → Push → Deploy automático      │
├─────────────────────────────────────────────────────────────┤
│  3. PRIMER CONTACTO                                          │
│     └─ WhatsApp con links a los 3 demos funcionando         │
├─────────────────────────────────────────────────────────────┤
│  4. SEGUIMIENTO                                              │
│     └─ Follow-up a las 24h, 48h y 7 días                    │
├─────────────────────────────────────────────────────────────┤
│  5. CONVERSACIÓN                                             │
│     └─ Responder preguntas, manejar objeciones              │
├─────────────────────────────────────────────────────────────┤
│  6. CIERRE                                                   │
│     └─ Confirmar diseño, dominio, forma de pago             │
└─────────────────────────────────────────────────────────────┘
```

---

*Documento creado para el equipo comercial de PrimeroVes*  
*Última actualización: Marzo 2026*
