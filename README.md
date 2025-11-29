# Wayloom.ai — Premium Link Hub

**Investor-ready, healthcare-grade micro-hub for Wayloom.ai**

A beautifully designed link-in-bio experience crafted for investors, healthcare partners, researchers, and users. Built with Apple-level polish and premium SaaS aesthetics.

---

## ✨ Design Philosophy

**Vercel × Linear × Notion × Apple**

- Ultra-clean typography with clear hierarchy
- Soft gradients and glassmorphism
- Subtle shadows and smooth animations
- Trust-first, investor-ready presentation
- Healthcare-tech aesthetic (purple/indigo/blue)
- Premium micro-interactions
- Accessibility-first approach

---

## 🎯 Key Features

### **Hero Section**
- Premium logo presentation with glassmorphism
- Animated status badge ("Actively Raising Seed Round")
- Powerful value proposition
- Clear, investor-friendly messaging

### **Key Metrics Dashboard**
- 4 high-impact stats (Assessment Time, Accuracy, Market Size, Development Phase)
- Hover micro-interactions
- Validates credibility instantly

### **Featured Actions (Primary CTAs)**
- Product Demo (YouTube modal)
- Investor Pitch Deck (modal with access request)
- Premium badges ("NEW", "INVESTORS")
- Animated gradient bars on hover
- Scale & shadow effects

### **Categorized Resources**
Organized by persona:
- **For Healthcare Providers** → Platform overview
- **For Researchers** → Publications & collaboration
- **Business Inquiries** → Partnership & investment contact

### **Trust Indicators**
- Partner logo section (GVSU, NVIDIA Inception, Microsoft for Startups)
- Builds immediate credibility

### **Primary CTA Section**
- Gradient background with strong contrast
- Dual CTAs: "Get in Touch" + "Explore Platform"
- Action-oriented design

### **Premium Footer**
- Tagline: "Science meets empathy, in the palm of your hand"
- Clean navigation links
- Professional branding

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit **http://localhost:3000**

---

## 🎨 Design System

### **Colors**
- **Primary Gradients**: Indigo 600 → Purple 600 → Blue 600
- **Backgrounds**: White with soft radial gradients
- **Accents**: Indigo/Purple/Blue (100–600)
- **Text**: Slate 500–900

### **Typography**
- **Headings**: Bold, tight tracking
- **Body**: Medium weight, relaxed leading
- **Labels**: Semibold, uppercase, wide tracking

### **Spacing**
- **Sections**: 12–16 (3rem–4rem)
- **Cards**: 4–6 (1rem–1.5rem)
- **Micro**: 2–3 (0.5rem–0.75rem)

### **Shadows**
- **Cards**: `shadow-lg`, `shadow-2xl`
- **Hover**: `shadow-indigo-200/50`
- **Glassmorphism**: `backdrop-blur-sm`, `bg-white/60`

### **Animations**
- **fadeInUp**: Sequential stagger (0.1s–0.15s delays)
- **Blob**: Smooth, slow-motion background blobs
- **Modal**: Fade + slide-in combination
- **Hover**: Scale (1.05–1.1), translate-y (-0.5 to -2)

---

## 🔧 Customization Guide

### **Update Metrics**
Edit the `metrics` array in `app/page.tsx`:

```typescript
const metrics = [
  { value: "7 min", label: "Screening Time", sublabel: "Per assessment" },
  // Add or modify...
];
```

### **Add/Remove Links**
Modify `primaryActions` or `resources`:

```typescript
const primaryActions: LinkItem[] = [
  {
    id: "demo",
    title: "Watch Product Demo",
    description: "...",
    url: "...",
    modalType: "video",
    gradient: "from-violet-600 via-purple-600 to-indigo-600",
    badge: "NEW",
    icon: <svg>...</svg>,
  },
];
```

### **Update Partner Logos**
Replace placeholder logos in the "Trust Indicators" section:

```tsx
<Image src="/logos/gvsu.png" alt="GVSU" width={128} height={48} />
```

### **Embed Pitch Deck**
In the modal section, uncomment and add your Google Slides or PDF URL:

```tsx
<iframe
  className="h-full w-full"
  src="https://docs.google.com/presentation/d/e/YOUR_ID/embed"
  title="Wayloom.ai Pitch Deck"
  allowFullScreen
></iframe>
```

---

## 📊 Sections Breakdown

1. **Hero** → Brand identity + value prop + live status
2. **Metrics** → 4-stat credibility dashboard
3. **Featured** → Primary actions (Demo, Pitch Deck)
4. **Resources** → Persona-based link categories
5. **Trust** → Partner/investor logos
6. **CTA** → Strong dual-action conversion section
7. **Footer** → Legal, contact, tagline

---

## 🎭 Micro-Interactions

| Element | Interaction | Effect |
|---------|-------------|--------|
| Logo | Hover | Scale 1.05 |
| Status Badge | Always | Pulse animation |
| Metric Cards | Hover | Lift + gradient overlay |
| Primary CTAs | Hover | Scale icon 1.1, lift -2px, gradient bar |
| Resource Links | Hover | Lift 0.5px, icon color shift |
| Buttons | Hover | Scale 1.05 |
| Modal | Open/Close | Fade + slide animation |

---

## 🌐 Modals

### **Video Modal** (Product Demo)
- Embeds YouTube with autoplay
- Full-width, responsive iframe
- Click outside or ESC to close

### **Pitch Deck Modal**
- Access request screen (default)
- Replace with embedded deck URL
- Professional gating for investors

---

## 📱 Responsive Design

- **Mobile-first** approach
- **Breakpoints**: sm (640px), lg (1024px)
- **Grid**: 2-col mobile → 4-col desktop (metrics)
- **Stack**: Vertical on mobile, horizontal on desktop (CTAs)

---

## 🚢 Deployment

### **Vercel (Recommended)**
```bash
npm run build
vercel deploy
```

### **Environment Variables**
None required for basic setup.

---

## 📧 Contact Integration

All email links use:
```
mailto:naimif@mail.gvsu.edu,belghouh@mail.gvsu.edu
```

Update in:
- Partnership link
- CTA section
- Footer
- Pitch deck access request

---

## 🔒 Best Practices

✅ **Accessibility**: ARIA labels, semantic HTML, keyboard navigation  
✅ **Performance**: Next.js Image optimization, lazy loading  
✅ **SEO**: Meta tags in `layout.tsx`  
✅ **Mobile**: Touch-friendly targets (min 44×44px)  
✅ **Loading**: Staggered animations prevent flash

---

## 🎯 Target Audiences

| Persona | Priority Links | Messaging |
|---------|----------------|-----------|
| **Investors** | Pitch Deck, Demo, Metrics | Market size, ROI, traction |
| **Clinicians** | Platform Overview, Research | Clinical validation, integration |
| **Researchers** | Publications, Collaboration | Methodology, data access |
| **Press/Media** | Demo, Platform, Contact | Story, impact, founders |

---

## 📦 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Fonts**: Geist Sans (Vercel)
- **Icons**: Heroicons (inline SVG)
- **Deployment**: Vercel (recommended)

---

## 📄 License

© 2025 Wayloom.ai  
Grand Valley State University — DCIH Research Lab

---

**Science meets empathy, in the palm of your hand.**

---

## 🎨 Visual Preview

**Current Sections:**
1. ✅ Glassmorphism logo container
2. ✅ Animated status badge
3. ✅ Key metrics grid (4 stats)
4. ✅ 2 featured primary actions with badges
5. ✅ 3 categorized resource sections
6. ✅ Partner trust indicators
7. ✅ Gradient CTA section
8. ✅ Premium footer with links

**Animations:**
- Sequential fade-in-up stagger
- Blob background animation
- Pulse effects on badges
- Scale + lift on hover
- Modal slide-in

---

For questions or customization help:  
📧 naimif@mail.gvsu.edu | belghouh@mail.gvsu.edu
