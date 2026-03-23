const skills = {
  categories: [
    {
      name: 'AI & Machine Learning',
      icon: 'brain',
      color: '#8b5cf6',
      skills: [
        { name: 'OpenAI API', level: 95 },
        { name: 'Anthropic Claude', level: 92 },
        { name: 'Google Gemini', level: 88 },
        { name: 'Prompt Engineering', level: 93 },
        { name: 'LLM Integration', level: 90 },
        { name: 'AI Agent Design', level: 85 },
        { name: 'RAG Systems', level: 80 },
        { name: 'xAI Grok / Meta Llama', level: 82 },
      ],
    },
    {
      name: 'Frontend',
      icon: 'monitor',
      color: '#06b6d4',
      skills: [
        { name: 'React 18', level: 95 },
        { name: 'React Router 6', level: 93 },
        { name: 'TypeScript', level: 82 },
        { name: 'Next.js', level: 80 },
        { name: 'Tailwind CSS', level: 88 },
        { name: 'Framer Motion', level: 78 },
        { name: 'Vite', level: 90 },
        { name: 'Progressive Web Apps', level: 85 },
      ],
    },
    {
      name: 'Backend',
      icon: 'server',
      color: '#10b981',
      skills: [
        { name: 'Node.js', level: 95 },
        { name: 'Express.js', level: 93 },
        { name: 'GraphQL', level: 88 },
        { name: 'Apollo Server 4', level: 87 },
        { name: 'REST APIs', level: 95 },
        { name: 'FastAPI (Python)', level: 78 },
        { name: 'JWT Authentication', level: 92 },
        { name: 'WebSockets', level: 75 },
      ],
    },
    {
      name: 'Databases',
      icon: 'database',
      color: '#f59e0b',
      skills: [
        { name: 'MongoDB', level: 92 },
        { name: 'Mongoose ODM', level: 90 },
        { name: 'MySQL', level: 88 },
        { name: 'Sequelize ORM', level: 87 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'IndexedDB', level: 78 },
        { name: 'Redis', level: 70 },
      ],
    },
    {
      name: 'Languages',
      icon: 'code',
      color: '#6366f1',
      skills: [
        { name: 'JavaScript (ES2024)', level: 97 },
        { name: 'TypeScript', level: 82 },
        { name: 'Python', level: 85 },
        { name: 'R', level: 72 },
        { name: 'Java', level: 70 },
        { name: 'HTML5 / CSS3', level: 95 },
        { name: 'SQL', level: 88 },
        { name: 'Bash/Shell', level: 75 },
      ],
    },
    {
      name: 'DevOps & Cloud',
      icon: 'cloud',
      color: '#ef4444',
      skills: [
        { name: 'Git / GitHub', level: 95 },
        { name: 'Docker', level: 80 },
        { name: 'AWS', level: 75 },
        { name: 'Heroku', level: 90 },
        { name: 'Render', level: 88 },
        { name: 'Netlify', level: 88 },
        { name: 'GitHub Actions (CI/CD)', level: 78 },
        { name: 'Linux / CLI', level: 85 },
      ],
    },
  ],

  tools: [
    'VS Code', 'GitHub Copilot', 'Postman', 'Insomnia', 'Figma',
    'ESLint', 'Prettier', 'Jest', 'Vitest', 'Webpack', 'Babel',
    'npm / yarn', 'Workbox', 'Stripe', 'Google OAuth2',
  ],

  certifications: [
    {
      name: 'Full-Stack Web Development',
      issuer: 'UCLA Extension',
      year: '2024',
      focus: 'MERN Stack, JavaScript, Modern Web Technologies',
    },
  ],
};

export default skills;
