# 🚀 Desplegar RBR en Netlify - Guía Paso a Paso

## 🎯 Meta
Tener tu tienda online en 5 minutos con URL pública

```
Tu tienda estará en: https://rbr-tienda.netlify.app (aproximado)
```

---

## 📋 Requisitos
- Acceso a tu carpeta RBR
- Navegador web
- Conexión a internet
- Eso es TODO

---

## ✅ Paso 1: Ir a Netlify Drop (Sin registrarse)

**1. Abre este link en navegador:**
```
https://app.netlify.com/drop
```

**2. Deberías ver una página que dice:**
```
"Drag and drop your site output folder here"
```

---

## 📁 Paso 2: Preparar tu Carpeta RBR

**Ubicación de tu carpeta:**
```
c:\Users\PERSONAL\OneDrive - Universidad de los Andes\Escritorio\RBR
```

**Archivos que DEBEN estar dentro:**
```
RBR/
├── tienda.html ✅
├── tienda.css ✅
├── tienda.js ✅
├── config-mercadopago.js ✅
└── [otros archivos]
```

---

## 🎨 Paso 3: Arrastra y Suelta

**1. Abre la carpeta RBR en tu computadora**
```
Inicio → Escritorio → RBR
```

**2. Selecciona la carpeta RBR**
```
Click derecho → Copiar ubicación
o simplemente abre la carpeta
```

**3. En Netlify Drop:**
```
Arrastra la carpeta RBR hacia la página
o haz click para seleccionar archivos
```

**4. Espera a que suba**
```
Verás progreso de carga
Toma 5-10 segundos
```

---

## 🎉 Paso 4: Obtener tu URL

**Después que termine, verás:**
```
✅ Site published!
https://random-name-12345.netlify.app
```

**Esa es tu URL pública** 🎊

---

## 📝 Copiar tu URL

**1. La URL aparecerá en pantalla**
```
Ejemplo: https://rbr-tienda-123.netlify.app
```

**2. Cópiala (Ctrl+C)**

**3. Guárdala en un lugar seguro**
```
Bloc de notas
Email a ti mismo
Documento Word
etc.
```

---

## 🔧 Paso 5: Usar tu URL en Mercado Pago

**1. Ve a Mercado Pago**
```
https://www.mercadopago.com/
```

**2. Dashboard → Configuración → Información de Tienda**

**3. Peguen en "Sitio web":**
```
https://tu-url-netlify.netlify.app
```

**4. Guarda cambios**

---

## ✅ Verificar que Funciona

**1. Abre tu URL en navegador:**
```
https://rbr-tienda-123.netlify.app
```

**2. Deberías ver:**
```
✅ Header de RBR
✅ Hero banner
✅ Productos
✅ Carrito
✅ Todo funcional
```

**3. Si ves errores:**
```
Probablemente falta algún archivo
Vuelve a subir la carpeta completa
```

---

## 🎁 Ventajas de Netlify

✅ **Gratis** - Sin costo  
✅ **Rápido** - Carga en segundos  
✅ **SSL HTTPS** - Seguro automáticamente  
✅ **Global** - Rápido en todo el mundo  
✅ **Dominio custom** - Puedes agregar tu propio dominio después  

---

## 📊 Comparación Opciones de Deploy

| Opción | Tiempo | Costo | Facilidad | Recomendación |
|--------|--------|-------|-----------|---------------|
| Netlify Drop | 2 min | Gratis | ⭐⭐⭐⭐⭐ | **Mejor** |
| GitHub Pages | 5 min | Gratis | ⭐⭐⭐⭐ | Buena |
| Vercel | 5 min | Gratis | ⭐⭐⭐⭐⭐ | Excelente |
| Servidor propio | 30 min | Pago | ⭐⭐⭐ | Avanzado |

---

## 🆘 Problemas Comunes

### ❌ "No se ve la tienda"
**Solución:**
1. Abre DevTools (F12)
2. Ve a Network
3. Busca errores de carga
4. Probablemente falta CSS o JS
5. Vuelve a subir archivos completos

### ❌ "Se ve pero no funciona el carrito"
**Solución:**
1. Verificar que tienda.js esté
2. Verificar que config-mercadopago.js esté
3. F12 → Console → buscar errores
4. Podría ser falta de PUBLIC_KEY

### ❌ "No puedo subir la carpeta"
**Solución:**
1. Intenta con Netlify.com (requiere registro)
2. O usa Vercel.com
3. O GitHub Pages (más pasos)

---

## 🎯 Siguiente Paso

**Cuando ya tengas tu URL (ej: https://rbr-tienda-123.netlify.app):**

1. Ingresa en Mercado Pago
2. Continúa con la configuración
3. Obtén tu PUBLIC_KEY
4. Actualiza config-mercadopago.js
5. ¡Tienda lista!

---

## 📍 Mi URL Será:

```
Escribe aquí: ____________________________

Ejemplo: https://rbr-store-colombia.netlify.app
```

---

## ⏱️ Timeline

```
5 min  → Subir a Netlify
2 min  → Obtener URL
3 min  → Ingresar en Mercado Pago
5 min  → Obtener PUBLIC_KEY
2 min  → Actualizar config
= 17 minutos total
```

---

## ✨ Beneficio

Cuando hagas esto:
- ✅ Tu tienda estará en internet
- ✅ Podrá ser visitada desde cualquier lugar
- ✅ Tendrá HTTPS seguro
- ✅ Mercado Pago la reconocerá como válida
- ✅ Podrás procesar pagos reales

---

## 🚀 ¡Listo!

**Una vez que hayas subido a Netlify y tengas tu URL:**

1. Dime la URL (ejemplo: https://rbr-tienda-123.netlify.app)
2. Actualizo todos los archivos con tu URL real
3. Continúas con Mercado Pago
4. ¡Tu tienda está en línea! 🎉

---

**Comienza ahora:** https://app.netlify.com/drop

Cuéntame cuando hayas subido y te daré el siguiente paso 🚀
