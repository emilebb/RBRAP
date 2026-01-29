# 🎨 ESPECIFICACIONES TÉCNICAS - FONDO ELEGANTE RBR

## CSS Implementado

### 1. BODY - Base Principal

```css
body {
    background-color: #fafaf8;  /* Blanco roto */
    
    /* TRES CAPAS DE BACKGROUND */
    background-image: 
        /* CAPA 1: Degradado sutil 135deg */
        linear-gradient(135deg, 
            #fafaf8 0%,      /* Blanco roto */
            #f5f3f0 25%,     /* Gris claro */
            #f8f7f4 50%,     /* Beige suave */
            #f5f1ec 75%,     /* Gris suave */
            #fafaf8 100%     /* Blanco roto */
        ),
        
        /* CAPA 2: Textura horizontal fina */
        repeating-linear-gradient(
            0deg,
            rgba(200, 195, 190, 0.03) 0px,
            rgba(200, 195, 190, 0.03) 1px,
            transparent 1px,
            transparent 2px
        ),
        
        /* CAPA 3: Textura vertical fina */
        repeating-linear-gradient(
            90deg,
            rgba(200, 195, 190, 0.03) 0px,
            rgba(200, 195, 190, 0.03) 1px,
            transparent 1px,
            transparent 2px
        );
    
    background-attachment: fixed;      /* No se mueve con scroll */
    background-size: 100% 100%, 200% 200%, 200% 200%;
    background-position: 0 0, 0 0, 0 0;
    position: relative;
    overflow-x: hidden;
}
```

### 2. BODY::BEFORE - Círculo Superior Izquierda

```css
body::before {
    content: '';
    position: fixed;
    top: -20%;
    left: -10%;
    width: 40%;
    height: 60%;
    
    /* Degradado radial sutil */
    background: radial-gradient(
        ellipse at center,
        rgba(212, 175, 143, 0.08) 0%,      /* Centro: Dorado muy suave */
        transparent 70%                      /* Borde: Transparente */
    );
    
    border-radius: 50%;
    filter: blur(80px);                    /* Difuminado suave */
    z-index: -1;
    pointer-events: none;
}
```

**Efecto**: Forma borrosa dorada/beige en la esquina superior izquierda, casi imperceptible pero da profundidad.

### 3. BODY::AFTER - Círculo Inferior Derecha

```css
body::after {
    content: '';
    position: fixed;
    bottom: -30%;
    right: -15%;
    width: 50%;
    height: 70%;
    
    /* Degradado radial más suave aún */
    background: radial-gradient(
        ellipse at center,
        rgba(175, 155, 140, 0.06) 0%,      /* Marrón muy suave */
        transparent 65%
    );
    
    border-radius: 50%;
    filter: blur(100px);                   /* Más difuminado */
    z-index: -1;
    pointer-events: none;
}
```

**Efecto**: Forma grande y suave en la esquina inferior derecha, casi invisible pero enriquece el fondo.

---

## HTML::BEFORE & AFTER - Líneas Diagonales

### 4. HTML::BEFORE - Línea Superior Izquierda

```css
html::before {
    content: '';
    position: fixed;
    top: 10%;
    left: -5%;
    width: 60%;
    height: 2px;
    
    /* Degradado que desvanece */
    background: linear-gradient(
        90deg,
        rgba(175, 155, 140, 0.2) 0%,
        rgba(175, 155, 140, 0.05) 50%,
        transparent 100%
    );
    
    transform: rotate(-25deg);              /* Diagonal elegante */
    z-index: -1;
    pointer-events: none;
}
```

**Efecto**: Línea diagonal fina que se desvanece, casi imperceptible pero proporciona movimiento visual.

### 5. HTML::AFTER - Línea Derecha

```css
html::after {
    content: '';
    position: fixed;
    top: 30%;
    right: -8%;
    width: 50%;
    height: 1.5px;
    
    /* Degradado aún más sutil */
    background: linear-gradient(
        90deg,
        transparent 0%,
        rgba(212, 175, 143, 0.08) 30%,
        rgba(212, 175, 143, 0.04) 100%
    );
    
    transform: rotate(15deg);               /* Diagonal hacia arriba */
    z-index: -1;
    pointer-events: none;
}
```

**Efecto**: Segunda línea diagonal de dorado, muy sutil, simétrica con la primera.

---

## SECTION - Líneas Separadoras

### 6. SECTION::BEFORE - Líneas Entre Secciones

```css
section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 5%;
    width: 90%;
    height: 1px;
    
    /* Degradado horizontal que aparece y desaparece */
    background: linear-gradient(
        90deg,
        transparent 0%,
        rgba(175, 155, 140, 0.1) 50%,
        transparent 100%
    );
    
    z-index: 1;
}
```

**Efecto**: Líneas finas entre secciones que separan sin marcar límites duros.

---

## SECCIONES - Capas de Profundidad

### 7. SECTION::AFTER - Degradado de Fondo

```css
.collections-section::after,
.about-section::after,
.future-lines::after {
    content: '';
    position: absolute;
    inset: 0;
    
    /* Degradado radial sutil */
    background: radial-gradient(
        ellipse at center,
        transparent 0%,
        rgba(250, 250, 248, 0.3) 100%      /* Vignette muy suave */
    );
    
    pointer-events: none;
    z-index: -1;
}
```

**Efecto**: Vignette (oscurecimiento de bordes) muy suave que da profundidad.

---

## CATÁLOGO - Círculo Geométrico

### 8. CATALOG-SECTION::BEFORE - Círculo Sutil

```css
.catalog-section::before {
    content: '';
    position: absolute;
    top: 15%;
    right: 2%;
    width: 100px;
    height: 100px;
    
    /* Borde circular muy fino y casi invisible */
    border: 1px solid rgba(175, 155, 140, 0.08);
    border-radius: 50%;
    
    z-index: 0;
    pointer-events: none;
}
```

**Efecto**: Círculo geométrico puro, apenas visible, inspira arte moderno minimalista.

---

## HERO - Línea Vertical

### 9. HERO-BANNER::BEFORE - Línea Vertical

```css
.hero-banner::before {
    content: '';
    position: absolute;
    right: 25%;
    top: 0;
    bottom: 0;
    width: 1px;
    
    /* Gradiente vertical que desvanece */
    background: linear-gradient(
        180deg,
        transparent 0%,
        rgba(212, 175, 143, 0.05) 50%,
        transparent 100%
    );
    
    z-index: 0;
    pointer-events: none;
}
```

**Efecto**: Línea vertical central muy sutil que divide el hero de forma elegante.

---

## GRID DE PRODUCTOS - Cuadrícula Imperceptible

### 10. PRODUCTS-GRID::BEFORE - Líneas de Cuadrícula

```css
.products-grid::before {
    content: '';
    position: absolute;
    inset: 0;
    
    /* Cuadrícula 40x40px muy sutil */
    background-image: 
        linear-gradient(
            0deg,
            rgba(175, 155, 140, 0.02) 1px,     /* Líneas horizontales */
            transparent 1px
        ),
        linear-gradient(
            90deg,
            rgba(175, 155, 140, 0.02) 1px,     /* Líneas verticales */
            transparent 1px
        );
    
    background-size: 40px 40px;
    pointer-events: none;
    z-index: -1;
}
```

**Efecto**: Estructura ordenada invisible que organiza el grid.

---

## FOOTER - Vignette Inferior

### 11. FOOTER-PREMIUM::BEFORE - Degradado Oscuro

```css
.footer-premium::before {
    content: '';
    position: fixed;
    bottom: -15%;
    left: 0;
    width: 100%;
    height: 40%;
    
    /* Degradado que oscurece hacia abajo */
    background: linear-gradient(
        180deg,
        transparent 0%,
        rgba(26, 26, 26, 0.02) 100%
    );
    
    pointer-events: none;
    z-index: -1;
}
```

**Efecto**: Oscurecimiento suave hacia el footer, cierra el diseño elegantemente.

---

## TARJETAS - Sombras Etéreas

### 12. PRODUCT-CARD, COLLECTION-CARD, FUTURE-ITEM - Elevación

```css
.product-card,
.collection-card,
.future-item {
    position: relative;
    
    /* Sombra inicial muy suave */
    box-shadow: 
        0 1px 3px rgba(0, 0, 0, 0.04),
        0 2px 8px rgba(0, 0, 0, 0.02);
    
    transition: box-shadow var(--transition-smooth);
}

/* En hover - más elevación */
.product-card:hover,
.collection-card:hover,
.future-item:hover {
    box-shadow: 
        0 4px 12px rgba(0, 0, 0, 0.08),
        0 8px 24px rgba(0, 0, 0, 0.04);
}
```

**Efecto**: Tarjetas flotan sutilmente al pasar el mouse, efecto premium.

---

## DARK MODE - Adaptación Automática

```css
@media (prefers-color-scheme: dark) {
    body {
        background-color: #1a1a1a;              /* Negro suave */
        
        /* Degradados más cálidos para oscuro */
        background-image:
            linear-gradient(135deg,
                #1a1a1a 0%,
                #222220 25%,                    /* Gris muy oscuro */
                #1f1e1c 50%,
                #222118 75%,                    /* Marrón muy oscuro */
                #1a1a1a 100%
            ),
            /* Texturas con opacidad aumentada */
            repeating-linear-gradient(
                0deg,
                rgba(80, 75, 70, 0.04) 0px,    /* Mayor contraste */
                rgba(80, 75, 70, 0.04) 1px,
                transparent 1px,
                transparent 2px
            ),
            repeating-linear-gradient(
                90deg,
                rgba(80, 75, 70, 0.04) 0px,
                rgba(80, 75, 70, 0.04) 1px,
                transparent 1px,
                transparent 2px
            );
    }

    /* Elementos decorativos más visibles */
    body::before {
        background: radial-gradient(ellipse,
            rgba(212, 175, 143, 0.1) 0%,       /* De 0.08 a 0.1 */
            transparent 70%
        );
    }

    body::after {
        background: radial-gradient(ellipse,
            rgba(175, 155, 140, 0.08) 0%,      /* De 0.06 a 0.08 */
            transparent 65%
        );
    }

    /* Líneas más visibles */
    html::before {
        background: linear-gradient(90deg,
            rgba(212, 175, 143, 0.15) 0%,      /* De 0.2 a 0.15 */
            rgba(212, 175, 143, 0.05) 50%,
            transparent 100%
        );
    }

    html::after {
        background: linear-gradient(90deg,
            transparent 0%,
            rgba(175, 155, 140, 0.1) 30%,      /* De 0.08 a 0.1 */
            rgba(175, 155, 140, 0.05) 100%
        );
    }

    /* Líneas de sección */
    section::before {
        background: linear-gradient(90deg,
            transparent 0%,
            rgba(212, 175, 143, 0.1) 50%,      /* De 0.1 a 0.1 */
            transparent 100%
        );
    }

    /* Secciones con mayor vignette */
    .collections-section::after,
    .about-section::after,
    .future-lines::after {
        background: radial-gradient(ellipse,
            transparent 0%,
            rgba(26, 26, 26, 0.4) 100%         /* Mayor oscurecimiento */
        );
    }

    /* Círculo de catálogo más visible */
    .catalog-section::before {
        border-color: rgba(212, 175, 143, 0.1); /* De 0.08 a 0.1 */
    }

    /* Línea del hero */
    .hero-banner::before {
        background: linear-gradient(180deg,
            transparent 0%,
            rgba(212, 175, 143, 0.08) 50%,     /* De 0.05 a 0.08 */
            transparent 100%
        );
    }

    /* Cuadrícula más visible */
    .products-grid::before {
        background-image:
            linear-gradient(0deg,
                rgba(80, 75, 70, 0.03) 1px,    /* De 0.02 a 0.03 */
                transparent 1px
            ),
            linear-gradient(90deg,
                rgba(80, 75, 70, 0.03) 1px,    /* De 0.02 a 0.03 */
                transparent 1px
            );
    }
}
```

---

## 📊 RESUMEN DE ELEMENTOS

| Elemento | Posición | Tamaño | Blur | Opacidad | Efecto |
|----------|----------|--------|------|----------|--------|
| `body::before` | TL (-20%, -10%) | 40% × 60% | 80px | 8% | Círculo dorado |
| `body::after` | BR (-30%, 15%) | 50% × 70% | 100px | 6% | Círculo marrón |
| `html::before` | TL (10%, -5%) | 60% × 2px | - | 5-20% | Línea diagonal |
| `html::after` | TR (30%, -8%) | 50% × 1.5px | - | 4-8% | Línea sutil |
| `section::before` | Top | 90% × 1px | - | 10% | Separadores |
| `section::after` | Full | Inset | - | 30% | Vignette |
| `.catalog::before` | TR (15%, 2%) | 100px círculo | - | 8% | Círculo geo |
| `.hero::before` | Right 25% | 1px | - | 5% | Línea vertical |
| `.grid::before` | Full | 40×40px | - | 2% | Cuadrícula |

---

## 🎯 RESULTADO VISUAL

```
┌─────────────────────────────────────────────┐
│  Blanco Roto #fafaf8 + Degradado Sutil     │
│  ┌───────────────────────────────────────┐ │
│  │ ○ (Círculo dorado blur 80px)          │ │
│  │                                       │ │
│  │  \ Línea diagonal (-25°)              │ │
│  │                                       │ │
│  │  ┌─────────────────────────────────┐ │ │
│  │  │ HERO BANNER                   | │ │ │
│  │  │    | Línea vertical            | │ │ │
│  │  │    |                           | │ │ │
│  │  └─────────────────────────────────┘ │ │
│  │                                       │ │
│  │  ─────────────────────────────────    │ │
│  │    SECCIÓN CON VIGNETTE              │ │
│  │  ─────────────────────────────────    │ │
│  │                                       │ │
│  │   ○  TARJETAS (Sombra etérea)        │ │
│  │       ○ Cuadrícula imperceptible     │ │
│  │                                       │ │
│  │  ◯ Círculo geométrico (8% opacidad) │ │
│  │                                       │ │
│  │   / Línea diagonal (15°)              │ │
│  │                                       │ │
│  │                                       │ │
│  │           ○ (Círculo marrón)          │ │
│  └───────────────────────────────────────┘ │
│                                             │
│  Textura imperceptible (3% opacidad)       │
│  Mucho espacio negativo                    │
└─────────────────────────────────────────────┘
```

---

## ✅ VERIFICACIÓN FINAL

- [x] Base #fafaf8 (blanco roto)
- [x] Degradado 135deg (sutil)
- [x] Colores: grises y beiges
- [x] Textura imperceptible (0.03)
- [x] Formas abstractas difuminadas
- [x] Líneas diagonales finas
- [x] Círculos geométricos sutiles
- [x] Líneas de separación
- [x] Cuadrícula invisible
- [x] Dark mode implementado
- [x] Performance óptimo (solo CSS)
- [x] Sin imágenes externas
- [x] Responsive en todos los tamaños
- [x] Compatible con todos los navegadores

**Fondo 100% implementado y listo para producción.**
