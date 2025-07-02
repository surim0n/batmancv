"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Award, Zap, Brain, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function PastExperiences() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  
  const categories = [
    { name: "All", icon: <Clock className="h-5 w-5" /> },
    { name: "Combat", icon: <Zap className="h-5 w-5" /> },
    { name: "Strategy", icon: <Brain className="h-5 w-5" /> },
    { name: "Teamwork", icon: <Users className="h-5 w-5" /> },
    { name: "Innovation", icon: <Award className="h-5 w-5" /> },
  ];
  
  const experiences = [
    {
      year: "Year One",
      title: "First Nights on Patrol",
      desc: "Bruce Wayne assumes the mantle of Batman, testing homemade gadgets and parkour across Gotham's rooftops while learning the city's darkest corners.",
      category: "Combat",
      image: "https://replicate.delivery/xezq/G8KpW8epHGwMNi64uYvlOO13xeZXCeYFpEzFykhBFCdGsk1pA/out-0.webp",
      skills: ["Stealth", "Gadgetry", "Urban Navigation"],
    },
    {
      year: "Arkham Asylum Breakout",
      title: "Containing the Rogues",
      desc: "Faced with a simultaneous escape of inmates, Batman orchestrates a multi-pronged takedown inside the labyrinthine asylum—introducing fear-based UX for quicker inmate compliance.",
      category: "Strategy",
      image: "https://replicate.delivery/xezq/Xev0mkkyJxwTMq4Gqcf3ny5KHqtBt5TqGBRtN30nFtWJWy6UA/out-0.webp",
      skills: ["Crisis Management", "Psychological Tactics", "Facility Security"],
    },
    {
      year: "Joker's Social Engineering Hack",
      title: "Saving Gotham's Airwaves",
      desc: "Designs a real-time frequency jammer UI within the Batcave, neutralising Joker's televised terror broadcast during prime time.",
      category: "Innovation",
      image: "https://replicate.delivery/xezq/PumjIEI7RiKee0eIv3PWJ5KfObUFKHtNyBhPEdeiyTCqxSWnC/out-0.webp",
      skills: ["Signal Processing", "Rapid Prototyping", "Counter-Terrorism"],
    },
    {
      year: "Justice League Onboarding",
      title: "Designing Cross-Team Workflows",
      desc: "Creates a unified comms dashboard allowing meta-humans to collaborate at light-speed, balancing accessibility for Kryptonians and Atlanteans alike.",
      category: "Teamwork",
      image: "https://replicate.delivery/xezq/ItJsm5NdHELxFNo1i4SFzXxbizyrE2qUIQAVu54flTRKLZdKA/out-0.webp",
      skills: ["Cross-Species UX", "Team Coordination", "Universal Design"],
    },
    {
      year: "Wayne Enterprises UX Lab",
      title: "Scaling Human-Centred Design",
      desc: "Establishes Gotham's first in-house UX incubator, mentoring over 200 interns—doubling design throughput and cutting crime-analysis lead time by 40%.",
      category: "Innovation",
      image: "https://replicate.delivery/xezq/2P8WpDmZQYzVW3t7Q9uR2X1cJ4L9K6H0BvN5m3j7kFgTlXwE/out-0.webp",
      skills: ["Mentorship", "Design Systems", "Process Optimization"],
    },
    {
      year: "Scarecrow Fear Toxin Incident",
      title: "Panic-Resistant Interface Design",
      desc: "Develops a cognitive override system for the Batsuit HUD that functions even under extreme psychological stress, allowing Batman to maintain operational efficiency while exposed to fear toxin.",
      category: "Combat",
      image: "https://replicate.delivery/xezq/EO9T46crb16XGZmr91eIoTtBRh3Qvwv1deokA2DW5v4fsk1pA/out-0.webp",
      skills: ["Stress Testing", "Cognitive Psychology", "Failsafe Design"],
    },
    {
      year: "Gotham Blackout Crisis",
      title: "Emergency Response Coordination",
      desc: "Creates an offline-first mobile command center during Gotham's worst power outage, coordinating police, fire, and medical services with minimal connectivity.",
      category: "Strategy",
      image: "https://replicate.delivery/xezq/RlHYbPOQxpLNKpm3VrrujTXKyjTSUVcKesX1mebGUmgoWy6UA/out-0.webp",
      skills: ["Offline Systems", "Resource Allocation", "Emergency UX"],
    },
  ];

  return (
    <main className="bg-black text-gray-100 font-sans scroll-smooth">
      {/* Navigation */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-black/30 border-b border-white/10">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center text-sm">
          <a href="/" className="font-bold tracking-wider text-gray-100">
            BATUX
          </a>
          <Button variant="secondary" size="sm" asChild>
            <a href="/">
              <ArrowLeft className="mr-1 h-4 w-4" /> Back
            </a>
          </Button>
        </nav>
      </header>

      <section className="container mx-auto px-6 pt-32 pb-24 space-y-16 md:space-y-24">
        <div className="relative">
          <motion.div 
            className="absolute inset-0 w-full h-full opacity-10 blur-3xl -z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1.5 }}
            style={{
              background: 'radial-gradient(circle at 30% 30%, rgba(239, 68, 68, 0.1) 0%, rgba(0, 0, 0, 0) 50%)',
            }}
          >
            <div className="absolute top-0 left-0 w-3/4 h-3/4 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-yellow-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
          </motion.div>
          
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold text-center relative z-10"
          >
            Past Experiences
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-center mt-4"
          >
            A chronological dive into the milestones that shaped Gotham's premier
            vigilante UX strategist.
          </motion.p>
        </div>
        
        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 pt-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {categories.map((category) => (
            <Button
              key={category.name}
              variant={activeFilter === category.name || (category.name === "All" && !activeFilter) ? "default" : "secondary"}
              className={`flex items-center gap-2 px-4 ${activeFilter === category.name || (category.name === "All" && !activeFilter) ? "bg-batYellow hover:bg-batYellow-300" : ""}`}
              size="sm"
              onClick={() => setActiveFilter(category.name === "All" ? null : category.name)}

            >
              {category.icon}
              {category.name}
            </Button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences
            .filter(exp => !activeFilter || exp.category === activeFilter)
            .map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="h-full"
            >
              <Card className="h-full flex flex-col overflow-hidden group hover:border-yellow-400/30 transition-colors duration-300">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/80 z-10"></div>
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                  ></div>
                  <div 
                    className="h-full w-full bg-gradient-to-br from-gray-900 to-black"
                    style={{
                      backgroundImage: exp.image ? `url(${exp.image})` : undefined,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  ></div>
                  <div className="absolute top-4 right-4 z-20">
                    <span className="inline-flex items-center rounded-full bg-yellow-400/10 px-2.5 py-1 text-xs font-medium text-yellow-400 border border-yellow-400/20">
                      {exp.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="text-yellow-400 font-semibold text-sm">{exp.year}</span>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl group-hover:text-yellow-400 transition-colors duration-300">{exp.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 text-gray-300">
                  <p>{exp.desc}</p>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.skills.map(skill => (
                      <span 
                        key={skill} 
                        className="inline-flex items-center rounded-full bg-white/5 px-2.5 py-0.5 text-xs font-medium text-gray-300 border border-white/10"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
