"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, ArrowDownCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function BatmanUXResume() {
  return (
    <main className="bg-black text-gray-100 font-sans scroll-smooth">
      {/* Navigation */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-black/30 border-b border-white/10">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center text-sm">
          <a href="#home" className="font-bold tracking-wider text-gray-100">
            BAT CV
          </a>
          <ul className="hidden md:flex gap-8">
            {[
              { label: "Process", href: "#process" },
              { label: "Skills", href: "#skills" },
              { label: "Work", href: "#work" },
              { label: "Contact", href: "#contact" },
              { label: "Past Experiences", href: "/past-experiences" },
            ].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hover:text-batYellow-300 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-12"
      >

        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight backdrop-blur-sm"
        >
          Bruce Wayne
        </motion.h1>
        <p className="text-batYellow text-xl md:text-2xl mt-4 font-medium">
          Caped Crime-Fighter Seeking Day Job • Gotham City
        </p>
        <p className="max-w-2xl mx-auto mt-6 text-gray-400 leading-relaxed">
          By day, seeking employment. By night, fighting crime. I bring exceptional
          detective skills, advanced martial arts, and a fully-equipped utility belt
          to any workplace brave enough to hire me.
        </p>
        <Button
          size="lg"
          className="mt-8 bg-batYellow text-white hover:bg-batYellow-300"
          asChild
        >
          <a href="#contact">
            <ArrowDownCircle className="mr-2 h-5 w-5" /> Hire The Batman
          </a>
        </Button>
      </section>

      {/* Process */}
      <section
        id="process"
        className="container mx-auto px-6 py-24 space-y-16 md:space-y-24"
      >
        <h2 className="text-4xl font-semibold text-center">My Crime-Fighting Approach</h2>
        <div className="grid md:grid-cols-5 gap-6">
          {[
            { step: "Investigate", desc: "Interrogations, forensics & stakeouts" },
            { step: "Analyze", desc: "Criminal patterns & threat assessment" },
            { step: "Plan", desc: "Tactical strategies & gadget selection" },
            { step: "Execute", desc: "Stealth operations & combat maneuvers" },
            { step: "Disappear", desc: "Vanish dramatically into the night" },
          ].map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center"
            >
              <span className="block text-batYellow text-lg font-semibold mb-2">
                {item.step}
              </span>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-gray-900/40 py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-semibold mb-12 text-center">
            Bat-Skills & Abilities
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {[
              { label: "Intimidation Tactics", value: 98 },
              { label: "Gadget Proficiency", value: 96 },
              { label: "Brooding Silently", value: 99 },
              { label: "Disappearing Mid-Conversation", value: 95 },
              { label: "Withstanding Papercuts", value: 87 },
              { label: "Office Politics Navigation", value: 89 },
            ].map((skill, i) => (
              <div key={skill.label} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>{skill.label}</span>
                  <span>{skill.value}%</span>
                </div>
                <Progress value={skill.value} className="bg-white/10" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="container mx-auto px-6 py-24">
        <h2 className="text-4xl font-semibold mb-12 text-center">
          Previous Crime-Fighting Experience
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Joker Containment Operations",
              desc: "Thwarted 23 elaborate schemes while maintaining perfect hair.",

            },
            {
              title: "Riddler Puzzle Solutions",
              desc: "Solved 42 deadly riddles without using Google even once.",

            },
            {
              title: "Batcave Workspace Organization",
              desc: "Implemented 5S system for bat-gadgets, reducing suit-up time by 68%.",

            },
          ].map((proj, i) => (
            <motion.div
              key={proj.title}
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 group hover:border-batYellow/30 transition-colors duration-300"
            >
              <div className="flex flex-col h-full">
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-batYellow transition-colors">
                  {proj.title}
                </h3>
                <p className="text-gray-300 text-sm">{proj.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <footer id="contact" className="bg-black py-24 text-center">
        <h2 className="text-4xl font-semibold">Let's Fight Crime Together</h2>
        <p className="text-gray-400 mt-4 mb-8 max-w-xl mx-auto">
          Drop a line—Bat-Signal also acceptable. I'm always ready for the next
          corporate challenge (health insurance preferred).
        </p>
        <div className="flex gap-4 justify-center">
          <Button className="bg-batYellow text-white hover:bg-batYellow-300" size="lg">
            <Mail className="mr-2 h-5 w-5" /> bruce@wayneenterprises.com
          </Button>
          <Button variant="secondary" size="lg" asChild>
            <a href="https://linkedin.com/in/batux" target="_blank" rel="noreferrer">
              <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
            </a>
          </Button>
          <Button variant="secondary" size="lg" asChild>
            <a href="https://github.com/batux" target="_blank" rel="noreferrer">
              <Github className="mr-2 h-5 w-5" /> GitHub
            </a>
          </Button>
        </div>
        <p className="text-xs text-gray-600 mt-12">
          © {new Date().getFullYear()} Bruce Wayne. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
