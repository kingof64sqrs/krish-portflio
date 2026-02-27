import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Sparkles, Zap, Code, Bot, Brain, Cpu, Rocket, Wifi, Globe, Shield } from 'lucide-react';
import profileImg from '../image/profile.png';

const Loader = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const loadingTexts = [
    'Initializing system...',
    'Loading modules...',
    'Establishing connections...',
    'Preparing portfolio...',
    'Welcome to my world!'
  ];

  const icons = [Sparkles, Zap, Code, Bot, Brain, Cpu, Rocket, Wifi, Globe, Shield];

  useEffect(() => {
    const currentTextToType = loadingTexts[currentIndex];
    const typeSpeed = isDeleting ? 50 : 100;
    const deleteSpeed = 50;

    if (!isDeleting && currentText === currentTextToType) {
      setTimeout(() => setIsDeleting(true), 1000);
      return;
    }

    if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % loadingTexts.length);
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
  }, [currentText, currentIndex, isDeleting, loadingTexts]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-dark-bg flex items-center justify-center z-50"
      >
        <div className="relative w-full max-w-md sm:max-w-lg">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="glass-card p-6 sm:p-8 rounded-2xl shadow-2xl border border-accent-red/30"
          >
            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-accent-red rounded-full"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-black rounded-full border border-white"></div>
                </div>
                <span className="text-gray-400 font-mono text-sm sm:text-base">loader</span>
              </div>

              <div className="text-center space-y-4 sm:space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto"
                >
                <motion.div
                  animate={{
                      rotate: 360,
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                      ease: 'linear',
                  }}
                    className="absolute inset-0 border-4 border-accent-red/30 border-t-accent-red rounded-full"
                  />
                  <div className="absolute inset-2 sm:inset-3 bg-dark-card/50 rounded-full flex items-center justify-center">
                  <motion.img
                    src={profileImg}
                      alt="Krishna  Raichura - AI/ML Engineer"
                      className="w-full h-full object-cover rounded-full"
                      loading="lazy"
                      decoding="async"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="space-y-2 sm:space-y-3"
                >
                  <h2 className="text-xl sm:text-2xl font-bold text-white font-montserrat">
                    Krishna  Raichura
                  </h2>
                  <p className="text-gray-400 text-sm sm:text-base">
                    AI/ML Engineer & Innovator
                  </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="font-mono text-sm sm:text-base text-gray-300"
                >
                  <span className="text-accent-red">$</span> {currentText}
                  <span className="animate-pulse">|</span>
          </motion.div>

          <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="flex justify-center space-x-2 sm:space-x-3"
                >
                  {icons.map((Icon, index) => (
            <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                        delay: 1 + index * 0.1,
                        duration: 0.3,
                      }}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      className="w-8 h-8 sm:w-10 sm:h-10 bg-dark-card/50 border border-dark-border/50 rounded-lg flex items-center justify-center text-accent-red"
                    >
                      <Icon size={16} className="sm:w-5 sm:h-5" />
            </motion.div>
                  ))}
          </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 2 }}
                  className="w-full bg-dark-card/30 rounded-full h-2 sm:h-3"
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 3, ease: 'easeInOut' }}
                    className="bg-gradient-to-r from-accent-red to-white h-full rounded-full"
                />
              </motion.div>
            </div>

              <motion.div
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="flex space-x-1 justify-center"
              >
                <div className="w-2 h-2 bg-accent-red rounded-full"></div>
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="w-2 h-2 bg-black rounded-full border border-white"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader; 