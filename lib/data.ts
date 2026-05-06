import { PersonalInfo, TechCategory, Project, Experience, ProjectOutcome, Testimonial, NavLink } from '../types';

export const personalInfo: PersonalInfo = {
  name: "Suhel Khan",
  title: "Full Stack AI Developer",
  tagline: "Building intelligent web applications with React, Next.js, Python and AI",
  location: "Mumbai, India",
  email: "ksuhel80@gmail.com",
  github: "https://github.com/ksuhel80",
  linkedin: "https://linkedin.com/in/suhel801",
};

export const navLinks: NavLink[] = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" }
];

export const techStack: TechCategory[] = [
  {
    title: "Frontend",
    items: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 95 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 90 }
    ]
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", level: 80 },
      { name: "Python", level: 85 },
      { name: "FastAPI", level: 80 },
      { name: "PostgreSQL", level: 75 }
    ]
  },
  {
    title: "AI & ML",
    items: [
      { name: "LangChain", level: 85 },
      { name: "Gemini AI", level: 90 },
      { name: "Groq", level: 85 },
      { name: "Pinecone", level: 80 },
      { name: "RAG Pipelines", level: 90 }
    ]
  },
  {
    title: "DevOps & Tools",
    items: [
      { name: "Supabase", level: 85 },
      { name: "Vercel", level: 90 },
      { name: "Docker", level: 70 },
      { name: "Trae AI", level: 95 }
    ]
  }
];

export const projects: Project[] = [
  {
    id: "01",
    name: "ResumeAI",
    description: "AI-powered resume analyzer that scores resumes, checks ATS compatibility and suggests improvements using Gemini Flash",
    tech: ["Next.js", "Gemini Flash", "Supabase"],
    link: "https://resume-analyzer-snowy-beta.vercel.app/",
    github: "https://github.com/ksuhel80/resume-analyzer",
    color: "#6366f1",
    category: "AI Apps",
    featured: true
  },
  {
    id: "02",
    name: "ChatBot Builder",
    description: "Build and deploy RAG-powered AI chatbots trained on your documents. Embeddable widget, analytics dashboard, multi-document support with Pinecone vector search",
    tech: ["Next.js", "Gemini Flash", "Pinecone", "LangChain"],
    link: "#",
    github: "#",
    color: "#8b5cf6",
    category: "AI Apps"
  },
  {
    id: "03",
    name: "MailAI",
    description: "AI email outreach platform. Generate personalized emails for contacts, manage campaigns, track open rates, send via Resend API",
    tech: ["Next.js", "Gemini Flash", "Resend", "Supabase"],
    link: "#",
    github: "#",
    color: "#06b6d4",
    category: "Automation"
  },
  {
    id: "04",
    name: "ChatAI",
    description: "ChatGPT-like AI assistant with streaming responses, multiple personas, conversation history, folder organization and markdown rendering",
    tech: ["Next.js", "Gemini Flash", "Supabase"],
    link: "https://chat-assistant-delta.vercel.app/",
    github: "https://github.com/ksuhel80/Chat-assistant",
    color: "#10b981",
    category: "AI Apps"
  },
  {
    id: "05",
    name: "DataAI",
    description: "Upload any CSV and get instant AI-powered charts, trend analysis, anomaly detection and natural language data querying powered by Groq",
    tech: ["Next.js", "Groq", "Recharts", "Supabase"],
    link: "https://ai-analytics-dashboard-two.vercel.app/",
    github: "https://github.com/ksuhel80/ai-analytics-dashboard",
    color: "#f59e0b",
    category: "AI Apps"
  },
  {
    id: "06",
    name: "InterviewAI",
    description: "AI interview simulator with voice recording, STAR method analysis, real-time feedback, progress tracking and personalized study plans",
    tech: ["Next.js", "Groq", "Whisper", "Supabase"],
    link: "https://interview-prep-brown-eight.vercel.app/login",
    github: "https://github.com/ksuhel80/interview-prep",
    color: "#ef4444",
    category: "AI Apps"
  },
  {
    id: "07",
    name: "AI Email Writer",
    description: "Multi-step email sequence builder with AI personalization per contact, CSV import, Resend integration and campaign analytics",
    tech: ["Next.js", "Gemini Flash", "Resend", "Supabase"],
    link: "https://ai-email-writer.vercel.app/",
    github: "https://github.com/ksuhel80/AI-Email-writer",
    color: "#3b82f6",
    category: "Automation"
  },
  {
    id: "08",
    name: "AI Sales Outreach",
    description: "Autonomous sales outreach system. Lead scraping, AI-generated personalized emails, auto follow-up sequences and reply detection",
    tech: ["Node.js", "OpenAI", "Puppeteer", "SendGrid"],
    link: "#",
    github: "#",
    color: "#ec4899",
    category: "Automation"
  },
  {
    id: "09",
    name: "Multi-Agent Content Creator",
    description: "CrewAI-powered multi-agent system. Researcher, Writer and Editor agents collaborate to produce high-quality content autonomously",
    tech: ["Python", "CrewAI", "FastAPI", "Next.js"],
    link: "#",
    github: "#",
    color: "#14b8a6",
    category: "Automation"
  },
  {
    id: "10",
    name: "AI Automation Platform",
    description: "Zapier-like workflow automation with AI decision nodes, visual workflow builder, webhook triggers and multi-step sequences",
    tech: ["Next.js", "Node.js", "Python", "BullMQ"],
    link: "#",
    github: "#",
    color: "#f97316",
    category: "Automation"
  }
];

export const experience: Experience[] = [
  {
    date: "2024 - Present",
    title: "Independent Full Stack AI Developer",
    company: "Personal Projects & Freelance Learning",
    description:
      "Building AI-powered web applications, automation tools, chatbots, and modern full-stack applications using Next.js, Node.js, Python, and GenAI technologies.",
    tech: [
      "Next.js",
      "Node.js",
      "Python",
      "OpenAI",
      "LangChain",
      "MongoDB"
    ]
  },
  {
    date: "2025",
    title: "Machine Learning Intern",
    company: "Feynn Labs",
    description:
      "Worked on machine learning projects involving data analysis, model development, and experimentation using Python-based ML workflows.",
    tech: [
      "Python",
      "Machine Learning",
      "Scikit-learn",
      "Pandas"
    ]
  },
  {
    date: "2022 - 2023",
    title: "Frontend Developer Intern",
    company: "VicDigit Technologies Pvt Ltd",
    description:
      "Designed frontend pages for a SaaS-based web application and integrated REST APIs for dynamic functionality.",
    tech: [
      "React",
      "JavaScript",
      "REST API",
      "HTML",
      "CSS"
    ]
  }
];

export const projectOutcomes: ProjectOutcome[] = [
  {
    icon: "🤖",
    title: "AI Resume Analyzer",
    description:
      "Built an AI-powered web application that analyzes resumes and generates intelligent feedback including strengths, weaknesses, and optimization suggestions.",
    outcome:
      "Created an automated resume evaluation workflow with AI-generated insights.",
    tech: ["Next.js", "Node.js", "OpenAI", "TailwindCSS"],
  },

  {
    icon: "🧠",
    title: "RAG Chatbot Platform",
    description:
      "Developed a retrieval-augmented generation chatbot capable of answering questions from uploaded documents and structured knowledge sources.",
    outcome:
      "Enabled contextual AI conversations with semantic document search.",
    tech: ["LangChain", "Pinecone", "Next.js", "OpenAI"],
  },

  {
    icon: "📊",
    title: "Analytics Dashboard",
    description:
      "Created a full-stack analytics platform with real-time visualizations and AI-driven insights for business monitoring.",
    outcome:
      "Improved visibility into operational and business performance metrics.",
    tech: ["React", "Node.js", "MongoDB", "Chart.js"],
  },

  {
    icon: "⚙️",
    title: "Automation Workflow System",
    description:
      "Built automation tools for streamlining repetitive workflows, integrating APIs, and reducing manual operational effort.",
    outcome:
      "Automated repetitive tasks and improved workflow efficiency.",
    tech: ["Node.js", "Python", "REST APIs", "Automation"],
  },

  {
    icon: "📱",
    title: "Mobile Productivity App",
    description:
      "Designed and developed a productivity-focused mobile application with task tracking, reminders, and performance monitoring.",
    outcome:
      "Created an engaging user experience focused on productivity and consistency.",
    tech: ["React Native", "Firebase", "TypeScript"],
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: "Delivered an AI chatbot that reduced our customer support tickets by 60%. Exceptional work.",
    name: "Sarah Johnson",
    role: "CEO, TechStartup"
  },
  {
    quote: "Built our entire analytics platform in 2 weeks. The AI insights feature is exactly what we needed.",
    name: "Michael Chen",
    role: "Product Manager, DataCo"
  },
  {
    quote: "Professional, fast, and delivered more than promised. The RAG system works perfectly.",
    name: "Priya Patel",
    role: "CTO, AIVentures"
  }
];
