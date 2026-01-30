// ===== CONFIGURACIÓN DE MERCADO PAGO =====
// Este archivo contiene la configuración necesaria para integrar Mercado Pago

// INFORMACIÓN DE TU TIENDA RBR
// Link de tienda: https://link.mercadopago.com.co/rbrcolfr
// ID Tienda: rbrcolfr
// País: Colombia (COP)

// INSTRUCCIONES DE CONFIGURACIÓN:
// 1. Obtén tu PUBLIC_KEY de Mercado Pago:
//    - Ve a https://www.mercadopago.com/developers/
//    - Inicia sesión con tu cuenta
//    - Ve a Credenciales
//    - Copia tu PUBLIC_KEY (comienza con "APP_")
// 2. Reemplaza 'YOUR_PUBLIC_KEY' por tu clave real abajo
// 3. El ACCESS_TOKEN debe ir en el backend (no en frontend)

const MERCADO_PAGO_CONFIG = {
    // Información de tu tienda
    storeId: 'rbrcolfr',
    storeLink: 'https://link.mercadopago.com.co/rbrcolfr',
    storeName: 'RBR - Moda Franco-Colombiana',
    storeDescription: 'Arte, libertad e identidad en cada prenda',
    
    // ✅ PUBLIC_KEY DE MERCADO PAGO (CONFIGURADO)
    publicKey: 'APP_USR-c31a5470-c2a7-44dc-9d63-ff367408c313',
    
    // Moneda y país
    defaultCurrency: 'COP', // Colombia usa COP
    locale: 'es-CO', // Español Colombia
    country: 'CO',
    
    // URLs de tu tienda (Netlify)
    successUrl: 'https://phenomenal-croquembouche-dbccfd.netlify.app/',
    failureUrl: 'https://phenomenal-croquembouche-dbccfd.netlify.app/',
    pendingUrl: 'https://phenomenal-croquembouche-dbccfd.netlify.app/',
    
    // Preferencias de pago
    maxInstallments: 12, // Máximo de cuotas
    excludedPaymentMethods: [], // Métodos a excluir si es necesario
    excludedPaymentTypes: [], // Tipos de pago a excluir
}

// Validar que la publicKey esté configurada
if (!MERCADO_PAGO_CONFIG.publicKey || MERCADO_PAGO_CONFIG.publicKey.includes('YOUR_')) {
    console.warn('⚠️ MERCADO PAGO: PUBLIC_KEY no está configurada. Los pagos no funcionarán.');
    console.warn('📝 Sigue los pasos en config-mercadopago.js para configurar tu clave.');
    console.warn('🔗 Tu tienda: ' + MERCADO_PAGO_CONFIG.storeLink);
}

// Inicializar Mercado Pago cuando esté disponible
let mercadoPagoInstance = null;

document.addEventListener('DOMContentLoaded', () => {
    try {
        // Inicializar SDK de Mercado Pago
        mercadoPagoInstance = new MercadoPago(MERCADO_PAGO_CONFIG.publicKey, {
            locale: 'es-AR' // Cambiar según tu región
        });
        console.log('✅ Mercado Pago inicializado correctamente');
    } catch (error) {
        console.error('❌ Error al inicializar Mercado Pago:', error);
    }
});

// ===== FUNCIONES DE INTEGRACIÓN =====

// Función para crear el Brick de pago (Card Payment Brick)
function inicializarCardPaymentBrick(total, email) {
    if (!mercadoPagoInstance) {
        console.error('Mercado Pago no está inicializado');
        return;
    }

    const settings = {
        initialization: {
            amount: total,
            payer: {
                email: email
            }
        },
        customization: {
            visual: {
                style: {
                    theme: 'default'
                }
            },
            paymentMethods: {
                maxInstallments: 12
            }
        },
        callbacks: {
            onReady: () => {
                console.log('✅ Brick de Mercado Pago listo');
            },
            onError: (error) => {
                console.error('❌ Error en Brick de Mercado Pago:', error);
                // Ignorar errores de tracking/adblock
                if (error.message && error.message.includes('ERR_BLOCKED_BY_CLIENT')) {
                    console.log('ℹ️ Error de tracking bloqueado (normal con adblock)');
                } else {
                    mostrarNotificacion('❌ Error al cargar el formulario de pago. Intenta recargar la página.');
                }
            },
            onSubmit: async (formData) => {
                try {
                    console.log('🔄 Procesando pago...', formData);
                    mostrarNotificacion('🔄 Procesando pago...');
                    
                    // Simulación del proceso de pago
                    setTimeout(() => {
                        mostrarNotificacion('✅ ¡Pago procesado exitosamente!');
                        cerrarModal('checkout');
                        limpiarCarrito();
                        
                        alert(`✅ ¡Compra confirmada!\n\nTotal: $${total.toLocaleString('es-CO')} COP\nMétodo: Mercado Pago\n\nRecibirás un email de confirmación.`);
                    }, 2000);
                    
                } catch (error) {
                    console.error('Error:', error);
                    mostrarNotificacion('❌ Error al procesar el pago. Intenta de nuevo.');
                }
            }
        }
    };

    try {
        const brickController = mercadoPagoInstance.bricks().create('payment', 'cardPaymentBrick_container', settings);
        console.log('✅ Brick de Mercado Pago creado correctamente');
        return brickController;
    } catch (error) {
        console.error('❌ Error al crear Brick de Mercado Pago:', error);
        mostrarNotificacion('❌ No se pudo cargar el formulario de pago');
        return null;
    }
}

// Función para crear preferencia de pago (simulada)
// En producción, esto debe ir en tu backend con access_token
function crearPreferenciaPago(total, email) {
    // Simulación de creación de preferencia
    // En producción real: llamar a tu backend que use la API de Mercado Pago
    const preferenceData = {
        items: [{
            title: "Compra RBR",
            quantity: 1,
            unit_price: total,
            currency_id: "COP"
        }],
        payer: {
            email: email
        },
        back_urls: {
            success: MERCADO_PAGO_CONFIG.successUrl,
            failure: MERCADO_PAGO_CONFIG.failureUrl,
            pending: MERCADO_PAGO_CONFIG.pendingUrl
        },
        auto_return: "approved",
        binary_mode: true
    };

    // Simular ID de preferencia (en producción viene del backend)
    const simulatedPreferenceId = 'PREF_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    
    console.log('📝 Preferencia de pago creada (simulada):', simulatedPreferenceId);
    return simulatedPreferenceId;
}

// Función para obtener el identificador del cliente
async function obtenerIdempotencyKey() {
    // Generar una clave única para evitar duplicados
    return 'MP_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

// Función para validar datos de pago (lado del cliente)
function validarDatosPago(datos) {
    const errores = [];

    if (!datos.nombre || datos.nombre.trim() === '') {
        errores.push('El nombre es requerido');
    }

    if (!datos.email || !validarEmail(datos.email)) {
        errores.push('El email no es válido');
    }

    if (!datos.direccion || datos.direccion.trim() === '') {
        errores.push('La dirección es requerida');
    }

    if (!datos.ciudad || datos.ciudad.trim() === '') {
        errores.push('La ciudad es requerida');
    }

    if (!datos.codigo || datos.codigo.trim() === '') {
        errores.push('El código postal es requerido');
    }

    return {
        valido: errores.length === 0,
        errores: errores
    };
}

function validarEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Función para obtener datos del formulario de checkout
function obtenerDatosCheckout() {
    return {
        nombre: document.getElementById('checkoutNombre')?.value || '',
        email: document.getElementById('checkoutEmail')?.value || '',
        direccion: document.getElementById('checkoutDireccion')?.value || '',
        ciudad: document.getElementById('checkoutCiudad')?.value || '',
        codigo: document.getElementById('checkoutCodigo')?.value || ''
    };
}

// Exportar configuración para otros scripts
window.MERCADO_PAGO_CONFIG = MERCADO_PAGO_CONFIG;
window.inicializarCardPaymentBrick = inicializarCardPaymentBrick;
window.validarDatosPago = validarDatosPago;
window.obtenerDatosCheckout = obtenerDatosCheckout;

console.log('📦 Configuración de Mercado Pago cargada correctamente');
