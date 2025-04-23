"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, 
  SiHtml5, SiCss3, SiTailwindcss, SiNodedotjs,
  SiGit, SiFigma, SiAdobephotoshop, SiMongodb 
} from "react-icons/si";

export const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const technicalSkills = [
    { name: "React", level: 90, icon: <SiReact /> },
    { name: "Next.js", level: 85, icon: <SiNextdotjs /> },
    { name: "TypeScript", level: 80, icon: <SiTypescript /> },
    { name: "JavaScript", level: 95, icon: <SiJavascript /> },
    { name: "HTML5", level: 95, icon: <SiHtml5 /> },
    { name: "CSS3", level: 90, icon: <SiCss3 /> },
  ];

  const otherSkills = [
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "Git", icon: <SiGit /> },
    { name: "Figma", icon: <SiFigma /> },
    { name: "Photoshop", icon: <SiAdobephotoshop /> },
    { name: "MongoDB", icon: <SiMongodb /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="py-20">
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
              My Skills
            </h2>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
            <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
              Here are some of my skills and technologies I've been working with recently.
            </p>
          </motion.div>

          <div className="mb-16">
            <motion.h3 
              variants={itemVariants} 
              className="text-2xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Technical Skills
            </motion.h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <span className="text-blue-600 dark:text-blue-400 mr-2 text-xl">
                        {skill.icon}
                      </span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-gray-600 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <motion.div
                      className="bg-blue-600 dark:bg-blue-400 h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: inView ? `${skill.level}%` : 0 }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.h3 
            variants={itemVariants} 
            className="text-2xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Other Skills
          </motion.h3>
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4"
          >
            {otherSkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex flex-col items-center justify-center text-center"
              >
                <span className="text-3xl text-blue-600 dark:text-blue-400 mb-2">
                  {skill.icon}
                </span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};