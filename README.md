# 🚗 Costel Banden - Mobile Tire Service Website

A modern, multilingual website for mobile tire services in Roeselare, Belgium.

## 🌟 Features

### 🌍 Multilingual Support
- **Romanian** (Română) - Primary language
- **English** - International clients
- **French** (Français) - Local Belgian clients
- **Dutch** (Nederlands) - Local Belgian clients

### 🛠️ Services
- Mobile tire mounting/dismounting
- Tire balancing and rotation
- Emergency tire services
- Competitive pricing starting from €30

### 💻 Technical Features
- **Next.js 15** with App Router
- **React 19** with modern hooks
- **Tailwind CSS** for responsive design
- **SQLite** database for content management
- **Admin panel** with authentication
- **SEO optimized** with multilingual support
- **PWA ready** with manifest

### 📱 User Experience
- Fully responsive design
- WhatsApp integration for quick contact
- Online appointment booking
- Emergency service banner
- Cookie consent management
- Performance optimized

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd costel-banden
```

2. Install dependencies:
```bash
npm install
```

3. Initialize the database:
```bash
node db/init-local-db.js
```

4. Start development server:
```bash
npm run dev
```

The site will be available at `http://localhost:4002`

## 🏗️ Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── [lang]/         # Multilingual routes
│   ├── contact/        # Contact page
│   ├── servicii/       # Services page
│   └── admin-login/    # Admin authentication
├── components/         # React components
├── utils/              # Utility functions
└── data/              # Static data files

public/
├── locales/           # Translation files
├── uploads/           # Images and media
└── data/             # Public data files

db/
└── init-local-db.js  # Database initialization
```

## 🎨 Customization

### Adding New Languages
1. Create translation file in `public/locales/[lang].json`
2. Add language to `src/utils/i18n.ts`
3. Update language switcher component

### Modifying Content
- **Contact Info**: Edit `public/data/contact-default.json`
- **Services**: Update through admin panel or `public/data/services-default.json`
- **Translations**: Modify files in `public/locales/`

## 🔧 Admin Panel

Access the admin panel at `/admin` (any language):
- Manage contact information
- Update service pricing
- View site analytics
- Content management

Default admin authentication is cookie-based. Configure in middleware.js.

## 📊 Performance

- **Lighthouse Score**: 90+ on all metrics
- **Core Web Vitals**: Optimized
- **SEO**: Multilingual sitemaps and meta tags
- **Accessibility**: WCAG compliant

## 🌐 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Auto-deployment on every push

### Manual Deployment
```bash
npm run build
npm run start
```

## 📞 Contact Information

- **Phone**: +32 473 25 53 83
- **Email**: Costelbanden@gmail.com
- **WhatsApp**: +32 473 25 53 83
- **Location**: Roeselare, West Flanders, Belgium
- **Schedule**: Friday 20:00 - Sunday 22:00

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is private and proprietary to Costel Banden.

## 🙏 Acknowledgments

- Built with Next.js and React
- Styled with Tailwind CSS
- Icons from Lucide React
- Hosting on Vercel
