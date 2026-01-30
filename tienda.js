// ===== SISTEMA DE IDIOMAS =====
const translations = {
    es: {
        nav: {
            inicio: "Inicio",
            colecciones: "Colecciones",
            catalogo: "Catálogo",
            about: "Sobre RBR",
            contacto: "Contacto",
            miCuenta: "Mi Cuenta"
        },
        hero: {
            title: "RBR",
            subtitle: "La fusión de la elegancia parisina<br>con la fuerza artística colombiana",
            description: "Cada prenda cuenta una historia. Somos arte vestible.",
            cta: "Descubre las Colecciones"
        },
        collections: {
            heading: "Dos Mundos, Una Visión",
            description: "Explora nuestras dos líneas de colección que representan la dualidad creativa de RBR",
            minimalista: "Línea Minimalista",
            minimalistaDesc: "Cortes precisos, colores neutrales, formas puras. La elegancia de la simplicidad inspirada en París.",
            maximalista: "Línea Maximalista",
            maximalistaDesc: "Colores vibrantes, patrones atrevidos, texturas ricas. La libertad artística de Bogotá desbordada.",
            verColeccion: "Ver Colección",
            minimalistaOverlay: "Minimalista",
            maximalistaOverlay: "Maximalista",
            eleganciaFrancesa: "Elegancia Francesa",
            fuerzaColombiana: "Fuerza Colombiana"
        },
        catalog: {
            heading: "Colección Actual",
            description: "Piezas cuidadosamente seleccionadas, diseño experimental y ediciones limitadas",
            filtroLinea: "Filtrar por línea:",
            todas: "Todas",
            precioMaximo: "Precio máximo:",
            noProducts: "No se encontraron productos",
            anadirCarrito: "Añadir al Carrito"
        },
        products: {
            1: { nombre: "Camiseta Blanca Premium", descripcion: "Blanca pura, corte preciso, tejido de algodón premium. Elegancia francesa simplificada." },
            2: { nombre: "Camiseta Negra Slim", descripcion: "Silueta impecable, color absoluto. El complemento perfecto para cualquier composición." },
            3: { nombre: "Jeans Indigo Artesanal", descripcion: "Teñido artesanalmente con técnicas tradicionales colombianas. Cada par es una obra única." },
            4: { nombre: "Chaqueta Experimental", descripcion: "Diseño audaz con detalles que desafían convenciones. Libertad total de expresión." },
            5: { nombre: "Camisa Beige Neutral", descripcion: "Geometría perfecta, paleta neutral. Minimalismo en su forma más pura." },
            6: { nombre: "Prenda Multicolor Vibrante", descripcion: "Colores explosivos que celebran la vivacidad colombiana. Hecha para ser vista." },
            7: { nombre: "Pantalón Gris Estructurado", descripcion: "Líneas limpias, drape perfecto. Un clásico francés reimaginado." },
            8: { nombre: "Sudadera Texturizada Única", descripcion: "Texturas experimentales, comfort bohemio. Diseño que cuenta historias." }
        },
        about: {
            heading: "Sobre RBR",
            intro: "RBR es más que una marca de moda. Es un movimiento artístico que celebra la fusión de dos culturas: la elegancia sofisticada de París y la fuerza creativa de Bogotá.",
            arteVestible: "Arte Vestible",
            arteVestibleDesc: "Cada prenda es una obra de arte diseñada para que el cliente sea el lienzo de expresión.",
            fusionCultural: "Fusión Cultural",
            fusionCulturalDesc: "Combinamos la precisión francesa con la vibración colombiana en cada detalle.",
            lujoAccesible: "Lujo Accesible",
            lujoAccesibleDesc: "Alta calidad, diseño experimental y creatividad al alcance de quien busca autenticidad.",
            libertadExpresion: "Libertad de Expresión",
            libertadExpresionDesc: "Creemos que la moda es libertad personal. Tu estilo, tu historia, tu identidad."
        },
        future: {
            heading: "Próximamente",
            lineaFemenina: "Línea Femenina",
            lineaFemeninaDesc: "La perspectiva femenina de la fusión franco-colombiana.",
            accesorios: "Accesorios",
            accesoriosDesc: "Complementos que completan la experiencia RBR.",
            marroquineria: "Marroquinería",
            marroquineriaDesc: "Cuero artesanal con historias culturales.",
            perfumeria: "Perfumería",
            perfumeriaDesc: "Aromas que capturan la esencia de RBR."
        },
        footer: {
            desc: "Bogotá × París. Arte, cultura y moda como expresión.",
            navegacion: "Navegación",
            informacion: "Información",
            contacto: "Contacto",
            politica: "Política de Privacidad",
            terminos: "Términos de Uso",
            envios: "Envíos",
            devoluciones: "Devoluciones",
            email: "Email: hola@rbr.style",
            instagram: "Instagram: @rbr.style",
            ubicacion: "Bogotá, Colombia",
            copyright: "© 2026 RBR. Todos los derechos reservados.",
            madewith: "Hecho con ❤️ entre Bogotá y París"
        },
        checkout: {
            title: "Proceso de Pago",
            resumen: "Resumen de Compra",
            total: "Total:",
            datosEnvio: "Datos de Envío",
            metodoPago: "Método de Pago",
            detallesPago: "Detalles de Pago",
            confirmar: "Confirmar Compra",
            mercadopago: "Mercado Pago",
            paypal: "PayPal",
            transferencia: "Transferencia Bancaria",
            tarjetaCredito: "Tarjeta de Crédito/Débito"
        }
    },
    en: {
        nav: {
            inicio: "Home",
            colecciones: "Collections",
            catalogo: "Catalog",
            about: "About RBR",
            contacto: "Contact",
            miCuenta: "My Account"
        },
        hero: {
            title: "RBR",
            subtitle: "The fusion of Parisian elegance<br>with Colombian artistic force",
            description: "Every garment tells a story. We are wearable art.",
            cta: "Discover Collections"
        },
        collections: {
            heading: "Two Worlds, One Vision",
            description: "Explore our two collection lines that represent RBR's creative duality",
            minimalista: "Minimalist Line",
            minimalistaDesc: "Precise cuts, neutral colors, pure forms. The elegance of simplicity inspired by Paris.",
            maximalista: "Maximalist Line",
            maximalistaDesc: "Vibrant colors, bold patterns, rich textures. The artistic freedom of Bogotá overflowing.",
            verColeccion: "View Collection",
            minimalistaOverlay: "Minimalist",
            maximalistaOverlay: "Maximalist",
            eleganciaFrancesa: "French Elegance",
            fuerzaColombiana: "Colombian Force"
        },
        catalog: {
            heading: "Current Collection",
            description: "Carefully selected pieces, experimental design and limited editions",
            filtroLinea: "Filter by line:",
            todas: "All",
            precioMaximo: "Max price:",
            noProducts: "No products found",
            anadirCarrito: "Add to Cart"
        },
        products: {
            1: { nombre: "Premium White T-Shirt", descripcion: "Pure white, precise cut, premium cotton fabric. French elegance simplified." },
            2: { nombre: "Black Slim T-Shirt", descripcion: "Impeccable silhouette, absolute color. The perfect complement to any composition." },
            3: { nombre: "Artisanal Indigo Jeans", descripcion: "Hand-dyed with traditional Colombian techniques. Each pair is a unique artwork." },
            4: { nombre: "Experimental Jacket", descripcion: "Bold design with convention-defying details. Total freedom of expression." },
            5: { nombre: "Neutral Beige Shirt", descripcion: "Perfect geometry, neutral palette. Minimalism in its purest form." },
            6: { nombre: "Vibrant Multicolor Piece", descripcion: "Explosive colors celebrating Colombian vibrancy. Made to be seen." },
            7: { nombre: "Structured Gray Pants", descripcion: "Clean lines, perfect drape. A French classic reimagined." },
            8: { nombre: "Unique Textured Sweatshirt", descripcion: "Experimental textures, bohemian comfort. Design that tells stories." }
        },
        about: {
            heading: "About RBR",
            intro: "RBR is more than a fashion brand. It's an artistic movement celebrating the fusion of two cultures: Paris's sophisticated elegance and Bogotá's creative force.",
            arteVestible: "Wearable Art",
            arteVestibleDesc: "Each garment is a work of art designed for the customer to be the canvas of expression.",
            fusionCultural: "Cultural Fusion",
            fusionCulturalDesc: "We combine French precision with Colombian vibration in every detail.",
            lujoAccesible: "Accessible Luxury",
            lujoAccesibleDesc: "High quality, experimental design and creativity within reach of those seeking authenticity.",
            libertadExpresion: "Freedom of Expression",
            libertadExpresionDesc: "We believe fashion is personal freedom. Your style, your story, your identity."
        },
        future: {
            heading: "Coming Soon",
            lineaFemenina: "Women's Line",
            lineaFemeninaDesc: "The feminine perspective of Franco-Colombian fusion.",
            accesorios: "Accessories",
            accesoriosDesc: "Complements that complete the RBR experience.",
            marroquineria: "Leather Goods",
            marroquineriaDesc: "Artisanal leather with cultural stories.",
            perfumeria: "Perfumery",
            perfumeriaDesc: "Fragrances capturing the essence of RBR."
        },
        footer: {
            desc: "Bogotá × Paris. Art, culture and fashion as expression.",
            navegacion: "Navigation",
            informacion: "Information",
            contacto: "Contact",
            politica: "Privacy Policy",
            terminos: "Terms of Use",
            envios: "Shipping",
            devoluciones: "Returns",
            email: "Email: hola@rbr.style",
            instagram: "Instagram: @rbr.style",
            ubicacion: "Bogotá, Colombia",
            copyright: "© 2026 RBR. All rights reserved.",
            madewith: "Made with ❤️ between Bogotá and Paris"
        },
        checkout: {
            title: "Payment Process",
            resumen: "Order Summary",
            total: "Total:",
            datosEnvio: "Shipping Address",
            metodoPago: "Payment Method",
            detallesPago: "Payment Details",
            confirmar: "Confirm Purchase",
            mercadopago: "Mercado Pago",
            paypal: "PayPal",
            transferencia: "Bank Transfer",
            tarjetaCredito: "Credit/Debit Card"
        }
    },
    fr: {
        nav: {
            inicio: "Accueil",
            colecciones: "Collections",
            catalogo: "Catalogue",
            about: "À Propos RBR",
            contacto: "Contact",
            miCuenta: "Mon Compte"
        },
        hero: {
            title: "RBR",
            subtitle: "La fusion de l'élégance parisienne<br>avec la force artistique colombienne",
            description: "Chaque vêtement raconte une histoire. Nous sommes l'art vestimentaire.",
            cta: "Découvrez les Collections"
        },
        collections: {
            heading: "Deux Mondes, Une Vision",
            description: "Explorez nos deux lignes de collection qui représentent la dualité créative de RBR",
            minimalista: "Ligne Minimaliste",
            minimalistaDesc: "Coupes précises, couleurs neutres, formes pures. L'élégance de la simplicité inspirée par Paris.",
            maximalista: "Ligne Maximaliste",
            maximalistaDesc: "Couleurs vibrantes, motifs audacieux, textures riches. La liberté artistique de Bogotá débordante.",
            verColeccion: "Voir la Collection",
            minimalistaOverlay: "Minimaliste",
            maximalistaOverlay: "Maximaliste",
            eleganciaFrancesa: "Élégance Française",
            fuerzaColombiana: "Force Colombienne"
        },
        catalog: {
            heading: "Collection Actuelle",
            description: "Pièces soigneusement sélectionnées, design expérimental et éditions limitées",
            filtroLinea: "Filtrer par ligne:",
            todas: "Tous",
            precioMaximo: "Prix maximum:",
            noProducts: "Aucun produit trouvé",
            anadirCarrito: "Ajouter au Panier"
        },
        products: {
            1: { nombre: "T-Shirt Blanc Premium", descripcion: "Blanc pur, coupe précise, tissu coton premium. L'élégance française simplifiée." },
            2: { nombre: "T-Shirt Noir Slim", descripcion: "Silhouette impeccable, couleur absolue. Le complément parfait de toute composition." },
            3: { nombre: "Jean Indigo Artisanal", descripcion: "Teint à la main avec des techniques colombiennes traditionnelles. Chaque paire est une œuvre unique." },
            4: { nombre: "Veste Expérimentale", descripcion: "Design audacieux avec des détails défiant les conventions. Liberté totale d'expression." },
            5: { nombre: "Chemise Beige Neutre", descripcion: "Géométrie parfaite, palette neutre. Le minimalisme sous sa forme la plus pure." },
            6: { nombre: "Pièce Multicolore Vibrante", descripcion: "Couleurs explosives célébrant la vivacité colombienne. Faite pour être vue." },
            7: { nombre: "Pantalon Gris Structuré", descripcion: "Lignes épurées, drapé parfait. Un classique français réimaginé." },
            8: { nombre: "Sweatshirt Texturisé Unique", descripcion: "Textures expérimentales, confort bohème. Un design qui raconte des histoires." }
        },
        about: {
            heading: "À Propos RBR",
            intro: "RBR est plus qu'une marque de mode. C'est un mouvement artistique célébrant la fusion de deux cultures : l'élégance sophistiquée de Paris et la force créative de Bogotá.",
            arteVestible: "Art Vestimentaire",
            arteVestibleDesc: "Chaque vêtement est une œuvre d'art conçue pour que le client soit le canevas d'expression.",
            fusionCultural: "Fusion Culturelle",
            fusionCulturalDesc: "Nous combinons la précision française avec la vibration colombienne dans chaque détail.",
            lujoAccesible: "Luxe Accessible",
            lujoAccesibleDesc: "Haute qualité, design expérimental et créativité à la portée de ceux qui recherchent l'authenticité.",
            libertadExpresion: "Liberté d'Expression",
            libertadExpresionDesc: "Nous croyons que la mode est liberté personnelle. Votre style, votre histoire, votre identité."
        },
        future: {
            heading: "À Venir",
            lineaFemenina: "Ligne Féminine",
            lineaFemeninaDesc: "La perspective féminine de la fusion franco-colombienne.",
            accesorios: "Accessoires",
            accesoriosDesc: "Compléments qui complètent l'expérience RBR.",
            marroquineria: "Maroquinerie",
            marroquineriaDesc: "Cuir artisanal avec des histoires culturelles.",
            perfumeria: "Parfumerie",
            perfumeriaDesc: "Parfums capturant l'essence de RBR."
        },
        footer: {
            desc: "Bogotá × Paris. L'art, la culture et la mode comme expression.",
            navegacion: "Navigation",
            informacion: "Information",
            contacto: "Contact",
            politica: "Politique de Confidentialité",
            terminos: "Conditions d'Utilisation",
            envios: "Expédition",
            devoluciones: "Retours",
            email: "Email: hola@rbr.style",
            instagram: "Instagram: @rbr.style",
            ubicacion: "Bogotá, Colombie",
            copyright: "© 2026 RBR. Tous droits réservés.",
            madewith: "Réalisé avec ❤️ entre Bogotá et Paris"
        },
        checkout: {
            title: "Paiement",
            resumen: "Résumé de la Commande",
            total: "Total:",
            datosEnvio: "Adresse de Livraison",
            metodoPago: "Méthode de Paiement",
            detallesPago: "Détails du Paiement",
            confirmar: "Confirmer la Commande",
            mercadopago: "Mercado Pago",
            paypal: "PayPal",
            transferencia: "Virement Bancaire",
            tarjetaCredito: "Carte de Crédit/Débit"
        }
    }
};

// Variables globales de idioma
let currentLanguage = localStorage.getItem('rbr_language') || 'es';

// Función para cambiar idioma
function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('rbr_language', lang);
    updatePageContent();
    updateLanguageSelector();
    closeLanguageMenu();
}

// Función para actualizar el contenido de la página
function updatePageContent() {
    const t = translations[currentLanguage];
    
    // Actualizar navegación
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const keys = key.split('.');
        let value = translations[currentLanguage];
        
        keys.forEach(k => {
            value = value[k];
        });
        
        if (el.tagName === 'INPUT' && el.type === 'placeholder') {
            el.placeholder = value;
        } else {
            el.textContent = value;
        }
    });

    // Actualizar elementos HTML específicos
    if (t) {
        // Actualizar atributos de HTML directamente
        document.querySelectorAll('[data-i18n-html]').forEach(el => {
            const key = el.getAttribute('data-i18n-html');
            const keys = key.split('.');
            let value = translations[currentLanguage];
            
            keys.forEach(k => {
                value = value[k];
            });
            
            el.innerHTML = value;
        });
    }
}

// Función para actualizar el selector de idioma
function updateLanguageSelector() {
    document.getElementById('currentLanguage').textContent = currentLanguage.toUpperCase();
    
    // Actualizar checks
    document.querySelectorAll('.check-mark').forEach(check => {
        check.classList.add('hidden');
    });
    
    document.getElementById(`check-${currentLanguage}`)?.classList.remove('hidden');
    
    // Actualizar selección visual
    document.querySelectorAll('.language-option').forEach(opt => {
        opt.classList.remove('selected');
        if (opt.getAttribute('data-lang') === currentLanguage) {
            opt.classList.add('selected');
        }
    });
}

// Función para abrir/cerrar menú de idiomas
function toggleLanguageMenu() {
    const menu = document.getElementById('languageMenu');
    const btn = document.getElementById('btnLanguage');
    
    menu.classList.toggle('active');
    btn.classList.toggle('active');
}

function closeLanguageMenu() {
    const menu = document.getElementById('languageMenu');
    const btn = document.getElementById('btnLanguage');
    
    menu.classList.remove('active');
    btn.classList.remove('active');
}

// ===== SISTEMA DE AUTENTICACIÓN =====
let usuarioActual = null;

// Cargar usuario al iniciar
function cargarUsuarioActual() {
    const usuario = localStorage.getItem('usuarioRBR');
    if (usuario) {
        usuarioActual = JSON.parse(usuario);
        actualizarUIUsuario();
    }
}

// Registrar nuevo usuario
function registrarUsuario(nombre, email, password) {
    const usuarios = JSON.parse(localStorage.getItem('usuariosRBR') || '[]');
    
    if (usuarios.some(u => u.email === email)) {
        alert('❌ Este correo ya está registrado');
        return false;
    }
    
    const nuevoUsuario = {
        id: Date.now(),
        nombre,
        email,
        password: btoa(password) // Codificación básica
    };
    
    usuarios.push(nuevoUsuario);
    localStorage.setItem('usuariosRBR', JSON.stringify(usuarios));
    alert('✅ Cuenta creada exitosamente. Inicia sesión ahora.');
    return true;
}

// Iniciar sesión
function iniciarSesion(email, password) {
    const usuarios = JSON.parse(localStorage.getItem('usuariosRBR') || '[]');
    const usuario = usuarios.find(u => u.email === email && u.password === btoa(password));
    
    if (usuario) {
        usuarioActual = { id: usuario.id, nombre: usuario.nombre, email: usuario.email };
        localStorage.setItem('usuarioRBR', JSON.stringify(usuarioActual));
        alert(`✅ ¡Bienvenido ${usuario.nombre}!`);
        actualizarUIUsuario();
        return true;
    } else {
        alert('❌ Correo o contraseña incorrectos');
        return false;
    }
}

// Cerrar sesión
function cerrarSesion() {
    usuarioActual = null;
    localStorage.removeItem('usuarioRBR');
    actualizarUIUsuario();
    alert('✅ Sesión cerrada');
}

// Actualizar UI según estado de usuario
function actualizarUIUsuario() {
    const btnAccount = document.getElementById('btnAccount');
    
    if (usuarioActual) {
        btnAccount.textContent = `👤 ${usuarioActual.nombre}`;
        btnAccount.style.background = '#d4af8f';
        btnAccount.style.color = '#1a1a1a';
    } else {
        btnAccount.textContent = 'Mi Cuenta';
        btnAccount.style.background = 'none';
        btnAccount.style.color = 'inherit';
    }
}

// ===== BASE DE DATOS DE PRODUCTOS CON STORYTELLING =====
const productos = [
    { 
        id: 1, 
        nombre: "Camiseta Blanca Premium", 
        linea: "minimalista", 
        precio: 1000, 
        imagen: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=60", 
        descripcion: "Blanca pura, corte preciso, tejido de algodón premium.",
        story: "Inspirada en los estudios de los artistas parisinos. Cada puntada es una trazo de perfección. Usada por mentes creativas que entienden que menos es más.",
        materials: ["Algodón pima 100%", "Teñido natural", "Confección artesanal en Bogotá", "Edición limitada 100 piezas"],
        isLimited: true,
        isSustainable: true
    },
    { 
        id: 2, 
        nombre: "Camiseta Negra Slim", 
        linea: "minimalista", 
        precio: 1000, 
        imagen: "https://images.unsplash.com/photo-1502716216590-cd5185917e41?auto=format&fit=crop&w=500&q=60", 
        descripcion: "Silueta impecable, color absoluto.",
        story: "El negro absoluto que los parisinos usan como lienzo. Corte anatomónico que respeta el cuerpo. Minimalismo radical que grita libertad.",
        materials: ["Algodón orgánico certificado", "Proceso de teñido sustentable", "Fabricación en taller de Bogotá", "Edición limitada 85 piezas"],
        isLimited: true,
        isSustainable: true
    },
    { 
        id: 3, 
        nombre: "Jeans Indigo Artesanal", 
        linea: "maximalista", 
        precio: 1000, 
        imagen: "https://images.unsplash.com/photo-1542272604-787c62d465d1?auto=format&fit=crop&w=500&q=60", 
        descripcion: "Teñido artesanalmente con técnicas tradicionales colombianas.",
        story: "Cada par cuenta la historia de maestros tejedores de Bogotá. Teñidos con índigo natural, con técnicas transmitidas generacionalmente. No hay dos iguales. Tu prenda, tu identidad.",
        materials: ["Denim 100% algodón", "Teñido con índigo natural", "Cada par único", "Confección manual tradicional"],
        isLimited: true,
        isSustainable: true
    },
    { 
        id: 4, 
        nombre: "Chaqueta Experimental", 
        linea: "maximalista", 
        precio: 1000, 
        imagen: "https://images.unsplash.com/photo-1551028719-00167b16ebc5?auto=format&fit=crop&w=500&q=60", 
        descripcion: "Diseño audaz con detalles que desafían convenciones.",
        story: "Nacida del encuentro de la irreverencia parisina y la audacia colombiana. Cada detalle es un manifiesto: costuras aparentes, cortes imposibles, formas que desafían lo convencional. Para quienes creen que la moda es revolución.",
        materials: ["Lana virgen y algodón reciclado", "Detalles en cuero natural", "Confección artesanal", "Pieza única"],
        isLimited: true,
        isSustainable: true
    },
    { 
        id: 5, 
        nombre: "Camisa Beige Neutral", 
        linea: "minimalista", 
        precio: 1000, 
        imagen: "https://images.unsplash.com/photo-1551314679-9c6ae9dec224?auto=format&fit=crop&w=500&q=60", 
        descripcion: "Geometría perfecta, paleta neutral.",
        story: "La paleta perfecta entre Bogotá y París. Beige cálido como el café bogotano, corte limpio como las avenidas parisinas. Minimalismo que respira.",
        materials: ["Lino y algodón orgánico", "Confección francesa", "Teñido ecológico", "Edición limitada 120 piezas"],
        isLimited: true,
        isSustainable: true
    },
    { 
        id: 6, 
        nombre: "Prenda Multicolor Vibrante", 
        linea: "maximalista", 
        precio: 1000, 
        imagen: "https://images.unsplash.com/photo-1595777712802-46d4778afb70?auto=format&fit=crop&w=500&q=60", 
        descripcion: "Colores explosivos que celebran la vivacidad colombiana.",
        story: "Inspirada en el arte urbano de Bogotá y la energía de las calles del Marais parisino. Cada color grita: soy, existo, me expreso. Hecha para brillar, para ser notada, para cambiar la conversación.",
        materials: ["Mezcla de algodón y fibras naturales", "Tintes vegetales colombianos", "Diseño artesanal colaborativo", "Edición limitada 50 piezas"],
        isLimited: true,
        isSustainable: true
    },
    { 
        id: 7, 
        nombre: "Pantalón Gris Estructurado", 
        linea: "minimalista", 
        precio: 1000, 
        imagen: "https://images.unsplash.com/photo-1591643975662-a5ddda9ef2ff?auto=format&fit=crop&w=500&q=60", 
        descripcion: "Líneas limpias, drape perfecto.",
        story: "Un clásico francés reinterpretado con precisión bogotana. Gris que absorbe el espíritu del minimalismo parisino. El pantalón que funciona en cualquier contexto, que acompaña tus decisiones estéticas.",
        materials: ["Lana merino 100%", "Confección artesanal parisina", "Teñido sostenible", "Edición limitada 90 piezas"],
        isLimited: true,
        isSustainable: true
    },
    { 
        id: 8, 
        nombre: "Sudadera Texturizada Única", 
        linea: "maximalista", 
        precio: 1000, 
        imagen: "https://images.unsplash.com/photo-1556821552-5f61541c8e2b?auto=format&fit=crop&w=500&q=60", 
        descripcion: "Texturas experimentales, comfort bohemio.",
        story: "Textura es historia. Esta sudadera es pura exploración: tramas que conversan, materiales que dialogan entre continentes. Confort bohemio que abraza mientras inspira creatividad.",
        materials: ["Algodón reciclado y lana natural", "Tejido artesanal con texturas", "Diseño experimental", "Confección limitada a 40 piezas"],
        isLimited: true,
        isSustainable: true
    },
    { 
        id: 9, 
        nombre: "Jeans Pintado a Mano", 
        linea: "maximalista", 
        precio: 1000, 
        imagen: "img/WhatsApp Image 2026-01-29 at 6.04.20 PM.jpeg", 
        descripcion: "Jeans artesanal con diseño único pintado a mano.",
        story: "Cada pieza es una obra de arte portátil. Diseño pintado a mano que celebra la creatividad colombiana. No hay dos iguales, tu jeans es tan único como tú.",
        materials: ["Denim 100% algodón", "Pintura textil permanente", "Diseño único pintado a mano", "Lavado a mano recomendado"],
        isLimited: true,
        isSustainable: true
    }
];

let carrito = [];

// ===== FUNCIÓN MEJORADA PARA CARGAR PRODUCTOS =====
function cargarProductos(filtros = {}) {
    const gridProductos = document.getElementById('productsGrid');
    gridProductos.innerHTML = '';

    let productosFiltrados = productos.filter(p => {
        if (filtros.linea && filtros.linea !== 'todas' && p.linea !== filtros.linea) return false;
        if (filtros.maxPrice && p.precio > filtros.maxPrice) return false;
        return true;
    });

    if (productosFiltrados.length === 0) {
        gridProductos.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem; color: #999;">No se encontraron productos con esos filtros</p>';
        return;
    }

    productosFiltrados.forEach((producto, index) => {
        const card = document.createElement('div');
        card.className = 'product-card';
        const lineaBadge = producto.linea === 'minimalista' ? '🎨 Minimalista' : '🔥 Maximalista';
        const precioFormateado = (producto.precio).toLocaleString('es-CO');
        
        card.innerHTML = `
            <div class="product-image">
                <img src="${producto.imagen}" alt="${producto.nombre}" style="cursor: pointer;" onclick="abrirModalProducto(${producto.id})">
            </div>
            <div class="product-info">
                <div class="product-line" style="font-size: 0.8rem; color: #999; margin-bottom: 0.5rem;">${lineaBadge}</div>
                <div class="product-name" style="cursor: pointer;" onclick="abrirModalProducto(${producto.id})">${producto.nombre}</div>
                <div class="product-description">${producto.descripcion}</div>
                <div class="product-price">$${precioFormateado}</div>
                <button class="btn-add-cart" onclick="agregarAlCarrito(${producto.id})">Añadir al Carrito</button>
            </div>
        `;
        gridProductos.appendChild(card);
    });
}

// ===== FUNCIÓN PARA ABRIR MODAL DE PRODUCTO =====
function abrirModalProducto(idProducto) {
    const producto = productos.find(p => p.id === idProducto);
    if (!producto) return;

    const modal = document.getElementById('modalProduct');
    const lineaBadge = producto.linea === 'minimalista' ? '🎨 Minimalista' : '🔥 Maximalista';
    
    // Llenar información del producto
    document.getElementById('productMainImage').src = producto.imagen;
    document.getElementById('productName').textContent = producto.nombre;
    document.getElementById('productLine').innerHTML = lineaBadge;
    document.getElementById('productPrice').textContent = producto.precio.toLocaleString('es-CO');
    document.getElementById('productStory').textContent = producto.story;
    document.getElementById('storyHighlight').textContent = producto.linea === 'minimalista' 
        ? 'Precisión parisina en cada detalle' 
        : 'Libertad creativa sin límites';
    
    // Llenar materiales
    const materialsHtml = producto.materials.map(m => `<li>${m}</li>`).join('');
    document.getElementById('productMaterials').innerHTML = materialsHtml;
    
    // Mostrar/ocultar badges
    document.getElementById('badgeLimited').style.display = producto.isLimited ? 'inline-block' : 'none';
    document.getElementById('badgeSustainable').style.display = producto.isSustainable ? 'inline-block' : 'none';
    
    // Reiniciar cantidad
    document.getElementById('productQuantity').value = 1;
    
    // Event listeners de botones
    document.getElementById('btnAddToCart').onclick = () => {
        const size = document.querySelector('.size-btn.active')?.dataset.size || 'M';
        const quantity = parseInt(document.getElementById('productQuantity').value) || 1;
        agregarAlCarrito(idProducto);
        mostrarNotificacion(`✅ ${quantity} unidad(es) agregada(s)`);
        cerrarModal('modalProduct');
    };
    
    document.getElementById('btnQtyMinus').onclick = () => {
        const input = document.getElementById('productQuantity');
        const value = Math.max(1, parseInt(input.value) - 1);
        input.value = value;
    };
    
    document.getElementById('btnQtyPlus').onclick = () => {
        const input = document.getElementById('productQuantity');
        const value = Math.min(5, parseInt(input.value) + 1);
        input.value = value;
    };
    
    // Configurar selectores de talla
    document.querySelectorAll('.size-btn').forEach(btn => {
        btn.classList.remove('active');
        btn.onclick = function() {
            document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        };
    });
    document.querySelector('.size-btn[data-size="M"]').classList.add('active');
    
    // Abrir modal
    abrirModal('modalProduct');
}


// ===== FILTROS =====
const priceRange = document.getElementById('priceRange');
const priceValue = document.getElementById('priceValue');

if (priceRange) {
    priceRange.addEventListener('input', () => {
        priceValue.textContent = priceRange.value;
        aplicarFiltros();
    });
}

function aplicarFiltros() {
    const lineaSeleccionada = document.querySelector('input[name="linea"]:checked')?.value || 'todas';
    const maxPrice = parseInt(priceRange.value) || 500;

    cargarProductos({
        linea: lineaSeleccionada,
        maxPrice: maxPrice
    });
}

document.querySelectorAll('input[name="linea"]').forEach(radio => {
    radio.addEventListener('change', aplicarFiltros);
});

const btnClearFilters = document.getElementById('btnClearFilters');
if (btnClearFilters) {
    btnClearFilters.addEventListener('click', () => {
        document.querySelector('input[name="linea"][value="todas"]').checked = true;
        priceRange.value = 500;
        priceValue.textContent = '500';
        aplicarFiltros();
    });
}

// ===== CARRITO =====
function agregarAlCarrito(idProducto) {
    const producto = productos.find(p => p.id === idProducto);
    const cantidad = parseInt(document.getElementById('productQuantity')?.value) || 1;
    
    const itemEnCarrito = carrito.find(item => item.id === idProducto);
    if (itemEnCarrito) {
        itemEnCarrito.cantidad += cantidad;
    } else {
        carrito.push({ ...producto, cantidad });
    }

    actualizarCarrito();
    mostrarNotificacion('✅ Producto agregado al carrito');
}

function eliminarDelCarrito(idProducto) {
    carrito = carrito.filter(item => item.id !== idProducto);
    actualizarCarrito();
}

function actualizarCantidad(idProducto, cantidad) {
    const item = carrito.find(p => p.id === idProducto);
    if (item) {
        item.cantidad = Math.max(1, cantidad);
        actualizarCarrito();
    }
}

function actualizarCarrito() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    const totalItems = carrito.reduce((sum, item) => sum + item.cantidad, 0);
    cartCount.textContent = totalItems;

    if (carrito.length === 0) {
        if (cartItems) cartItems.innerHTML = '<p class="empty-cart">Tu carrito está vacío</p>';
        if (cartTotal) cartTotal.textContent = '0';
        return;
    }

    let html = '';
    let total = 0;

    carrito.forEach(item => {
        const subtotal = item.precio * item.cantidad;
        total += subtotal;
        const precioFormato = (item.precio).toLocaleString('es-CO');
        const subtotalFormato = (subtotal).toLocaleString('es-CO');
        html += `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h4>${item.nombre}</h4>
                    <p>$${precioFormato} x ${item.cantidad}</p>
                </div>
                <div>
                    <span class="cart-item-price">$${subtotalFormato}</span>
                    <button onclick="eliminarDelCarrito(${item.id})" style="background: #e74c3c; color: white; border: none; padding: 0.3rem 0.6rem; border-radius: 4px; cursor: pointer; font-size: 0.8rem; margin-left: 0.5rem;">Eliminar</button>
                </div>
            </div>
        `;
    });

    if (cartItems) cartItems.innerHTML = html;
    if (cartTotal) cartTotal.textContent = total.toLocaleString('es-CO');
}

// ===== MODALES =====
const modales = {
    account: document.getElementById('modalAccount'),
    cart: document.getElementById('modalCart'),
    checkout: document.getElementById('modalCheckout'),
    modalProfile: document.getElementById('modalProfile'),
    modalChangePassword: document.getElementById('modalChangePassword')
};

function abrirModal(nombreModal) {
    if (modales[nombreModal]) {
        modales[nombreModal].classList.add('show');
    }
}

function cerrarModal(nombreModal) {
    if (modales[nombreModal]) {
        modales[nombreModal].classList.remove('show');
    }
}

// Cerrar modales al hacer clic en X
document.querySelectorAll('.close').forEach(btn => {
    btn.addEventListener('click', (e) => {
        Object.values(modales).forEach(modal => {
            if (modal && modal.contains(e.target)) {
                modal.classList.remove('show');
            }
        });
    });
});

// Cerrar modales al hacer clic fuera
Object.values(modales).forEach(modal => {
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('show');
            }
        });
    }
});

// Botones de acción
const btnAccount = document.getElementById('btnAccount');
const cartIcon = document.getElementById('cartIcon');
const btnCheckout = document.getElementById('btnCheckout');

if (btnAccount) {
    btnAccount.addEventListener('click', () => {
        if (usuarioActual) {
            // Si está logeado, abrir perfil
            abrirPerfil();
        } else {
            // Si no está logeado, abrir modal de login
            abrirModal('account');
            document.querySelector('.tab-btn').click(); // Ir a login
        }
    });
}

if (cartIcon) {
    cartIcon.addEventListener('click', () => {
        if (!usuarioActual) {
            alert('⚠️ Debes iniciar sesión para comprar');
            abrirModal('account');
            return;
        }
        abrirModal('cart');
    });
}

if (btnCheckout) {
    btnCheckout.addEventListener('click', () => {
        if (!usuarioActual) {
            alert('⚠️ Debes iniciar sesión para finalizar la compra');
            cerrarModal('cart');
            abrirModal('account');
            return;
        }
        if (carrito.length === 0) {
            alert('Tu carrito está vacío');
            return;
        }
        cerrarModal('cart');
        abrirModal('checkout');
    });
}

// ===== TABS EN MODAL DE CUENTA =====
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const tabName = btn.dataset.tab;
        
        // Desactivar todos los tabs
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
        
        // Activar tab seleccionado
        btn.classList.add('active');
        document.getElementById(tabName).classList.add('active');
    });
});

// ===== CHECKOUT =====
const checkoutForm = document.getElementById('checkoutForm');
const metodoPagoRadios = document.querySelectorAll('input[name="metodoPago"]');
const mercadopagoContainer = document.getElementById('mercadopagoContainer');

// Actualizar UI cuando cambia el método de pago
if (metodoPagoRadios.length > 0) {
    metodoPagoRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            if (e.target.value === 'mercadopago') {
                mercadopagoContainer.style.display = 'block';
                // Inicializar Mercado Pago Brick cuando se selecciona
                setTimeout(() => {
                    const email = document.getElementById('checkoutEmail')?.value || usuarioActual?.email || '';
                    const total = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
                    if (window.inicializarCardPaymentBrick) {
                        window.inicializarCardPaymentBrick(total, email);
                    }
                }, 300);
            } else {
                mercadopagoContainer.style.display = 'none';
            }
        });
    });
}

// Actualizar el resumen de compra cuando se abre el modal de checkout
if (checkoutForm) {
    checkoutForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        if (!usuarioActual) {
            alert('⚠️ Debes iniciar sesión');
            return;
        }

        // Obtener datos del formulario
        const datosCheckout = {
            nombre: document.getElementById('checkoutNombre')?.value || '',
            email: document.getElementById('checkoutEmail')?.value || '',
            direccion: document.getElementById('checkoutDireccion')?.value || '',
            ciudad: document.getElementById('checkoutCiudad')?.value || '',
            codigo: document.getElementById('checkoutCodigo')?.value || ''
        };

        // Validar datos
        if (window.validarDatosPago) {
            const validacion = window.validarDatosPago(datosCheckout);
            if (!validacion.valido) {
                alert('❌ Por favor completa todos los campos:\n\n' + validacion.errores.join('\n'));
                return;
            }
        }

        const metodoPago = document.querySelector('input[name="metodoPago"]:checked')?.value || 'mercadopago';
        const total = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
        const totalFormato = total.toLocaleString('es-CO');

        // Procesar según el método de pago seleccionado
        if (metodoPago === 'mercadopago') {
            // Mercado Pago maneja el envío del formulario
            // El Brick se encargará de procesar el pago
            console.log('Procesando pago con Mercado Pago...');
            // El evento onSubmit del Brick se ejecutará automáticamente
        } else {
            // Para otros métodos (en el futuro)
            alert(`✅ ¡Compra confirmada!\n\nNombre: ${datosCheckout.nombre}\nTotal: $${totalFormato} COP\nMétodo: ${metodoPago}\n\nRecibirás un email de confirmación.`);
            carrito = [];
            actualizarCarrito();
            cerrarModal('checkout');
            checkoutForm.reset();
            mostrarNotificacion('✅ Pedido realizado con éxito');
        }
    });

    // Escuchar cuando se abre el modal de checkout para actualizar el resumen
    const modalCheckout = document.getElementById('modalCheckout');
    if (modalCheckout) {
        const originalShow = modalCheckout.classList.add;
        
        // Usar un MutationObserver para detectar cambios en el modal
        const observer = new MutationObserver(() => {
            if (modalCheckout.classList.contains('show')) {
                actualizarResumenCheckout();
                // Rellenar datos del usuario si está logeado
                if (usuarioActual) {
                    document.getElementById('checkoutNombre').value = usuarioActual.nombre || '';
                    document.getElementById('checkoutEmail').value = usuarioActual.email || '';
                }
            }
        });

        observer.observe(modalCheckout, { attributes: true, attributeFilter: ['class'] });
    }
}

// Función para actualizar el resumen de compra en el modal
function actualizarResumenCheckout() {
    const checkoutSummary = document.getElementById('checkoutSummary');
    const checkoutTotal = document.getElementById('checkoutTotal');
    
    if (!checkoutSummary || carrito.length === 0) return;

    let html = '';
    let total = 0;

    carrito.forEach(item => {
        const subtotal = item.precio * item.cantidad;
        total += subtotal;
        const precioFormato = (item.precio).toLocaleString('es-CO');
        const subtotalFormato = (subtotal).toLocaleString('es-CO');
        html += `
            <div class="checkout-item">
                <div class="checkout-item-info">
                    <h4>${item.nombre}</h4>
                    <p class="checkout-item-details">Cantidad: ${item.cantidad} × $${precioFormato}</p>
                </div>
                <span class="checkout-item-price">$${subtotalFormato}</span>
            </div>
        `;
    });

    checkoutSummary.innerHTML = html;
    checkoutTotal.textContent = '$' + total.toLocaleString('es-CO');
}

// Limpiar carrito después de compra exitosa
function limpiarCarrito() {
    carrito = [];
    localStorage.removeItem('carritoRBR');
    actualizarCarrito();
}

// ===== NEWSLETTER =====
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;
        alert(`✅ ¡Te has suscrito correctamente!\nEmail: ${email}`);
        mostrarNotificacion('✅ Suscripción confirmada');
        newsletterForm.reset();
    });
}

// ===== FORMULARIOS DE AUTENTICACIÓN =====
const loginForm = document.querySelector('#login form');
const registerForm = document.querySelector('#register form');

if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = loginForm.querySelector('input[type="email"]').value;
        const password = loginForm.querySelector('input[type="password"]').value;
        
        if (iniciarSesion(email, password)) {
            cerrarModal('account');
            loginForm.reset();
        }
    });
}

if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nombre = registerForm.querySelector('input[type="text"]').value;
        const email = registerForm.querySelectorAll('input[type="email"]')[0].value;
        const password = registerForm.querySelector('input[type="password"]').value;
        const confirmPassword = registerForm.querySelectorAll('input[type="password"]')[1].value;
        
        if (password !== confirmPassword) {
            alert('❌ Las contraseñas no coinciden');
            return;
        }
        
        if (registrarUsuario(nombre, email, password)) {
            document.querySelector('[data-tab="login"]').click();
            registerForm.reset();
        }
    });
}

// ===== NOTIFICACIÓN =====
function mostrarNotificacion(mensaje) {
    const notif = document.createElement('div');
    notif.textContent = mensaje;
    notif.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #27ae60;
        color: white;
        padding: 1rem 2rem;
        border-radius: 4px;
        z-index: 9999;
        animation: slideIn 0.3s;
        font-weight: 600;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
    `;
    document.body.appendChild(notif);
    
    setTimeout(() => {
        notif.style.animation = 'slideOut 0.3s';
        setTimeout(() => notif.remove(), 300);
    }, 2500);
}

// Estilos de animaciones
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(400px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(400px); opacity: 0; }
    }
`;
document.head.appendChild(style);

// ===== CARGAR INICIAL =====
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar idioma
    updateLanguageSelector();
    updatePageContent();
    
    // Configurar event listeners del selector de idioma
    const btnLanguage = document.getElementById('btnLanguage');
    const languageMenu = document.getElementById('languageMenu');
    const languageOptions = document.querySelectorAll('.language-option');
    
    if (btnLanguage) {
        btnLanguage.addEventListener('click', toggleLanguageMenu);
    }
    
    languageOptions.forEach(option => {
        option.addEventListener('click', () => {
            const lang = option.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });
    
    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.language-selector')) {
            closeLanguageMenu();
        }
    });
    
    cargarUsuarioActual();
    cargarProductos();
    inicializarPerfil();
    inicializarCambiarContraseña();
});

// ===== FUNCIONES DE PERFIL =====
function inicializarPerfil() {
    // Elementos del perfil
    const btnLogoutMain = document.getElementById('btnLogoutMain');
    const btnEditProfile = document.getElementById('btnEditProfile');
    const btnChangePassword = document.getElementById('btnChangePassword');
    const btnConfirmLogout = document.getElementById('btnConfirmLogout');
    const btnCancelLogout = document.getElementById('btnCancelLogout');
    const logoutConfirmation = document.getElementById('logoutConfirmation');

    // Botón cerrar sesión principal
    if (btnLogoutMain) {
        btnLogoutMain.addEventListener('click', () => {
            logoutConfirmation.classList.add('show');
        });
    }

    // Confirmar cerrar sesión
    if (btnConfirmLogout) {
        btnConfirmLogout.addEventListener('click', () => {
            cerrarSesion();
            cerrarModal('modalProfile');
            logoutConfirmation.classList.remove('show');
        });
    }

    // Cancelar cerrar sesión
    if (btnCancelLogout) {
        btnCancelLogout.addEventListener('click', () => {
            logoutConfirmation.classList.remove('show');
        });
    }

    // Botones de editar perfil y cambiar contraseña
    if (btnEditProfile) {
        btnEditProfile.addEventListener('click', () => {
            alert('📝 Función de editar perfil próximamente');
        });
    }

    if (btnChangePassword) {
        btnChangePassword.addEventListener('click', () => {
            cerrarModal('modalProfile');
            abrirModal('modalChangePassword');
        });
    }

    // Cerrar diálogo al hacer clic fuera
    logoutConfirmation.addEventListener('click', (e) => {
        if (e.target === logoutConfirmation) {
            logoutConfirmation.classList.remove('show');
        }
    });
}

function abrirPerfil() {
    const modalProfile = document.getElementById('modalProfile');
    if (usuarioActual) {
        // Actualizar información del perfil
        document.getElementById('profileName').textContent = usuarioActual.nombre;
        document.getElementById('profileEmail').textContent = usuarioActual.email;
        document.getElementById('infoName').textContent = usuarioActual.nombre;
        document.getElementById('infoEmail').textContent = usuarioActual.email;
        
        // Abrir modal
        abrirModal('modalProfile');
    }
}

// ===== CAMBIAR CONTRASEÑA =====
function inicializarCambiarContraseña() {
    const form = document.getElementById('changePasswordForm');
    const newPasswordInput = document.getElementById('newPassword');
    const toggleButtons = document.querySelectorAll('.toggle-password');
    const btnCancel = document.getElementById('btnCancelChangePassword');
    
    // Mostrar/Ocultar contraseña
    toggleButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = btn.dataset.target;
            const input = document.getElementById(targetId);
            const isPassword = input.type === 'password';
            input.type = isPassword ? 'text' : 'password';
            btn.textContent = isPassword ? '🙈' : '👁️';
        });
    });
    
    // Validación en tiempo real de requisitos
    newPasswordInput.addEventListener('input', () => {
        const password = newPasswordInput.value;
        validarRequisitosContraseña(password);
    });
    
    // Botón cancelar
    if (btnCancel) {
        btnCancel.addEventListener('click', () => {
            cerrarModal('modalChangePassword');
            form.reset();
            limpiarErrores();
        });
    }
    
    // Enviar formulario
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        cambiarContraseña();
    });
}

function validarRequisitosContraseña(password) {
    const requirements = {
        length: password.length >= 8,
        uppercase: /[A-Z]/.test(password),
        number: /[0-9]/.test(password)
    };
    
    // Actualizar interfaz de requisitos
    updateRequirement('req-length', requirements.length);
    updateRequirement('req-uppercase', requirements.uppercase);
    updateRequirement('req-number', requirements.number);
    
    return Object.values(requirements).every(v => v);
}

function updateRequirement(id, met) {
    const element = document.getElementById(id);
    const check = element.querySelector('.requirement-check');
    
    if (met) {
        element.classList.add('met');
        check.textContent = '✓';
    } else {
        element.classList.remove('met');
        check.textContent = '✗';
    }
}

function limpiarErrores() {
    document.querySelectorAll('.error-message').forEach(msg => {
        msg.classList.remove('show');
        msg.textContent = '';
    });
    document.querySelectorAll('.input-wrapper input').forEach(input => {
        input.classList.remove('error');
    });
}

function cambiarContraseña() {
    limpiarErrores();
    
    const currentPassword = document.getElementById('currentPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const form = document.getElementById('changePasswordForm');
    const submitBtn = form.querySelector('.btn-password-submit');
    
    let hasError = false;
    
    // Validar contraseña actual
    if (!currentPassword) {
        mostrarError('currentPasswordError', 'Ingresa tu contraseña actual');
        hasError = true;
    } else if (usuarioActual && btoa(currentPassword) !== JSON.parse(localStorage.getItem('usuariosRBR')).find(u => u.id === usuarioActual.id).password) {
        mostrarError('currentPasswordError', 'Contraseña actual incorrecta');
        hasError = true;
    }
    
    // Validar nueva contraseña
    if (!newPassword) {
        mostrarError('newPasswordError', 'Ingresa una nueva contraseña');
        hasError = true;
    } else if (!validarRequisitosContraseña(newPassword)) {
        mostrarError('newPasswordError', 'La contraseña no cumple con los requisitos');
        hasError = true;
    }
    
    // Validar confirmación
    if (!confirmPassword) {
        mostrarError('confirmPasswordError', 'Confirma tu contraseña');
        hasError = true;
    } else if (newPassword !== confirmPassword) {
        mostrarError('confirmPasswordError', 'Las contraseñas no coinciden');
        hasError = true;
    }
    
    if (hasError) return;
    
    // Cambiar contraseña
    try {
        const usuarios = JSON.parse(localStorage.getItem('usuariosRBR') || '[]');
        const index = usuarios.findIndex(u => u.id === usuarioActual.id);
        
        if (index !== -1) {
            usuarios[index].password = btoa(newPassword);
            localStorage.setItem('usuariosRBR', JSON.stringify(usuarios));
            
            // Mostrar éxito
            const successMsg = document.getElementById('successMessage');
            successMsg.classList.add('show');
            
            // Deshabilitar botón temporalmente
            submitBtn.disabled = true;
            submitBtn.textContent = '✓ Contraseña actualizada';
            
            // Limpiar y cerrar después de 2 segundos
            setTimeout(() => {
                form.reset();
                limpiarErrores();
                successMsg.classList.remove('show');
                submitBtn.disabled = false;
                submitBtn.textContent = 'Guardar Nueva Contraseña';
                cerrarModal('modalChangePassword');
            }, 2000);
        }
    } catch (error) {
        console.error('Error al cambiar contraseña:', error);
        mostrarError('newPasswordError', 'Error al actualizar. Intenta de nuevo.');
    }
}

function mostrarError(elementId, mensaje) {
    const errorEl = document.getElementById(elementId);
    const inputId = elementId.replace('Error', '');
    const inputEl = document.getElementById(inputId);
    
    errorEl.textContent = mensaje;
    errorEl.classList.add('show');
    inputEl.classList.add('error');
}