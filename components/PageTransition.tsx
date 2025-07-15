import { motion, AnimatePresence } from "framer-motion";
import React from "react";

interface PageTransitionProps {
  show: boolean;
}

const transitionVariants = {
  initial: { y: "0%" },
  animate: { y: "-100%", transition: { duration: 0.8, ease: [0.77, 0, 0.175, 1] } },
  exit: { y: "0%", transition: { duration: 0.8, ease: [0.77, 0, 0.175, 1] } },
};

export default function PageTransition({ show }: PageTransitionProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-gray-900 flex flex-col"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={transitionVariants}
        >
          <div className="flex-1" />
          {/* Curved SVG at the bottom */}
          <svg
            width="100%"
            height="80"
            viewBox="0 0 1440 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-20"
            style={{ display: "block" }}
          >
            <path
              d="M0,0 Q720,80 1440,0 L1440,80 L0,80 Z"
              fill="#111827" // Tailwind's gray-900
            />
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 