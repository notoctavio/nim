type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
  slug: string
  logo: string
  description: string
  highlights?: string[]
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Motion Primitives Pro',
    description:
      'Advanced components and templates to craft beautiful websites.',
    link: 'https://pro.motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'Motion Primitives',
    description: 'UI kit to make beautiful, animated interfaces.',
    link: 'https://motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Storyteller',
    title: 'Junior Full-Stack Developer',
    start: 'Dec 2025',
    end: 'Present',
    link: '/work/storyteller',
    id: 'work1',
    slug: 'storyteller',
    logo: 'https://www.google.com/s2/favicons?sz=128&domain=www.getstoryteller.com',
    description:
      'Developing and maintaining full-stack applications using modern technologies.',
    highlights: [
      'Collaborating with cross-functional teams to deliver high-quality software solutions.',
      'Implementing responsive and interactive user interfaces.',
      'Optimizing application performance and scalability.',
    ],
  },
  {
    company: 'ROMBAT',
    title: 'R&D Intern',
    start: 'July 2025',
    end: 'Sept 2025',
    link: '/work/rombat',
    id: 'work2',
    slug: 'rombat',
    logo: 'https://www.google.com/s2/favicons?sz=128&domain=www.rombat.ro',
    description:
      'Leveraged Machine Learning and Deep Learning models for battery life prediction and automation.',
    highlights: [
      'Achieved 90% accuracy in Remaining Useful Life (RUL) predictions for lead-acid batteries using Random Forest, XGBoost, LSTM, and CNN.',
      'Preprocessed raw laboratory data, engineered features, and implemented classical ML and Neural Network architectures.',
      'Developed CNN-based image classification models and built prototype RAG-powered chatbots using OpenAI and Pinecone.',
      'Automated complex workflows using n8n for improved research efficiency.',
      'Tech Stack: Pandas, Numpy, Scikit-learn, TensorFlow, PyTorch.',
    ],
  },
  {
    company: 'Busch Gardens Tampa',
    title: 'Exchange Student',
    start: 'July 2024',
    end: 'Sept 2024',
    link: '/work/busch-gardens',
    id: 'work3',
    slug: 'busch-gardens',
    logo: 'https://www.google.com/s2/favicons?sz=128&domain=buschgardens.com',
    description:
      'Participated in a cultural exchange program in a fast-paced international environment.',
    highlights: [
      'Enhanced communication and adaptability skills through daily interactions with international visitors.',
      'Collaborated in a diverse team to ensure high standards of service and guest satisfaction.',
      'Gained valuable experience in cross-cultural conflict resolution and teamwork.',
    ],
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
  {
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description: 'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/notoctavio',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/vizaru-octavio-daniel',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/octavio.1312',
  },
]

export const EMAIL = 'vizaruoctavio@gmail.com'
