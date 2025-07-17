"use client"

import { motion } from "framer-motion"
import { ArrowRight, Download, Github, Linkedin, Code, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Dock, DockIcon } from "@/components/ui/dock"
import TiltedCard from "@/components/TiltedCard/TiltedCard";
import "@/styles/nura-font.css";
import "@/styles/akone-font.css";
import DarkVeil from "@/components/DarkVeil/DarkVeil";
import CircularText from "@/components/CircularText/CircularText";
import ButtonHover14 from "@/components/ButtonHover14";
import "@fontsource/poppins/700.css";

function SocialDock() {
  return (
    <Dock>
      <DockIcon>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <Github className="h-8 w-8" />
        </a>
      </DockIcon>
      <DockIcon>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <Linkedin className="h-8 w-8" />
        </a>
      </DockIcon>
      <DockIcon>
        <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer">
          <Code className="h-8 w-8" />
        </a>
      </DockIcon>
      <DockIcon>
        <a href="https://codolio.com" target="_blank" rel="noopener noreferrer">
          <ExternalLink className="h-8 w-8" />
        </a>
      </DockIcon>
    </Dock>
  )
}

export default function Home() {
  const socialLinks = [
    { name: "GitHub", icon: Github, url: "https://github.com", color: "hover:text-gray-900 dark:hover:text-white" },
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com", color: "hover:text-blue-600" },
    { name: "LeetCode", icon: Code, url: "https://leetcode.com", color: "hover:text-orange-500" },
    { name: "Codolio", icon: ExternalLink, url: "https://codolio.com", color: "hover:text-purple-600" },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Animated Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <DarkVeil />
        </div>
        {/* Semi-transparent Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 via-white/20 to-purple-100/40 dark:from-gray-900/80 dark:via-gray-800/80 dark:to-blue-900/80 z-10" />
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden z-20">
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/40 dark:bg-blue-500/10 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/40 dark:bg-purple-500/10 rounded-full blur-3xl"
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        </div>

        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 font-nura" style={{ fontFamily: 'Poppins, -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Meet <span style={{ letterSpacing: '0.04em' }}>DANIEL JIJO</span>
            </motion.h1>

            <motion.p
              className="text-xl sm:text-2xl lg:text-3xl text-white mb-8 font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Next-Gen Developer
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link href="/projects">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                  View Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <ButtonHover14 label="RESUME" icon={Download} href="/resume.pdf" />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Introduction Section */}
      <motion.section
        id="about-section"
        className="py-20 lg:py-32"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Passionate about building the future
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                I'm a dedicated Computer Science Engineering student with a strong foundation in programming,
                problem-solving, and software development. My passion lies in creating intuitive user interfaces and
                robust backend systems that make a difference.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                With a growth mindset and collaborative approach, I'm always eager to learn new technologies and
                contribute to innovative projects that push the boundaries of what's possible.
              </p>
              <Link href="/about">
                <Button variant="outline" size="lg">
                  Learn More About Me
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <CircularText text="DANIEL*JIJO*DEVELOPER*" className="w-[320px] h-[320px]" />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}
