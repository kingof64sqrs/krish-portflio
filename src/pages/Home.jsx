import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Code, Zap, Sparkles, Shield, Terminal, Cpu } from 'lucide-react';
import { useState, useEffect } from 'react';
import ComputersCanvas from '../components/Computers';

const Home = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    'AI/ML Engineer',
    'Full-Stack Developer',
    'Generative AI Expert',
    '10+ Hackathon Winner'
  ];

  const { scrollY } = useScroll();
  const yBlob1 = useTransform(scrollY, [0, 600], [0, 40]);
  const yBlob2 = useTransform(scrollY, [0, 600], [0, -30]);
  const yBlob3 = useTransform(scrollY, [0, 600], [0, 25]);

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  useEffect(() => {
    const currentTextToType = texts[currentIndex];
    const typeSpeed = isDeleting ? 50 : 100;
    const deleteSpeed = 50;

    if (!isDeleting && currentText === currentTextToType) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }

    if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timer = setTimeout(() => {
      if (isDeleting) {
        setCurrentText(currentText.slice(0, -1));
      } else {
        setCurrentText(currentTextToType.slice(0, currentText.length + 1));
      }
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timer);
  }, [currentText, currentIndex, isDeleting, texts]);

  return (
    <div className="min-h-screen bg-dark-bg relative overflow-hidden">
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

      <div className="absolute inset-0 bg-grid-pattern opacity-5 z-0"></div>

      <motion.a
        href="#home"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed top-6 right-6 w-12 h-12 bg-accent-red rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-accent-red/40 transition-all duration-200 focus-visible z-40"
        aria-label="Scroll to top"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.a>

      <motion.section
        className="relative z-10 min-h-screen flex items-center pt-24 sm:pt-28"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div className="responsive-container">
          <div
            className="grid lg:grid-cols-2 content-gap items-center"
          >
            <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6 lg:space-y-8">
              <div className="terminal-header mb-4 sm:mb-6">
                <div className="flex items-center space-x-2 mb-2 sm:mb-4">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-accent-red rounded-full"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-black rounded-full border border-white"></div>
                  <span className="text-gray-400 ml-2 sm:ml-4 font-mono text-sm sm:text-base">portfolio:~$ whoami</span>
                </div>
              </div>

              <motion.h1
                variants={itemVariants}
                className="responsive-text-4xl sm:responsive-text-5xl font-bold text-white font-montserrat"
              >
                {' '}
                <span className="text-gradient">Krishna  Raichura</span>
              </motion.h1>

              <motion.div
                variants={itemVariants}
                className="responsive-text-xl sm:responsive-text-2xl text-gray-300 font-mono"
              >
                <span className="text-accent-red">$</span> I'm a{' '}
                <span className="text-accent-red font-semibold">
                  {currentText}
                  <span className="animate-pulse">|</span>
                </span>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              >
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary inline-flex items-center space-x-2"
                  aria-label="Get in touch"
                >
                  <span>Get In Touch</span>
                  <ArrowRight size={20} />
                </motion.a>
                <motion.a
                  href="https://drive.google.com/drive/folders/1Gjy6W8iLcJeuUdSuPd9Lb7wKY8DLhlkS?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary inline-flex items-center space-x-2"
                  aria-label="Download resume"
                >
                  <span>Download Resume</span>
                  <ArrowRight size={20} />
                </motion.a>
              </motion.div>

              <motion.ul
                variants={itemVariants}
                className="flex flex-wrap gap-2 sm:gap-3 text-sm sm:text-base text-gray-400"
              >
                <li className="flex items-center space-x-1">
                  <Code size={16} className="text-accent-red" />
                  <span>Generative AI</span>
                </li>
                <li className="flex items-center space-x-1">
                  <Shield size={16} className="text-accent-red" />
                  <span>LLM Development</span>
                </li>
                <li className="flex items-center space-x-1">
                  <Cpu size={16} className="text-accent-red" />
                  <span>AI/ML</span>
                </li>
              </motion.ul>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-full lg:max-w-3xl xl:max-w-4xl h-[400px] sm:h-[500px] lg:h-[650px] xl:h-[700px]">
                {/* Animated Background Glow */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute -inset-4 sm:-inset-8 bg-gradient-to-r from-accent-red/20 via-purple-500/20 to-blue-500/20 rounded-full blur-3xl -z-10"
                />

                <ComputersCanvas />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home; 