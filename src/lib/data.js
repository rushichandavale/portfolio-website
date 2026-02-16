import { Images } from "./images";

export const projectsData = [
  {
    id: "1",
    title: "EcoTracker - Sustainable Living App",
    slug: "ecotracker",
    shortDescription: "A mobile-first web application that helps users track their carbon footprint.",
    description: "A mobile-first web application that helps users track their carbon footprint and suggests eco-friendly lifestyle changes. Built with React, Node.js, and MongoDB.",
    imageUrl: Images.PortfolioThumbnail, // Using generic thumbnail as placeholder
    githubUrl: "https://github.com/rushichandavale/eco-tracker",
    tools: ["React", "Node.js", "MongoDB", "Express", "Chart.js"],
    category: "Web",
    projectStartDate: new Date("2024-01-01"),
    projectStatus: "Completed",
    liveDemoUrl: "https://ecotracker-demo.com",
    keyFeatures: ["Carbon footprint tracking", "Eco-friendly suggestions", "Progress visualization"],
    galleryImages: [Images.PortfolioThumbnail]
  },
  {
    id: "2",
    title: "DevConnect - Developer Community",
    slug: "devconnect",
    shortDescription: "A social platform for developers to share knowledge and collaborate.",
    description: "A social platform for developers to share knowledge, collaborate on projects, and find mentorship. Features real-time chat and code sharing.",
    imageUrl: Images.PortfolioThumbnail,
    githubUrl: "https://github.com/rushichandavale/dev-connect",
    tools: ["Next.js", "Firebase", "Tailwind CSS", "Socket.io"],
    category: "Web",
    projectStartDate: new Date("2024-03-15"),
    projectStatus: "Completed",
    liveDemoUrl: "https://devconnect-platform.com",
    keyFeatures: ["Real-time chat", "Code sharing", "Mentorship matching"],
    galleryImages: [Images.PortfolioThumbnail]
  },
  {
    id: "3",
    title: "AI-Powered Task Manager",
    slug: "ai-task-manager",
    shortDescription: "An intelligent task management tool that uses AI to prioritize tasks.",
    description: "An intelligent task management tool that uses AI to prioritize tasks and suggest optimal schedules based on user habits and deadlines.",
    imageUrl: Images.PortfolioThumbnail,
    githubUrl: "https://github.com/rushichandavale/ai-task-manager",
    tools: ["Python", "Django", "React", "OpenAI API", "PostgreSQL"],
    category: "AI",
    projectStartDate: new Date("2024-06-10"),
    projectStatus: "Completed",
    liveDemoUrl: "https://ai-taskmanager.com",
    keyFeatures: ["AI prioritization", "Smart scheduling", "Deadline reminders"],
    galleryImages: [Images.PortfolioThumbnail]
  },
  {
    id: "4",
    title: "CryptoView Dashboard",
    slug: "cryptoview",
    shortDescription: "A real-time cryptocurrency tracking dashboard.",
    description: "A real-time cryptocurrency tracking dashboard providing live price updates, market trends, and historical data visualization.",
    imageUrl: Images.PortfolioThumbnail,
    githubUrl: "https://github.com/rushichandavale/cryptoview",
    tools: ["Vue.js", "D3.js", "CoinGecko API", "Firebase"],
    category: "Web",
    projectStartDate: new Date("2024-08-05"),
    projectStatus: "Completed",
    liveDemoUrl: "https://cryptoview-dash.com",
    keyFeatures: ["Live price updates", "Market trends", "Historical data"],
    galleryImages: [Images.PortfolioThumbnail]
  }
];

export const experienceData = [
  {
    id: 1,
    role: "Senior Frontend Developer",
    company: "TechNova Solutions",
    period: "2021 - Present",
    description:
      "Leading the frontend team in developing scalable web applications. Implemented a modern design system and improved site performance by 40%.",
     image: "/images/companies/technova.png" 
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Creative Minds Agency",
    period: "2019 - 2021",
    description:
      "Developed and maintained client websites using the MERN stack. Collaborated with designers to implement pixel-perfect user interfaces.",
     image: "/images/companies/creativeminds.png" 
  },
  {
    id: 3,
    role: "Junior Web Developer",
    company: "StartUp Inc.",
    period: "2018 - 2019",
    description:
      "Assisted in the development of the company's main product. Gained experience in React and Redux state management.",
     image: "/images/companies/startup.png" 
  },
  
];

export const educationData = [
  {
    id: 1,
    degree: "Master of Computer Science",
    institution: "University of Technology",
    period: "2016 - 2018",
    description:
      "Specialized in Software Engineering and Artificial Intelligence. Graduated with distinct honors.",
     image: "/images/institutions/university.png" 
  },
  {
    id: 2,
    degree: "Bachelor of Science in Information Technology",
    institution: "City College",
    period: "2013 - 2016",
    description:
      "Foundation in computer science principles, database management, and web development.",
     image: "/images/institutions/college.png" 
  },
];

export const skillsData = [
  { name: "React", level: 90 },
  { name: "JavaScript (ES6+)", level: 95 },
  { name: "TypeScript", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "HTML5 & CSS3", level: 95 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "Git & GitHub", level: 90 },
  { name: "GraphQL", level: 75 },
  { name: "Docker", level: 70 },
];

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/rushichandavale" },
  { name: "LinkedIn", url: "https://linkedin.com/in/rushikesh-chandavale/" },
  { name: "Twitter", url: "https://twitter.com/rushichandavale" },
  { name: "Instagram", url: "https://instagram.com/rushichandavale" },
];

export const contactInfo = {
  email: "rushichandavale@gmail.com",
  phone: "+91 98765 43210", // Updated with a reliable format placeholder
  address: "Pune City, India",
};

export const testimonialsData = [
  {
    id: "1",
    quote: "Rushikesh's coding ability and meticulousness have been a great help to our dev team. The quality of his work consistently exceeded our expectations.",
    author: "Jane Doe",
    company: "Senior Engineer, InnovateTech",
    avatarUrl: Images.JaneDoeAvatar,
  },
  {
    id: "2",
    quote: "Working with Rushikesh was very professional and efficient. He has excellent technical skills and a remarkable ability to work in a team.",
    author: "John Smith",
    company: "Head of IT, Digital Solutions Co.",
    avatarUrl: Images.JohnSmithAvatar,
  }
];

export const workExperiencesData = [
    {
    id: "1",
    company: "TechNova Solutions",
    role: "Senior Frontend Developer",
    startDate: "2021",
    endDate: "Present",
    description: "Leading the frontend team in developing scalable web applications.",
    responsibilities: [
      "Implemented modern design systems.",
      "Improved site performance by 40%.",
      "Mentored junior developers."
    ],
  },
  {
    id: "2",
    company: "Creative Minds Agency",
    role: "Full Stack Developer",
    startDate: "2019",
    endDate: "2021",
    description: "Developed and maintained client websites using the MERN stack.",
    responsibilities: [
      "Collaborated with designers for pixel-perfect UIs.",
      "Built responsive web applications.",
      "Integrated RESTful APIs."
    ],
  },
  {
    id: "3",
    company: "StartUp Inc.",
    role: "Junior Web Developer",
    startDate: "2018",
    endDate: "2019",
    description: "Assisted in the development of the company's main product.",
    responsibilities: [
      "Assisted in main product development.",
      "Gained experience in React and Redux.",
      "Collaborated with senior developers."
    ],
  }
];
