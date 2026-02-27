import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Code, Zap, Bot, Sparkles, Shield, Cpu, Database, Terminal, Wifi, Droplets, Cloud } from 'lucide-react';

const projects = [
  {
    title: 'Onculoscope (Patented)',
    description: 'An AI-powered healthcare solution for early cancer detection, integrating advanced imaging analysis, risk assessment, and virtual oncologist consultation. Leverages blockchain technology for secure medical data storage and tamper-proof patient records.',
    tags: ['#MachineLearning', '#Flutter', '#IoT', '#Blockchain', '#Healthcare'],
    github: '',
    demo: '',
    tech: ['Machine Learning', 'Flutter', 'IoT', 'Blockchain'],
    icon: Bot,
    color: 'text-pink-400',
    category: 'AI/Healthcare'
  },
  {
    title: 'Reality Hive (Patented)',
    description: 'A 3D Virtual Laboratory redefining science education with immersive simulations and an integrated AI chatbot for real-time guidance. Provides interactive learning experiences for students.',
    tags: ['#React', '#Node.js', '#GenAI', '#3D', '#Education'],
    github: '',
    demo: '',
    tech: ['React', 'Node.js', 'Generative AI', '3D'],
    icon: Sparkles,
    color: 'text-blue-400',
    category: 'AI/Education'
  },
  {
    title: 'Browser Automation Agent',
    description: 'Built a vision-enabled browser automation agent using Playwright, Browser Use, and LangGraph, enabling LLMs with vision to understand and interact with web interfaces like humans. Designed hybrid DOM + visual reasoning for robust automation across dynamic UIs.',
    tags: ['#Python', '#Playwright', '#BrowserUse', '#LangGraph', '#VisionAI'],
    github: '',
    demo: '',
    tech: ['Python', 'Playwright', 'Browser Use', 'LangGraph'],
    icon: Terminal,
    color: 'text-green-400',
    category: 'AI/Automation'
  },
  {
    title: 'Cyber Hawk',
    description: 'An AI-driven cybersecurity system to identify and track drug trafficking on Telegram, using web scraping, ML, blockchain, and ethical hacking techniques.',
    tags: ['#AI', '#Cybersecurity', '#Blockchain', '#MachineLearning'],
    github: '',
    demo: '',
    tech: ['AI', 'Cybersecurity Tools', 'Blockchain'],
    icon: Shield,
    color: 'text-red-400',
    category: 'AI/Cybersecurity'
  },
  {
    title: 'Icraft X - LLM-Powered Image-to-3D',
    description: 'A full-stack 3D automation platform that converts images into accurate 3D models and allows real-time model modification using LLM-based natural language prompts. Exports ready-to-use React components for direct integration.',
    tags: ['#Python', '#Node.js', '#BlenderMCP', '#MongoDB', '#LLM', '#Three.js'],
    github: '',
    demo: '',
    tech: ['Python', 'Node.js', 'Blender MCP', 'MongoDB', 'Three.js'],
    icon: Code,
    color: 'text-purple-400',
    category: 'AI/3D'
  }
];

const techIcons = {
  'Python': Code,
  'React': Code,
  'Node.js': Zap,
  'MongoDB': Database,
  'Machine Learning': Bot,
  'Web Scraping': Terminal,
  'Network Analysis': Wifi,
  'IoT': Cpu,
  'Raspberry Pi': Cpu,
  'Express': Zap,
  'WebSocket': Wifi,
  'Security APIs': Shield,
  'NLP': Bot,
  'Cryptanalysis': Shield,
  'Packet Capture': Wifi,
  'Data Analysis': Sparkles,
  'Hardware': Cpu,
};

const Projects = () => {
  const { scrollY } = useScroll();
  const yBlob1 = useTransform(scrollY, [0, 600], [0, 40]);
  const yBlob2 = useTransform(scrollY, [0, 600], [0, -30]);
  const yBlob3 = useTransform(scrollY, [0, 600], [0, 25]);

  const sectionVariants = {
    hidden: { clipPath: 'inset(0 0 100% 0)', opacity: 0 },
    visible: {
      clipPath: 'inset(0 0 0% 0)',
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <div className="min-h-screen bg-dark-bg pt-12 sm:pt-16 lg:pt-20 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <motion.div
          style={{ y: yBlob1 }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-32 left-20 w-48 h-48 sm:w-60 sm:h-60 bg-accent-red rounded-full blur-3xl opacity-10 shadow-2xl"
        />
        <motion.div
          style={{ y: yBlob2 }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-60 right-32 w-64 h-64 sm:w-80 sm:h-80 bg-white rounded-full blur-3xl opacity-10 shadow-2xl"
        />
        <motion.div
          style={{ y: yBlob3 }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-32 left-1/2 w-56 h-56 sm:w-72 sm:h-72 bg-black rounded-full blur-3xl opacity-10 shadow-2xl"
        />
      </motion.div>

      <motion.div
        className="responsive-container section-padding relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.01 }}
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } } }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <div className="terminal-header mb-4 sm:mb-6">
            <div className="flex items-center justify-center space-x-2 mb-2 sm:mb-4">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-accent-red rounded-full"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-black rounded-full border border-white"></div>
              <span className="text-gray-400 ml-2 sm:ml-4 font-mono text-sm sm:text-base">portfolio:~$ cd /projects</span>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-white mb-3 font-montserrat bg-gradient-to-r from-accent-red via-white to-accent-red bg-[length:200%_100%] animate-gradient bg-clip-text text-transparent">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-base text-gray-400 max-w-2xl mx-auto">
            Showcasing my expertise in cybersecurity, full-stack development, and AI/ML projects
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-8 sm:mb-12"
        >
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 bg-dark-card p-2 rounded-lg shadow-lg">
            {['All', 'Cybersecurity', 'Web Development', 'IoT', 'AI/ML'].map((category) => (
              <button
                key={category}
                className="px-3 sm:px-4 py-2 rounded-md text-sm sm:text-base font-medium transition-all duration-200 hover:bg-accent-red/20 hover:text-accent-red focus:bg-accent-red/30 focus:text-accent-red outline-none focus-visible min-h-[44px]"
              >
                <motion.span whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>{category}</motion.span>
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 card-gap"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
              }}
              whileHover={{ scale: 1.02, boxShadow: '0 0 32px #ef444488' }}
              className="relative group glass-card p-4 sm:p-6 rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden shadow-xl hover:shadow-accent-red/40 interactive-element"
            >
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center bg-accent-red/10 text-accent-red shadow-md`}>
                  <project.icon size={20} className="sm:w-6 sm:h-6" />
                </div>
                <span className="text-sm px-2 py-1 rounded bg-dark-card/70 text-gray-400 font-mono">
                  {project.category}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-accent-red transition-colors duration-200">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                {project.tags.map(tag => (
                  <motion.span
                    key={tag}
                    whileHover={{ scale: 1.05, backgroundColor: '#ef4444', color: '#fff' }}
                    className="text-sm px-2 py-1 rounded bg-dark-card/70 text-accent-red font-semibold font-mono transition-all duration-200"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              <div className="flex items-center justify-between z-20 relative">
                <div className="flex space-x-2">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-accent-red transition-colors p-1.5 sm:p-2 rounded-lg hover:bg-dark-card/50 shadow-md focus-visible min-h-[44px] min-w-[44px] flex items-center justify-center interactive-element"
                    title="View on GitHub"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github size={16} className="sm:w-[18px] sm:h-[18px]" />
                  </a>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 bg-dark-bg/95 backdrop-blur-sm rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 z-10"
              >
                <div className="text-center p-4">
                  <h4 className="text-white font-bold mb-3 text-base sm:text-lg">Tech Stack</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm sm:text-base">
                    {project.tech.map((tech, techIdx) => {
                      const IconComponent = techIcons[tech] || Code;
                      return (
                        <div key={techIdx} className="flex items-center space-x-2 text-gray-300">
                          <IconComponent size={12} className="sm:w-3 sm:h-3 text-accent-red" />
                          <span>{tech}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects; 