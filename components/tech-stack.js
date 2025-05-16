"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Card } from "@/components/ui/card"
import { Html5, Css3, Javascript, ReactLogo, Nextjs, Php, Database, Mysql } from "@/components/tech-icons"

export default function TechStack() {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const cardsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true
        },
      })

      // Cards animation
      gsap.from(".tech-card", {
        opacity: 0,
        y: 50,
        stagger: 0.1,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const techStack = [
    { name: "HTML", icon: <Html5 className="h-12 w-12 text-[#E34F26]" />, level: 90 },
    { name: "CSS", icon: <Css3 className="h-12 w-12 text-[#1572B6]" />, level: 85 },
    { name: "JavaScript", icon: <Javascript className="h-12 w-12 text-[#F7DF1E]" />, level: 80 },
    { name: "React", icon: <ReactLogo className="h-12 w-12 text-[#61DAFB]" />, level: 85 },
    { name: "Next.js", icon: <Nextjs className="h-12 w-12 text-foreground" />, level: 80 },
    { name: "PHP", icon: <Php className="h-12 w-12 text-[#777BB4]" />, level: 75 },
    { name: "MongoDB", icon: <Database className="h-12 w-12 text-[#47A248]" />, level: 70 },
    { name: "MySQL", icon: <Mysql className="h-12 w-12 text-[#4479A1]" />, level: 75 },
  ]

  return (
    <section id="tech-stack" ref={sectionRef} className="py-20 md:py-32 bg-secondary/5 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 ref={headingRef} className="text-3xl md:text-4xl font-bold inline-block section-heading mx-auto">
            My Tech Stack
          </h2>
          <p className="mt-6 text-lg text-foreground/80 max-w-2xl mx-auto">
            These are the technologies I work with to bring ideas to life. I'm constantly learning and expanding my
            skillset.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {techStack.map((tech, index) => (
            <Card
              key={index}
              className="tech-card p-6 flex flex-col items-center text-center bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300"
            >
              <div className="mb-4">{tech.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{tech.name}</h3>
              <div className="w-full bg-secondary/30 h-2 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                  style={{ width: `${tech.level}%` }}
                ></div>
              </div>
              <span className="text-sm text-foreground/60 mt-2">{tech.level}%</span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
