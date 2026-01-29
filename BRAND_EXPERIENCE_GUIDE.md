# 🎨 RBR - Guía Completa de Experiencia de Marca

## 1. IDENTIDAD DE MARCA

### Esencia
**RBR** es un movimiento artístico que celebra la fusión de dos culturas: la elegancia sofisticada de París y la fuerza creativa de Bogotá.

**Tagline:** "Estilo sin reglas"

### Valores Fundamentales
- 🎨 **Arte Vestible** - Cada prenda es una obra de arte
- 🌍 **Fusión Cultural** - Precisión francesa + vibración colombiana
- ♻️ **Lujo Accesible** - Alta calidad al alcance de todos
- ✨ **Libertad de Expresión** - La moda como declaración personal

### Tono de Voz
- Poético y seguro
- Cultural y sensible
- Provocador pero elegante
- Accesible pero sofisticado

---

## 2. DIRECCIÓN VISUAL

### Paleta de Colores Primaria
```
--primary-dark: #1a1a1a (Negro profundo parisino)
--primary-light: #ffffff (Blanco puro)
--accent-color: #d4af8f (Dorado cálido bohemio)
--text-primary: #1a1a1a (Negro)
--secondary-bg: #f8f8f8 (Gris muy claro)
```

### Tipografía
- **Títulos:** Sistema de fuentes nativas (sans-serif moderno)
- **Cuerpo:** Sistema de fuentes nativas para accesibilidad
- **Énfasis:** Letras-espaciado 1-2px para elegancia

### Elementos Visuales
- Fondos minimalistas con sutiles degradados
- Líneas diagonales decorativas casi imperceptibles
- Formas abstractas difuminadas (radial gradients)
- Mucho espacio en blanco (galería de arte)
- Fotografías editoriales de alta moda
- Transiciones suaves 0.3s ease

---

## 3. DOS LÍNEAS DE COLECCIÓN

### 🎨 LÍNEA MINIMALISTA - "Elegancia Francesa"
**Inspiración:** Precisión parisina, simplicidad radical

**Características:**
- Cortes precisos y geométricos
- Paleta neutral: blanco, negro, beige, gris
- Formas puras sin adornos
- Enfoque en calidad artesanal
- Minimalismo radical

**Productos Destacados:**
- Camiseta Blanca Premium ($240.000)
- Camisa Beige Neutral ($300.000)
- Pantalón Gris Estructurado ($320.000)

**Storytelling:**
"Inspirada en los estudios de los artistas parisinos. Cada puntada es un trazo de perfección."

---

### 🔥 LÍNEA MAXIMALISTA - "Fuerza Colombiana"
**Inspiración:** Vivacidad bogotana, libertad artística

**Características:**
- Colores vibrantes y explosivos
- Patrones atrevidos y texturas ricas
- Diseños experimentales y audaces
- Libertad total de expresión
- Ediciones ultralimitadas

**Productos Destacados:**
- Jeans Indigo Artesanal ($380.000)
- Chaqueta Experimental ($520.000)
- Prenda Multicolor Vibrante ($380.000)

**Storytelling:**
"Nacida del encuentro de la irreverencia parisina y la audacidad colombiana. Para quienes creen que la moda es revolución."

---

## 4. EXPERIENCIA DE COMPRA

### Journey del Cliente

#### 1. DESCUBRIMIENTO
```
Hero Banner Épico
↓
"La fusión de la elegancia parisina con la fuerza artística colombiana"
↓
Llamada a acción: "Descubre las Colecciones"
```

#### 2. EXPLORACIÓN
```
Dos Colecciones Visuales (Minimalista vs Maximalista)
↓
Catálogo en Cuadrícula de Galería
↓
Imágenes Grandes, Limpias, Editoriales
```

#### 3. INVESTIGACIÓN
```
Click en Producto → Modal Artístico
├─ Imagen Principal Grande
├─ Storytelling Emocional
├─ Materiales y Proceso Artesanal
├─ Badges de Edición Limitada
├─ Certificación de Sostenibilidad
└─ Call-to-Action Principal
```

#### 4. COMPRA
```
Carrito Simple y Elegante
↓
Checkout Rápido (Email + Dirección + Método)
↓
Confirmación Poética
```

#### 5. RELACIÓN A LARGO PLAZO
```
Perfil de Usuario
├─ Historial de Compras
├─ Preferencias de Colecciones
├─ Acceso a Ediciones Limitadas Previas
└─ Comunidad RBR (próxima fase)
```

---

## 5. COMPONENTES CLAVE DEL DISEÑO

### Hero Banner
- Imagen de modelo editorial de alta moda
- Texto poético centrado
- Gradiente sutil de fondo
- Botón de CTA minimalista
- Animación de entrada suave

### Tarjetas de Colección
- Imagen grande con overlay al hover
- Hover efecto de zoom sutil
- Información descriptiva centrada
- Botón para explorar línea

### Modal de Producto (Galería de Arte)
```
┌─────────────────────────────────────────┐
│  IMAGEN GRANDE          │  INFORMACIÓN  │
│  (Zoom al hover)        │  - Nombre     │
│                         │  - Precio     │
│  Badges:                │  - Storytelling│
│  ✓ Edición Limitada     │  - Materiales │
│  ✓ Sostenible           │  - Selector   │
│                         │  - Cantidad   │
│                         │  - CTA        │
│                         │  - Info Extra │
└─────────────────────────────────────────┘
```

### Carrito
- Itemización clara con precios
- Posibilidad de eliminar/editar
- Total actualizado en tiempo real
- Botón checkout destacado

### Perfil de Usuario
- Avatar circular minimalista
- Información centrada
- Botones de acción principales
- Información de cuenta destacada
- Botón logout seguro

---

## 6. ANIMACIONES Y TRANSICIONES

### Tipos de Animaciones
```css
fadeInUp    → Productos aparecen de abajo
slideDown   → Modales descienden
scaleIn     → Badges y elementos destacados
pulse       → Efectos de atención
slideInRight → Elementos de lado
```

### Delays de Productos
- Cada producto: +0.1s de delay
- Efecto cascada visual
- Máximo 0.8s de delay

### Hover States
- Tarjetas: translateY(-5-8px) + shadow-hover
- Imágenes: scale(1.05-1.08)
- Botones: translateY(-2px) + color change
- Enlaces: underline animation

---

## 7. MULTILENGUAJE

### Idiomas Soportados
1. **Español (ES)** - Principal para Bogotá
2. **Francés (FR)** - Principal para París
3. **Inglés (EN)** - Internacional

### Selector de Idioma
- Ubicación: Header superior derecha
- Interfaz elegante con dropdown
- Indicador visual de idioma actual
- Persiste en localStorage

---

## 8. SEGURIDAD Y AUTENTICACIÓN

### Flujo de Usuario
```
Sin Sesión → Click Carrito → Login Modal
           → Click Cuenta   → Login Modal

Con Sesión → Click Carrito → Ir a Carrito
           → Click Cuenta  → Ver Perfil
```

### Funcionalidades Protegidas
- Agregar al carrito
- Checkout
- Perfil de usuario
- Histórico de compras

---

## 9. RANGO DE PRECIOS (Lujo Accesible)

### Minimalista (París)
- Camisetas: $240.000 - $250.000
- Camisas: $300.000
- Pantalones: $320.000
- **Rango:** $240.000 - $320.000

### Maximalista (Bogotá)
- Jeans Artesanal: $380.000
- Chaqueta Experimental: $520.000
- Prendas Multicolor: $380.000
- Sudaderas: $340.000
- **Rango:** $340.000 - $520.000

### Estrategia de Precios
- Justificado por ediciones limitadas
- Materiales sostenibles certificados
- Confección artesanal y manual
- Historias culturales auténticas

---

## 10. DIFERENCIADORES DE MARCA

### Ediciones Limitadas
```
Minimalista: 85-120 piezas
Maximalista: 40-50 piezas
Cada pieza con número único
Certificado de autenticidad
```

### Sostenibilidad Certificada
- Algodón orgánico 100%
- Tintes naturales
- Confección ética
- Materiales reciclados donde aplica
- Empaques artesanales

### Artesanía Visible
- Costuras aparentes (maximalista)
- Detalles manuales evidentes
- Variaciones únicas por pieza
- Proceso transparente

---

## 11. VALORES SENSIBLES DE LA EXPERIENCIA

### Lo que debe SENTIR el usuario

| Aspecto | Sensación |
|---------|-----------|
| **Libertad** | Cada producto es un acto de expresión personal |
| **Emoción** | Cada prenda cuenta una historia cultural |
| **Identidad** | "Esto soy yo, esto es mi marca" |
| **Expresión** | Moda sin reglas, sin convenciones |
| **Lujo** | Accesible pero no común, especial |
| **Arte** | Cada compra es un acto estético |
| **Comunidad** | Parte de un movimiento global |

---

## 12. SECCIONES PRINCIPALES

### 1. Hero - Unión Bogotá-París
Imagen editorial + storytelling poético

### 2. Dos Mundos, Una Visión
Colecciones minimalista vs maximalista

### 3. Colección Actual
Catálogo filtrable con 8 productos

### 4. Sobre RBR
Misión, valores y propósito artístico

### 5. Próximas Líneas
Teaser de expansión futura

### 6. Footer Premium
Enlaces, redes, información

---

## 13. RESPONSIVE Y ACCESIBILIDAD

### Breakpoints
- Desktop: 1200px+
- Tablet: 768px - 1023px
- Mobile: 480px - 767px
- Móvil pequeño: <480px

### Características Accesibles
- Contraste suficiente (WCAG AA)
- Fuentes legibles (16px mínimo)
- Espaciado generoso
- Botones de 44px+ en móvil
- Navegación clara
- Sistema de idiomas multilingüe

---

## 14. TECNOLOGÍA

### Frontend
- HTML5 semántico
- CSS3 con variables globales
- JavaScript vanilla (sin librerías)
- LocalStorage para persistencia
- Responsive design mobile-first

### Features Técnicos
- Modal system escalable
- Language switcher elegante
- Cart system con localStorage
- User authentication local
- Password requirements validator
- Real-time form validation

---

## 15. PRÓXIMAS EXPANSIONES

### Fase 2
- [ ] Línea Femenina
- [ ] Sistema de reseñas
- [ ] Blog de inspiración
- [ ] Lookbooks editoriales

### Fase 3
- [ ] Accesorios
- [ ] Marroquinería artesanal
- [ ] Perfumería conceptual
- [ ] Colaboraciones de artistas

### Fase 4
- [ ] Membresía VIP (Early Access)
- [ ] Plataforma de comunidad
- [ ] Eventos y pop-ups
- [ ] Programa de sostenibilidad

---

## 16. MÉTRICAS DE ÉXITO

### Métricas de Experiencia
- Tiempo en site: +3 minutos
- Tasa de conversión: 3-5%
- Ticket promedio: $380.000
- Retorno de clientes: +40%

### Métricas de Marca
- Share of voice en redes
- Engagement rate
- User-generated content
- Menciones de marca

---

## 17. GUÍA RÁPIDA DE ESTILO

### DO ✓
- Minimalismo elegante
- Espacios en blanco generosos
- Tipografía precisa
- Imágenes editoriales
- Storytelling emocional
- Transiciones suaves
- Accesibilidad primero

### DON'T ✗
- Clutter visual
- Colores vibrantes injustificados
- Tipografía pequeña
- Fotos de producto genéricas
- Mensajes corporativos fríos
- Transiciones abruptas
- Asumir capacidades del usuario

---

## CONCLUSIÓN

RBR no es una tienda. Es una **galería de arte vestible** donde cada cliente se convierte en artista de su propia historia. La experiencia debe sentirse como entrar a un espacio curado con intención, donde cada elemento tiene razón de ser, y cada prenda es un lienzo para la expresión personal.

**Cada interacción es un momento artístico.**

---

*Diseñado con ❤️ entre Bogotá y París*
*Última actualización: Enero 2026*
