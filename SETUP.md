# Portfolio Website Setup & Configuration

Bu, DevOps, Platform Engineering ve AI Systems Mühendisi için tasarlanan modern, minimalist bir portfolyo web sitesidir.

## 🚀 Başlangıç

### Kurulum

```bash
# Dependencies yükle
npm install

# Development sunucusunu başlat
npm run dev

# Production build oluştur
npm run build

# Production build'i öncizle
npm npm run preview
```

## 📧 Email Form Configuration (Önemli!)

Iletişim formu çalıştırmak için Formspree entegrasyonunu yapmanız gerekir:

1. **Formspree'ye kaydol:** https://formspree.io/
2. **Yeni bir form oluştur** ve form ID'ni kopyala (örn: `mkyyzlqp`)
3. **`.env.local` dosyası oluştur:**
   ```
   VITE_FORMSPREE_ID=your_form_id_here
   ```
4. **Development sunucusunu yeniden başlat:** `npm run dev`

### Demo Modu
Form ID belirtmezseniz, form demo modunda çalışacak ve başarılı gözükecektir (gerçekte email gönderilmez).

## 🔧 Teknolojiler

- **Frontend Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Smooth Scroll:** React Scroll
- **Email:** Formspree

## 📁 Proje Yapısı

```
src/
├── components/
│   ├── common/              # Reusable components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── GlowBorder.tsx
│   │   └── TextGradient.tsx
│   ├── effects/             # Animation components
│   │   ├── TypewriterText.tsx
│   │   └── ScrollReveal.tsx
│   ├── layout/              # Layout components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── SectionWrapper.tsx
│   └── sections/            # Page sections
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Projects.tsx
│       └── Contact.tsx
├── hooks/                   # Custom React hooks
│   ├── useTypewriter.ts
│   ├── useScrollAnimation.ts
│   └── useIntersectionObserver.ts
├── data/                    # Static data
│   ├── skills.ts
│   ├── projects.ts
│   ├── experience.ts
│   └── socials.ts
├── types/                   # TypeScript interfaces
│   └── index.ts
├── styles/                  # Global styles
│   └── globals.css
├── App.tsx
├── main.tsx
└── index.css
```

## 🎨 Tasarım Özellikleri

### Renk Paleti
- **Dominant Dark:** `#0f0f0f` - `#1a1a1a`
- **Accent (Turuncu):** `#FF6B00`
- **Text Primary:** `#f8fafc`
- **Text Secondary:** `#94a3b8`

### Animasyonlar
- **Scroll Reveal:** Scroll sırasında elementler fade-in + slide-up
- **Typewriter Effect:** Hero bölümünde yazı yazma animasyonu
- **Glow Effects:** Hover'da turuncu glow efektleri
- **Micro-interactions:** Button pulse, card scale, icon transitions

## 🚀 GitHub Pages Deployment

### Deployment Adımları

1. **Repo settings'e git:** Settings → Pages
2. **Build and deployment** kısmında:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
3. **Build yap ve push et:**
   ```bash
   npm run build
   git add .
   git commit -m "build: portfolio site"
   git push origin main
   ```

### Custom Domain (Opsiyonel)
GitHub Pages'de custom domain ayarlaması yapabilirsin.

## 📝 Data Güncelleme

### Skills/Tech Stack
**Dosya:** `src/data/skills.ts`
```typescript
{
  category: 'DevOps & Infrastructure',
  skills: [
    {
      name: 'Kubernetes',
      description: 'OKD/K8s cluster management',
      icon: '⚙️',
      span: 'col-span-2',  // Bento grid boyutu
    },
    // ...
  ]
}
```

### Projeler
**Dosya:** `src/data/projects.ts`
```typescript
{
  id: 'project-id',
  title: 'Project Title',
  description: 'Project description',
  technologies: ['Tech1', 'Tech2'],
  github: 'https://github.com/...',
  liveDemo: 'https://...',
  featured: true,
}
```

### Deneyim/Timeline
**Dosya:** `src/data/experience.ts`
```typescript
{
  id: 'exp-id',
  company: 'Company Name',
  position: 'Position',
  period: 'Oct 2024 - Present',
  current: true,
}
```

### Sosyal Medya
**Dosya:** `src/data/socials.ts`
```typescript
{
  name: 'GitHub',
  url: 'https://github.com/username',
  icon: 'Github',  // Lucide icon name
  label: 'GitHub Profile',
}
```

## 🎯 Customization

### Kişisel Bilgiler Güncelle
- `src/components/sections/Hero.tsx` - Başlık, subtitle, CTA butonu
- `src/data/socials.ts` - Sosyal medya linklerine
- `src/data/experience.ts` - Kariyer bilgilerine
- `src/components/layout/Navbar.tsx` - Logo ve branding

### Renkleri Değiştir
`tailwind.config.ts`'de accent rengi güncelle:
```typescript
accent: {
  DEFAULT: '#YENİ_RENK',
  // ...
}
```

### Font'ları Değiştir
`src/index.css`'de import ettiğin Google Fonts'u güncelle.

## 📊 Performance

- **Lighthouse Score Target:** 90+
- **Gzip Size:** ~258KB (minified)
- **Smooth Animations:** 60fps target
- **Mobile Responsive:** Tailwind breakpoints kullanıyor

## 🐛 Troubleshooting

### Build hatası: Tailwind not found
```bash
npm install -D @tailwindcss/postcss
```

### Form submission çalışmıyor
- Formspree ID'nizi kontrol edin
- `.env.local` dosyasının doğru formatta olduğundan emin olun
- Browser console'da hataları kontrol edin

### Animasyonlar çalışmıyor
- Framer Motion kurulu olduğundan emin ol: `npm list framer-motion`
- Tailwind animations config'i kontrol et

## 📚 Kaynaklar

- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Vite Documentation](https://vite.dev/)
- [GitHub Pages](https://pages.github.com/)
- [Formspree](https://formspree.io/)

---

**Happy Coding!** 🚀
