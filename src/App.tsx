import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Moon, Sun, ExternalLink, Menu, X, Download, Code, Database, Wrench, Terminal, Award } from 'lucide-react';

// Types
interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  image?: string;
}

interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string[];
  type: 'work' | 'education';
}

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

interface Achievement {
  id: number;
  title: string;
  competition: string;
  prize: string;
}

// Portfolio Data
const portfolioData = {
  name: "Sahil Sandeep Sangle",
  role: "Full-Stack Developer",
  tagline: "Computer Engineering student passionate about building scalable web applications",
  bio: "Currently pursuing BE in Computer Engineering at Dr. D. Y. Patil Technical Campus, Pune. I have hands-on experience in full-stack development with React, Java, and various web technologies. I'm passionate about creating efficient, user-friendly applications and continuously learning new technologies to solve real-world problems.",
  location: "Pune, Maharashtra, India",
  email: "sahilsangle1806@gmail.com",
  phone: "+91 8208457585",
  github: "https://github.com/18sahhhilll",
  linkedin: "https://linkedin.com/in/sahil-sangle",
  
  skills: [
    {
      title: "Languages",
      icon: <Code className="w-5 h-5" />,
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Java", level: 88 },
        { name: "Python", level: 82 },
        { name: "C/C++", level: 80 },
        { name: "PHP", level: 75 }
      ]
    },
    {
      title: "Frameworks",
      icon: <Terminal className="w-5 h-5" />,
      skills: [
        { name: "React.js", level: 92 },
        { name: "Node.js", level: 85 },
        { name: "ASP.NET", level: 80 },
        { name: "Angular.js", level: 75 },
        { name: "Django", level: 78 }
      ]
    },
    {
      title: "Tools",
      icon: <Wrench className="w-5 h-5" />,
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Eclipse", level: 82 },
        { name: "Android Studio", level: 75 }
      ]
    },
    {
      title: "Databases",
      icon: <Database className="w-5 h-5" />,
      skills: [
        { name: "MySQL", level: 88 },
        { name: "Oracle", level: 82 },
        { name: "MongoDB", level: 80 },
        { name: "Supabase", level: 85 }
      ]
    }
  ] as SkillCategory[],
  
  projects: [
    {
      id: 1,
      title: "Password Strength Analyzer",
      description: "Blazing-fast, privacy-first password security tool with real-time entropy visualization and crack-time estimation. Features three attack model scenarios (Online, Offline, GPU-Assisted), pattern recognition, dictionary detection, and glassmorphism UI—all computed client-side with zero backend.",
      tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Recharts"],
      github: "https://github.com/18sahhhilll/password-strength-analyzer-main",
      demo: "https://password-strength-analyzer-main.vercel.app/"
    },
    {
      id: 2,
      title: "Habit Tracker App",
      description: "A comprehensive habit tracking web application built for PBL with Supabase authentication and real-time database synchronization. Features dynamic pie charts visualizing daily progress for good vs bad habits with an intuitive, responsive UI.",
      tech: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
      github: "https://github.com/18sahhhilll/RoutineX-Main",
      demo: "https://routine-x-main.vercel.app/"
    },
    {
      id: 3,
      title: "Brain Bazaar",
      description: "Award-winning AI-based study assistant featuring a 20-question MCQ generator, intelligent notes summarizer, and comprehensive syllabus management tools. Winner of MAHA-VEER and Runner-up in PRO-JIT competitions.",
      tech: ["jQuery", "Python", "AI/ML"],
      github: "https://github.com/SturdyKnight/brainbazaar"
    },
    {
      id: 4,
      title: "Pizza Delivery Web App",
      description: "Full-stack pizza ordering system with user authentication, dynamic menu management, shopping cart operations, and real-time pricing calculations. Integrated responsive UI with robust backend logic and SQL database.",
      tech: ["C#", "ASP.NET", "SQL", "HTML/CSS"],
      github: "https://github.com/18sahhhilll/Razor-Pizza"
    }
  ] as Project[],
  
  experience: [
    {
      id: 1,
      title: "Java Training Program",
      company: "Anudip Foundation",
      period: "Jun 2025 – Aug 2025",
      description: [
        "Trained in Core Java fundamentals including OOP, exceptions, collections, and JDBC",
        "Implemented CRUD operations using JDBC and MySQL across 5+ practice modules",
        "Managed 100+ records ensuring reliable data storage and retrieval"
      ],
      type: "work"
    },
    {
      id: 2,
      title: "Web Development Intern",
      company: "My Job Grow – Hybrid Internship",
      period: "Nov 2024 – Dec 2024",
      description: [
        "Built responsive ReactJS interfaces for 3+ web pages ensuring cross-device compatibility",
        "Connected frontend components with backend services across 3+ user workflows",
        "Enabled real-time data updates improving application performance"
      ],
      type: "work"
    },
    {
      id: 3,
      title: "Web Development Intern",
      company: "eMsys Solutions",
      period: "June 2023 – July 2023",
      description: [
        "Engineered functional modules using C#, ASP.NET, and HTML for internal web applications",
        "Integrated Oracle and MySQL databases supporting real-time backend operations",
        "Worked on 2+ application modules with database connectivity"
      ],
      type: "work"
    },
    {
      id: 4,
      title: "BE in Computer Engineering",
      company: "Dr. D. Y. Patil Technical Campus, Pune",
      period: "Aug 2024 – July 2027",
      description: [
        "Currently pursuing Bachelor of Engineering in Computer Engineering",
        "Focus on Software Development, Web Technologies, and Data Structures"
      ],
      type: "education"
    },
    {
      id: 5,
      title: "Diploma in Computer Engineering",
      company: "Mahavir Polytechnic, Nashik",
      period: "Dec 2021 – Aug 2024",
      description: [
        "Completed Diploma in Computer Engineering",
        "Built strong foundation in programming and web development"
      ],
      type: "education"
    }
  ] as Experience[],
  
  achievements: [
    {
      id: 1,
      title: "MAHA-VEER",
      competition: "Project Competition",
      prize: "1st Prize – Winner for 'Brain Bazaar'"
    },
    {
      id: 2,
      title: "PRO-JIT",
      competition: "Project Competition",
      prize: "2nd Prize – Runner-up for 'Brain Bazaar'"
    },
    {
      id: 3,
      title: "Code Fiesta",
      competition: "Bug Bounty Competition",
      prize: "1st Prize – Winner"
    }
  ] as Achievement[]
};

// Theme Toggle Component
const ThemeToggle: React.FC<{ darkMode: boolean; toggleTheme: () => void }> = ({ darkMode, toggleTheme }) => (
  <button
    onClick={toggleTheme}
    className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
    aria-label="Toggle theme"
  >
    {darkMode ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-gray-700" />}
  </button>
);

// Navbar Component
const Navbar: React.FC<{ darkMode: boolean; toggleTheme: () => void }> = ({ darkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'achievements', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow-md z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button onClick={() => scrollTo('home')} className="text-xl font-bold text-gray-900 dark:text-white">
            Sahil Sangle
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {item.label}
              </button>
            ))}
            <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
            <button onClick={() => setIsOpen(!isOpen)} className="p-2" aria-label="Toggle menu">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`block w-full text-left py-2 px-4 text-sm font-medium ${
                  activeSection === item.id
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

// Hero Component
const Hero: React.FC = () => (
  <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
    <div className="max-w-7xl mx-auto text-center">
      <div className="mb-8 flex justify-center">
        <div className="w-32 h-32 rounded-full overflow-hidden shadow-xl border-4 border-blue-500">
          <img
            src="/image.jpeg"
            alt="Sahil Sangle"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
        {portfolioData.name}
      </h1>
      <p className="text-2xl md:text-3xl text-blue-600 dark:text-blue-400 mb-4">
        {portfolioData.role}
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
        📍 {portfolioData.location}
      </p>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
        {portfolioData.tagline}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl"
        >
          View Projects
        </button>
        <a
          href="/Sahil_Resume.pdf"
          download
          className="px-8 py-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
        >
          <Download className="w-5 h-5" />
          Download Resume
        </a>
      </div>
      <div className="flex justify-center gap-6 mt-8">
        <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          <Github className="w-6 h-6" />
        </a>
        <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          <Linkedin className="w-6 h-6" />
        </a>
        <a href={`mailto:${portfolioData.email}`} className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          <Mail className="w-6 h-6" />
        </a>
      </div>
    </div>
  </section>
);

// About Component
const About: React.FC = () => (
  <section id="about" className="py-20 px-4 bg-white dark:bg-gray-900">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">About Me</h2>
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-center">
          {portfolioData.bio}
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="text-center p-6 bg-blue-50 dark:bg-gray-800 rounded-lg shadow-md">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">3+</div>
            <div className="text-gray-700 dark:text-gray-300">Internships</div>
          </div>
          <div className="text-center p-6 bg-blue-50 dark:bg-gray-800 rounded-lg shadow-md">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">10+</div>
            <div className="text-gray-700 dark:text-gray-300">Technologies</div>
          </div>
          <div className="text-center p-6 bg-blue-50 dark:bg-gray-800 rounded-lg shadow-md">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">3</div>
            <div className="text-gray-700 dark:text-gray-300">Award Wins</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Skills Component
const Skills: React.FC = () => (
  <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Skills & Expertise</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {portfolioData.skills.map((category, idx) => (
          <div key={idx} className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-blue-600 dark:text-blue-400">{category.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{category.title}</h3>
            </div>
            <div className="space-y-4">
              {category.skills.map((skill, skillIdx) => (
                <div key={skillIdx}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full transition-all"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Projects Component
const Projects: React.FC = () => (
  <section id="projects" className="py-20 px-4 bg-white dark:bg-gray-900">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Featured Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {portfolioData.projects.map(project => (
          <div key={project.id} className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
            <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <Code className="w-16 h-16 text-white opacity-50" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Experience Component
const Experience: React.FC = () => (
  <section id="experience" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Experience & Education</h2>
      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-600 dark:bg-blue-400"></div>
        {portfolioData.experience.map((exp) => (
          <div key={exp.id} className="relative pl-20 pb-12">
            <div className={`absolute left-6 w-5 h-5 rounded-full border-4 ${
              exp.type === 'work' ? 'bg-blue-600 border-blue-200' : 'bg-green-600 border-green-200'
            } dark:border-gray-700`}></div>
            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">{exp.period}</span>
              </div>
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{exp.company}</p>
              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-gray-700 dark:text-gray-300 flex items-start text-sm">
                    <span className="mr-2 text-blue-600 dark:text-blue-400">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Achievements Component
const Achievements: React.FC = () => (
  <section id="achievements" className="py-20 px-4 bg-white dark:bg-gray-900">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Achievements</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {portfolioData.achievements.map((achievement) => (
          <div key={achievement.id} className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 border-2 border-yellow-200 dark:border-yellow-700">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-yellow-400 dark:bg-yellow-600 rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-2">
              {achievement.title}
            </h3>
            <p className="text-center text-gray-700 dark:text-gray-300 text-sm mb-2 font-medium">
              {achievement.competition}
            </p>
            <p className="text-center text-blue-600 dark:text-blue-400 text-sm font-semibold">
              {achievement.prize}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Contact Component
const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Partial<ContactForm>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<ContactForm> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Let's Connect</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I'm always interested in hearing about new opportunities, collaborations, and exciting projects. Feel free to reach out!
            </p>
            <div className="space-y-4">
              <a href={`mailto:${portfolioData.email}`} className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Mail className="w-5 h-5" />
                <span>{portfolioData.email}</span>
              </a>
              <a href={`tel:${portfolioData.phone}`} className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <span className="text-lg">📱</span>
                <span>{portfolioData.phone}</span>
              </a>
              <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
          <div className="space-y-4">
            {submitted && (
              <div className="p-4 bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700 rounded-lg text-green-800 dark:text-green-200">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                className={`w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-600 outline-none ${
                  errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                }`}
              />
              {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                className={`w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-600 outline-none ${
                  errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                }`}
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                className={`w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-600 outline-none resize-none ${
                  errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                }`}
              />
              {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
            </div>
            <button
              onClick={handleSubmit}
              className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer: React.FC = () => (
  <footer className="bg-gray-900 dark:bg-black text-white py-8 px-4">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 mb-4 md:mb-0">
          © 2024 {portfolioData.name}. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
            <Github className="w-6 h-6" />
          </a>
          <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href={`mailto:${portfolioData.email}`} className="text-gray-400 hover:text-white transition-colors" aria-label="Email">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

// Main App Component
export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Navbar darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}