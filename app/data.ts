type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
  images?: {
    before?: string
    after?: string
  }
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
    name: 'Live License Plate Recognition',
    description:
      'Real-time vehicle plate detection and OCR using YOLOv8 and EasyOCR.',
    link: 'https://github.com/notoctavio/Live-License-Plate-Recognition-Using-Yolo-EasyOCR/tree/main',
    video: '/projects/lpr/after.png',
    id: 'project1',
    images: {
      before: '/projects/lpr/before.png',
      after: '/projects/lpr/after.png',
    },
  },
  {
    name: 'SkyFlow AI Chatbot',
    description:
      'A stateful RAG agent for airlines using LangChain and NVIDIA AI Endpoints.',
    link: 'https://github.com/notoctavio/AI-Customer-Service-Chatbot',
    video: '/projects/chatbot/interface.png',
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
    title: 'Licenses and Certifications',
    description: 'A collection of my professional certifications and academic achievements.',
    link: '/blog/licenses-and-certifications',
    uid: 'blog-1',
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
