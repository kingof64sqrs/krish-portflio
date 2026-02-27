import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Terminal, Send } from 'lucide-react';
import { useState } from 'react';

const contactInfo = [
  {
    title: 'Email',
    value: 'krishnapraichura@gmail.com',
    link: 'mailto:krishnapraichura@gmail.com',
    icon: Mail
  },
  {
    title: 'Phone',
    value: '+91 8825524993',
    link: 'tel:+918825524993',
    icon: Phone
  },
  {
    title: 'Location',
    value: 'Coimbatore, Tamil Nadu, India',
    
    icon: MapPin
  },
  {
    title: 'GitHub',
    value: 'github.com/Krishna-Raichura',
    url: 'https://github.com/Krishna-Raichura',
    icon: Github
  }
];

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/Krishna-Raichura',
    icon: Github
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/krishna-raichura',
    icon: Linkedin
  },
  {
    name: 'Email',
    url: 'mailto:krishnapraichura@gmail.com',
    icon: Mail
  }
];

const Contact = () => {
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

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
      
    } catch (error) {
      setSubmitStatus('error');
      
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-red-900/10 to-black pt-12 sm:pt-16 lg:pt-20">
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
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-600 rounded-full shadow-md"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full shadow-md"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full shadow-md"></div>
              <span className="text-gray-400 ml-2 sm:ml-4 font-mono text-sm sm:text-base">portfolio:~$ cd /contact</span>
            </div>
          </div>
          <h1 className="text-2xl font-bold text-white mb-6 font-montserrat bg-gradient-to-r from-accent-red via-white to-accent-red bg-[length:200%_100%] animate-gradient bg-clip-text text-transparent drop-shadow-xl">
            Get In <span className="text-red-500">Touch</span>
          </h1>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 content-gap">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="glass-card p-4 sm:p-6 lg:p-8 rounded-2xl shadow-2xl border border-red-500/30 bg-white/5 backdrop-blur-lg shadow-xl hover:shadow-accent-red/40"
          >
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-600 rounded-full shadow-md"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full shadow-md"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full shadow-md"></div>
              </div>
              <span className="text-gray-400 font-mono text-sm sm:text-base">contact-form</span>
            </div>

            <h2 className="responsive-text-2xl font-bold text-white mb-4 sm:mb-6 font-mono">Send a Message</h2>
            
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 p-3 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 font-mono"
              >
                ✓ Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}
            
            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 font-mono"
              >
                ✗ Failed to send message. Please try again or contact me directly.
              </motion.div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6" noValidate>
              <div className="grid md:grid-cols-2 gap-3 sm:gap-4">
                <div className="relative group">
                  <label htmlFor="name" className="block text-sm sm:text-base font-medium text-gray-300 mb-1 sm:mb-2 font-mono">
                    <span className="text-red-500">$</span> name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-black/60 border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-colors font-mono shadow-inner focus-visible ${
                      errors.name ? 'border-red-500' : 'border-red-500/30 focus:border-red-500'
                    }`}
                    placeholder="Enter your name"
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    required
                  />
                  {errors.name && (
                    <p id="name-error" className="text-red-400 text-xs mt-1 font-mono">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div className="relative group">
                  <label htmlFor="email" className="block text-sm sm:text-base font-medium text-gray-300 mb-1 sm:mb-2 font-mono">
                    <span className="text-red-500">$</span> email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-black/60 border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-colors font-mono shadow-inner focus-visible ${
                      errors.email ? 'border-red-500' : 'border-red-500/30 focus:border-red-500'
                    }`}
                    placeholder="Enter your email"
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    required
                  />
                  {errors.email && (
                    <p id="email-error" className="text-red-400 text-xs mt-1 font-mono">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>
              <div className="relative group">
                <label htmlFor="subject" className="block text-sm sm:text-base font-medium text-gray-300 mb-1 sm:mb-2 font-mono">
                  <span className="text-red-500">$</span> subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-black/60 border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-colors font-mono shadow-inner focus-visible ${
                    errors.subject ? 'border-red-500' : 'border-red-500/30 focus:border-red-500'
                  }`}
                  placeholder="What's this about?"
                  aria-describedby={errors.subject ? 'subject-error' : undefined}
                  required
                />
                {errors.subject && (
                  <p id="subject-error" className="text-red-400 text-xs mt-1 font-mono">
                    {errors.subject}
                  </p>
                )}
              </div>
              <div className="relative group">
                <label htmlFor="message" className="block text-sm sm:text-base font-medium text-gray-300 mb-1 sm:mb-2 font-mono">
                  <span className="text-red-500">$</span> message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-black/60 border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-colors resize-none font-mono shadow-inner focus-visible ${
                    errors.message ? 'border-red-500' : 'border-red-500/30 focus:border-red-500'
                  }`}
                  placeholder="Tell me about your project..."
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  required
                />
                {errors.message && (
                  <p id="message-error" className="text-red-400 text-xs mt-1 font-mono">
                    {errors.message}
                  </p>
                )}
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02, backgroundColor: isSubmitting ? '#6b7280' : '#b91c1c' }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full py-2 sm:py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 text-white shadow-lg border border-red-500/30 transition-all duration-200 focus-visible min-h-[44px] ${
                  isSubmitting ? 'bg-gray-600 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700 shadow-red-500/20'
                }`}
                aria-describedby="submit-status"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Terminal size={18} className="sm:w-5 sm:h-5" />
                    <span>Send Message</span>
                    <Send size={18} className="sm:w-5 sm:h-5" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <h2 className="responsive-text-2xl font-bold text-white mb-4 sm:mb-6 font-mono">Contact Information</h2>
              <div className="space-y-3 sm:space-y-4">
                {contactInfo.map((info, idx) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 glass-card rounded-lg hover:bg-black/60 border border-red-500/30 shadow-md transition-colors group shadow-xl hover:shadow-accent-red/40 focus-visible interactive-element"
                    aria-label={`Contact via ${info.title}`}
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black/70 rounded-lg flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform shadow-inner">
                      <info.icon size={20} className="sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-sm sm:text-base">{info.title}</h3>
                      <p className="text-gray-300 text-xs sm:text-sm">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h2 className="responsive-text-2xl font-bold text-white mb-4 sm:mb-6 font-mono">Follow Me</h2>
              <div className="flex space-x-3 sm:space-x-4">
                {socialLinks.map((social, idx) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-black/70 rounded-lg flex items-center justify-center text-gray-300 hover:text-red-500 border border-red-500/30 shadow-md transition-all duration-200 shadow-xl hover:shadow-accent-red/40 focus-visible interactive-element"
                    aria-label={`Follow on ${social.name}`}
                  >
                    <social.icon size={20} className="sm:w-6 sm:h-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact; 