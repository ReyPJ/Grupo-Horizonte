# INTEGRACIÓN DE GERD AL PROYECTO

## RESUMEN EXECUTIVO
Se ha completado la integración de GERD como 5ª empresa del grupo Horizonte con el mismo nivel de protagonismo que 4C e IMBAR. Los cambios incluyen datos en 2 idiomas (ES, CN) con ruta nueva y actualizaciones de componentes.

---

## 1. ACTUALIZACIONES EN messages/es.json

**UBICACIÓN**: Buscar `"reccmaq2": {` en CompanyData y ANTES de ese bloque, insertar:

```json
    "gerd": {
      "name": "GERD",
      "fullName": "GERD, Servicios y Soluciones en Ingeniería y Logística Aplicada",
      "years": "5",
      "founded": "2019",
      "shortHistory": "Empresa de ingeniería constituida en 2019 con un grupo de consultores con vasta experiencia en proyectos de sectores industrial, construcción, infraestructura, telecomunicaciones y minería.",
      "shortHistory2": "Especializados en diseño, desarrollo de ingeniería de construcción y fabricación de naves industriales con soluciones logísticas integradas.",
      "buttonText": "Conoce a GERD",
      "tagline": "Soluciones Integrales en Ingeniería y Logística",
      "heroDescription": "Somos una empresa de ingeniería especializada en soluciones integrales para el sector industrial y de infraestructura. Nuestro equipo de consultores expertos ofrece servicios de ingeniería, logística y diseño en proyectos complejos.",
      "mision": "Solucionar problemas de ingeniería especializada agregando valor a los procesos de nuestros clientes.",
      "vision": "Ser identificados como la mejor opción en el desarrollo de estudios y soluciones en ingeniería y logística.",
      "valores": ["Excelencia Técnica", "Integridad", "Innovación", "Compromiso"],
      "services": {
        "industrial": "Naves Industriales",
        "construction": "Ingeniería de Construcción",
        "infrastructure": "Obras de Infraestructura",
        "telecommunications": "Telecomunicaciones",
        "mining": "Minería",
        "industrialDesc": "Diseño y desarrollo de ingeniería de construcción y fabricación de naves industriales. Incluye sistemas de movimiento de materiales, diseño mecánico, pruebas de funcionamiento y sistemas de reforzamiento.",
        "constructionDesc": "Estudios geotécnicos, análisis de laboratorio, diseño de cimentación, superestructura y supervisión de obras. Experiencia en edificaciones, hospitales y obras civiles.",
        "infrastructureDesc": "Ingeniería básica y ejecutiva para presas, carreteras, puentes, túneles, canales y sistemas de auscultación. Análisis de estabilidad de taludes y diseño de conducción de agua.",
        "telecommunicationsDesc": "Planimetría de fibra óptica, diseño de redes, construcción de infraestructura de comunicaciones, instalación de terminales y hincado de postes.",
        "miningDesc": "Seguridad en instalaciones mineras, diseño de depósitos de jales, evaluación de estabilidad, planes de extracción y diseño de cimentación en unidades mineras."
      },
      "clients": [
        {
          "name": "Clientes del Sector Industrial",
          "location": "Nacional",
          "period": "2019-Actualidad",
          "description": "Proyectos de ingeniería especializada"
        },
        {
          "name": "Clientes de Infraestructura",
          "location": "Nacional",
          "period": "2019-Actualidad",
          "description": "Consultoría y supervisión"
        }
      ],
      "sections": {
        "engineeringExcellence": "Excelencia en Ingeniería",
        "integratedSolutions": "Soluciones integradas para el sector industrial",
        "servicesTitle": "Nuestros Servicios",
        "clientsTitle": "Clientes que Confían en Nosotros",
        "ctaTitle": "Soluciones de Ingeniería Personalizadas",
        "ctaSubtitle": "Lleva tu proyecto industrial al siguiente nivel con la experiencia y especialización de GERD",
        "contactUs": "Contáctanos",
        "viewProjects": "Ver Proyectos"
      }
    },
```

---

## 2. ACTUALIZACIÓN DE PartnerLogos EN messages/es.json

**UBICACIÓN**: Buscar `"Components": { "partnerLogos": { "companies": [`

Cambiar de:
```json
        "companies": [
          "Constructora 4C",
          "IMBAR",
          "Núcleo Energy",
          "RECCMAQ2"
        ]
```

A:
```json
        "companies": [
          "Constructora 4C",
          "IMBAR",
          "GERD",
          "Núcleo Energy",
          "RECCMAQ2"
        ]
```

---

## 3. ACTUALIZACIÓN DE EmpresasMegaMenu EN messages/es.json

**UBICACIÓN**: Buscar `"EmpresasMegaMenu": {` y dentro de `"empresas": [`

Agregar ANTES de reccmaq (después de imbar):

```json
      {
        "key": "gerd",
        "name": "GERD",
        "logo": "/gerdlogo.png",
        "description": "Soluciones integrales en ingeniería y logística",
        "tagline": "5 años de especialización",
        "href": "/empresas/gerd",
        "color": "#1F2937",
        "highlights": ["Naves Industriales", "Infraestructura", "Telecomunicaciones", "Minería"]
      },
```

---

## 4. ACTUALIZACIÓN DE messages/cn.json

**MISMO PROCESO QUE ES.JSON** pero con las traducciones al chino incluidas en el archivo `gerd_cn_section.txt`

---

## 5. CREAR PÁGINA DE GERD

**ARCHIVO**: `/app/[locale]/empresas/gerd/page.tsx`

Usar el contenido del archivo `gerd_page.tsx` adjunto

---

## 6. ACTUALIZAR app/components/PartnerLogoSection.tsx

**UBICACIÓN**: En el array `empresas` cerca de la línea donde están definidos los logos

Agregar:
```typescript
        {
            name: "GERD",
            logo: "/gerdlogo.png",
            href: "/empresas/gerd"
        },
```

**ORDEN FINAL**: 4C, IMBAR, GERD, Núcleo Energy, RECCMAQ2

---

## 7. ACTUALIZAR app/[locale]/page.tsx

**UBICACIÓN**: En la sección de `companies` array (donde están 4C, IMBAR, Núcleo, RECCMAQ2)

Agregar DESPUÉS de IMBAR:
```typescript
        {
            company: t('CompanyData.gerd.name'),
            logoUrl: "/gerdlogo.png",
            smallHistoryText: t('CompanyData.gerd.shortHistory'),
            smallHistoryText2: t('CompanyData.gerd.shortHistory2'),
            buttonText: t('CompanyData.gerd.buttonText'),
            keyServices: [
                t('CompanyData.gerd.services.industrial'),
                t('CompanyData.gerd.services.construction'),
                t('CompanyData.gerd.services.infrastructure'),
                t('CompanyData.gerd.services.telecommunications')
            ],
            image: "/img143.jpg",
            buttonMinWidth: "150px",
            buttonMaxWidth: "180px",
            bigButtonLinkTo: "/empresas/gerd"
        },
```

---

## 8. ORDEN FINAL DE EMPRESAS EN EL SITIO

**Secuencia visual (3 en página principal, todas en menú):**
1. Constructora 4C
2. IMBAR
3. GERD
4. Núcleo Energy (en menú)
5. RECCMAQ2 (en menú)

---

## 9. LOGO DE GERD

**UBICACIÓN ESPERADA**: `/public/gerdlogo.png`

- Tamaño recomendado: Mínimo 200x100px, máximo 500x300px
- Formato: PNG con fondo transparente
- Luego de subirlo, reemplaza `/gerdlogo.png` en todos los archivos de configuración

---

## 10. IMÁGENES DE GERD

**ACTUAL**: Usando imágenes ya existentes en el proyecto
- Hero: `/img143.jpg` (construcción industrial)
- Servicios: Se reutilizan `/Secretaria.jpg`, `/LineasDeTransmisionElectrica.jpg`, etc.

**FUTURO**: Cuando GERD proporcione sus propias imágenes, reemplazar referencias

---

## CHECKLIST DE VERIFICACIÓN

- [ ] Datos ES añadidos a messages/es.json
- [ ] Datos CN añadidos a messages/cn.json
- [ ] PartnerLogos actualizado (ES y CN)
- [ ] EmpresasMegaMenu actualizado (ES y CN)
- [ ] Página `/app/[locale]/empresas/gerd/page.tsx` creada
- [ ] PartnerLogoSection.tsx actualizado
- [ ] app/[locale]/page.tsx actualizado
- [ ] Logo de GERD subido a `/public/gerdlogo.png`
- [ ] Rutas verificadas y funcionando
- [ ] Menú de navegación actualizado
- [ ] Vista previa en home page con 3 empresas
- [ ] Página individual de GERD accesible

---

## PRÓXIMOS PASOS OPCIONALES

1. Agregar GERD a ProjectsMegaMenu.tsx con sus mercados específicos
2. Crear sección de Proyectos destacados de GERD
3. Agregar testimonios de clientes de GERD
4. Integrar GERD en timeline de historia del grupo

