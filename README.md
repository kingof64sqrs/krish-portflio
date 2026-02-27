# Krishna  Raichura - Portfolio Website

A modern, responsive portfolio website showcasing expertise in AI/ML Engineering, Generative AI, and Full-Stack Development.

## 🚀 Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Modern UI/UX**: Dark theme with terminal-inspired design
- **Smooth Animations**: Powered by Framer Motion
- **Accessibility**: WCAG compliant with proper semantic HTML
- **Performance Optimized**: Lazy loading, optimized images, and efficient code
- **SEO Ready**: Proper meta tags and structured data

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Vercel/Netlify ready

## 📱 Responsive Breakpoints

- **Mobile**: ≤768px
- **Tablet**: 768–1024px  
- **Desktop**: ≥1024px

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd basic-freelancing
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.jsx      # Navigation header
│   ├── Footer.jsx      # Site footer
│   └── Loader.jsx      # Loading screen
├── pages/              # Page components
│   ├── Home.jsx        # Landing page
│   ├── About.jsx       # About section
│   ├── Skills.jsx      # Skills showcase
│   ├── Projects.jsx    # Portfolio projects
│   └── Contact.jsx     # Contact form
├── image/              # Static images
├── index.css           # Global styles
├── App.jsx             # Main app component
└── main.jsx            # Entry point
```

## 🎨 Design System

### Colors
- **Primary**: `#ef4444` (Red)
- **Background**: `#0a0a0a` (Dark)
- **Card**: `#1a1a1a` (Dark Gray)
- **Text**: `#ffffff` (White)
- **Muted**: `#6b7280` (Gray)

### Typography
- **Headings**: Montserrat (Bold)
- **Body**: Inter (Regular)
- **Code**: JetBrains Mono

## ♿ Accessibility Features

- Semantic HTML structure
- Proper heading hierarchy (h1 > h2 > h3)
- ARIA labels and descriptions
- Keyboard navigation support
- Focus indicators
- Screen reader compatibility
- High contrast mode support
- Reduced motion support

## ⚡ Performance Optimizations

- Lazy loading for images
- Optimized bundle size
- Efficient animations
- Preloaded critical resources
- Minified CSS and JS
- Optimized font loading

## 🔧 Customization

### Adding Projects
Edit `src/pages/Projects.jsx` and add new projects to the `projects` array:

```javascript
{
  title: 'Project Name',
  description: 'Project description',
  tags: ['#tag1', '#tag2'],
  github: 'https://github.com/username/repo',
  tech: ['React', 'Node.js'],
  icon: Shield,
  category: 'Web Development'
}
```

### Updating Skills
Edit `src/pages/Skills.jsx` and modify the `skills` array.

### Changing Colors
Update the color variables in `src/index.css` and `tailwind.config.js`.

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contact

- **Email**: krishnapraichura@gmail.com
- **GitHub**: [@Krishna-Raichura](https://github.com/Krishna-Raichura)
- **LinkedIn**: [Krishna  Raichura](https://linkedin.com/in/krishna-raichura)

---

Built with ❤️ by Krishna  Raichura 