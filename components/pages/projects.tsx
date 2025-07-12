"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Code, Palette, Smartphone, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Projects() {
  const projects = [
    {
      title: "Netflix Clone",
      description:
        "A responsive streaming UI built with React and styled-components, featuring movie browsing, search functionality, and a modern interface that mimics the Netflix experience.",
      image: "/placeholder.svg?height=400&width=600",
      tech: ["React.js", "Styled Components", "JavaScript", "Responsive Design"],
      github: "https://github.com",
      live: "https://netflix-clone-demo.com",
      icon: <Smartphone className="h-6 w-6" />,
      gradient: "from-red-500 to-pink-500",
    },
    {
      title: "HabitSync",
      description:
        "A full-stack daily habit tracker web application that helps users build and maintain positive habits with progress tracking, streak counters, and motivational insights.",
      image: "/placeholder.svg?height=400&width=600",
      tech: ["React.js", "Node.js", "MongoDB", "Express.js", "Chart.js"],
      github: "https://github.com",
      live: "https://habitsync-demo.com",
      icon: <Code className="h-6 w-6" />,
      gradient: "from-green-500 to-teal-500",
    },
    {
      title: "Teena Makeovers",
      description:
        "A modern and elegant portfolio website showcasing beauty services, bridal makeovers, and professional expertise with stunning galleries and booking functionality.",
      image: "/placeholder.svg?height=400&width=600",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP"],
      github: "https://github.com",
      live: "https://teena-makeovers.com",
      icon: <Palette className="h-6 w-6" />,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Personal Portfolio",
      description:
        "This very website you're viewing! A sleek personal portfolio built with React, featuring smooth animations, dark mode, and responsive design to showcase my work and skills.",
      image: "/placeholder.svg?height=400&width=600",
      tech: ["React.js", "Tailwind CSS", "Framer Motion", "React Router"],
      github: "https://github.com",
      live: "https://daniel-portfolio.com",
      icon: <Globe className="h-6 w-6" />,
      gradient: "from-blue-500 to-purple-500",
    },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Code className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              My Projects
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A showcase of my development journey through various web applications and solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {/* Project Image */}
                <motion.div
                  className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="relative group">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-2xl blur-xl opacity-25 group-hover:opacity-40 transition-opacity duration-300`}
                    />
                    <Card className="relative overflow-hidden rounded-2xl">
                      <CardContent className="p-0">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-64 sm:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>

                {/* Project Details */}
                <motion.div
                  className={`${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${project.gradient} text-white`}>
                      {project.icon}
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">{project.title}</h2>
                  </div>

                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="px-3 py-1">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      size="lg"
                      className={`bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white`}
                      asChild
                    >
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-5 w-5" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-5 w-5" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Interested in Working Together?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and collaborate on innovative projects.
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Get In Touch
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
