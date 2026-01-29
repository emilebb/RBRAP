# 📤 Subir RBR a GitHub - Instrucciones Exactas

## Tu Información

```
Usuario GitHub: emilebb
Repositorio: RBRAPP
URL: https://github.com/emilebb/RBRAPP.git
```

---

## ✅ Paso 1: Abre Terminal/PowerShell

### En Windows:

**Opción A: PowerShell (Recomendado)**
```
1. Click derecho en tu escritorio
2. Selecciona "PowerShell"
3. O presiona Win+X y elige PowerShell
```

**Opción B: Terminal Tradicional**
```
1. Presiona Win+R
2. Escribe: cmd
3. Enter
```

---

## ✅ Paso 2: Navega a tu Carpeta RBR

En la terminal que abriste, escribe:

```powershell
cd "c:\Users\PERSONAL\OneDrive - Universidad de los Andes\Escritorio\RBR"
```

**Presiona Enter**

Deberías ver:
```
PS C:\Users\PERSONAL\OneDrive - Universidad de los Andes\Escritorio\RBR>
```

---

## ✅ Paso 3: Ejecuta los Comandos Git

**Copia y pega CADA línea, una por una:**

### Primero, inicializa Git:
```powershell
git init
```

### Agrega todos tus archivos:
```powershell
git add .
```

### Haz el primer commit:
```powershell
git commit -m "Initial commit - RBR tienda"
```

### Cambia rama a main:
```powershell
git branch -M main
```

### Agrega el origen remoto (GitHub):
```powershell
git remote add origin https://github.com/emilebb/RBRAPP.git
```

### Sube todo a GitHub:
```powershell
git push -u origin main
```

---

## 🎯 Si Pide Credenciales

**Si aparece un popup pidiendo usuario/contraseña:**

```
Usuario: emilebb
Contraseña: Tu contraseña de GitHub
```

**O si usa token (más seguro):**
```
Usuario: emilebb
Contraseña: Tu personal access token de GitHub
```

---

## ✅ Verificar que Funcionó

**1. Ve a tu repositorio:**
```
https://github.com/emilebb/RBRAPP
```

**2. Deberías ver tus archivos:**
```
✅ tienda.html
✅ tienda.css
✅ tienda.js
✅ config-mercadopago.js
✅ [todos los otros]
```

**3. Si ves todo, ¡exitoso! 🎉**

---

## 🚀 Paso 4: Conectar con Vercel

**Una vez que tus archivos estén en GitHub:**

### 1. Ve a Vercel:
```
https://vercel.com
```

### 2. Click en "Add New...":
```
En el dashboard, esquina superior derecha
```

### 3. Selecciona "Project":
```
```

### 4. Haz click en "Import Git Repository":
```
```

### 5. Conecta con GitHub:
```
Click "Continue with GitHub"
Autoriza si pide
```

### 6. Selecciona tu repo:
```
emilebb/RBRAPP
```

### 7. Haz click "Import":
```
```

### 8. Vercel despliega automáticamente:
```
⏳ Espera 2-3 minutos
```

### 9. ¡Obtén tu URL!:
```
✅ https://rbrapp.vercel.app
(o similar)
```

---

## 📝 Resumen de Comandos (Copiar y Pegar)

```powershell
cd "c:\Users\PERSONAL\OneDrive - Universidad de los Andes\Escritorio\RBR"
git init
git add .
git commit -m "Initial commit - RBR tienda"
git branch -M main
git remote add origin https://github.com/emilebb/RBRAPP.git
git push -u origin main
```

---

## 🎁 Lo que Obtuviste

✅ Tu código en GitHub (backup seguro)  
✅ Historial de cambios (git)  
✅ Control de versiones  
✅ Preparado para Vercel  

---

## 🆘 Errores Comunes

### ❌ "git not recognized"
**Solución:**
```
1. Git no está instalado
2. Descarga de https://git-scm.com
3. Instala
4. Reinicia PowerShell
5. Intenta de nuevo
```

### ❌ "fatal: repository not found"
**Solución:**
```
1. Verifica que URL sea correcta:
   https://github.com/emilebb/RBRAPP.git
2. Verifica usuario emilebb
3. Verifica que el repo exista
```

### ❌ "Permission denied"
**Solución:**
```
1. Tu contraseña de GitHub es incorrecta
2. O necesitas usar token en lugar de contraseña
3. Ve a GitHub → Settings → Developer settings
4. Personal access tokens → Generate new token
5. Usa ese token como contraseña
```

### ❌ "fatal: could not read Username"
**Solución:**
```
Git pide credenciales
Escribe tu usuario: emilebb
Luego contraseña
```

---

## ✅ Checklist

- [ ] Abriste Terminal/PowerShell
- [ ] Navegaste a carpeta RBR
- [ ] Ejecutaste `git init`
- [ ] Ejecutaste `git add .`
- [ ] Ejecutaste `git commit -m "..."`
- [ ] Ejecutaste `git branch -M main`
- [ ] Ejecutaste `git remote add origin https://github.com/emilebb/RBRAPP.git`
- [ ] Ejecutaste `git push -u origin main`
- [ ] Viste tus archivos en GitHub
- [ ] Conectaste con Vercel
- [ ] Vercel desplegó exitosamente
- [ ] Tienes tu URL de Vercel

---

## 🎯 Resultado Final

**Cuando todo funcione:**

```
Tu tienda en GitHub: https://github.com/emilebb/RBRAPP
Tu tienda online: https://rbrapp.vercel.app
```

**Ambas conectadas automáticamente**

---

## 📱 Próximo Paso

**Cuando tengas tu URL de Vercel (ej: https://rbrapp.vercel.app):**

1. Ve a Mercado Pago
2. Dashboard → Configuración → Información de Tienda
3. Ingresa tu URL en "Sitio web"
4. Guarda cambios
5. Obtén tu PUBLIC_KEY
6. Actualiza config-mercadopago.js
7. ¡Pagos listos!

---

## 🚀 Ahora Haz Esto

**Copia estos comandos en tu PowerShell:**

```powershell
cd "c:\Users\PERSONAL\OneDrive - Universidad de los Andes\Escritorio\RBR"
git init
git add .
git commit -m "Initial commit - RBR tienda"
git branch -M main
git remote add origin https://github.com/emilebb/RBRAPP.git
git push -u origin main
```

**Y dime cuando termine:**
- ¿Qué URL te da Vercel?
- ¿Viste tus archivos en GitHub?

**¡Estás muy cerca! 🎉**

Creado: 29 Enero 2026
