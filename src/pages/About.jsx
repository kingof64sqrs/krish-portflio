import { motion, useScroll, useTransform } from 'framer-motion';
import { Database, Bot, Braces, Palette, Feather, Sparkles, Shield, Cpu, Terminal, Zap, Code, Github, Linkedin, Award, Trophy } from 'lucide-react';
import profileImg from '../image/profile.png';

const skills = [
  { name: 'Generative AI', icon: Bot, color: 'text-white', category: 'AI' },
  { name: 'LangChain', icon: Terminal, color: 'text-accent-red', category: 'Development' },
  { name: 'Machine Learning', icon: Cpu, color: 'text-white', category: 'AI' },
  { name: 'Full-Stack Dev', icon: Braces, color: 'text-accent-red', category: 'Development' },
  { name: 'React/Next.js', icon: Code, color: 'text-white', category: 'Frontend' },
  { name: 'PyTorch/TensorFlow', icon: Database, color: 'text-accent-red', category: 'ML' }
];

const achievements = [
  {
    title: '10+ Hackathon Winner',
    description: 'Won 10+ national hackathons including StartupTN, Industry, and 24-hour hackathons',
    icon: Trophy,
    year: '2023-25'
  },
  {
    title: 'Dr. A.P.J Abdul Kalam Award',
    description: 'Silver Innovator Award for AI-powered cancer detection project',
    icon: Award,
    year: '2024'
  },
  {
    title: '3 Published Patents',
    description: 'Patents in AI, healthcare innovation, and virtual laboratories',
    icon: Shield,
    year: '2024-25'
  },
  {
    title: 'StartupTN Road Safety Winner',
    description: 'AI-driven solution for road safety and ambulance response optimization',
    icon: Trophy,
    year: '2024'
  },
  {
    title: 'Sharkathon Winner @Bangalore',
    description: 'Top spot secured in 24-hour startup pitch competition',
    icon: Trophy,
    year: '2024'
  }
];

const certifications = [
  {
    name: 'Oracle Cloud Infrastructure 2025',
    issuer: 'Oracle',
    year: '2025',
    icon: Shield
  },
  {
    name: 'Certified Generative AI Professional',
    issuer: 'Oracle',
    year: '2025',
    icon: Cpu
  },
  {
    name: 'Machine Learning: Algorithms',
    issuer: 'Stanford University',
    year: '2024',
    icon: Cpu
  },
  {
    name: 'Cyber Security Professional',
    issuer: 'Microsoft & LinkedIn',
    year: '2024',
    icon: Shield
  },
  {
    name: 'Multi-Agent AI Systems',
    issuer: 'Deep Learning.AI',
    year: '2025',
    icon: Bot
  },
  {
    name: 'Machine Learning',
    issuer: 'FreeCodeCamp',
    year: '2024',
    icon: Cpu
  }
];

const experience = [
  {
    title: 'AI Engineer',
    company: 'Adya AI',
    period: 'Jun 2025 - Nov 2025',
    description: 'Led development of enterprise AI solutions using Generative AI and LLM frameworks',
    icon: Bot
  },
  {
    title: 'AI Engineer Intern',
    company: 'CoreInsight AI',
    period: 'Jun 2024 - Dec 2024',
    description: 'Worked on multi-agent AI systems and LLM-based automation solutions',
    icon: Cpu
  },
  {
    title: 'Software Developer Intern',
    company: 'AlgoTutor',
    period: 'Jan 2024 - Mar 2024',
    description: 'Developed full-stack applications and contributed to AI-powered educational tools',
    icon: Code
  }
];

const education = [
  {
    degree: 'B.E. Computer Science & Engineering (AI & ML)',
    institution: 'Sri Eshwar College of Engineering',
    period: 'Nov 2022 - Jun 2026',
    grade: 'CGPA: 8.1',
    icon: Cpu
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Bharatiya Vidya Bhavan',
    period: '2021 - 2022',
    grade: '80%',
    icon: Shield
  },
  {
    degree: 'Secondary School Leaving Certificate (SSLC)',
    institution: 'Bharatiya Vidya Bhavan',
    period: '2019 - 2020',
    grade: '67%',
    icon: Shield
  }
];

const About = () => {
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
              <span className="text-gray-400 ml-2 sm:ml-4 font-mono text-sm sm:text-base">portfolio:~$ cd /about</span>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-white mb-3 font-montserrat bg-gradient-to-r from-accent-red via-white to-accent-red bg-[length:200%_100%] animate-gradient bg-clip-text text-transparent">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-base text-gray-400 max-w-2xl mx-auto">
            AI Engineer and Innovator | 3 Patents | 10+ Hackathon Winner
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 content-gap">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="relative group mb-6 sm:mb-8 glass-card shadow-xl">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 1, -1, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -inset-3 sm:-inset-4 rounded-2xl bg-gradient-to-br from-accent-red to-black opacity-60 blur-2xl z-0"
              />
              <div className="relative z-10 w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden glass-card shadow-xl mx-auto">
                <motion.img
                  src={profileImg}
                  alt="Krishna  Raichura - AI/ML Engineer"
                  className="w-full h-full object-cover rounded-2xl"
                  loading="lazy"
                  decoding="async"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 sm:space-y-6"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white font-montserrat">Krishna Raichura</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              AI Engineer and Innovator working at the intersection of Generative AI, Autonomous Agents, and Scalable Enterprise Systems. Backed by 3 patents and 10+ national hackathon wins, I'm focused on building production-ready AI solutions for healthcare, education, and digital transformation.
              </p>
              
              <div className="flex space-x-4">
                <motion.a
                  href="https://github.com/Krishna-Raichura"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-dark-card/50 border border-dark-border/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-accent-red transition-all duration-200 focus-visible interactive-element"
                  aria-label="Visit GitHub profile"
                >
                  <Github size={20} />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/krishna-raichura"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-dark-card/50 border border-dark-border/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-accent-red transition-all duration-200 focus-visible interactive-element"
                  aria-label="Visit LinkedIn profile"
                >
                  <Linkedin size={20} />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-6 sm:space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 font-montserrat">Core Skills</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(239, 68, 68, 0.1)' }}
                    className="flex items-center space-x-3 p-3 sm:p-4 rounded-lg bg-dark-card/30 hover:bg-accent-red/10 transition-all duration-200 group"
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center bg-accent-red/10 ${skill.color}`}>
                      <skill.icon size={16} />
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-200 text-sm sm:text-base font-medium">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 font-montserrat">Achievements</h3>
              <div className="space-y-4 sm:space-y-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, backgroundColor: 'rgba(239, 68, 68, 0.05)' }}
                    className="flex items-start space-x-4 p-4 sm:p-6 rounded-lg bg-dark-card/30 hover:bg-accent-red/10 transition-all duration-200 group"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center bg-accent-red/10 text-accent-red shadow-md group-hover:scale-110 transition-transform duration-200">
                      <achievement.icon size={20} className="sm:w-6 sm:h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-white font-semibold text-base sm:text-lg">
                          {achievement.title}
                        </h4>
                        <span className="text-accent-red text-sm font-mono">
                          {achievement.year}
                        </span>
                      </div>
                      <p className="text-gray-300 text-sm sm:text-base">
                        {achievement.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 font-montserrat">Certifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(239, 68, 68, 0.3)' }}
                    className="p-4 sm:p-6 rounded-lg bg-dark-card/30 border border-dark-border/50 hover:border-accent-red/30 transition-all duration-200 group"
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-accent-red/10 text-accent-red">
                        <cert.icon size={16} />
                      </div>
                      <span className="text-accent-red text-sm font-mono">
                        {cert.year}
                      </span>
                    </div>
                    <h4 className="text-white font-semibold text-sm sm:text-base mb-1">
                      {cert.name}
                    </h4>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      {cert.issuer}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 font-montserrat">Experience</h3>
              <div className="space-y-4 sm:space-y-6">
                {experience.map((exp, index) => (
                  <motion.div
                    key={exp.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, backgroundColor: 'rgba(239, 68, 68, 0.05)' }}
                    className="flex items-start space-x-4 p-4 sm:p-6 rounded-lg bg-dark-card/30 hover:bg-accent-red/10 transition-all duration-200 group border border-dark-border/50 hover:border-accent-red/30"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center bg-accent-red/10 text-accent-red shadow-md group-hover:scale-110 transition-transform duration-200">
                      <exp.icon size={20} className="sm:w-6 sm:h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                        <div>
                          <h4 className="text-white font-semibold text-base sm:text-lg">
                            {exp.title}
                          </h4>
                          <p className="text-gray-400 text-sm">{exp.company}</p>
                        </div>
                        <span className="text-accent-red text-sm font-mono">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-gray-300 text-sm sm:text-base">
                        {exp.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 font-montserrat">Education</h3>
              <div className="space-y-4 sm:space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, backgroundColor: 'rgba(239, 68, 68, 0.05)' }}
                    className="flex items-start space-x-4 p-4 sm:p-6 rounded-lg bg-dark-card/30 hover:bg-accent-red/10 transition-all duration-200 group border border-dark-border/50 hover:border-accent-red/30"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center bg-accent-red/10 text-accent-red shadow-md group-hover:scale-110 transition-transform duration-200">
                      <edu.icon size={20} className="sm:w-6 sm:h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                        <div>
                          <h4 className="text-white font-semibold text-base sm:text-lg">
                            {edu.degree}
                          </h4>
                          <p className="text-gray-400 text-sm">{edu.institution}</p>
                        </div>
                        <span className="text-accent-red text-sm font-mono">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-gray-300 text-sm sm:text-base">
                        {edu.grade}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About; 