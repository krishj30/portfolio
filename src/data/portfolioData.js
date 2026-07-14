import wellnesswaveImage from '../assets/wellnesswave.png';
import socialFastTagImage from '../assets/social-fasttag.png';
import portfolioShowcaseImage from '../assets/portfolio.png';

export const navigationItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export const stats = [
  { value: '10+', label: 'Projects' },
  { value: '15+', label: 'Technologies' },
  { value: '100%', label: 'Dedication' },
];

export const aboutPoints = [
  'Builds AI-powered web and mobile applications with a strong product mindset.',
  'Blends design, engineering, and practical AI integration to ship polished experiences.',
  'Focused on scalable frontends, reliable APIs, and modern mobile interfaces.',
];

export const skillGroups = [
  {
    title: 'Frontend',
    items: ['React', 'React Native', 'HTML', 'CSS', 'Tailwind', 'JavaScript'],
  },
  {
    title: 'Backend',
    items: ['Python', 'FastAPI', 'REST APIs'],
  },
  {
    title: 'Database',
    items: ['MongoDB', 'Firebase'],
  },
  {
    title: 'AI',
    items: ['Gemini API', 'OpenAI APIs', 'Prompt Engineering'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Figma', 'Postman'],
  },
];

export const projects = [
  {
    name: 'WellnessWave',
    status: 'Live Product',
    description:
      'AI mental wellness platform that predicts depression and anxiety with machine learning while guiding users with personalized mental health resources.',
    features: [
      'Depression Prediction',
      'Anxiety Prediction',
      'Secure Authentication',
      'Dashboard',
      'Resources',
    ],
    tech: ['React', 'Python', 'Flask', 'MongoDB'],
    image: wellnesswaveImage,
    github: 'https://github.com/krishj30',
  },
  {
    name: 'Social FastTag',
    status: 'Growth Brand',
    description:
      'Premium social growth landing page for a digital-first brand focused on helping businesses and influencers build stronger online presence.',
    features: [
      'Growth Strategy',
      'Brand Positioning',
      'Content Planning',
      'Performance Tracking',
      'Lead Generation',
    ],
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'UI Strategy'],
    image: socialFastTagImage,
    github: 'https://github.com/krishj30',
  },
  {
    name: 'Portfolio Website',
    status: 'Case Study',
    description:
      'Modern responsive portfolio website built with React and Framer Motion to showcase work with a premium Apple-inspired aesthetic.',
    features: ['Responsive Layout', 'Framer Motion', 'Glassmorphism UI', 'Smooth Navigation'],
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    image: portfolioShowcaseImage,
    github: 'https://github.com/krishj30',
  },
];

export const services = [
  {
    title: 'Web Development',
    description: 'Premium marketing sites, dashboards, and product experiences built for speed and clarity.',
  },
  {
    title: 'Mobile App Development',
    description: 'React Native applications with smooth navigation, polished interactions, and production-ready structure.',
  },
  {
    title: 'Backend APIs',
    description: 'FastAPI and Python services that support secure workflows, clean data flow, and scalable integrations.',
  },
  {
    title: 'AI Integrations',
    description: 'Gemini and OpenAI-powered features that add useful intelligence without compromising product quality.',
  },
];

export const experienceTimeline = [
  {
    period: 'Now',
    title: 'Full Stack & AI Developer',
    description:
      'Building AI-powered web and mobile products with modern frontend systems, reliable APIs, and product-focused execution.',
  },
  {
    period: 'Current Projects',
    title: 'Product Builder',
    description:
      'Shipped WellnessWave and is actively building Social FastTag, combining product storytelling, motion, and practical user flows.',
  },
  {
    period: 'Education',
    title: 'MSc.IT',
    description: 'Somaiya School of Science & Applied, with a strong focus on applied software systems and modern development.',
  },
];

export const contactLinks = [
  { label: 'Email', value: 'krishjethva54@gmail.com', href: 'mailto:krishjethva54@gmail.com' },
  { label: 'GitHub', value: 'github.com/krishj30', href: 'https://github.com/krishj30' },
  { label: 'LinkedIn', value: 'linkedin.com/in/krish-jethva-58a98235b', href: 'https://www.linkedin.com/in/krish-jethva-58a98235b' },
  { label: 'WhatsApp', value: '7208720647', href: 'https://wa.me/917208720647' },
];

export const socialIcons = [
  { label: 'GitHub', href: 'https://github.com/krishj30' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/krish-jethva-58a98235b' },
  { label: 'WhatsApp', href: 'https://wa.me/917208720647' },
];