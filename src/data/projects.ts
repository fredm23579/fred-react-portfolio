export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  category: 'AI/ML' | 'Full-Stack' | 'Frontend';
  github: string | null;
  live: string | null;
  highlights: string[];
  featured: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'AI Chat — Universal CLI Assistant',
    description:
      'Universal terminal application supporting 6 AI providers simultaneously. Features automatic web search integration, file attachments, persistent conversation memory, and Google Drive/Gmail OAuth2 integration.',
    longDescription:
      'A sophisticated command-line assistant that aggregates OpenAI, Anthropic Claude, Google Gemini, Perplexity, xAI Grok, and Meta Llama under a single unified interface. Supports real-time web search augmentation, multi-turn memory persistence, and secure cloud integrations.',
    tech: [
      'Node.js', 'JavaScript', 'OpenAI API', 'Anthropic Claude',
      'Google Gemini', 'Perplexity', 'xAI Grok', 'Meta Llama', 'OAuth2',
    ],
    category: 'AI/ML',
    github: 'https://github.com/fredm23579/openai-chat-commandline',
    live: null,
    highlights: [
      '6 AI providers in one unified interface',
      'Automatic web search integration via Tavily/Brave',
      'Persistent conversation memory across sessions',
      'Google Drive & Gmail OAuth2',
    ],
    featured: true,
  },
  {
    id: 2,
    title: 'Shop-Shop — MERN E-Commerce Platform',
    description:
      'Production-ready full-stack e-commerce application built with the MERN stack, GraphQL, Stripe payments, and offline PWA support. Mobile-first, responsive design with JWT authentication.',
    longDescription:
      'A comprehensive e-commerce platform featuring real-time product catalog with advanced filtering, secure JWT authentication with bcrypt password hashing, Stripe payment integration, and full offline support via Workbox service workers.',
    tech: [
      'React 18', 'Node.js', 'Express', 'MongoDB', 'GraphQL',
      'Apollo Server 4', 'Apollo Client 3', 'Stripe', 'JWT', 'Vite', 'PWA', 'Workbox',
    ],
    category: 'Full-Stack',
    github: 'https://github.com/fredm23579/e-commerce-site',
    live: null,
    highlights: [
      'Full GraphQL API with Apollo Server 4',
      'Stripe payment processing',
      'Offline PWA with Workbox service workers',
      'JWT + bcrypt authentication',
    ],
    featured: true,
  },
  {
    id: 3,
    title: 'MERN Book Search Engine',
    description:
      'Full-stack book discovery app with personal collections. Migrated from REST to GraphQL for optimized data fetching. Integrates Google Books API with user authentication.',
    longDescription:
      'Demonstrates architectural migration from RESTful API to GraphQL. Features Google Books API integration, user authentication with JWT, saved collections, and optimized data fetching with Apollo Client.',
    tech: [
      'React', 'MongoDB', 'Express.js', 'Node.js',
      'GraphQL', 'Apollo Client', 'Apollo Server', 'JWT', 'Vite',
    ],
    category: 'Full-Stack',
    github: 'https://github.com/fredm23579/mern-book-search',
    live: null,
    highlights: [
      'REST to GraphQL migration',
      'Google Books API integration',
      'Personalized book collections',
      'Optimized Apollo Client caching',
    ],
    featured: false,
  },
  {
    id: 4,
    title: 'Tech Blog MVC Platform',
    description:
      'Full-featured Express.js blogging platform built with MVC architecture. Includes user authentication, CRUD for posts/comments, and session management. Live on Heroku.',
    longDescription:
      'A production-deployed blogging platform using the Model-View-Controller pattern with Handlebars templating, MySQL/Sequelize ORM, bcrypt authentication, and connect-session-sequelize for secure session handling.',
    tech: [
      'Node.js', 'Express.js', 'MySQL', 'Sequelize ORM',
      'Handlebars', 'bcrypt', 'MVC Architecture',
    ],
    category: 'Full-Stack',
    github: 'https://github.com/fredm23579/tech-blog-mvc',
    live: 'https://tech-blog-mvc-express-8bd9dcae84c7.herokuapp.com/',
    highlights: [
      'MVC architectural pattern',
      'MySQL + Sequelize ORM',
      'Session-based authentication',
      'Production deployment on Heroku',
    ],
    featured: false,
  },
  {
    id: 5,
    title: 'Pets-Bytes — Location-Based Pet Finder',
    description:
      'Real-time, location-aware pet service finder using Google Maps API and Google Places Library. Find vets, groomers, and pet stores near you with geolocation support.',
    longDescription:
      'A browser-based application integrating Google Maps JavaScript API with real-time geolocation to help users find pet services. Features live search with Places Library, Dog API for breed images, and responsive Foundation CSS layout.',
    tech: [
      'JavaScript', 'HTML5', 'CSS', 'Google Maps API',
      'Google Places Library', 'Dog API', 'Foundation CSS', 'jQuery', 'Geolocation API',
    ],
    category: 'Frontend',
    github: 'https://github.com/fredm23579/pets-bytes',
    live: 'https://fredm23579.github.io/pets-bytes',
    highlights: [
      'Real-time Google Maps integration',
      'Browser geolocation API',
      'Dog API integration',
      '500+ commits, production-ready',
    ],
    featured: false,
  },
  {
    id: 6,
    title: 'Travel Tales Exchange',
    description:
      'Travel blog application with full user engagement features. Create, edit, and share travel stories with a community. Features authentication, comments, and Heroku deployment.',
    longDescription:
      'A social blogging platform for travel enthusiasts built with Node.js, Express.js, Sequelize ORM, and MySQL. Supports user authentication, blog post management, comment threads, and responsive design.',
    tech: [
      'Node.js', 'Express.js', 'Sequelize ORM',
      'MySQL', 'Handlebars', 'bcrypt', 'dotenv',
    ],
    category: 'Full-Stack',
    github: 'https://github.com/fredm23579/travel-tales-exchange',
    live: null,
    highlights: [
      'RESTful API architecture',
      'Community comment system',
      '79 commits, production deployed',
      'Responsive mobile-first design',
    ],
    featured: false,
  },
];

export default projects;
