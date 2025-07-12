"use client"

import { motion } from "framer-motion"
import { Download, Users, Lightbulb, MessageCircle, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  const languages = [
    { name: "English", flag: "🇺🇸", proficiency: "Fluent" },
    { name: "Tamil", flag: "🇮🇳", proficiency: "Native" },
    { name: "Malayalam", flag: "🇮🇳", proficiency: "Native" },
  ]

  const softSkills = [
    {
      icon: Users,
      title: "Teamwork",
      description: "Works collaboratively with team members to achieve common goals and support group success.",
    },
    {
      icon: Lightbulb,
      title: "Adaptability",
      description: "Quickly adapts to new concepts, tools, and environments with minimal supervision.",
    },
    {
      icon: MessageCircle,
      title: "Communication",
      description:
        "Able to convey ideas clearly and build positive relationships across diverse teams and stakeholders.",
    },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">About Me</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Get to know the person behind the code
            </p>
          </motion.div>
        </div>
      </section>

      {/* Personal Bio Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl flex items-center justify-center">
                <div className="text-8xl">👨‍🎓</div>
              </div>
            </motion.div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">Daniel Jijo P.P</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                I am a dedicated Computer Science Engineering student with a strong foundation in programming,
                problem-solving, and software development. Currently pursuing my Bachelor's degree at KIT –
                Kalaignarkarunanithi Institute of Technology (2022–2026).
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Focused on continuous learning and seeking opportunities to contribute to innovative projects in a
                collaborative environment. My journey in technology is driven by curiosity and a passion for creating
                solutions that make a difference.
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              Educational Journey
            </h3>
            <div className="space-y-8">
              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Bachelor of Engineering (B.E) in Computer Science
                    </h4>
                    <span className="text-sm text-gray-500 dark:text-gray-400">2022 - 2026</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    KIT – Kalaignarkarunanithi Institute of Technology
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">CGPA: 6.78/10</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Higher Secondary Certificate (HSC)
                    </h4>
                    <span className="text-sm text-gray-500 dark:text-gray-400">2022</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">Trinity Matriculation Higher Secondary School</p>
                  <p className="text-gray-500 dark:text-gray-400">Score: 70%</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Secondary School Leaving Certificate (SSLC)
                    </h4>
                    <span className="text-sm text-gray-500 dark:text-gray-400">2020</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">Trinity Matriculation Higher Secondary School</p>
                  <p className="text-gray-500 dark:text-gray-400">Score: 67%</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">Languages Spoken</h3>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {languages.map((language, index) => (
              <motion.div
                key={language.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{language.flag}</div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{language.name}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{language.proficiency}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Soft Skills Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">Core Strengths</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Beyond technical skills, these are the qualities that drive my success
            </p>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8 text-center">
                    <skill.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{skill.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{skill.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
