"use client"

import { motion } from "framer-motion"
import { ArrowRight, Download, Github, Linkedin, Code, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Dock, DockIcon } from "@/components/ui/dock"

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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900" />

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/20 dark:bg-blue-500/10 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200/20 dark:bg-purple-500/10 rounded-full blur-3xl"
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
            }}
            transition={{
              duration: 25,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Hi, I'm{" "}
              <span className="font-bold">DANIEL JIJO</span>
            </motion.h1>

            <motion.p
              className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-8 font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Aspiring Full Stack Developer
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
              <Button variant="outline" size="lg" className="px-8 py-3 text-lg bg-transparent">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </motion.div>

            {/* Social Links */}
            {/* Remove the old socialLinks icon bar (motion.div with flex justify-center space-x-6) */}
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 lg:py-32">
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
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl flex items-center justify-center">
                <div className="text-6xl">👨‍💻</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
