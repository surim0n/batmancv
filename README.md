# Batman CV

A modern, responsive CV website for Bruce Wayne, showcasing his skills and experience as Gotham's premier crime-fighter. This project is built with Next.js, React, and Tailwind CSS.

## 🦇 Overview

Bruce Wayne's professional portfolio website highlights his crime-fighting experience, technical skills, and past achievements in Gotham City. The site features a dark theme with yellow accents, responsive design, and smooth animations.

## 📋 Prerequisites

Before you begin, ensure you have met the following requirements:
* Node.js (v16.x or later)
* npm or yarn package manager
* Git

## 🚀 Installation and Setup

Follow these steps to get the project running locally:

1. **Clone the repository**

```bash
git clone https://github.com/surim0n/batmancv.git
cd batmancv
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Run the development server**

```bash
npm run dev
# or
yarn dev
```

4. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000) to see the site in action.

## 🛠️ Project Structure

```
batmancv/
├── app/                 # Next.js app directory
│   ├── globals.css      # Global CSS styles
│   ├── layout.tsx       # Root layout component
│   ├── page.tsx         # Home page component
│   └── past-experiences/# Past experiences page
├── components/          # Reusable UI components
│   └── ui/              # UI component library
├── public/              # Static assets
│   └── images/          # Image assets
├── tailwind.config.js   # Tailwind CSS configuration
├── package.json         # Project dependencies
└── README.md           # Project documentation
```

## 🎨 Key Features

- **Responsive Design**: Optimized for both desktop and mobile viewing
- **Custom UI Components**: Button, Card, and Progress components
- **Interactive Elements**: Hover effects and smooth transitions
- **Dark Theme**: Professional dark mode with yellow accent colors
- **Skills Visualization**: Visual representation of Batman's technical skills
- **Experience Timeline**: Showcase of past crime-fighting experience

## 🧩 Customization

### Color Theme

The project uses a custom color scheme defined in `tailwind.config.js`. The primary accent color is `batYellow`, which can be modified in this file.

### Adding Content

To update the CV content:
- Edit `app/page.tsx` for the main page content
- Edit `app/past-experiences/page.tsx` for the experience section

### Styling

Styles are primarily handled through Tailwind CSS classes. Global styles can be found in `app/globals.css`.

## 📱 Deployment

This project can be easily deployed to platforms like Vercel, Netlify, or GitHub Pages.

For Vercel deployment (recommended with Next.js):

```bash
npm install -g vercel
vercel
```

## 💻 Technologies Used

- **Next.js**: React framework for server-side rendering and routing
- **React**: JavaScript library for building user interfaces
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for React
- **Radix UI**: Unstyled, accessible UI components
- **TypeScript**: Static type-checking

## 🤔 Support

For support or questions, please open an issue in the GitHub repository or contact Bruce Wayne via the Bat-Signal.

## 📜 License

This project is available for use under the MIT License - see the LICENSE file for details.

---

Built with ❤️ in Gotham City
