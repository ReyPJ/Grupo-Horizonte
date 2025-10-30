# Cloudinary Integration - Guía de Uso

Esta guía explica cómo usar Cloudinary en el proyecto Grupo Horizonte para optimizar la carga de imágenes.

## 📋 Configuración Inicial

### 1. Variables de Entorno

Edita el archivo `.env.local` y configura tus credenciales de Cloudinary:

```env
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=tu_cloud_name_aqui
CLOUDINARY_API_KEY=tu_api_key_aqui
CLOUDINARY_API_SECRET=tu_api_secret_aqui
```

**¿Dónde encontrar estas credenciales?**
1. Ve a [Cloudinary Dashboard](https://cloudinary.com/console)
2. Copia el **Cloud Name**, **API Key** y **API Secret**

### 2. Estructura de Carpetas en Cloudinary (Recomendada)

Organiza tus imágenes en carpetas para mantener orden:

```
cloudinary/
├── empresas/
│   ├── imbar/
│   │   ├── hero-background.jpg
│   │   ├── logo.png
│   │   └── servicios/
│   ├── 4c/
│   ├── gerd/
│   ├── nucleo-energy/
│   └── reccmaq2/
├── proyectos/
│   ├── proyecto-1/
│   └── proyecto-2/
└── general/
    ├── backgrounds/
    └── icons/
```

## 🚀 Cómo Usar el Componente CloudinaryImage

### Ejemplo Básico

```tsx
import CloudinaryImage from '@/app/components/CloudinaryImage';

// Usando Public ID de Cloudinary
<CloudinaryImage
    src="empresas/imbar/hero-background"
    alt="IMBAR Hero Background"
    width={1920}
    height={1080}
/>
```

### Imagen con Fill (llenar contenedor)

```tsx
<div className="relative w-full h-96">
    <CloudinaryImage
        src="empresas/imbar/hero-background"
        alt="IMBAR Hero Background"
        fill
        className="object-cover"
        priority
    />
</div>
```

### Imagen Local (Migración Gradual)

Si todavía no has subido una imagen a Cloudinary, puedes usar la prop `useLocal`:

```tsx
<CloudinaryImage
    src="/imbarlogo.jpeg"
    alt="IMBAR Logo"
    width={300}
    height={100}
    useLocal
/>
```

## 📝 Ejemplos de Uso por Caso

### 1. Logo de Empresa

```tsx
<CloudinaryImage
    src="empresas/imbar/logo"
    alt="Logo IMBAR"
    width={200}
    height={80}
    quality="auto"
    format="auto"
/>
```

### 2. Hero Section Background

```tsx
<div className="relative w-full h-screen">
    <CloudinaryImage
        src="empresas/imbar/hero-background"
        alt="IMBAR Background"
        fill
        className="object-cover"
        priority
        quality={90}
    />
</div>
```

### 3. Galería de Proyectos

```tsx
<CloudinaryImage
    src="proyectos/proyecto-lineas-electricas/imagen-1"
    alt="Líneas de transmisión eléctrica"
    width={800}
    height={600}
    className="rounded-lg shadow-lg"
    gravity="auto"
/>
```

### 4. Tarjeta de Servicio

```tsx
<div className="relative h-64 w-full">
    <CloudinaryImage
        src="empresas/imbar/servicios/ingenieria-electrica"
        alt="Servicio de Ingeniería Eléctrica"
        fill
        className="object-cover rounded-t-lg"
    />
</div>
```

## 🔄 Migración de Imágenes Existentes

### Paso 1: Sube la imagen a Cloudinary

1. Ve a tu [Cloudinary Media Library](https://cloudinary.com/console/media_library)
2. Crea la estructura de carpetas recomendada
3. Sube las imágenes
4. Anota el **Public ID** (ej: `empresas/imbar/hero-background`)

### Paso 2: Reemplaza la referencia en el código

**Antes:**
```tsx
<Image
    src="/LineasDeTransmisionElectrica.jpg"
    alt="Líneas de transmisión"
    width={800}
    height={600}
/>
```

**Después:**
```tsx
<CloudinaryImage
    src="proyectos/lineas-transmision/hero"
    alt="Líneas de transmisión"
    width={800}
    height={600}
/>
```

## ⚡ Optimizaciones Automáticas

El componente CloudinaryImage incluye optimizaciones automáticas:

- **Formato automático**: Entrega WebP/AVIF para navegadores compatibles
- **Calidad adaptativa**: Ajusta la calidad basado en el contenido
- **Lazy loading**: Carga diferida de imágenes (excepto con `priority`)
- **Responsive**: Genera múltiples tamaños automáticamente

## 🎨 Props Disponibles

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `src` | string | - | **Requerido.** Public ID de Cloudinary o ruta local |
| `alt` | string | - | **Requerido.** Texto alternativo |
| `width` | number | 800 | Ancho de la imagen |
| `height` | number | 600 | Alto de la imagen |
| `fill` | boolean | false | Si true, llena el contenedor |
| `className` | string | '' | Clases CSS adicionales |
| `priority` | boolean | false | Carga prioritaria (para LCP) |
| `quality` | number \| 'auto' | 'auto' | Calidad 1-100 o auto |
| `gravity` | string | 'auto' | Punto focal del crop |
| `useLocal` | boolean | false | Usa imagen local en lugar de Cloudinary |
| `format` | string | 'auto' | Formato: auto, webp, avif, jpg, png |

## 🔍 Casos de Uso por Sección

### Hero Sections
```tsx
priority={true}  // Para mejorar LCP
quality={90}     // Alta calidad para hero
fill={true}      // Llenar todo el contenedor
```

### Logos
```tsx
format="png"     // Mantener transparencia
quality="auto"   // Optimización automática
```

### Galería/Carrusel
```tsx
quality={80}     // Balance calidad/rendimiento
format="auto"    // WebP/AVIF automático
```

## 📦 Checklist de Migración

- [ ] Configurar variables de entorno en `.env.local`
- [ ] Crear estructura de carpetas en Cloudinary
- [ ] Subir imágenes a Cloudinary
- [ ] Obtener Public IDs de cada imagen
- [ ] Reemplazar componentes `Image` por `CloudinaryImage`
- [ ] Probar en desarrollo
- [ ] Verificar optimizaciones en Network tab

## 🆘 Troubleshooting

### Error: "Hostname not configured"
- Verifica que `res.cloudinary.com` esté en `next.config.ts`
- Reinicia el servidor de desarrollo

### Imagen no se muestra
- Verifica que el Public ID sea correcto
- Revisa que `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` esté configurado
- Asegúrate de que la imagen sea pública en Cloudinary

### Calidad de imagen baja
- Ajusta la prop `quality` a un valor más alto
- Verifica el tamaño original en Cloudinary

## 🎯 Próximos Pasos

1. Configura tus credenciales en `.env.local`
2. Sube las imágenes nuevas a Cloudinary
3. Usa el componente `CloudinaryImage` en lugar de `Image`
4. Disfruta de imágenes optimizadas automáticamente 🚀

## 📚 Recursos Adicionales

- [Documentación de next-cloudinary](https://next.cloudinary.dev/)
- [Cloudinary Dashboard](https://cloudinary.com/console)
- [Optimización de Imágenes en Next.js](https://nextjs.org/docs/app/building-your-application/optimizing/images)
