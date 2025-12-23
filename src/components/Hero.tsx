"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Typed from "typed.js";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import Photo from "@/app/assets/MUH.FADLAN_KAMIL-removebg-preview.png";

export const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Web Developer", "Frontend Engineer", "UI/UX Enthusiast"],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const socialLinks = [
    { icon: <FiGithub size={20} />, url: "https://github.com/yourusername" },
    { icon: <FiLinkedin size={20} />, url: "https://linkedin.com/in/yourusername" },
    { icon: <FiTwitter size={20} />, url: "https://twitter.com/yourusername" },
  ];

  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1"
        >
          <h2 className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">
            Hello, I'm
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Fadlan.
          </h1>
          <h3 className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-6">
            I'm a <span ref={typedRef} className="text-blue-600 dark:text-blue-400"></span>
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
            Passionate about creating beautiful, functional, and user-friendly websites and applications.
            I specialize in modern web technologies and love bringing ideas to life.
          </p>

          <div className="flex space-x-4 mb-8">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              href="#contact"
              className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
            <motion.a
              href="#projects"
              className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-full font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-600 dark:border-blue-400 shadow-xl">
            <Image
              src={Photo.src}
              alt="Fadlan Kamil"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
