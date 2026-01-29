# 🌐 Selector de Idioma RBR - Guía Completa

## ✨ Características Implementadas

### 1. **Selector de Idioma Elegante**
- **Ubicación**: Esquina superior derecha del header
- **Diseño**: Minimalista y premium con globo 🌐
- **Idiomas soportados**: 
  - 🇪🇸 Español (ES)
  - 🇬🇧 English (EN)
  - 🇫🇷 Français (FR)

### 2. **Interfaz del Selector**
```
┌─────────────────────────────────────┐
│ 🌐 ES  [Mi Cuenta]  🛍️            │
└─────────────────────────────────────┘
       ↓ (Al hacer clic)
┌─────────────────────┐
│ Español        ES ✓ │
│ English        EN   │
│ Français       FR   │
└─────────────────────┘
```

### 3. **Animaciones**
- **Apertura**: Fade-in + slide hacia abajo (0.3s)
- **Hover**: Fondo gris claro (#f9f9f9)
- **Check**: Aparece/desaparece con transición suave
- **Menú móvil**: Bottom sheet desde la parte inferior

### 4. **Funcionalidades**

#### ✅ Cambio de idioma dinámico
- Todo el contenido se actualiza sin recargar la página
- Transiciones suaves entre idiomas
- Actualización instantánea del UI

#### ✅ Persistencia
- La preferencia del usuario se guarda en `localStorage`
- Se mantiene la selección al recargar la página
- Clave: `rbr_language`

#### ✅ Responsive Design
**Desktop (>768px)**:
- Menú desplegable en posición absoluta
- Alineado a la derecha del botón

**Tablet (768px)**:
- Reduce padding y tamaño de fuente
- Menú flotante

**Mobile (<480px)**:
- Botón compacto solo con ícono y código
- Menú bottom sheet (sube desde la parte inferior)
- Ocupa ancho completo de pantalla

---

## 🛠️ Archivos Modificados

### 1. **tienda.html**
**Cambios**:
- Agregado selector de idioma en el header
- Añadidos atributos `data-i18n` a elementos traducibles
- Atributos `data-i18n-html` para contenido con HTML (like `<br>`)

**Estructura HTML**:
```html
<div class="language-selector" id="languageSelector">
    <button class="btn-language" id="btnLanguage">
        <span class="globe-icon">🌐</span>
        <span class="language-code" id="currentLanguage">ES</span>
    </button>
    <div class="language-menu" id="languageMenu">
        <div class="language-option" data-lang="es">...</div>
        <div class="language-option" data-lang="en">...</div>
        <div class="language-option" data-lang="fr">...</div>
    </div>
</div>
```

### 2. **tienda.css**
**Nuevas clases CSS**:
- `.language-selector` - Contenedor principal
- `.btn-language` - Botón con ícono y código
- `.language-menu` - Menú desplegable
- `.language-option` - Opciones de idioma
- `.check-mark` - Indicador visual
- `.globe-icon` - Ícono del globo
- `.language-code` - Código de idioma
- Estilos responsive para móvil (bottom sheet)

**Variables CSS utilizadas**:
- `--transition-smooth`: 0.3s ease
- `--shadow-light`: Sombra suave
- Paleta de colores: blanco, grises, negro

### 3. **tienda.js**
**Objetos de traducción**:
```javascript
const translations = {
    es: { nav, hero, collections, catalog, products, about, future, footer },
    en: { ... },
    fr: { ... }
}
```

**Funciones principales**:
- `changeLanguage(lang)` - Cambia el idioma y guarda en localStorage
- `updatePageContent()` - Actualiza todo el contenido visible
- `updateLanguageSelector()` - Actualiza el botón y checks
- `toggleLanguageMenu()` - Abre/cierra el menú
- `closeLanguageMenu()` - Cierra el menú

**Event Listeners**:
- Click en botón: abre/cierra menú
- Click en opciones: cambia idioma
- Click fuera: cierra menú

---

## 📋 Contenidos Traducidos

Cada idioma incluye traducción completa para:

### Navegación
- Inicio / Home / Accueil
- Colecciones / Collections / Collections
- Catálogo / Catalog / Catalogue
- Sobre RBR / About RBR / À Propos RBR
- Contacto / Contact / Contact
- Mi Cuenta / My Account / Mon Compte

### Secciones Principales
- **Hero Banner**: Título, subtítulo, descripción, CTA
- **Colecciones**: Encabezados, descripciones, botones
- **Catálogo**: Filtros, descripciones de productos
- **Sobre RBR**: Valores y descripciones
- **Próximamente**: Líneas futuras
- **Footer**: Enlaces, información de contacto

### Productos (8 productos × 3 idiomas)
Cada producto tiene nombre y descripción traducida

---

## 🎯 Cómo Usar el Selector

### 1. **Cambiar Idioma**
```
1. Haz clic en "🌐 ES" en el header superior derecho
2. Se abre un menú flotante
3. Selecciona el idioma deseado
4. El contenido se actualiza automáticamente
```

### 2. **Verificar la Selección**
- El idioma seleccionado muestra un ✓
- El código en el botón cambia (ES/EN/FR)
- El fondo de la opción se resalta

### 3. **Persistencia**
- La preferencia se guarda automáticamente
- Al recargar la página, mantiene tu idioma
- Se almacena en `localStorage` bajo la clave `rbr_language`

---

## 💻 Implementación Técnica

### Atributos de Traducción

```html
<!-- Texto simple -->
<h2 data-i18n="about.heading">Sobre RBR</h2>

<!-- Con HTML (br tags, etc) -->
<p data-i18n-html="hero.subtitle">La fusión...<br>con la fuerza...</p>

<!-- Botones -->
<button data-i18n="nav.miCuenta">👤 Mi Cuenta</button>
```

### Estructura de Traducciones

```javascript
translations = {
    es: {
        nav: {
            inicio: "Inicio",
            colecciones: "Colecciones",
            ...
        },
        hero: {
            title: "RBR",
            subtitle: "La fusión...",
            ...
        },
        // Más secciones...
    },
    en: { ... },
    fr: { ... }
}
```

---

## 🎨 Diseño Visual

### Colores
- **Fondo del menú**: Blanco (#ffffff)
- **Texto**: Gris oscuro (#1a1a1a)
- **Hover**: Gris muy claro (#f9f9f9)
- **Check**: Negra (#1a1a1a)
- **Border**: Gris claro (#e0e0e0)

### Tipografía
- **Font**: sans-serif (sistema)
- **Peso**: 500 (normal), 600 (bold)
- **Tamaño**: 0.95rem (botón), 0.8rem (códigos)

### Espaciado
- **Padding botón**: 0.75rem 1.2rem
- **Padding opciones**: 1rem 1.2rem
- **Gap entre ícono y código**: 0.5rem
- **Ancho mínimo menú**: 200px

### Sombras
- **Menú**: 0 4px 16px rgba(0, 0, 0, 0.12)
- **Hover botón**: var(--shadow-light)

---

## ✅ Checklist de Implementación

- [x] Selector de idioma en header superior derecho
- [x] Ícono de globo (🌐) y código de idioma
- [x] Menú desplegable con 3 opciones
- [x] Animaciones suave (fade + slide)
- [x] Efectos hover en opciones
- [x] Indicador visual (✓) para idioma actual
- [x] Cambio dinámico de contenido sin recargar
- [x] Persistencia en localStorage
- [x] Sistema completo de traducciones (3 idiomas)
- [x] Traducción de 8 productos
- [x] Responsive design (desktop, tablet, móvil)
- [x] Bottom sheet para móvil
- [x] Cierre de menú al hacer clic fuera
- [x] Integración sin conflictos con código existente

---

## 🚀 Próximas Mejoras Posibles

1. **Más idiomas**: Agregar portugués, italiano, etc.
2. **Detección automática**: Detectar idioma del navegador
3. **RTL Support**: Soporte para idiomas derecha-a-izquierda
4. **Animaciones avanzadas**: Más efectos visuales
5. **Analytics**: Rastrear cambios de idioma
6. **Accesibilidad**: ARIA labels completos
7. **SEO**: URLs multiidioma con hreflang

---

## 📝 Notas de Desarrollo

- El selector no requiere librerías externas
- Usa localStorage estándar de navegador
- CSS moderno con variables CSS
- JavaScript vanilla (ES6+)
- Compatible con todos los navegadores modernos

---

## 🎬 Cómo Probar

1. Abre `tienda.html` en el navegador
2. Haz clic en "🌐 ES" en el header
3. Selecciona un idioma diferente
4. Verifica que el contenido cambió
5. Recarga la página - el idioma debe persistir
6. Cambia a móvil (F12) para ver el bottom sheet

---

**Hecho con ❤️ para RBR - Bogotá × París**
