"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiArrowUp } from "react-icons/fi";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socialLinks = [
    { icon: <FiGithub size={18} />, url: "https://github.com/yourusername" },
    { icon: <FiLinkedin size={18} />, url: "https://linkedin.com/in/yourusername" },
    { icon: <FiTwitter size={18} />, url: "https://twitter.com/yourusername" },
    { icon: <FiInstagram size={18} />, url: "https://instagram.com/yourusername" },
  ];

  const footerLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white mb-4 md:mb-0">
              fadlan
            </Link>
            
            <div className="flex flex-wrap justify-center space-x-4 md:space-x-6">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
                <p className="mb-1">
                  &copy; {new Date().getFullYear()} fadlan. All rights reserved.
                </p>
                <p className="text-sm">
                  Designed and built with ❤️ using Next.js and Tailwind CSS
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.icon}
                  </motion.a>
                ))}
                
                <motion.button
                  onClick={scrollToTop}
                  className="p-2 ml-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Scroll to top"
                >
                  <FiArrowUp size={18} />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
