import skillbridgeAsset from "@/assets/skillbridge-ai.png.asset.json";
import movieAsset from "@/assets/movie-ticket-booking.png.asset.json";

export const RESUME_URL = "/Jangam_Balachandramohan_Reddy_Resume.pdf";

export const PROFILE = {
  name: "Jangam Bala Chandra Mohan Reddy",
  displayFirst: "Jangam",
  displayMiddle: "Balachandramohan",
  displayLast: "Reddy",
  intro:
    "I design and build scalable, production-ready products — combining modern React frontends, Python APIs and applied machine learning to turn ideas and raw data into polished experiences.",
  availability: "Available for full-time roles",
  footerBio:
    "AI Engineer, Python Full Stack Developer & Machine Learning Engineer — building scalable products with React, Python and modern ML systems.",
  email: "jangambalachandramohanreddy@gmail.com",
  github: "https://github.com/JANGAMBALACHANDRAMOHANREDDY",
  githubHandle: "JANGAMBALACHANDRAMOHANREDDY",
  linkedin: "https://www.linkedin.com/in/jangam-balachandramohanreddy",
  linkedinHandle: "jangam-balachandramohanreddy",
};

export const ROLES = [
  "AI Engineer",
  "Python Full Stack Developer",
  "Machine Learning Engineer",
  "Software Engineer",
];

export const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "internship" },
  { label: "Internships", id: "experience" },
  { label: "Education", id: "education" },
  { label: "Certifications", id: "certifications" },
  { label: "Contact", id: "contact" },
];

export const ABOUT_STATS = [
  { value: "9.0", label: "CGPA" },
  { value: "9+", label: "Projects" },
  { value: "7+", label: "Certifications" },
];

export const ABOUT_CARDS = [
  {
    icon: "GraduationCap",
    title: "Education",
    body: "B.Tech in Computer Science & Engineering at CT University with a 9.0 CGPA and a strong foundation in programming, systems and data.",
  },
  {
    icon: "Cpu",
    title: "Skills",
    body: "Python, JavaScript, TypeScript, React, Tailwind CSS, FastAPI, REST APIs, PostgreSQL, MongoDB, MySQL and applied machine learning.",
  },
  {
    icon: "Briefcase",
    title: "Internship",
    body: "Full Stack Developer Intern at AVAINTERN, Visakhapatnam — building responsive React apps, backend APIs, authentication and production-ready features.",
  },
  {
    icon: "FolderGit2",
    title: "Projects",
    body: "SkillBridge AI and a full-stack Movie Ticket Booking System, alongside 9+ shipped data and AI projects on GitHub.",
  },
  {
    icon: "Trophy",
    title: "Achievements",
    body: "Consistent academic excellence, 7+ professional certifications and active open-source contribution across analytics and AI repositories.",
  },
  {
    icon: "Target",
    title: "Career Goal",
    body: "To grow as a Full Stack and AI engineer at a product-driven company, building scalable systems that turn data into real user impact.",
  },
] as const;

export const SKILL_CATEGORIES = [
  { icon: "Code2", title: "Programming", level: 92, skills: ["Python", "JavaScript", "Java", "C++"] },
  { icon: "Layout", title: "Frontend", level: 90, skills: ["React", "HTML", "CSS", "Tailwind CSS"] },
  { icon: "Server", title: "Backend", level: 85, skills: ["FastAPI", "REST APIs"] },
  { icon: "Database", title: "Databases", level: 84, skills: ["PostgreSQL", "MongoDB", "MySQL"] },
  {
    icon: "Brain",
    title: "AI",
    level: 88,
    skills: ["Machine Learning", "Pandas", "NumPy", "Scikit-learn"],
  },
  { icon: "Wrench", title: "Tools", level: 90, skills: ["Git", "GitHub", "VS Code", "Power BI"] },
] as const;

export type FeaturedProject = {
  title: string;
  category: string;
  description: string;
  features: string[];
  stack: string[];
  github: string;
  demo?: string;
  status: string;
  featured: boolean;
  thumbnail: string;
  filters: string[];
};

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    title: "SkillBridge AI",
    category: "AI Powered Full Stack Platform",
    description:
      "SkillBridge AI is a modern AI-powered full-stack platform that helps students improve technical skills, prepare for interviews, manage learning resources and accelerate career growth using intelligent workflows and modern UI.",
    features: [
      "AI Learning",
      "Career Guidance",
      "Interview Preparation",
      "Authentication",
      "Responsive Dashboard",
      "Scalable Architecture",
    ],
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Python",
      "FastAPI",
      "REST APIs",
      "PostgreSQL",
      "GitHub",
    ],
    github: "https://github.com/JANGAMBALACHANDRAMOHANREDDY/SkillBridge.Ai",
    status: "Featured",
    featured: true,
    thumbnail: skillbridgeAsset.url,
    filters: ["Full Stack", "AI", "React", "Python"],
  },
  {
    title: "Movie Ticket Booking System",
    category: "Full Stack Project",
    description:
      "User-friendly web application for booking movie tickets with seat selection, payment processing, and ticket management features.",
    features: [
      "Seat Selection",
      "Payment Processing",
      "Ticket Management",
      "Responsive UI",
      "Booking Workflow",
    ],
    stack: ["JavaScript", "HTML5", "CSS3", "Booking System", "Frontend", "GitHub"],
    github: "https://github.com/JANGAMBALACHANDRAMOHANREDDY/MovieTicketBookingSystem.git",
    status: "Completed",
    featured: true,
    thumbnail: movieAsset.url,
    filters: ["Full Stack", "React"],
  },
];

export const PROJECT_FILTERS = ["All", "Full Stack", "AI", "React", "Python"];

export const OTHER_PROJECTS: Record<
  string,
  { title: string; description: string; tags: string[]; link: string }[]
> = {
  "Data Analysis": [
    {
      title: "Retail Sales Dashboard",
      description:
        "Comprehensive dashboard analyzing retail sales performance, customer segments, and regional trends with interactive visualizations and KPI tracking.",
      tags: ["Power BI", "Data Analysis", "Dashboard", "Sales Analytics"],
      link: "https://github.com/JANGAMBALACHANDRAMOHANREDDY/Retail_Sales-Dashboard.git",
    },
    {
      title: "Superstore Sales Data Analysis",
      description:
        "In-depth analysis of superstore sales data with insights into product performance, customer behavior, and revenue optimization strategies.",
      tags: ["Python", "Data Analysis", "Pandas", "Visualization"],
      link: "https://github.com/JANGAMBALACHANDRAMOHANREDDY/-Superstore-Sales-data-analysis.git",
    },
    {
      title: "Bike Sales Analysis",
      description:
        "Comprehensive analysis of bike sales data exploring market trends, seasonal patterns, and customer demographics.",
      tags: ["Excel", "Data Analysis", "Visualization", "Analytics"],
      link: "https://github.com/JANGAMBALACHANDRAMOHANREDDY/Bike-Sales--Analysis.git",
    },
    {
      title: "Zomato Analysis",
      description:
        "Analysis of Zomato data using Python for data processing and Power BI for interactive visualizations and insights.",
      tags: ["Python", "Power BI", "Data Analysis", "Food Industry"],
      link: "https://github.com/JANGAMBALACHANDRAMOHANREDDY/Zomato-Analysis-with-Python-and-visualization-with-Power-BI-.git",
    },
    {
      title: "Placement Data Analysis",
      description:
        "Detailed analysis of placement data to identify trends, success factors, and insights for improving placement outcomes.",
      tags: ["Data Analysis", "Statistics", "Python", "Reporting"],
      link: "https://github.com/JANGAMBALACHANDRAMOHANREDDY/PLACEMENT-DATA-ANALYSIS-REPORT-.git",
    },
    {
      title: "2025 Layoffs Analysis",
      description:
        "Analysis of 2025 layoff trends across industries, examining patterns, affected sectors, and economic indicators.",
      tags: ["Data Analysis", "Python", "Visualization", "Market Research"],
      link: "https://github.com/JANGAMBALACHANDRAMOHANREDDY/2025-layoffs-analysis.git",
    },
  ],
  "AI & Machine Learning": [
    {
      title: "Bala-Tech.ai",
      description:
        "AI-powered technology solution leveraging machine learning algorithms to solve complex business problems.",
      tags: ["AI", "Machine Learning", "Python", "Innovation"],
      link: "https://github.com/JANGAMBALACHANDRAMOHANREDDY/Bala-Tech.ai.git",
    },
    {
      title: "Bujii AI Interview Coach",
      description:
        "Intelligent AI coach that helps users prepare for interviews with personalized feedback and practice sessions.",
      tags: ["AI", "NLP", "Interview Prep", "Chatbot"],
      link: "https://github.com/JANGAMBALACHANDRAMOHANREDDY/Bujii-ai-interview-coach.git",
    },
    {
      title: "Bujii Voice Assistant",
      description:
        "Voice-activated AI assistant providing hands-free interaction, task automation, and intelligent responses.",
      tags: ["AI", "Voice Recognition", "NLP", "Python"],
      link: "https://github.com/JANGAMBALACHANDRAMOHANREDDY/bujii-voice-assistant-.git",
    },
    {
      title: "Prompt Playground",
      description:
        "Interactive platform for testing and optimizing AI prompts, experimenting with different models and parameters.",
      tags: ["AI", "LLM", "Prompt Engineering", "Testing"],
      link: "https://github.com/JANGAMBALACHANDRAMOHANREDDY/prompt-playground.git",
    },
    {
      title: "Text-to-Image Generator",
      description:
        "Advanced AI application that generates high-quality images from text descriptions using state-of-the-art generative models.",
      tags: ["AI", "Computer Vision", "Generative AI", "Image Generation"],
      link: "https://github.com/JANGAMBALACHANDRAMOHANREDDY/Text-to-Image-Generator.git",
    },
  ],
};

export const INTERNSHIP = {
  role: "Full Stack Developer Intern",
  company: "AVAINTERN",
  duration: "July 2026 – Present",
  location: "Visakhapatnam, Andhra Pradesh, India",
  mode: "On-site",
  status: "Present",
  summary:
    "Currently working as a Full Stack Developer Intern at AVAINTERN, contributing to modern web applications using React, TypeScript, Tailwind CSS, Python, FastAPI, PostgreSQL and REST APIs. Responsibilities include frontend development, backend API integration, database operations, debugging, feature development, Git collaboration and building production-ready applications.",
  responsibilities: [
    "Frontend development with React & TypeScript",
    "Backend API development and integration",
    "REST API integration",
    "Database operations with PostgreSQL",
    "Debugging and issue resolution",
    "Feature development",
    "Git collaboration",
    "Production-ready application delivery",
  ],
  stack: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Python",
    "FastAPI",
    "PostgreSQL",
    "REST APIs",
    "Git",
    "GitHub",
    "JavaScript",
    "HTML5",
    "CSS3",
  ],
};

export const EXPERIENCES = [
  {
    title: "Data Analyst",
    company: "Labmentix Private Limited",
    type: "Internship",
    duration: "Oct 2025 - Dec 2025 · 3 mos",
    location: "Remote",
    description: [] as string[],
    skills: ["Python (Programming Language)", "Google Analytics"],
    current: false,
  },
  {
    title: "Data Analytics & AI Intern",
    company:
      "All India Council for Technical Education (AICTE) – Shell – Edunet Foundation",
    type: "Internship",
    duration: "Nov 2025 - Nov 2025 · 1 mo",
    location: "Remote",
    description: [
      "Selected for the AICTE–Shell–Edunet Foundation internship focused on Green Skills using AI technologies",
      "Worked on project-based learning involving data preprocessing, visualization, model building, and evaluation",
      "Gained mentorship from industry experts and hands-on experience in applying AI and data analytics for sustainability",
      "Completed all weekly milestones, project submissions, and final presentation",
    ],
    skills: ["AI", "Data Analytics", "Data Visualization", "Machine Learning", "Green Skills"],
    current: false,
  },
  {
    title: "AI Developer",
    company: "BXM Global",
    type: "Internship",
    duration: "Aug 2025 - Nov 2025 · 4 mos",
    location: "Remote",
    description: [
      "Worked as an AI Developer at BXM Global",
      "Developed and deployed AI-powered applications using Python, Machine Learning, and Data Analysis",
      "Gained practical exposure to real-world AI projects including chatbots, predictive models, and automation tools",
      "Enhanced skills in problem-solving, coding, and collaboration within a professional environment",
    ],
    skills: ["Python", "Machine Learning", "AI Development", "Data Analysis"],
    current: false,
  },
  {
    title: "Data Science Intern",
    company: "EVOASTRA VENTURES PVT LTD",
    type: "Internship",
    duration: "Jul 2025 - Aug 2025 · 2 mos",
    location: "Andhra Pradesh, India · Remote",
    description: [
      "Completed a one-month internship in Data Science",
      "Gained knowledge in preprocessing, analysis, and predictive modeling",
      "Improved technical skills in Python, Pandas, NumPy, and visualization",
      "Demonstrated sincerity, enthusiasm, and discipline in tasks",
    ],
    skills: ["Python", "Pandas", "NumPy", "Data Visualization", "Predictive Modeling"],
    current: false,
  },
  {
    title: "Data Analytics Intern",
    company: "Young Minds Technology Solutions Pvt Ltd",
    type: "Internship",
    duration: "Jun 2025 - Aug 2025 · 3 mos",
    location: "Andhra Pradesh, India · On-site",
    description: [
      "Engaged in practical applications of Data Analytics concepts at YoungMinds Technology Solutions Pvt. Ltd",
      "Conducted data cleaning, processing, and visualization to derive actionable insights",
      "Utilized tools such as Excel, Python, and SQL to enhance data analysis capabilities",
      "Received professional feedback that emphasized my discipline and sincerity in work",
    ],
    skills: ["Excel", "Python", "SQL", "Data Visualization", "Data Cleaning"],
    current: false,
  },
];

export const EDUCATION = {
  degree: "Bachelor of Technology (B.Tech)",
  branch: "Computer Science Engineering",
  specialization: "Specialization: Artificial Intelligence and Data Science",
  university: "CT University",
  cgpa: "9.0",
  duration: "2023 – 2027",
  coursework: [
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Machine Learning",
    "Deep Learning",
    "Data Science",
    "Artificial Intelligence",
    "Software Engineering",
    "Web Development",
    "Computer Networks",
    "Operating Systems",
  ],
  achievements: [
    "Maintained a consistent CGPA of 9.0 throughout the program",
    "Active participation in technical workshops and AI seminars",
    "Member of the Computer Science Society",
    "Regular contributor to the university's technical magazine",
  ],
};

export const CERT_STATS = [
  { label: "Total Certifications", value: "9" },
  { label: "Active/Completed", value: "5" },
  { label: "Organizations", value: "6" },
  { label: "Latest Year", value: "2025" },
];

export const CERTIFICATIONS = [
  {
    title: "Data Visualisation",
    organization: "Tata",
    date: "July 2025",
    id: "dqZCADyWTnJinWXMp",
    status: "active",
  },
  {
    title: "GenAI Powered Data Analytics",
    organization: "Tata",
    date: "July 2025",
    id: "tz4z79qZJW8NuXeMh",
    status: "active",
  },
  {
    title: "Solutions Architecture",
    organization: "AWS APAC",
    date: "April 2025",
    id: "pDMiFjWiXdm7z2tZF",
    status: "active",
  },
  {
    title: "30 Days DSA Bootcamp",
    organization: "Unstop",
    date: "April 2025",
    status: "completed",
  },
  {
    title: "Machine Learning with Python",
    organization: "LinkedIn Learning",
    date: "April 2025",
    status: "completed",
  },
  {
    title: "Content Writing Internship",
    organization: "Internshala",
    date: "March 2025",
    id: "9x761ne1lfi",
    status: "completed",
  },
  {
    title: "AI Foundations",
    organization: "IBM",
    date: "August 2024",
    status: "completed",
  },
  {
    title: "Artificial Intelligence Fundamentals",
    organization: "IBM",
    date: "August 2024",
    status: "completed",
  },
  {
    title: "Data Analytics",
    organization: "LinkedIn Learning",
    date: "March 2025",
    status: "expired",
  },
] as { title: string; organization: string; date: string; id?: string; status: string }[];

export const CERT_SKILLS = [
  "Data Visualization",
  "Generative AI",
  "Cloud Architecture",
  "Machine Learning",
  "Data Analytics",
  "Content Writing",
  "Artificial Intelligence",
  "Problem Solving",
  "Technical Writing",
  "Algorithm Design",
];

export const LOCATION_LINES = [
  "Basinepalli,",
  "Bestavaripeta,",
  "Markapur District,",
  "Andhra Pradesh,",
  "India",
];

export const FOOTER_NAV = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "internship" },
  { label: "Contact", id: "contact" },
];
