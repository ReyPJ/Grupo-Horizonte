# Migración i18n - Tareas Pendientes

## Estado Actual
- ✅ Estructura i18n implementada (middleware, routing, config)
- ✅ messages/es.json expandido con CompanyData para 4 empresas
- ✅ 9 archivos migrados: 4 company pages + ContactForm + ContactInfo + ProjectHero + BlogPage
- ⏳ 350+ strings pendientes en componentes

## Tareas Pendientes - Prioridad

### CRÍTICA (Hacer primero)

#### 1. ContactInfo.tsx - Completar migración
**Archivo**: `/app/components/contacto/ContactInfo.tsx`
**Strings hardcodeados sin migrar**:
- Línea 103: "Respuesta inmediata"
- Línea 114: "Correos"
- Línea 129: "Dirección"
- Línea 132-135: La dirección completa (RET 1 Cecilio Robelo...)
- Línea 145: "Horario"
- Línea 147-159: Horarios (Lun - Vie, Sábado, Domingo, etc.)
- Línea 169: "Cobertura"
- Línea 172-174: "Atendemos proyectos en todo México y Latinoamérica"

**Acción**:
1. Agregar a `messages/es.json` en Contact:
```json
"whatsappImmediateResponse": "Respuesta inmediata",
"emailsSection": "Correos",
"addressSection": "Dirección",
"addressLine1": "RET 1 Cecilio Robelo No. 66,",
"addressLine2": "Jardín Balbuena,",
"addressLine3": "Venustiano Carranza,",
"addressLine4": "CDMX, CP 15900",
"hoursSection": "Horario",
"hoursMondayFriday": "Lun - Vie",
"hoursTime1": "9:00 - 18:00",
"hoursSaturday": "Sábado",
"hoursTime2": "9:00 - 14:00",
"hoursSunday": "Domingo",
"hoursClosed": "Cerrado",
"coverageSection": "Cobertura",
"coverageText": "Atendemos proyectos en todo México y Latinoamérica"
```
2. Actualizar ContactInfo.tsx para usar t() en todos estos strings

#### 2. ProjectsGrid.tsx - Array de 10+ proyectos
**Archivo**: `/app/components/proyectos/ProjectsGrid.tsx`
**Tamaño**: Líneas 8-92 (84 líneas con 10+ proyectos hardcodeados)
**Acción**:
1. Extraer array completo de proyectos a messages/es.json en una sección "ProjectsData"
2. Cada proyecto debe tener: title, description, tags, date, image
3. Usar t.raw('ProjectsData.projects') en el componente

#### 3. ProjectsTimeline.tsx - Timeline de proyectos
**Archivo**: `/app/components/proyectos/ProjectsTimeline.tsx`
**Tamaño**: Líneas 5-78 (~3 categorías con múltiples items)
**Acción**:
1. Crear "ProjectsTimeline" en messages/es.json
2. Estructura: Categories > [category] > items > [item] con title, description
3. Usar t.raw() en el componente para mapear

#### 4. EmpresasMegaMenu.tsx - Menu de empresas
**Archivo**: `/app/components/EmpresasMegaMenu.tsx`
**Tamaño**: Líneas 5-46 (Array con 4 empresas + descriptions)
**Acción**:
1. Usar CompanyData existente de messages/es.json
2. Mapear cada empresa con t.raw('CompanyData.imbar') etc.
3. Extraer descriptions si no existen

### ALTA PRIORIDAD

#### 5. Componentes Enfoque
- `EnfoqueHero.tsx` - Hero title, subtitle, CTA
- `EnfoqueProcess.tsx` - Process steps titles
- `EnfoqueMVV.tsx` - Mission/Vision/Values cards
- `EnfoqueSustainability.tsx` - Sustainability features
- `EnfoqueTeam.tsx` - Team section texts
- `EnfoqueCTA.tsx` - CTA buttons
- `EnfoqueIntro.tsx` - Intro content

**Acción**: Crear namespace "Enfoque" en messages/es.json y migrar todos

#### 6. Componentes Proyectos
- `ProjectsShowcase.tsx` - Showcase content
- `ProjectsCapabilities.tsx` - Capabilities section
- `ProjectsStats.tsx` - Stats labels
- `ProjectsCTA.tsx` - CTA texts

**Acción**: Usar namespace "Projects" (algunos ya en Contact)

### MEDIA PRIORIDAD

#### 7. Componentes Empresas
- `CompanyServicesSection.tsx` - Services descriptions
- `CompanyMVVSection.tsx` - MVV content
- `CompanyClientsSection.tsx` - Clients section
- `CompanyHeroSection.tsx` - Hero sections

**Acción**: Usar CompanyData existente, completar lo que falte

#### 8. Otros Componentes
- `HeaderNav.tsx` - Navigation links (ver si ya están en Navigation)
- `footer.tsx` - Footer links (ver si ya están en Footer)
- `BlogCarousel.tsx` - Blog carousel texts
- `ProyectsSlider.tsx` - Slider content
- `CompanySlider.tsx` - Slider content
- `PartnerLogoSection.tsx` - Partner section (probablemente PartnerLogos)
- `ContactHero.tsx` - Contact hero
- `ContactCTA.tsx` - Contact CTA
- `ContactMap.tsx` - Map section
- `EnfoqueMegaMenu.tsx` - Enfoque menu
- `ProjectsMegaMenu.tsx` - Projects menu
- `bigButton.tsx` - Si tiene text hardcodeado

## Patrón a Seguir

1. **Leer archivo de componente**
2. **Identificar strings hardcodeados** (búsqueda de comillas simples/dobles con texto)
3. **Agregar a messages/es.json** en namespace apropiado
4. **Actualizar componente**:
   - Agregar: `import { useTranslations } from 'next-intl';`
   - Agregar: `const t = useTranslations('Namespace');`
   - Reemplazar strings: `"text"` → `t('key')`
   - Para arrays: `t.raw('key')` y mapear el resultado

## Ejemplo Patrón (ContactInfo.tsx)

**Antes**:
```tsx
<h3>{t('phonesSection')}</h3>  // Ya migrado
<p>Respuesta inmediata</p>     // PENDIENTE
```

**Después**:
```tsx
<h3>{t('phonesSection')}</h3>
<p>{t('whatsappImmediateResponse')}</p>
```

## Archivos por Revisar

Total: 33 componentes en `/app/components/`

Completados:
- contacto/ContactForm.tsx ✅
- contacto/ContactInfo.tsx ⏳ (parcial)
- proyectos/ProjectHero.tsx ✅

Pendientes:
- proyectos/ProjectsGrid.tsx (CRÍTICO)
- proyectos/ProjectsTimeline.tsx (CRÍTICO)
- proyectos/ProjectsShowcase.tsx
- proyectos/ProjectsCapabilities.tsx
- proyectos/ProjectsStats.tsx
- proyectos/ProjectsCTA.tsx
- proyectos/ProjectsIntro.tsx
- enfoque/* (7 archivos)
- empresas/* (4 archivos)
- EmpresasMegaMenu.tsx (CRÍTICO)
- EnfoqueMegaMenu.tsx
- ProjectsMegaMenu.tsx
- BlogCarousel.tsx
- ProyectsSlider.tsx
- CompanySlider.tsx
- PartnerLogoSection.tsx
- HeaderNav.tsx
- footer.tsx
- contacto/ContactHero.tsx
- contacto/ContactCTA.tsx
- contacto/ContactMap.tsx
- bigButton.tsx

## Último Estado de messages/es.json

- Contact: ✅ Expandido con 50+ keys
- CompanyData: ✅ Completo para 4 empresas (IMBAR, 4C, Nucleó, RECCMAQ2)
- Navigation: ✅ Básico
- Hero, PartnerLogos, Footer: ✅ Básicos

**Pendiente agregar**:
- ProjectsData (10+ proyectos para ProjectsGrid)
- ProjectsTimeline (categorías de timeline)
- Enfoque (todos los textos de enfoque)
- Projects (stats, capabilities, etc.)
- Completar strings de ContactInfo (address, hours, coverage)

## Checklist Final

- [ ] ContactInfo.tsx - migración completa
- [ ] ProjectsGrid.tsx - migración completa
- [ ] ProjectsTimeline.tsx - migración completa
- [ ] EmpresasMegaMenu.tsx - migración completa
- [ ] Todos Enfoque components
- [ ] Todos Proyectos components (salvo Hero)
- [ ] Todos Empresas components
- [ ] Componentes de navegación y footer
- [ ] Componentes diversos (Blog, Slider, etc.)
- [ ] Validar que NO haya más hardcoded text
- [ ] Build y test en navegador

## Comandos Útiles

```bash
# Buscar strings hardcodeados en componentes
grep -r "\"[A-Z].*\"" app/components/ --include="*.tsx" | grep -v "t(" | head -50

# Validar que se importa useTranslations
grep -r "useTranslations" app/components/ --include="*.tsx" | wc -l
```
