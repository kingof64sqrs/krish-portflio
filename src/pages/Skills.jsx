import { motion, useScroll, useTransform } from 'framer-motion';
import { Code, Terminal, Braces, Shield, Github, Cpu } from 'lucide-react';

const skills = [
  {
    category: 'Programming & Backend',
    items: [
      'Python', 'Node.js', 'FastAPI', 'Express.js', 'JavaScript', 'TypeScript'
    ]
  },
  {
    category: 'Frontend Development',
    items: [
      'React.js', 'Next.js', 'Three.js', 'Tailwind CSS', 'HTML/CSS'
    ]
  },
  {
    category: 'Machine Learning & Deep Learning',
    items: [
      'TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'NumPy', 'Pandas', 'Matplotlib', 'Plotly'
    ]
  },
  {
    category: 'Generative AI & LLM Frameworks',
    items: [
      'LangChain', 'CrewAI', 'LangGraph', 'Hugging Face', 'OpenAI API', 'Groq API', 'Azure OpenAI'
    ]
  },
  {
    category: 'Databases',
    items: [
      'MongoDB', 'PostgreSQL', 'Firebase', 'SQLite'
    ]
  },
  {
    category: 'Model Deployment & Optimization',
    items: [
      'Docker', 'ONNX', 'TensorRT', 'Streamlit', 'Gradio'
    ]
  },
  {
    category: 'Tools & Platforms',
    items: [
      'Playwright', 'Browser Use', 'Blender MCP', 'Postman AI', 'LangSmith', 'Roboflow', 'Weights & Biases'
    ]
  },
  {
    category: 'AI-Powered Development Tools',
    items: [
      'Cursor', 'Replit AI', 'GitHub Copilot', 'Codeium', 'OpenAI Playground'
    ]
  }
];

const Skills = () => {
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

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Programming Languages':
        return Code;
      case 'Frameworks & Libraries':
        return Braces;
      case 'Databases':
        return Cpu;
      case 'DevOps & Tools':
        return Terminal;
      case 'AI/ML':
        return Cpu;
      case 'Cybersecurity':
        return Shield;
      default:
        return Code;
    }
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
              <span className="text-gray-400 ml-2 sm:ml-4 font-mono text-sm sm:text-base">portfolio:~$ cd /skills</span>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-white mb-3 font-montserrat bg-gradient-to-r from-accent-red via-white to-accent-red bg-[length:200%_100%] animate-gradient bg-clip-text text-transparent">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-base text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across multiple domains
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 card-gap">
          {skills.map((skillCategory, categoryIndex) => {
            const IconComponent = getCategoryIcon(skillCategory.category);
            return (
              <motion.div
                key={skillCategory.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                whileHover={{ scale: 1.02, boxShadow: '0 0 32px #ef444488' }}
                className="glass-card p-4 sm:p-6 rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden shadow-xl hover:shadow-accent-red/40 interactive-element"
              >
                <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center bg-accent-red/10 text-accent-red shadow-md">
                    <IconComponent size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {skillCategory.category}
                  </h3>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      whileHover={{ scale: 1.02, backgroundColor: 'rgba(239, 68, 68, 0.1)' }}
                      className="flex items-center space-x-2 p-2 sm:p-3 rounded-lg bg-dark-card/30 hover:bg-accent-red/10 transition-all duration-200 group"
                    >
                      <div className="w-2 h-2 bg-accent-red rounded-full group-hover:scale-150 transition-transform duration-200"></div>
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-200 text-sm sm:text-base font-medium">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 sm:mt-16 lg:mt-20 text-center"
        >
          <div className="glass-card p-6 sm:p-8 rounded-2xl shadow-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
              Always Learning & Growing
            </h3>
            <p className="text-gray-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
              I'm constantly expanding my skill set and staying up-to-date with the latest technologies. 
              My passion for learning drives me to explore new tools, frameworks, and methodologies 
              to deliver the best possible solutions.
            </p>
            <motion.a
              href="https://github.com/Krishna-Raichura?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 mt-6 sm:mt-8 px-6 sm:px-8 py-3 sm:py-4 bg-accent-red hover:bg-white text-white hover:text-accent-red font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-accent-red/40 focus-visible interactive-element"
              aria-label="View my GitHub repositories"
            >
              <Github size={20} />
              <span>View My Work</span>
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills; 