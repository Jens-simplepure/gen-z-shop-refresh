# Gen Z Design Guide für Shopify Horizon Theme

## Übersicht

Diese Anleitung zeigt dir Schritt für Schritt, wie du das Horizon Theme mit einem modernen Gen Z Design transformierst.

---

## 🎨 Teil 1: Design Konzept

### Farbpalette
| Name | HSL Wert | Hex | Verwendung |
|------|----------|-----|------------|
| Electric Lime | `hsl(82, 100%, 50%)` | `#9FFF00` | Primäre Akzentfarbe, CTAs |
| Hot Coral | `hsl(12, 100%, 64%)` | `#FF6B47` | Sekundäre Akzente, Sale Badges |
| Cyber Cyan | `hsl(180, 100%, 50%)` | `#00FFFF` | Hover-Effekte, Links |
| Dark Background | `hsl(0, 0%, 4%)` | `#0A0A0A` | Haupthintergrund |
| Elevated Surface | `hsl(0, 0%, 8%)` | `#141414` | Cards, Header |

### Typografie
- **Display Font**: Space Grotesk (Headlines)
- **Body Font**: Inter (Fließtext)
- **Accent Font**: JetBrains Mono (Preise, Badges)

---

## 📁 Teil 2: Dateien die bearbeitet werden

1. `config/settings_schema.json` - Theme Settings
2. `layout/theme.liquid` - Fonts einbinden
3. `assets/base.css` - Custom CSS hinzufügen
4. `sections/header.liquid` - Header anpassen (optional)
5. `snippets/card-product.liquid` - Produktkarten (optional)

---

## 🔧 Teil 3: Schritt-für-Schritt Anleitung

### Schritt 1: Google Fonts einbinden

**Datei:** `layout/theme.liquid`

Füge im `<head>` Bereich vor `</head>` ein:

```liquid
<!-- Gen Z Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

---

### Schritt 2: CSS Variablen hinzufügen

**Datei:** `assets/base.css`

Füge ganz am **Anfang** der Datei ein:

```css
/* ================================================
   GEN Z DESIGN SYSTEM - CUSTOM VARIABLES
   ================================================ */

:root {
  /* Gen Z Accent Colors */
  --gen-z-lime: 82, 100%, 50%;
  --gen-z-coral: 12, 100%, 64%;
  --gen-z-cyan: 180, 100%, 50%;
  
  /* Dark Theme Colors */
  --gen-z-bg-dark: 0, 0%, 4%;
  --gen-z-bg-elevated: 0, 0%, 8%;
  --gen-z-bg-surface: 0, 0%, 12%;
  --gen-z-text-primary: 0, 0%, 95%;
  --gen-z-text-secondary: 0, 0%, 70%;
  --gen-z-text-muted: 0, 0%, 50%;
  
  /* Typography */
  --font-display: 'Space Grotesk', sans-serif;
  --font-body: 'Inter', sans-serif;
  --font-accent: 'JetBrains Mono', monospace;
  
  /* Gradients */
  --gradient-primary: linear-gradient(135deg, hsl(var(--gen-z-lime)), hsl(60, 100%, 60%));
  --gradient-secondary: linear-gradient(135deg, hsl(var(--gen-z-coral)), hsl(340, 100%, 65%));
  --gradient-accent: linear-gradient(135deg, hsl(var(--gen-z-cyan)), hsl(200, 100%, 60%));
  
  /* Glow Effects */
  --glow-lime: 0 0 20px hsla(var(--gen-z-lime), 0.5);
  --glow-coral: 0 0 20px hsla(var(--gen-z-coral), 0.5);
  --glow-cyan: 0 0 20px hsla(var(--gen-z-cyan), 0.5);
  
  /* Shadows */
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.3);
  --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.4);
  --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.5);
  
  /* Border Radius */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-full: 9999px;
  
  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-normal: 300ms ease;
  --transition-slow: 500ms ease;
}
```

---

### Schritt 3: Animationen hinzufügen

**Datei:** `assets/base.css`

Füge nach den CSS Variablen ein:

```css
/* ================================================
   ANIMATIONS
   ================================================ */

@keyframes glow-pulse {
  0%, 100% { box-shadow: var(--glow-lime); }
  50% { box-shadow: 0 0 40px hsla(var(--gen-z-lime), 0.8); }
}

@keyframes slide-up {
  from { 
    opacity: 0; 
    transform: translateY(20px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes bounce-subtle {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

/* Animation Classes */
.animate-glow { animation: glow-pulse 2s ease-in-out infinite; }
.animate-slide-up { animation: slide-up 0.5s ease-out forwards; }
.animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
.animate-bounce { animation: bounce-subtle 2s ease-in-out infinite; }
.animate-float { animation: float 3s ease-in-out infinite; }
```

---

### Schritt 4: Dark Theme Base Styles

**Datei:** `assets/base.css`

Füge ein:

```css
/* ================================================
   DARK THEME BASE
   ================================================ */

/* Nur wenn Dark Mode gewünscht ist - überschreibt Horizon Defaults */
body.dark-mode,
[data-theme="dark"] {
  --color-background: var(--gen-z-bg-dark);
  --color-foreground: var(--gen-z-text-primary);
  background-color: hsl(var(--gen-z-bg-dark));
  color: hsl(var(--gen-z-text-primary));
}

/* Optional: Immer Dark Mode */
/*
body {
  background-color: hsl(var(--gen-z-bg-dark)) !important;
  color: hsl(var(--gen-z-text-primary)) !important;
}
*/
```

---

### Schritt 5: Button Styles

**Datei:** `assets/base.css`

Füge ein:

```css
/* ================================================
   GEN Z BUTTON STYLES
   ================================================ */

/* Primary Button - Lime Gradient */
.button--gen-z-primary,
.btn--gen-z-primary {
  background: var(--gradient-primary) !important;
  color: hsl(var(--gen-z-bg-dark)) !important;
  border: none !important;
  border-radius: var(--radius-md) !important;
  font-family: var(--font-display) !important;
  font-weight: 600 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.05em !important;
  padding: 14px 28px !important;
  transition: all var(--transition-normal) !important;
  cursor: pointer !important;
}

.button--gen-z-primary:hover,
.btn--gen-z-primary:hover {
  transform: translateY(-3px) !important;
  box-shadow: var(--glow-lime) !important;
}

/* Secondary Button - Coral Gradient */
.button--gen-z-secondary,
.btn--gen-z-secondary {
  background: var(--gradient-secondary) !important;
  color: hsl(var(--gen-z-bg-dark)) !important;
  border: none !important;
  border-radius: var(--radius-md) !important;
  font-family: var(--font-display) !important;
  font-weight: 600 !important;
  padding: 14px 28px !important;
  transition: all var(--transition-normal) !important;
}

.button--gen-z-secondary:hover,
.btn--gen-z-secondary:hover {
  transform: translateY(-3px) !important;
  box-shadow: var(--glow-coral) !important;
}

/* Outline Button */
.button--gen-z-outline,
.btn--gen-z-outline {
  background: transparent !important;
  color: hsl(var(--gen-z-lime)) !important;
  border: 2px solid hsl(var(--gen-z-lime)) !important;
  border-radius: var(--radius-md) !important;
  font-family: var(--font-display) !important;
  font-weight: 600 !important;
  padding: 12px 26px !important;
  transition: all var(--transition-normal) !important;
}

.button--gen-z-outline:hover,
.btn--gen-z-outline:hover {
  background: hsla(var(--gen-z-lime), 0.1) !important;
  box-shadow: var(--glow-lime) !important;
}

/* Glow Button - Pulsing */
.button--gen-z-glow,
.btn--gen-z-glow {
  background: var(--gradient-primary) !important;
  color: hsl(var(--gen-z-bg-dark)) !important;
  border: none !important;
  border-radius: var(--radius-md) !important;
  animation: glow-pulse 2s ease-in-out infinite !important;
}
```

---

### Schritt 6: Typography Utilities

**Datei:** `assets/base.css`

```css
/* ================================================
   TYPOGRAPHY UTILITIES
   ================================================ */

.text-display {
  font-family: var(--font-display) !important;
}

.text-body {
  font-family: var(--font-body) !important;
}

.text-accent {
  font-family: var(--font-accent) !important;
}

.text-gradient-lime {
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.text-gradient-coral {
  background: var(--gradient-secondary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.text-glow-lime {
  text-shadow: 0 0 20px hsla(var(--gen-z-lime), 0.5);
}

.text-glow-coral {
  text-shadow: 0 0 20px hsla(var(--gen-z-coral), 0.5);
}

.text-glow-cyan {
  text-shadow: 0 0 20px hsla(var(--gen-z-cyan), 0.5);
}
```

---

### Schritt 7: Card Styles für Produkte

**Datei:** `assets/base.css`

```css
/* ================================================
   PRODUCT CARD STYLES
   ================================================ */

/* Gen Z Product Card */
.card--gen-z,
.product-card--gen-z {
  background: hsl(var(--gen-z-bg-elevated)) !important;
  border: 1px solid hsla(var(--gen-z-text-primary), 0.1) !important;
  border-radius: var(--radius-lg) !important;
  overflow: hidden !important;
  transition: all var(--transition-normal) !important;
}

.card--gen-z:hover,
.product-card--gen-z:hover {
  transform: translateY(-8px) !important;
  border-color: hsla(var(--gen-z-lime), 0.3) !important;
  box-shadow: var(--shadow-lg), var(--glow-lime) !important;
}

/* Card Image */
.card--gen-z .card__media img,
.product-card--gen-z img {
  transition: transform var(--transition-slow) !important;
}

.card--gen-z:hover .card__media img,
.product-card--gen-z:hover img {
  transform: scale(1.05) !important;
}

/* Card Title */
.card--gen-z .card__heading,
.product-card--gen-z .product-card__title {
  font-family: var(--font-display) !important;
  color: hsl(var(--gen-z-text-primary)) !important;
}

/* Card Price */
.card--gen-z .price,
.product-card--gen-z .price {
  font-family: var(--font-accent) !important;
  color: hsl(var(--gen-z-lime)) !important;
}

/* Sale Price */
.card--gen-z .price--on-sale .price-item--regular,
.product-card--gen-z .price--compare {
  color: hsl(var(--gen-z-text-muted)) !important;
  text-decoration: line-through !important;
}

.card--gen-z .price--on-sale .price-item--sale,
.product-card--gen-z .price--sale {
  color: hsl(var(--gen-z-coral)) !important;
}
```

---

### Schritt 8: Sale Badge

**Datei:** `assets/base.css`

```css
/* ================================================
   SALE BADGE
   ================================================ */

.badge--gen-z-sale,
.badge[data-badge="Sale"],
.card__badge.sale {
  background: var(--gradient-secondary) !important;
  color: hsl(var(--gen-z-bg-dark)) !important;
  font-family: var(--font-accent) !important;
  font-weight: 600 !important;
  font-size: 0.75rem !important;
  padding: 6px 12px !important;
  border-radius: var(--radius-full) !important;
  text-transform: uppercase !important;
  letter-spacing: 0.05em !important;
  animation: bounce-subtle 2s ease-in-out infinite !important;
}
```

---

### Schritt 9: Header Styles (Optional)

**Datei:** `assets/base.css`

```css
/* ================================================
   HEADER STYLES
   ================================================ */

/* Dark Header */
.header--gen-z,
.section-header--gen-z {
  background: hsla(var(--gen-z-bg-elevated), 0.95) !important;
  backdrop-filter: blur(20px) !important;
  -webkit-backdrop-filter: blur(20px) !important;
  border-bottom: 1px solid hsla(var(--gen-z-text-primary), 0.1) !important;
}

/* Navigation Links */
.header--gen-z .header__menu-item,
.header--gen-z nav a {
  font-family: var(--font-display) !important;
  color: hsl(var(--gen-z-text-primary)) !important;
  position: relative !important;
  transition: color var(--transition-fast) !important;
}

.header--gen-z .header__menu-item:hover,
.header--gen-z nav a:hover {
  color: hsl(var(--gen-z-lime)) !important;
}

/* Animated Underline */
.header--gen-z .header__menu-item::after,
.header--gen-z nav a::after {
  content: '' !important;
  position: absolute !important;
  bottom: -2px !important;
  left: 0 !important;
  width: 100% !important;
  height: 2px !important;
  background: var(--gradient-primary) !important;
  transform: scaleX(0) !important;
  transform-origin: right !important;
  transition: transform var(--transition-normal) !important;
}

.header--gen-z .header__menu-item:hover::after,
.header--gen-z nav a:hover::after {
  transform: scaleX(1) !important;
  transform-origin: left !important;
}

/* Logo Glow */
.header--gen-z .header__heading-link:hover {
  filter: drop-shadow(var(--glow-lime)) !important;
}
```

---

### Schritt 10: Footer Styles (Optional)

**Datei:** `assets/base.css`

```css
/* ================================================
   FOOTER STYLES
   ================================================ */

.footer--gen-z,
.section-footer--gen-z {
  background: linear-gradient(
    180deg, 
    hsl(var(--gen-z-bg-elevated)) 0%, 
    hsl(var(--gen-z-bg-dark)) 100%
  ) !important;
  border-top: 1px solid hsla(var(--gen-z-lime), 0.2) !important;
}

.footer--gen-z h3,
.footer--gen-z .footer__title {
  font-family: var(--font-display) !important;
  color: hsl(var(--gen-z-lime)) !important;
}

.footer--gen-z a {
  color: hsl(var(--gen-z-text-secondary)) !important;
  transition: color var(--transition-fast) !important;
}

.footer--gen-z a:hover {
  color: hsl(var(--gen-z-lime)) !important;
}

/* Newsletter */
.footer--gen-z .newsletter-form input {
  background: hsl(var(--gen-z-bg-surface)) !important;
  border: 1px solid hsla(var(--gen-z-text-primary), 0.2) !important;
  color: hsl(var(--gen-z-text-primary)) !important;
  border-radius: var(--radius-md) !important;
}

.footer--gen-z .newsletter-form input:focus {
  border-color: hsl(var(--gen-z-lime)) !important;
  box-shadow: var(--glow-lime) !important;
}
```

---

### Schritt 11: Utility Classes

**Datei:** `assets/base.css`

```css
/* ================================================
   UTILITY CLASSES
   ================================================ */

/* Backgrounds */
.bg-gen-z-dark { background-color: hsl(var(--gen-z-bg-dark)) !important; }
.bg-gen-z-elevated { background-color: hsl(var(--gen-z-bg-elevated)) !important; }
.bg-gen-z-surface { background-color: hsl(var(--gen-z-bg-surface)) !important; }

/* Text Colors */
.text-gen-z-lime { color: hsl(var(--gen-z-lime)) !important; }
.text-gen-z-coral { color: hsl(var(--gen-z-coral)) !important; }
.text-gen-z-cyan { color: hsl(var(--gen-z-cyan)) !important; }

/* Hover Effects */
.hover-lift {
  transition: transform var(--transition-normal) !important;
}
.hover-lift:hover {
  transform: translateY(-5px) !important;
}

.hover-glow-lime:hover {
  box-shadow: var(--glow-lime) !important;
}

.hover-glow-coral:hover {
  box-shadow: var(--glow-coral) !important;
}

.hover-scale {
  transition: transform var(--transition-normal) !important;
}
.hover-scale:hover {
  transform: scale(1.05) !important;
}

/* Borders */
.border-glow-lime {
  border: 1px solid hsla(var(--gen-z-lime), 0.3) !important;
}

.border-glow-coral {
  border: 1px solid hsla(var(--gen-z-coral), 0.3) !important;
}
```

---

## 📋 Teil 4: Anwendung im Theme

### CSS Klassen zu Elementen hinzufügen

#### Option A: Über Theme Editor
1. Gehe zu **Online Store > Themes > Customize**
2. Wähle eine Section aus
3. Suche nach "Custom CSS" oder "Additional CSS"
4. Füge Klassen hinzu

#### Option B: Direkt in Liquid Files
Füge die Klassen direkt zu HTML-Elementen hinzu:

```liquid
<!-- Button Beispiel -->
<button class="button button--gen-z-primary">
  In den Warenkorb
</button>

<!-- Card Beispiel -->
<div class="card card--gen-z">
  <!-- Card Content -->
</div>

<!-- Header Beispiel -->
<header class="header header--gen-z">
  <!-- Header Content -->
</header>
```

#### Option C: Automatisch alle Buttons stylen
Füge in `assets/base.css` ein:

```css
/* Alle Primary Buttons automatisch stylen */
.button--primary,
.shopify-challenge__button,
button[type="submit"],
.cart__checkout-button {
  background: var(--gradient-primary) !important;
  color: hsl(var(--gen-z-bg-dark)) !important;
  border: none !important;
  border-radius: var(--radius-md) !important;
  font-family: var(--font-display) !important;
  transition: all var(--transition-normal) !important;
}

.button--primary:hover,
.shopify-challenge__button:hover,
button[type="submit"]:hover,
.cart__checkout-button:hover {
  transform: translateY(-3px) !important;
  box-shadow: var(--glow-lime) !important;
}
```

---

## ✅ Teil 5: Checkliste

- [ ] Google Fonts in `theme.liquid` eingebunden
- [ ] CSS Variablen in `base.css` hinzugefügt
- [ ] Animationen definiert
- [ ] Button Styles hinzugefügt
- [ ] Typography Utilities erstellt
- [ ] Card Styles für Produkte
- [ ] Sale Badge gestylt
- [ ] Header Styles (optional)
- [ ] Footer Styles (optional)
- [ ] Utility Classes hinzugefügt
- [ ] Theme im Preview getestet

---

## 🎯 Teil 6: Tipps

1. **Backup machen**: Vor allen Änderungen Theme duplizieren
2. **Schrittweise vorgehen**: Nicht alles auf einmal ändern
3. **Preview nutzen**: Änderungen immer im Preview testen
4. **Browser Cache leeren**: Nach CSS-Änderungen Cache leeren (Cmd+Shift+R)
5. **Mobile testen**: Design auch auf Mobile Devices prüfen

---

## 🆘 Fehlerbehebung

### Styles werden nicht angewendet
- Browser Cache leeren
- Prüfen ob CSS-Datei gespeichert wurde
- `!important` hinzufügen falls nötig

### Fonts laden nicht
- Google Fonts Link in `theme.liquid` prüfen
- Konsole auf Fehler prüfen (F12)

### Animationen funktionieren nicht
- `@keyframes` Definition prüfen
- `animation` Property korrekt gesetzt?

---

**Fertig!** Dein Horizon Theme hat jetzt ein modernes Gen Z Design. 🚀
