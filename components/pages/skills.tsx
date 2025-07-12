"use client"

import { motion } from "framer-motion"
import { Code, Award, Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Skills() {
  const programmingSkills = [
    { name: "Python", level: 85, color: "bg-yellow-500" },
    { name: "Java", level: 80, color: "bg-red-500" },
    { name: "C", level: 75, color: "bg-blue-500" },
  ]

  const frontendSkills = [
    { name: "HTML", level: 90, color: "bg-orange-500" },
    { name: "CSS", level: 85, color: "bg-blue-600" },
    { name: "JavaScript", level: 80, color: "bg-yellow-400" },
    { name: "React.js", level: 75, color: "bg-cyan-500" },
  ]

  const certifications = [
    {
      title: "Associate in IT Foundation Skills (Java)",
      provider: "TechA",
      date: "July 2023",
      type: "Programming",
      icon: "☕",
    },
    {
      title: "Web Development using HTML and CSS",
      provider: "Infosys Springboard",
      date: "July 2024",
      type: "Frontend",
      icon: "🌐",
    },
    {
      title: "Python Foundation Certification",
      provider: "Infosys Springboard",
      date: "February 2024",
      type: "Programming",
      icon: "🐍",
    },
    {
      title: "Design Thinking - A Primer",
      provider: "NPTEL",
      date: "January - February 2025",
      type: "Design",
      icon: "💡",
    },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Code className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Skills & Expertise
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A comprehensive overview of my technical abilities and professional certifications
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programming Skills */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              Programming Languages
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12">
              Core programming languages I work with
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {programmingSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                        <motion.div
                          className={`h-3 rounded-full ${skill.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Frontend Skills */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              Frontend Technologies
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12">
              Technologies I use to build user interfaces
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {frontendSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          className={`h-2 rounded-full ${skill.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Award className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Certifications</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Professional certifications that validate my expertise
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="text-3xl">{cert.icon}</div>
                        <div>
                          <CardTitle className="text-lg text-gray-900 dark:text-white mb-2">{cert.title}</CardTitle>
                          <p className="text-gray-600 dark:text-gray-300 font-medium">{cert.provider}</p>
                        </div>
                      </div>
                      <Badge variant="secondary" className="ml-2">
                        {cert.type}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">{cert.date}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Summary */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8">
              Continuous Learning Journey
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Technology evolves rapidly, and so do I. I'm committed to staying current with the latest developments in
              software engineering, continuously expanding my skill set through hands-on projects, online courses, and
              industry certifications.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Problem Solving",
                "Algorithm Design",
                "Database Management",
                "Version Control",
                "Agile Methodology",
                "UI/UX Principles",
              ].map((skill) => (
                <Badge key={skill} variant="outline" className="px-4 py-2 text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
