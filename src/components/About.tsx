"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiUser, FiCalendar, FiMapPin, FiMail } from "react-icons/fi";

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const personalInfo = [
    { icon: <FiUser />, label: "Name", value: "Muh.fadlan kamil." },
    { icon: <FiCalendar />, label: "Date of Birth", value: "December 4, 2007" },
    { icon: <FiMapPin />, label: "Location", value: "Makassar, Indonesia" },
    { icon: <FiMail />, label: "Email", value: "kamilmuhfadlan@gmail.com" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 rounded-3xl my-8">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Who am I?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Saya adalah seorang pengembang web yang penuh semangat dengan pengalaman lebih dari 2 tahun dalam menciptakan aplikasi web modern dan responsif. Saya mengkhususkan diri dalam pengembangan frontend menggunakan React, Next.js, dan TypeScript.

              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Perjalanan saya dalam pengembangan web dimulai sejak masuk Smk TELKOM makasaar, dan sejak itu saya terus belajar serta meningkatkan keterampilan. Saya percaya pada pentingnya menulis kode yang bersih, mudah dipelihara, serta menciptakan pengalaman pengguna yang intuitif.
              </p>
              <motion.a
                href="/your-resume.pdf" // Ganti dengan path resume Anda
                download
                className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV
              </motion.a>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Personal Information
              </h3>
              <div className="space-y-4">
                {personalInfo.map((info, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">
                      {info.icon}
                    </div>
                    <div>
                      <span className="block text-sm text-gray-500 dark:text-gray-400">
                        {info.label}
                      </span>
                      <span className="block text-gray-900 dark:text-white font-medium">
                        {info.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};