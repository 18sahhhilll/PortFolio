# 🚀 Sahil Sangle - Developer Portfolio

A modern, responsive developer portfolio website built with React, TypeScript, and Tailwind CSS. Features a clean design with dark mode support, smooth animations, and comprehensive sections showcasing my work, skills, and achievements.

[![Live Demo](https://img.shields.io/badge/demo-live-success?style=for-the-badge)](https://your-portfolio-url.vercel.app)
[![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)](LICENSE)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

![Portfolio Preview](https://via.placeholder.com/1200x630?text=Portfolio+Preview)

## ✨ Features

### 🎨 Modern Design
- **Responsive Layout** - Seamlessly adapts to mobile, tablet, and desktop screens
- **Dark Mode Toggle** - Easy on the eyes with persistent theme preference
- **Smooth Animations** - Elegant transitions and hover effects throughout
- **Glassmorphism Effects** - Modern UI with depth and visual hierarchy

### 📱 Sections Included
- **Hero Section** - Eye-catching introduction with social links and CTA buttons
- **About Me** - Professional bio with key statistics
- **Skills** - Categorized technical skills with proficiency levels
- **Projects** - Showcase of featured projects with live demos and GitHub links
- **Experience** - Timeline of work experience and education
- **Achievements** - Award-winning projects and competition wins
- **Contact Form** - Functional contact form with client-side validation

### 🛠️ Technical Highlights
- **Type-Safe** - Full TypeScript implementation for robust code
- **Component-Based** - Modular, reusable React components
- **Optimized Performance** - Fast load times with Vite's lightning-fast HMR
- **SEO Ready** - Semantic HTML structure for better search engine visibility
- **Accessible** - ARIA labels and keyboard navigation support

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm
- Git for version control

### Installation

```bash
# Clone the repository
git clone https://github.com/18sahhhilll/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` and start exploring! 🎉

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

## 📦 Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **React** | UI Framework | 18.x |
| **TypeScript** | Type Safety | 5.x |
| **Vite** | Build Tool & Dev Server | 6.x |
| **Tailwind CSS** | Utility-First Styling | 3.x |
| **Lucide React** | Icon Library | Latest |

## 🗂️ Project Structure

```
portfolio/
├── public/                    # Static assets
│   └── Sahil_Resume.pdf      # Downloadable resume
├── src/
│   ├── components/           # Reusable React components
│   │   ├── Navbar.tsx       # Navigation with active link detection
│   │   ├── Hero.tsx         # Landing section
│   │   ├── About.tsx        # About me section
│   │   ├── Skills.tsx       # Skills showcase
│   │   ├── Projects.tsx     # Project portfolio
│   │   ├── Experience.tsx   # Work & education timeline
│   │   ├── Achievements.tsx # Awards & recognition
│   │   ├── Contact.tsx      # Contact form
│   │   └── Footer.tsx       # Footer with social links
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles & Tailwind directives
├── index.html               # HTML template
├── tailwind.config.cjs      # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── vite.config.ts           # Vite configuration
```

## 🎨 Customization Guide

### Update Personal Information

All portfolio data is centralized in the `portfolioData` object within `App.tsx`:

```typescript
const portfolioData = {
  name: "Your Name",
  role: "Your Role",
  email: "your.email@example.com",
  github: "https://github.com/yourusername",
  // ... update with your information
};
```

### Modify Color Scheme

Edit `tailwind.config.cjs` to customize the color palette:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6', // Customize primary color
      }
    },
  },
}
```

### Add Your Projects

Update the `projects` array with your own work:

```typescript
projects: [
  {
    id: 1,
    title: "Project Name",
    description: "Project description...",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/yourusername/project",
    demo: "https://project-demo.com"
  },
]
```

### Replace Profile Image

Replace the placeholder initials in `Hero.tsx`:

```jsx
<img 
  src="/profile.jpg" 
  alt="Profile" 
  className="w-32 h-32 rounded-full shadow-xl"
/>
```

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production (outputs to `dist/`) |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

## 🚀 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/18sahhhilll/portfolio)

```bash
# Using Vercel CLI
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### Deploy to GitHub Pages

1. Update `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/repository-name/',
  // ...
})
```

2. Build and deploy the `dist` folder

## 🎯 Key Features Breakdown

### Smooth Scrolling Navigation
Active section detection with smooth scroll behavior and responsive mobile menu.

### Dark Mode Implementation
Persistent theme preference using localStorage with smooth transitions.

### Form Validation
Client-side validation with real-time error messages and success feedback.

### Responsive Design
Mobile-first approach ensuring perfect display across all device sizes.

## 🔧 Advanced Configuration

### Enable Type-Aware ESLint Rules

For production applications, enable stricter type checking:

```js
// eslint.config.js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      tseslint.configs.recommendedTypeChecked,
      // For stricter rules
      tseslint.configs.strictTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
```

### Add React-Specific Linting

```bash
npm install -D eslint-plugin-react-x eslint-plugin-react-dom
```

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  {
    extends: [
      reactX.configs['recommended-typescript'],
      reactDom.configs.recommended,
    ],
  },
])
```

## 📊 Performance Optimization

- **Lazy Loading** - Components load on-demand for faster initial render
- **Code Splitting** - Vite automatically splits code for optimal bundle size
- **Asset Optimization** - Images and assets are optimized during build
- **Tree Shaking** - Unused code is automatically removed

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/18sahhhilll/portfolio/issues).

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Vite** - For blazing fast build times ⚡
- **Tailwind CSS** - For utility-first styling 🎨
- **Lucide** - For beautiful icons 🎯
- **React** - For the amazing framework ⚛️

## 📧 Contact

**Sahil Sandeep Sangle**

- 📧 Email: sahilsangle1806@gmail.com
- 💼 LinkedIn: [linkedin.com/in/sahil-sangle](https://linkedin.com/in/sahil-sangle)
- 🐙 GitHub: [@18sahhhilll](https://github.com/18sahhhilll)
- 📍 Location: Pune, Maharashtra, India

---

<div align="center">
  <p>⭐ Star this repository if you find it helpful!</p>
  <p>Made with ❤️ and ☕ by Sahil Sangle</p>
</div>