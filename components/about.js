"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function About() {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // About section animations
      gsap.from(imageRef.current, {
        opacity: 0,
        x: -50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      })

      gsap.from(contentRef.current.children, {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div ref={imageRef} className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto md:ml-0 overflow-hidden rounded-2xl">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Rangga Figo Hidayat"
                width={600}
                height={600}
                className="object-cover"
              />

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-primary"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-primary"></div>
            </div>
          </div>

          <div ref={contentRef} className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold section-heading">About Me</h2>

            <p className="text-lg text-foreground/80">
              Hello! I&apos;m Rangga Figo Hidayat, a passionate web developer with a keen eye for creating beautiful,
              functional, and user-friendly websites. I love turning complex problems into simple, elegant solutions.
            </p>

            <p className="text-lg text-foreground/80">
              With a strong foundation in both front-end and back-end technologies, I strive to build immersive web
              experiences that leave a lasting impression. My approach combines technical expertise with creative
              thinking to deliver projects that exceed expectations.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <ul className="space-y-2 text-foreground/80">
                  <li>Computer Science Degree</li>
                  <li>Web Development Bootcamp</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Experience</h3>
                <ul className="space-y-2 text-foreground/80">
                  <li>5+ Years Web Development</li>
                  <li>3+ Years React/Next.js</li>
                </ul>
              </div>
            </div>

            <Button className="mt-6" variant="outline" size="lg">
              <Download className="mr-2 h-4 w-4" /> Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
