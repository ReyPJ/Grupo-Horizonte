"use client";
import { CldImage } from 'next-cloudinary';
import Image from 'next/image';

interface CloudinaryImageProps {
    /**
     * Public ID de Cloudinary (ej: "empresas/imbar/hero-background")
     * O URL completa de Cloudinary
     */
    src: string;

    /**
     * Texto alternativo para la imagen
     */
    alt: string;

    /**
     * Ancho de la imagen (requerido para imágenes no-fill)
     */
    width?: number;

    /**
     * Alto de la imagen (requerido para imágenes no-fill)
     */
    height?: number;

    /**
     * Si true, la imagen llenará su contenedor (position absolute)
     */
    fill?: boolean;

    /**
     * Clases CSS adicionales
     */
    className?: string;

    /**
     * Si la imagen debe cargarse con prioridad (para LCP)
     */
    priority?: boolean;

    /**
     * Calidad de la imagen (1-100, default: auto)
     */
    quality?: number | 'auto';

    /**
     * Gravedad del crop (útil con fill)
     */
    gravity?: string;

    /**
     * Si true, usa el componente Image de Next.js en lugar de Cloudinary
     * Útil para migración gradual o fallback a imágenes locales
     */
    useLocal?: boolean;

    /**
     * Formato de entrega deseado (auto, webp, avif, etc.)
     */
    format?: 'auto' | 'webp' | 'avif' | 'jpg' | 'png';
}

export default function CloudinaryImage({
    src,
    alt,
    width,
    height,
    fill = false,
    className = '',
    priority = false,
    quality = 'auto',
    gravity = 'auto',
    useLocal = false,
    format = 'auto'
}: CloudinaryImageProps) {
    // Si useLocal es true, usa el componente Image estándar de Next.js
    // Útil para mantener imágenes locales durante la migración
    if (useLocal || src.startsWith('/')) {
        return (
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                fill={fill}
                className={className}
                priority={priority}
                quality={typeof quality === 'number' ? quality : 75}
            />
        );
    }

    // Para imágenes de Cloudinary
    if (fill) {
        return (
            <CldImage
                src={src}
                alt={alt}
                fill
                className={className}
                priority={priority}
                quality={quality}
                gravity={gravity}
                format={format}
                sizes="100vw"
            />
        );
    }

    return (
        <CldImage
            src={src}
            alt={alt}
            width={width || 800}
            height={height || 600}
            className={className}
            priority={priority}
            quality={quality}
            gravity={gravity}
            format={format}
        />
    );
}
