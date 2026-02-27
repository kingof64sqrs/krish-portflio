import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Krishna-Raichura',
      icon: Github,
      ariaLabel: 'Visit GitHub profile'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/krishna-raichura',
      icon: Linkedin,
      ariaLabel: 'Visit LinkedIn profile'
    },
    {
      name: 'Email',
      url: 'mailto:krishnapraichura@gmail.com',
      icon: Mail,
      ariaLabel: 'Send email'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-dark-bg border-t border-dark-border/50">
      <div className="responsive-container">
        <div className="py-8 sm:py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-accent-red rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm sm:text-base">KR</span>
                </div>
                <span className="text-white font-bold text-lg sm:text-xl font-montserrat">
                  Krishna Raichura
                </span>
              </div>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                AI/ML Engineer and Innovator building production-ready AI solutions. 3 Patents | 10+ Hackathon Winner.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-white font-semibold text-lg sm:text-xl">Quick Links</h3>
              <nav className="space-y-2">
                {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(`#${item.toLowerCase()}`);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="block text-gray-400 hover:text-accent-red transition-colors duration-200 text-sm sm:text-base focus-visible interactive-element"
                    aria-label={`Navigate to ${item} section`}
                  >
                    {item}
                  </motion.a>
                ))}
              </nav>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-white font-semibold text-lg sm:text-xl">Connect</h3>
              <div className="flex space-x-3 sm:space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-dark-card/50 border border-dark-border/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-accent-red transition-all duration-200 focus-visible interactive-element"
                    aria-label={social.ariaLabel}
                  >
                    <social.icon size={18} className="sm:w-5 sm:h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 sm:mt-12 pt-8 border-t border-dark-border/50"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
              <p className="text-gray-400 text-sm sm:text-base text-center sm:text-left">
                © {currentYear} Krishna  Raichura. All rights reserved.
              </p>
              <div className="flex items-center space-x-2 text-gray-400 text-sm sm:text-base">
                <span>Built with</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Heart size={16} className="text-accent-red" />
                </motion.div>
                <span>and AI innovation</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 w-12 h-12 bg-accent-red rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-accent-red/40 transition-all duration-200 focus-visible z-40"
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
      </motion.button>
    </footer>
  );
};

export default Footer; 