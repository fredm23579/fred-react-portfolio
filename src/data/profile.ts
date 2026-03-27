export interface ProfileStat {
  label: string;
  value: string;
}

export interface Education {
  institution: string;
  degree: string;
  focus: string;
  email: string;
}

export interface ProfileData {
  name: string;
  title: string;
  tagline: string;
  email: string;
  location: string;
  github: string;
  linkedin: string;
  twitter: string;
  devto: string;
  bio: string[];
  philosophy: string;
  interests: string[];
  education: Education;
  stats: ProfileStat[];
  availability: string;
}

const profile: ProfileData = {
  name: 'Fred Motta',
  title: 'Full-Stack Developer & AI Engineer',
  tagline:
    'Building intelligent, scalable applications at the intersection of modern web and artificial intelligence.',

  email: 'fredm23579@gmail.com',
  location: 'Riverside, California',

  github: 'https://github.com/fredm23579',
  linkedin: 'https://linkedin.com/in/fred-motta',
  twitter: 'https://twitter.com/fredm23579',
  devto: 'https://dev.to/fredm23579',

  bio: [
    "I'm a full-stack developer and AI engineer based in Riverside, California, passionate about building intelligent applications that push the boundaries of what's possible on the web.",
    'With a background from UCLA and deep expertise in the MERN stack, I specialize in integrating modern AI/ML capabilities — including LLMs, multi-modal APIs, and autonomous agents — into production-ready web applications.',
    "I believe in writing code that humans can read, not just machines. My approach combines clean architecture, performance optimization, and thoughtful UX to create software that truly matters.",
  ],

  philosophy: 'Write code that humans can read, not just machines.',

  interests: [
    'Large Language Models & Prompt Engineering',
    'Distributed Systems Architecture',
    'Progressive Web Applications',
    'Open Source Contributions',
    'Quantum Computing Theory',
    'Data Science & Visualization',
  ],

  education: {
    institution: 'University of California, Los Angeles (UCLA)',
    degree: 'Full-Stack Web Development',
    focus: 'JavaScript, MERN Stack, Modern Web Technologies',
    email: 'motta@g.ucla.edu',
  },

  stats: [
    { label: 'GitHub Repositories', value: '78+' },
    { label: 'GitHub Stars', value: '240+' },
    { label: 'Live Projects', value: '10+' },
    { label: 'AI Providers Integrated', value: '6' },
  ],

  availability: 'Open to full-time roles, freelance, and collaboration',
};

export default profile;
