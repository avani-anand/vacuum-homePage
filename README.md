# Logicboots - AI-Powered Robotics Website

A modern, responsive website for Logicboots, a dynamic startup revolutionizing healthcare and household automation with AI-powered robotics. Built with React + Vite, styled with Tailwind CSS, and featuring smooth animations with Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, minimal UI inspired by LangChain's design philosophy
- **Vanta.js Integration**: Animated "Trunk effect" background on the hero banner
- **Smooth Animations**: Framer Motion for page transitions and scroll animations
- **Responsive Layout**: Mobile-first design that works on all devices
- **Interactive Components**: Hover effects and smooth transitions throughout
- **SEO Optimized**: Clean URLs and semantic HTML structure

## 🛠️ Tech Stack

- **Frontend**: React 19 + Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Animations**: Framer Motion
- **Background Effects**: Vanta.js (Trunk effect)
- **Icons**: Heroicons
- **Fonts**: Inter (Google Fonts)

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Banner.jsx      # Hero banner with Vanta.js
│   ├── Navbar.jsx      # Navigation component
│   ├── Footer.jsx      # Footer component
│   ├── FeaturedCard.jsx # Featured solutions cards
│   ├── ProductCard.jsx # Product display cards
│   └── SectionWrapper.jsx # Section layout wrapper
├── pages/              # Page components
│   ├── Home.jsx        # Homepage
│   ├── About.jsx       # About us page
│   ├── Products.jsx    # Products overview
│   ├── FeaturedDetail.jsx # Featured solution details
│   └── ProductDetail.jsx # Product details
├── App.jsx             # Main app component with routing
├── main.jsx            # App entry point
└── index.css           # Global styles and Tailwind imports
```

## 🎯 Key Sections

### Homepage
- Hero banner with Vanta.js Trunk effect
- About teaser with CTA
- Featured MedTech solutions (DinkarAI, AtharvaAI)
- Products showcase

### About Page
- Company story and mission
- Services overview
- Expertise areas
- Call to action

### Featured Solutions
- **DinkarAI**: Civil infrastructure inspection with AI-powered drones
- **AtharvaAI**: AI Co-Pilot for General Surgery

### Products
- AI-Powered Robotic Vacuum Cleaners
- AI-Powered Stethoscope with Remote Monitoring
- Nanobots for Cancer Treatment
- Coming Soon placeholder

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd logicboots
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 🎨 Customization

### Colors
The project uses a custom color palette defined in `tailwind.config.js`:
- Primary colors: Blue shades
- Secondary colors: Gray shades
- Custom gradients for cards and backgrounds

### Animations
All animations are powered by Framer Motion with consistent timing and easing:
- Page transitions: 0.6s duration
- Scroll animations: Staggered delays for elements
- Hover effects: Scale and shadow transformations

### Styling
The project follows Tailwind CSS best practices with:
- Custom component classes in `index.css`
- Responsive design patterns
- Consistent spacing and typography

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: Default (320px+)
- Tablet: `md:` (768px+)
- Desktop: `lg:` (1024px+)
- Large Desktop: `xl:` (1280px+)

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is proprietary software developed for Logicboots.

## 🤝 Contributing

For internal development and contributions, please follow the established coding standards and component patterns.

## 📞 Contact

For questions about this website or Logicboots products:
- Email: info@logicboots.com
- Website: [logicboots.com](https://logicboots.com)

---

Built with ❤️ by the Logicboots team
