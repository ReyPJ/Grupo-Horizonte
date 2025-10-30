# FRAGMENTOS DE CÓDIGO - COPIAR Y PEGAR

## ARCHIVO: app/components/PartnerLogoSection.tsx

**BUSCAR** esta sección (aproximadamente línea 13-20):
```typescript
const empresas = [
    {
        name: "Constructora 4C",
        logo: "/4cSInfondoLogo.png",
        href: "/empresas/4C"
    },
    {
        name: "IMBAR",
        logo: "/imbarlogo.jpeg",
        href: "/empresas/imbar"
    },
```

**AGREGAR DESPUÉS DE IMBAR (nuevo bloque):**
```typescript
    {
        name: "GERD",
        logo: "/gerdlogo.png",
        href: "/empresas/gerd"
    },
```

**RESULTADO FINAL:**
```typescript
const empresas = [
    {
        name: "Constructora 4C",
        logo: "/4cSInfondoLogo.png",
        href: "/empresas/4C"
    },
    {
        name: "IMBAR",
        logo: "/imbarlogo.jpeg",
        href: "/empresas/imbar"
    },
    {
        name: "GERD",
        logo: "/gerdlogo.png",
        href: "/empresas/gerd"
    },
    {
        name: "Núcleo Energy",
        logo: "/LogoHorizontal@4x.png",
        href: "/empresas/nucleo-energy"
    },
    {
        name: "RECCMAQ2",
        logo: "/reccmalogoxD.png",
        href: "/empresas/reccmaq2"
    }
];
```

---

## ARCHIVO: app/[locale]/page.tsx

**BUSCAR** la sección `const companies = [` (aproximadamente línea 80-120)

**DESPUES DE**:
```typescript
        {
            company: t('CompanyData.imbar.name'),
            logoUrl: "/imbarlogo.jpeg",
            smallHistoryText: t('CompanyData.imbar.shortHistory'),
            smallHistoryText2: t('CompanyData.imbar.shortHistory2'),
            buttonText: t('CompanyData.imbar.buttonText'),
            keyServices: [
                t('CompanyData.imbar.services.substations'),
                t('CompanyData.imbar.services.transmission'),
                t('CompanyData.imbar.services.civilWorks'),
                t('CompanyData.imbar.services.manufacturing')
            ],
            image: "/LineasDeTransmisionElectrica.jpg",
            buttonMinWidth: "180px",
            buttonMaxWidth: "220px",
            bigButtonLinkTo: "/empresas/imbar"
        },
```

**AGREGAR ESTE NUEVO BLOQUE**:
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

## ARCHIVO: messages/es.json

**UBICACIÓN**: Buscar `"CompanyData": {` y luego `"imbar": {`

**DESPUÉS DE LA SECCIÓN COMPLETA DE "imbar"**, y **ANTES DE "fourC"**, insertar:

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

## ARCHIVO: messages/es.json - PartnerLogos

**UBICACIÓN**: `"PartnerLogos": { "title":`

**BUSCAR**:
```json
    "PartnerLogos": {
      "title": "Nuestras empresas",
      "goTo": "Ir a {company}"
    },
```

**NO CAMBIAR** - Este ya tiene las empresas sin GERD

---

## ARCHIVO: messages/es.json - Components partnerLogos

**UBICACIÓN**: `"Components": { "partnerLogos": { "companies":`

**BUSCAR**:
```json
    "partnerLogos": {
      "companies": [
        "Constructora 4C",
        "IMBAR",
        "Núcleo Energy",
        "RECCMAQ2"
      ]
    },
```

**REEMPLAZAR CON**:
```json
    "partnerLogos": {
      "companies": [
        "Constructora 4C",
        "IMBAR",
        "GERD",
        "Núcleo Energy",
        "RECCMAQ2"
      ]
    },
```

---

## ARCHIVO: messages/es.json - EmpresasMegaMenu

**UBICACIÓN**: `"EmpresasMegaMenu": { "empresas": [`

**BUSCAR**:
```json
      {
        "key": "imbar",
        "name": "IMBAR",
        "logo": "/imbarlogo.jpeg",
        "description": "Infraestructura eléctrica de alta tensión",
        "tagline": "20 años especializados",
        "href": "/empresas/imbar",
        "color": "#1E40AF",
        "highlights": ["Subestaciones 400 KV", "Fabricación 700 Ton/mes", "Certificación LAPEM"]
      },
      {
        "key": "reccmaq",
```

**INSERTAR ENTRE IMBAR Y RECCMAQ**:
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

## NOTAS IMPORTANTES

1. **ORDEN DE EMPRESAS**: 4C → IMBAR → GERD → Núcleo → RECCMAQ2
2. **LOGO**: Reemplazar `/gerdlogo.png` una vez que tengas el archivo real
3. **IMÁGENES**: Usando imágenes ya existentes (`/img143.jpg`, `/Secretaria.jpg`, etc.)
4. **COLOR**: `#1F2937` (gris oscuro corporativo de GERD)
5. **TRADUCCIÓN**: Solo ES y CN (sin EN)

