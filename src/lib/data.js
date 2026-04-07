import { Images } from "./images";

export const projectsData = [
  // {
  //   id: "1",
  //   title: "Portfolio Website",
  //   slug: "portfolio",
  //   shortDescription: "A personal portfolio website built with React, Tailwind CSS, and Framer Motion.",
  //   description: "A personal portfolio website built with React, Tailwind CSS, and Framer Motion. It features a modern and responsive design, with smooth animations and a dark mode option.",
  //   imageUrl: Images.portfolio, // Using generic thumbnail as placeholder
  //   githubUrl: "https://github.com/rushichandavale/portfolio-website",
  //   tools: ["React", "Tailwind CSS", "Framer Motion", "Git", "GitHub", "Vercel"],
  //   category: "Web",
  //   projectStartDate: new Date("2024-01-01"),
  //   projectStatus: "Completed",
  //   liveDemoUrl: "https://rushi-personal-portfolio.vercel.app/",
  //   keyFeatures: ["Responsive design", "Customizable theme", "Dark/Light mode", "Progress visualization"],
  //   galleryImages: [Images.portfolio]
  // },
  {
    id: "2",
    title: "Flight Explorer Web App",
    slug: "flight-explorer",
    shortDescription: "Advanced flight booking application with authentication, role-based access, and admin dashboard.",
    description: "A full-featured Flight Booking App built with React and Redux Toolkit. Includes role-based authentication, multi-city search, booking workflows, and an admin dashboard. Integrates AviationStack API for real-time data and supports data persistence and responsive design.",
    imageUrl: Images.flightbooking,
    githubUrl: "https://github.com/rushichandavale/flight-booking",
    tools: [
      "React.js",
      "Redux Toolkit",
      "React Router",
      "Axios",
      "Tailwind CSS",
      "LocalStorage",
      "IndexedDB",
      "OpenLayers",
      "Git",
      "GitHub",
      "Netlify"
    ],
    category: "Web",
    projectStartDate: new Date("2024-12-26"),
    projectStatus: "Completed",
    liveDemoUrl: "https://ecflight-booking-app.netlify.app/",
    keyFeatures: [
      "Secure authentication with role-based access (User/Admin)",
      "Password encryption and session auto-logout after inactivity",
      "One-way, round-trip, and multi-city flight search (up to 3 destinations)",
      "Advanced filtering (price, airlines, stops, time slots)",
      "Booking workflow with passenger details and payment simulation",
      "Unique booking ID generation with persistent storage",
      "Admin dashboard to add, edit, delete flights and manage bookings",
      "Interactive flight path map integration",
      "Fully responsive design with robust error handling"
    ],
    galleryImages: [Images.flightbooking]
  },
  {
    id: "3",
    title: "Prince Fireworks",
    slug: "prince-fireworks",
    shortDescription: "E-commerce website for a fireworks business.",
    description:
      "E-commerce website developed for Prince Fireworks to showcase 250+ products, safety guidelines, gallery, and blog content. Built with React and Tailwind CSS, the platform focuses on responsive design, performance optimization, and SEO to enhance the client’s digital presence.",
    imageUrl: Images.princefireworks,
    githubUrl: "https://github.com/rushichandavale/prince-fireworks",
    tools: [
      "React.js",
      "Tailwind CSS",
      "JavaScript",
      "Lottie Animations",
      "Responsive Design",
      "SEO Optimization",
      "Git",
      "GitHub",
      "Vercel"
    ],
    category: "Web",
    projectStartDate: new Date("2024-11-01"),
    projectStatus: "Completed",
    liveDemoUrl: "https://prince-fireworks.vercel.app/",
    keyFeatures: [
      "Product catalog with 250+ fireworks items",
      "Responsive UI with full mobile and desktop compatibility",
      "Integrated Lottie animations increasing homepage engagement",
      "SEO-friendly structure for improved online visibility",
      "Gallery, blog, and safety information sections",
      "Deployed and production-ready with optimized performance"
    ],
    galleryImages: [Images.princefireworks]
  },

  {
    id: "4",
    title: "Healthcare Dashboard",
    slug: "healthcare-dashboard",
    shortDescription: "A modern healthcare dashboard UI built with React and Tailwind CSS.",
    description:
      "A high-fidelity healthcare dashboard interface implementation focusing on clean layout, responsive design, and professional medical aesthetics. Built to demonstrate advanced UI development skills, specifically focusing on complex dashboard layouts and component architecture.",
    imageUrl: Images.healthcare,
    githubUrl: "https://github.com/rushichandavale/healthCare-dashboard",
    tools: ["React.js", "Tailwind CSS", "JavaScript", "Responsive Design", "Git", "GitHub"],
    category: "Web",
    projectStartDate: new Date("2024-08-05"),
    projectStatus: "Completed",
    liveDemoUrl: "https://fitpeohealthcaredashboard.netlify.app/",
    keyFeatures: [
      "Fully responsive dashboard layout for all devices",
      "Clean and professional medical-themed UI design",
      "Interactive sidebar navigation and user interface elements",
      "Reusable component-based architecture using React",
      "Optimized CSS with Tailwind for performance and consistency"
    ],
    galleryImages: [Images.healthcare]
  },
  {
    id: "5",
    title: "Design Declares Clone",
    slug: "design-declares-clone",
    shortDescription: "A pixel-perfect clone of the [Design Declares](https://designdeclares.com/) website, a movement for climate action in design.",
    description:
      "A comprehensive front-end clone of the <a href='https://designdeclares.com/' target='_blank' rel='noreferrer'><b>Design Declares</b></a> platform, built to demonstrate high-level UI/UX implementation skills. The project focuses on recreating the sophisticated typography, grid layouts, and responsive nature of the original site using modern web technologies.",

    imageUrl: Images.designdeclares,
    githubUrl: "https://github.com/rushichandavale/design-declares-clone",
    tools: ["React.js", "Tailwind CSS", "Framer Motion", "JavaScript", "Responsive Design"],
    category: "Web",
    projectStartDate: new Date("2024-09-10"),
    projectStatus: "Completed",
    liveDemoUrl: "https://design-declares.netlify.app/",
    keyFeatures: [
      "Accurate recreation of the Design Declares visual identity",
      "Fully responsive layout for seamless viewing on all devices",
      "Interactive UI components and smooth transitions using Framer Motion",
      "Clean, maintainable code using React and Tailwind CSS",
      "Implementation of modern web design principles and accessibility"
    ],
    galleryImages: [Images.designdeclares]
  },
  {
    id: "6",
    title: "Profile Location App",
    slug: "profile-location-app",
    shortDescription: "A frontend-based profile management system with an interactive map and administrative dashboard.",
    description:
      "A React-based application designed for managing and visualizing user profiles. It features a comprehensive admin panel for CRUD operations, allowing administrators to create, update, and delete profiles with specific names, descriptions, and geographic coordinates. Users can explore profiles through an interactive card layout and view their locations on an integrated map.",
    imageUrl: Images.profilelocation,
    githubUrl: "https://github.com/rushichandavale/profile-map",
    tools: ["React.js", "Tailwind CSS", "Framer Motion", "JavaScript", "Map Integration", "Responsive Design"],
    category: "Web",
    projectStartDate: new Date("2024-10-15"),
    projectStatus: "Completed",
    liveDemoUrl: "https://profiles-map.netlify.app/",
    keyFeatures: [
      "Administrative dashboard for full CRUD management of user profiles",
      "Profile creation with name, description, and latitude/longitude coordinates",
      "Responsive card-based display of profiles on the main dashboard",
      "Interactive 'View Profile' and 'Summary' actions for detailed information",
      "Map integration to visualize profile locations based on coordinates",
      "Clean and modern UI implemented with React and Tailwind CSS"
    ],
    galleryImages: [Images.profilelocation]
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
  { name: "GitHub", url: "https://github.com/rushichandavale", platform: "github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/rushikesh-chandavale/", platform: "linkedin" },
  { name: "Twitter", url: "https://twitter.com/rushichandavale", platform: "twitter" },
  { name: "Instagram", url: "https://instagram.com/rushichandavale", platform: "instagram" },
  { name: "Mail", url: "mailto:rushichandavale@gmail.com", platform: "mail" },
];

export const contactInfo = {
  email: "rushichandavale@gmail.com",
  phone: "+91 98765 43210", // Updated with a reliable format placeholder
  address: "Pune City, India",
};

export const testimonialsData = [
  {
    id: "1",
    quote: "Rushikesh is an exceptional developer who brings both technical depth and creative problem-solving to every project. His work on our AI video platform was instrumental to our success.",
    author: "Alex Thompson",
    company: "Product Manager, TechFlow",
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=250&h=250&auto=format&fit=crop",
  },
  {
    id: "2",
    quote: "The level of professionalism and attention to detail Rushikesh provides is rare. He didn't just build what we asked; he improved our entire architecture.",
    author: "Sarah Chen",
    company: "CTO, Wavefront Systems",
    avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=250&h=250&auto=format&fit=crop",
  },
  {
    id: "3",
    quote: "Working with Rushikesh was a seamless experience. His expertise in React and smooth animations transformed our user engagement metrics.",
    author: "Marcus Rodriguez",
    company: "Founder, CreativePulse",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=250&h=250&auto=format&fit=crop",
  },
  {
    id: "4",
    quote: "He is proactive, communicative, and technically brilliant. A true asset to any modern development team looking for high-quality results.",
    author: "Elena Petrova",
    company: "Engineering Lead, GlobalSync",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=250&h=250&auto=format&fit=crop",
  }
];

export const workExperiencesData = [
  {
    id: "1",
    company: "EC Infosolutions Pvt. Ltd.",
    role: "Software Engineer",
    startDate: "2025",
    endDate: "Present",
    description:
      "Working on SailorsHub (professional networking platform), Bandish Studio (AI video generation platform), and an RFID-based File Tracking System, focusing on scalable frontend architecture and performance.",
    responsibilities: [
      "Led frontend development of Bandish Studio integrating OpenAI & HeyGen for AI video workflows.",
      "Built end-to-end video pipeline with bulk personalization, voice cloning, and rendering.",
      "Developed RFID tracking dashboards with real-time updates via WebSockets.",
      "Implemented Razorpay subscriptions, credit wallet system, and RBAC-based admin panel.",
      "Optimized performance (~30% improvement) using code splitting and lazy loading."
    ],
  },
  {
    id: "2",
    company: "Hydroansys Infra Solutions",
    role: "Junior Developer",
    startDate: "2024",
    endDate: "2025",
    description:
      "Developed responsive dashboards and GIS-enabled applications for real-time data visualization.",
    responsibilities: [
      "Built applications using React, Angular, TypeScript, and Tailwind CSS.",
      "Integrated GIS APIs and interactive Chart.js dashboards (500+ users).",
      "Implemented authentication and RBAC security.",
      "Delivered features 20% faster in Agile/Scrum environment."
    ],
  },
  {
    id: "3",
    company: "Softron Technology Pvt. Ltd.",
    role: "Web Developer Intern",
    startDate: "2023",
    endDate: "2024",
    description:
      "Assisted in developing and maintaining frontend features for web applications.",
    responsibilities: [
      "Built reusable React components.",
      "Integrated REST APIs and managed async data.",
      "Fixed UI bugs and improved responsiveness.",
      "Participated in code reviews and sprint cycles."
    ],
  }
];