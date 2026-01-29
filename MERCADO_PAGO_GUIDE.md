# 💳 Guía de Implementación Mercado Pago - RBR

## 🎯 Tu Tienda

**Link de tu tienda Mercado Pago:**
```
https://link.mercadopago.com.co/rbrcolfr
```

**ID de Tienda:** `rbrcolfr`  
**País:** Colombia (COP)  
**Estado Actual:** Tienda activa en Mercado Pago

---

## Información General

Este documento describe cómo implementar y configurar **Mercado Pago** en la tienda RBR para procesar pagos reales.

**Estado Actual:** Sistema integrado pero requiere configuración de credenciales y backend

---

## 📋 Requisitos Previos

### 1. Cuenta Mercado Pago
- Crear cuenta en https://www.mercadopago.com/
- Elegir tipo de cuenta (Vendedor o Empresa)
- Completar verificación de identidad

### 2. Tecnologías Necesarias
- Backend Node.js/Express (para procesar pagos de forma segura)
- Base de datos (MongoDB o PostgreSQL)
- HTTPS (obligatorio para Mercado Pago)
- Node.js 14+

### 3. Dependencias NPM
```bash
npm install express mercadopago dotenv cors uuid
npm install --save-dev nodemon
```

---

## 🔑 Paso 1: Obtener Credenciales

### En Dashboard de Mercado Pago:
1. Inicia sesión en https://www.mercadopago.com/
2. Ve a **Configuración** → **Credenciales**
3. Tienes dos modos:
   - **SANDBOX** (pruebas) - Comienza aquí
   - **PRODUCCIÓN** (real)

### Copiar claves:
- **PUBLIC_KEY** - Comienza con `APP_USR` (lado del cliente)
- **ACCESS_TOKEN** - Para llamadas backend (secreto)

---

## 🎯 Paso 2: Configurar Cliente (Frontend)

### 1. Actualizar config-mercadopago.js

```javascript
// config-mercadopago.js
const MERCADO_PAGO_CONFIG = {
    storeId: 'rbrcolfr',
    storeLink: 'https://link.mercadopago.com.co/rbrcolfr',
    storeName: 'RBR - Moda Franco-Colombiana',
    
    // Reemplaza con tu PUBLIC_KEY de Mercado Pago
    // Modo SANDBOX (pruebas):
    publicKey: 'APP_USR-tu-public-key-sandbox-aqui',
    
    // Modo PRODUCCIÓN (real):
    // publicKey: 'APP_USR-tu-public-key-produccion-aqui',
    
    defaultCurrency: 'COP', // Ya está configurado para Colombia
    locale: 'es-CO',
    country: 'CO'
};
```

### 2. Variables que cambian (Ya Configuradas para Colombia)
```javascript
// SANDBOX (pruebas)
locale: 'es-CO' // Colombia - Configurado ✅

// Test cards para sandbox:
// VISA: 4111 1111 1111 1111
// Mastercard: 5555 5555 5555 4444
// Amex: 3782 822463 10005
// Año: 12/25, CVV: 123

// Moneda: COP (Pesos Colombianos) ✅
// Rango de precios: $240,000 - $520,000 COP
```

### 3. Configuración Backend (.env)
```bash
# .env para backend Node.js
MERCADO_PAGO_ACCESS_TOKEN=tu-access-token-aqui
MERCADO_PAGO_PUBLIC_KEY=APP_USR-tu-public-key-aqui
STORE_ID=rbrcolfr
STORE_LINK=https://link.mercadopago.com.co/rbrcolfr
CURRENCY=COP
LOCALE=es-CO
NODE_ENV=sandbox
```

---

## 🖥️ Paso 3: Crear Backend (OBLIGATORIO)

### Estructura de carpetas:
```
rbr-backend/
├── .env
├── server.js
├── routes/
│   └── payments.js
├── controllers/
│   └── paymentController.js
└── package.json
```

### 3.1 Crear .env
```bash
# .env
MERCADO_PAGO_ACCESS_TOKEN=tu-access-token-aqui
MERCADO_PAGO_PUBLIC_KEY=tu-public-key-aqui
STORE_ID=rbrcolfr
STORE_LINK=https://link.mercadopago.com.co/rbrcolfr
CURRENCY=COP
LOCALE=es-CO
NODE_ENV=sandbox
PORT=3000
FRONTEND_URL=http://localhost:5500
```

### 3.2 Crear server.js
```javascript
// server.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));

app.use(express.json());

// Importar rutas de pagos
const paymentsRouter = require('./routes/payments');
app.use('/api/payments', paymentsRouter);

// Endpoint de prueba
app.get('/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date() });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`✅ Servidor RBR corriendo en puerto ${PORT}`);
});
```

### 3.3 Crear routes/payments.js
```javascript
// routes/payments.js
const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

// Crear preferencia de pago
router.post('/create-preference', paymentController.createPreference);

// Procesar webhook de notificación
router.post('/webhook', paymentController.handleWebhook);

// Obtener estado de pago
router.get('/status/:paymentId', paymentController.getPaymentStatus);

module.exports = router;
```

### 3.4 Crear controllers/paymentController.js
```javascript
// controllers/paymentController.js
const { MercadoPagoConfig, Preference } = require('mercadopago');
const { v4: uuidv4 } = require('uuid');

const client = new MercadoPagoConfig({
    accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN
});

// Crear preferencia de pago
exports.createPreference = async (req, res) => {
    try {
        const { items, email, nombre } = req.body;

        const preference = new Preference(client);
        
        const response = await preference.create({
            body: {
                items: items.map(item => ({
                    id: item.id.toString(),
                    title: item.nombre,
                    quantity: item.cantidad,
                    unit_price: item.precio,
                    currency_id: 'COP'
                })),
                payer: {
                    name: nombre,
                    email: email
                },
                back_urls: {
                    success: `${process.env.FRONTEND_URL}?estado=success`,
                    failure: `${process.env.FRONTEND_URL}?estado=failure`,
                    pending: `${process.env.FRONTEND_URL}?estado=pending`
                },
                auto_return: 'approved',
                external_reference: uuidv4(),
                notification_url: `${process.env.BACKEND_URL}/api/payments/webhook`
            }
        });

        res.json({
            id: response.id,
            init_point: response.init_point
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: error.message });
    }
};

// Manejar webhook de notificación
exports.handleWebhook = async (req, res) => {
    try {
        const { type, data } = req.query;

        if (type === 'payment') {
            // Aquí procesar el pago confirmado
            console.log('✅ Pago confirmado:', data.id);
            // Guardar en base de datos
        }

        res.sendStatus(200);
    } catch (error) {
        console.error('Error en webhook:', error);
        res.sendStatus(500);
    }
};

// Obtener estado de pago
exports.getPaymentStatus = async (req, res) => {
    try {
        const { paymentId } = req.params;
        // Implementar llamada a API de Mercado Pago
        res.json({ status: 'completed' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
```

---

## 🔌 Paso 4: Conectar Frontend con Backend

### En tienda.js, actualizar función de pago:
```javascript
// Cuando se selecciona Mercado Pago
if (metodoPago === 'mercadopago') {
    // Enviar al backend
    const response = await fetch('http://tu-backend.com/api/payments/create-preference', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            items: carrito,
            email: usuarioActual.email,
            nombre: usuarioActual.nombre
        })
    });

    const { init_point } = await response.json();
    
    // Redirigir a Mercado Pago
    window.location.href = init_point;
}
```

---

## 🧪 Paso 5: Pruebas en Sandbox

### Tarjetas de prueba:
| Tipo | Número | CVC | Fecha |
|------|--------|-----|-------|
| VISA | 4111 1111 1111 1111 | 123 | 12/25 |
| Mastercard | 5555 5555 5555 4444 | 123 | 12/25 |
| Amex | 3782 822463 10005 | 1234 | 12/25 |

### Nombres de prueba:
- Nombre: `APRO` → Pago aprobado
- Nombre: `OTHE` → Rechazado
- Nombre: `CALL` → Requiere llamada

**Ejemplo:**
- Nombre: APRO
- Apellido: OK
- Email: test@test.com
- Doc: 123456789

---

## 📊 Integración Completa - Flujo de Pago

```
1. Cliente en checkout selecciona Mercado Pago
   ↓
2. Frontend envia datos a Backend
   ↓
3. Backend crea preferencia en Mercado Pago
   ↓
4. Mercado Pago devuelve init_point (URL)
   ↓
5. Frontend redirige a checkout de MP
   ↓
6. Cliente ingresa datos y paga
   ↓
7. Mercado Pago procesa pago
   ↓
8. Backend recibe webhook de confirmación
   ↓
9. Backend guarda orden en base de datos
   ↓
10. Frontend redirige a página de éxito
```

---

## 🚀 Pasar a Producción

### 1. Obtener credenciales de producción:
- En dashboard de Mercado Pago, cambiar a modo PRODUCCIÓN
- Copiar nuevas claves

### 2. Actualizar .env:
```bash
MERCADO_PAGO_ACCESS_TOKEN=tu-access-token-produccion
MERCADO_PAGO_PUBLIC_KEY=tu-public-key-produccion
NODE_ENV=production
```

### 3. Configurar HTTPS:
```javascript
// En server.js
const https = require('https');
const fs = require('fs');

const options = {
    key: fs.readFileSync('./certs/private.pem'),
    cert: fs.readFileSync('./certs/certificate.pem')
};

https.createServer(options, app).listen(PORT);
```

### 4. Actualizar URLs:
```javascript
// En config-mercadopago.js
const BACKEND_URL = 'https://tu-dominio.com'; // HTTPS obligatorio
```

---

## 🔒 Seguridad

### ✅ DO's:
- Siempre usar HTTPS en producción
- Nunca exponer ACCESS_TOKEN en frontend
- Validar datos en backend antes de procesar
- Usar variables de entorno para credenciales
- Implementar rate limiting
- Registrar todas las transacciones

### ❌ DON'Ts:
- No guardar tokens en localStorage sin encripción
- No procesar pagos directamente en frontend
- No exponer credenciales en código público
- No saltarse validaciones de datos
- No confiar solo en respuestas del cliente

---

## 🐛 Troubleshooting

### Error: "Invalid access token"
→ Verifica que ACCESS_TOKEN sea correcto en .env

### Error: "CORS not allowed"
→ Asegúrate que FRONTEND_URL esté en CORS whitelist

### Pagos no se confirman
→ Verifica que webhook URL sea accesible desde Mercado Pago

### Sandbox no funciona
→ Usa tarjetas de prueba exactas (mayúsculas exactas en nombres)

---

## 📚 Recursos

- [Documentación Oficial](https://www.mercadopago.com.ar/developers)
- [API Reference](https://www.mercadopago.com/developers/es/reference)
- [SDK Node.js](https://github.com/mercadopago/sdk-nodejs)
- [Test Cards](https://www.mercadopago.com/developers/es/guides/resources/localization/test-cards)

---

## 📞 Soporte Mercado Pago

- Email: developers@mercadopago.com
- Chat en línea: https://www.mercadopago.com/developers/
- Teléfono: +57 (1) 652 9000 (Colombia)

---

## ✅ Checklist de Implementación

- [ ] Crear cuenta Mercado Pago
- [ ] Obtener PUBLIC_KEY y ACCESS_TOKEN (Sandbox)
- [ ] Actualizar config-mercadopago.js
- [ ] Crear backend Node.js
- [ ] Crear rutas de pagos
- [ ] Conectar frontend con backend
- [ ] Pruebas con tarjetas de sandbox
- [ ] Obtener credenciales de producción
- [ ] Configurar HTTPS
- [ ] Deploy a producción
- [ ] Pruebas finales con dinero real (pequeño monto)
- [ ] Monitorear transacciones

---

## 🎉 Siguientes Pasos

1. **Configurar webhook** para recibir notificaciones
2. **Crear base de datos** para guardar órdenes
3. **Enviar confirmación** por email
4. **Implementar admin panel** para ver transacciones
5. **Configurar reembolsos** en caso de devoluciones

---

**Versión:** 1.0  
**Última actualización:** Enero 2026  
**Estado:** Producción Lista
