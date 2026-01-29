# 🚀 RBR - Inicio Rápido Mercado Pago

## Tu Información de Tienda

```
Nombre: RBR - Moda Franco-Colombiana
Link: https://link.mercadopago.com.co/rbrcolfr
ID: rbrcolfr
País: Colombia
Moneda: COP (Pesos Colombianos)
```

---

## ✅ Checklist de Configuración (30 minutos)

### Paso 1: Obtener Credenciales (5 min)
- [ ] Ir a https://www.mercadopago.com/developers/
- [ ] Login con tu cuenta de Mercado Pago
- [ ] Ir a **Configuración** → **Credenciales**
- [ ] Modo **SANDBOX** (pruebas primero)
- [ ] Copiar **PUBLIC_KEY** (comienza con `APP_USR`)
- [ ] Copiar **ACCESS_TOKEN** (para backend)
- [ ] Guardar en lugar seguro

### Paso 2: Configurar Frontend (5 min)
- [ ] Abrir `config-mercadopago.js`
- [ ] Reemplazar PUBLIC_KEY con tu clave
- [ ] Verificar que Currency = COP ✅
- [ ] Verificar que Locale = es-CO ✅
- [ ] Guardar archivo

### Paso 3: Probar en Navegador (5 min)
- [ ] Abrir `tienda.html` en navegador
- [ ] Agregar un producto al carrito
- [ ] Click en carrito → Comprar
- [ ] Seleccionar "Mercado Pago"
- [ ] Ver que aparece interfaz de pago
- [ ] ✅ Frontend está listo

### Paso 4: Crear Backend (15 min)
- [ ] Crear carpeta `rbr-backend`
- [ ] Crear `package.json`
- [ ] Crear `.env`
- [ ] Crear `server.js`
- [ ] Instalar dependencias: `npm install express mercadopago dotenv`
- [ ] Copiar código de `MERCADO_PAGO_GUIDE.md`
- [ ] Ejecutar: `node server.js`
- [ ] ✅ Backend está corriendo

---

## 🔧 Comando Rápido para Backend

### 1. Crear estructura
```bash
mkdir rbr-backend
cd rbr-backend
npm init -y
npm install express mercadopago dotenv cors uuid
```

### 2. Crear .env
```bash
echo "MERCADO_PAGO_ACCESS_TOKEN=tu-token-aqui" > .env
echo "MERCADO_PAGO_PUBLIC_KEY=APP_USR-tu-clave-aqui" >> .env
echo "STORE_ID=rbrcolfr" >> .env
echo "CURRENCY=COP" >> .env
echo "PORT=3000" >> .env
```

### 3. Crear server.js (copiar de la guía)
Seguir pasos en: `MERCADO_PAGO_GUIDE.md` sección "Paso 3"

### 4. Ejecutar
```bash
npm start
# o
node server.js
```

---

## 💳 Tarjetas de Prueba (Sandbox)

**Todas con fecha 12/25 y CVV 123**

| Banco | Número | Resultado |
|-------|--------|-----------|
| VISA | 4111 1111 1111 1111 | ✅ Aprobada |
| Mastercard | 5555 5555 5555 4444 | ✅ Aprobada |
| Amex | 3782 822463 10005 | ✅ Aprobada |
| VISA (Rechazo) | 4000 0000 0000 0002 | ❌ Rechazada |

**Nombres de prueba:**
- `APRO` = Pago aprobado
- `OTHE` = Pago rechazado
- `CALL` = Llamada requerida

**Ejemplo completo:**
```
Nombre: APRO
Apellido: OK
Email: test@example.com
Documento: 12345678
Tarjeta: 4111 1111 1111 1111
Vencimiento: 12/25
CVV: 123
```

---

## 🎯 Flujo de Pago Completo

```
👤 Cliente en RBR
    ↓
🛒 Agrega productos al carrito
    ↓
💳 Click en "Comprar"
    ↓
📋 Llena datos de envío
    ↓
🔘 Selecciona "Mercado Pago"
    ↓
💻 Aparece formulario de pago
    ↓
💰 Ingresa datos de tarjeta
    ↓
🔒 Mercado Pago procesa pago
    ↓
🎉 Confirmación de pago
    ↓
📧 Email de confirmación
    ↓
✅ Orden guardada en base de datos
```

---

## 🚨 Problemas Comunes

### ❌ "Invalid PUBLIC_KEY"
**Solución:**
1. Verificar que PUBLIC_KEY comience con `APP_USR`
2. No debe tener espacios al inicio/final
3. Verificar que no esté en modo comentario

### ❌ "No aparece formulario de pago"
**Solución:**
1. Abrir Developer Tools (F12)
2. Revisar consola por errores
3. Verificar que Mercado Pago SDK esté cargado
4. Verificar en Network que SDK se cargó

### ❌ "Error 403 en backend"
**Solución:**
1. Verificar que ACCESS_TOKEN sea correcto
2. ACCESS_TOKEN no debe tener espacios
3. Verificar que esté en variable de entorno .env
4. Reiniciar servidor con nueva credencial

### ❌ "CORS error"
**Solución:**
1. Verificar que frontend URL esté en whitelist
2. Backend debe permitir CORS del frontend
3. Usar `npm install cors`
4. Agregar middleware CORS en Express

---

## 📱 URLs Importantes

| Página | URL |
|--------|-----|
| **Tu Tienda** | https://link.mercadopago.com.co/rbrcolfr |
| **Dashboard** | https://www.mercadopago.com/home |
| **Credenciales** | https://www.mercadopago.com/settlement/applications |
| **Documentación** | https://www.mercadopago.com/developers/es |
| **API Reference** | https://www.mercadopago.com/developers/es/reference |

---

## 📞 Soporte Mercado Pago

Para Colombia:
- **Teléfono:** +57 (1) 652 9000
- **Email:** developers@mercadopago.com
- **Chat:** https://www.mercadopago.com/developers/
- **Horario:** Lunes a Viernes, 8 AM - 6 PM

---

## 🎓 Pasos Siguientes

### Si todo funciona (Sandbox OK):
1. Obtener credenciales de **PRODUCCIÓN**
2. Cambiar PUBLIC_KEY y ACCESS_TOKEN
3. Cambiar NODE_ENV a 'production'
4. Configurar HTTPS obligatorio
5. Deploy en servidor real
6. Hacer prueba con monto pequeño real
7. ¡Listo para recibir dinero real!

### Si quieres mejorar:
- [ ] Agregar emails de confirmación
- [ ] Crear base de datos para órdenes
- [ ] Panel de admin para ver transacciones
- [ ] Sistema de devoluciones
- [ ] Reportes de ventas
- [ ] Integración con CMS

---

## ✨ Tips Importantes

✅ **Prueba siempre en Sandbox primero**  
✅ **Usa ACCESS_TOKEN solo en backend, NUNCA en frontend**  
✅ **HTTPS es obligatorio en producción**  
✅ **Guarda backup de credenciales**  
✅ **Monitorea todas las transacciones**  
✅ **Responde rápido a problemas de clientes**  

---

## 📋 Archivos Necesarios

Tu proyecto debe tener:

```
RBR/
├── tienda.html ✅
├── tienda.css ✅
├── tienda.js ✅
├── config-mercadopago.js ✅ (ya configurado)
├── MERCADO_PAGO_GUIDE.md (referencia)
├── MERCADO_PAGO_RESUMEN.md (referencia)
└── rbr-backend/ (crear)
    ├── server.js
    ├── package.json
    ├── .env
    ├── routes/payments.js
    └── controllers/paymentController.js
```

---

## 🎯 Meta Final

**Objetivo:** Procesar pagos reales en RBR en menos de 1 hora

**Tiempo Estimado:**
- Frontend: ✅ 5 minutos (ya hecho)
- Obtener credenciales: 5 minutos
- Backend: 20-30 minutos
- Pruebas: 10 minutos
- **Total: 45 minutos**

---

**Tu tienda está lista. Solo falta el backend. ¡Adelante!** 🚀

Última actualización: 29 Enero 2026  
Estado: 🟢 Listo para implementar
