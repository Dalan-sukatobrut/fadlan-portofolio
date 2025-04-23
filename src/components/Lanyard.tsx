"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform, useSpring, useAnimation } from "framer-motion";

interface LanyardProps {
  photoUrl: string;
  name: string;
  title: string;
  discordId?: string; // Optional Discord ID
}

export const Lanyard = ({ photoUrl, name, title, discordId }: LanyardProps) => {
  const constraintsRef = useRef(null);
  const controls = useAnimation();
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  // Motion values for the lanyard
  const y = useMotionValue(0);
  const rotation = useTransform(y, [-100, 100], [-10, 10]);
  const springY = useSpring(y, { stiffness: 300, damping: 20 });
  
  // Reset position when not dragging
  useEffect(() => {
    if (!isDragging) {
      controls.start({ y: 0, transition: { type: "spring", stiffness: 300, damping: 25 } });
    }
  }, [isDragging, controls]);

  return (
    <div 
      className="relative h-[400px] w-full max-w-[300px] mx-auto my-8"
      ref={constraintsRef}
    >
      {/* Lanyard string */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full origin-top"
        style={{ 
          height: useTransform(springY, [0, 100], [150, 250]),
          rotateZ: rotation
        }}
      />
      
      {/* ID Card */}
      <motion.div
        drag="y"
        dragConstraints={constraintsRef}
        dragElastic={0.2}
        whileTap={{ scale: 1.05 }}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
        animate={controls}
        style={{ y: springY, rotate: rotation }}
        className="absolute left-1/2 -translate-x-1/2 top-[150px] w-64 bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl border-2 border-gray-200 dark:border-gray-700"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* Lanyard clip */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-6 bg-gray-300 dark:bg-gray-600 rounded-md flex items-center justify-center">
          <div className="w-4 h-2 bg-gray-400 dark:bg-gray-500 rounded-full" />
        </div>
        
        {/* Card header */}
        <div className="w-full h-8 bg-blue-600 dark:bg-blue-700 flex items-center justify-center">
          <span className="text-white text-xs font-bold tracking-wider">PORTFOLIO ID</span>
        </div>
        
        {/* Photo */}
        <div className="p-4 flex flex-col items-center">
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500 dark:border-blue-400 mb-4">
            <Image
              src={photoUrl}
              alt={name}
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {/* Info */}
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">{name}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{title}</p>
          
          {/* Barcode */}
          <div className="mt-4 w-full h-12 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center">
            <div className="flex space-x-0.5">
              {Array.from({ length: 20 }).map((_, i) => (
                <div 
                  key={i} 
                  className="w-0.5 bg-gray-800 dark:bg-gray-300" 
                  style={{ height: `${Math.random() * 24 + 8}px` }} 
                />
              ))}
            </div>
          </div>
          
          {/* Instructions */}
          <motion.p 
            className="mt-3 text-xs text-center text-gray-500 dark:text-gray-400"
            animate={{ opacity: isHovered ? 1 : 0.6 }}
          >
            {isDragging ? "Release to bounce back!" : "Drag me up and down!"}
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};
