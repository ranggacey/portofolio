"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export default function Portfolio() {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const [activeFilter, setActiveFilter] = useState("all")

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
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      })

      // Filter buttons animation
      gsap.from(".filter-btn", {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      })

      // Project cards animation
      gsap.from(".project-card", {
        opacity: 0,
        y: 50,
        stagger: 0.1,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Sample projects data
  const projects = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description:
        "A comprehensive admin dashboard for managing an online store with real-time analytics, inventory management, and order processing.",
      image: "/placeholder.svg?height=600&width=800",
      category: "web",
      technologies: ["React", "Next.js", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/ranggacey/ecommerce-dashboard",
      demo: "https://ecommerce-dashboard-demo.vercel.app",
    },
    {
      id: 2,
      title: "Travel Booking Platform",
      description:
        "A full-featured travel booking website with hotel reservations, flight bookings, and tour packages with payment integration.",
      image: "/placeholder.svg?height=600&width=800",
      category: "web",
      technologies: ["Next.js", "MySQL", "Stripe", "Tailwind CSS"],
      github: "https://github.com/ranggacey/travel-booking",
      demo: "https://travel-booking-demo.vercel.app",
    },
    {
      id: 3,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, team workspaces, and progress tracking.",
      image: "/placeholder.svg?height=600&width=800",
      category: "app",
      technologies: ["React", "Firebase", "Redux", "Styled Components"],
      github: "https://github.com/ranggacey/task-manager",
      demo: "https://task-manager-demo.vercel.app",
    },
    {
      id: 4,
      title: "Restaurant Management System",
      description:
        "A comprehensive system for restaurants to manage reservations, menu items, inventory, and staff scheduling.",
      image: "/placeholder.svg?height=600&width=800",
      category: "web",
      technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
      github: "https://github.com/ranggacey/restaurant-system",
      demo: "https://restaurant-system-demo.vercel.app",
    },
    {
      id: 5,
      title: "Weather Dashboard",
      description:
        "An interactive weather application with 7-day forecasts, location-based weather data, and customizable alerts.",
      image: "/placeholder.svg?height=600&width=800",
      category: "app",
      technologies: ["JavaScript", "OpenWeather API", "Chart.js", "CSS"],
      github: "https://github.com/ranggacey/weather-app",
      demo: "https://weather-app-demo.vercel.app",
    },
    {
      id: 6,
      title: "Personal Finance Tracker",
      description:
        "A financial management application to track expenses, income, investments, and budget planning with visualization.",
      image: "/placeholder.svg?height=600&width=800",
      category: "app",
      technologies: ["Next.js", "MongoDB", "D3.js", "Tailwind CSS"],
      github: "https://github.com/ranggacey/finance-tracker",
      demo: "https://finance-tracker-demo.vercel.app",
    },
    {
      id: 7,
      title: "Social Media Dashboard",
      description:
        "A unified dashboard to manage and analyze multiple social media accounts with content scheduling and performance metrics.",
      image: "/placeholder.svg?height=600&width=800",
      category: "web",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/ranggacey/social-dashboard",
      demo: "https://social-dashboard-demo.vercel.app",
    },
    {
      id: 8,
      title: "Real Estate Listing Platform",
      description:
        "A property listing website with advanced search filters, virtual tours, and agent contact features.",
      image: "/placeholder.svg?height=600&width=800",
      category: "web",
      technologies: ["PHP", "MySQL", "JavaScript", "SASS"],
      github: "https://github.com/ranggacey/realestate-platform",
      demo: "https://realestate-platform-demo.vercel.app",
    },
    {
      id: 9,
      title: "Fitness Tracking App",
      description:
        "A mobile-first application for tracking workouts, nutrition, and progress with personalized recommendations.",
      image: "/placeholder.svg?height=600&width=800",
      category: "app",
      technologies: ["React Native", "Firebase", "Redux", "Expo"],
      github: "https://github.com/ranggacey/fitness-tracker",
      demo: "https://fitness-tracker-demo.vercel.app",
    },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  const filterButtons = [
    { id: "all", label: "All" },
    { id: "web", label: "Web" },
    { id: "app", label: "Apps" },
    { id: "mobile", label: "Mobile" },
  ]

  const handleFilterChange = (filter) => {
    setActiveFilter(filter)

    // Animate the filtered items
    gsap.fromTo(
      ".project-card",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.2,
      },
    )
  }

  return (
    <section id="portfolio" ref={sectionRef} className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 ref={headingRef} className="text-3xl md:text-4xl font-bold inline-block section-heading mx-auto">
            My Portfolio
          </h2>
          <p className="mt-6 text-lg text-foreground/80 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project is unique and solves specific problems.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            {filterButtons.map((button) => (
              <Button
                key={button.id}
                variant={activeFilter === button.id ? "default" : "outline"}
                className={`filter-btn ${activeFilter === button.id ? "bg-gradient-to-r from-purple-500 to-blue-500 border-0" : ""}`}
                onClick={() => handleFilterChange(button.id)}
              >
                {button.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="project-card overflow-hidden bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <Button size="icon" variant="ghost" className="rounded-full bg-white/20 hover:bg-white/30">
                        <ExternalLink className="h-5 w-5" />
                      </Button>
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button size="icon" variant="ghost" className="rounded-full bg-white/20 hover:bg-white/30">
                        <Github className="h-5 w-5" />
                      </Button>
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-foreground/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="text-xs px-2 py-1 rounded-full bg-secondary/50 text-foreground/70">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
