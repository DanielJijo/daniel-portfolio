"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar, MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Experience() {
  const experiences = [
    {
      company: "Brinary Spot Technology",
      role: "Web Development Intern",
      duration: "June 2024 - August 2024",
      location: "Remote",
      description:
        "Gained hands-on experience in modern web development practices, working on responsive websites and learning industry-standard development workflows.",
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Git", "Responsive Design"],
      logo: "🚀",
      color: "from-blue-500 to-cyan-500",
    },
    {
      company: "Appin Institute",
      role: "Web Design Trainee",
      duration: "March 2024 - May 2024",
      location: "Coimbatore, Tamil Nadu",
      description:
        "Focused on UI/UX principles and modern web design techniques, creating visually appealing and user-friendly interfaces for various client projects.",
      skills: ["UI/UX Design", "Adobe XD", "Figma", "CSS3", "Bootstrap", "Design Thinking"],
      logo: "🎨",
      color: "from-purple-500 to-pink-500",
    },
    {
      company: "Ether Infotech",
      role: "Data Science Intern",
      duration: "January 2024 - February 2024",
      location: "Coimbatore, Tamil Nadu",
      description:
        "Explored data analysis and machine learning concepts, working with Python libraries to extract insights from datasets and build predictive models.",
      skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Data Analysis", "Machine Learning"],
      logo: "📊",
      color: "from-green-500 to-teal-500",
    },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Briefcase className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Experience
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              My professional journey through internships and training programs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 hidden md:block" />

            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.company}
                  className="relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-white dark:bg-gray-900 border-4 border-blue-500 rounded-full hidden md:block" />

                  <div className="md:ml-20">
                    <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                      <div className={`h-1 bg-gradient-to-r ${experience.color}`} />
                      <CardHeader>
                        <div className="flex items-start justify-between flex-wrap gap-4">
                          <div className="flex items-center space-x-4">
                            <div className="text-4xl">{experience.logo}</div>
                            <div>
                              <CardTitle className="text-xl text-gray-900 dark:text-white mb-1">
                                {experience.role}
                              </CardTitle>
                              <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                                {experience.company}
                              </h3>
                              <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                <div className="flex items-center">
                                  <Calendar className="h-4 w-4 mr-1" />
                                  {experience.duration}
                                </div>
                                <div className="flex items-center">
                                  <MapPin className="h-4 w-4 mr-1" />
                                  {experience.location}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                          {experience.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {experience.skills.map((skill) => (
                            <Badge key={skill} variant="secondary" className="px-3 py-1">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Gained Section */}
      <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">Key Learnings</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Through these experiences, I've developed both technical skills and professional competencies
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">💻</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Technical Proficiency</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Gained hands-on experience with modern web technologies, development tools, and industry best
                  practices.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Team Collaboration</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Learned to work effectively in team environments, contributing to group projects and supporting
                  colleagues.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Problem Solving</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Developed analytical thinking skills and learned to approach complex challenges with structured
                  solutions.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8">Looking Forward</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              These experiences have shaped my understanding of the tech industry and fueled my passion for continuous
              learning. I'm excited to take on new challenges and contribute to innovative projects that make a
              meaningful impact.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Full Stack Development",
                "Cloud Technologies",
                "DevOps",
                "Mobile Development",
                "AI/ML Integration",
              ].map((goal) => (
                <Badge key={goal} variant="outline" className="px-4 py-2 text-sm">
                  {goal}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
