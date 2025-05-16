"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { gsap } from "gsap"
import { Menu, X, Moon, Sun, Github, Instagram, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Navbar animation
    gsap.from(".nav-item", {
      opacity: 0,
      y: -20,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out",
      delay: 3.5,
    })

    gsap.from(".logo", {
      opacity: 0,
      x: -50,
      duration: 1,
      ease: "power3.out",
      delay: 3,
    })

    gsap.from(".theme-toggle", {
      opacity: 0,
      x: 50,
      duration: 1,
      ease: "power3.out",
      delay: 3,
    })
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)

    if (!isOpen) {
      gsap.to(".mobile-menu", {
        x: 0,
        duration: 0.5,
        ease: "power3.out",
      })

      gsap.from(".mobile-nav-item", {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.5,
        delay: 0.3,
      })
    } else {
      gsap.to(".mobile-menu", {
        x: "100%",
        duration: 0.5,
        ease: "power3.in",
      })
    }
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: element, offsetY: 80 },
        ease: "power3.inOut",
      })
      setIsOpen(false)
      gsap.to(".mobile-menu", {
        x: "100%",
        duration: 0.5,
        ease: "power3.in",
      })
    }
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="logo text-2xl font-bold gradient-text">RFH</div>

        <nav className="hidden md:flex items-center space-x-8">
          {["home", "about", "tech-stack", "portfolio", "contact"].map((item, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(item)}
              className="nav-item text-foreground/80 hover:text-foreground transition-colors relative group"
            >
              {item.charAt(0).toUpperCase() + item.slice(1).replace("-", " ")}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </button>
          ))}
        </nav>

        {mounted && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="theme-toggle"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        )}

        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {/* Mobile menu */}
      <div className="mobile-menu fixed top-0 right-0 h-screen w-full md:w-80 bg-background z-50 transform translate-x-full transition-transform">
        <div className="p-6">
          <div className="flex justify-between items-center mb-10">
            <div className="text-2xl font-bold gradient-text">RFH</div>
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Close menu">
              <X className="h-6 w-6" />
            </Button>
          </div>

          <nav className="flex flex-col space-y-6">
            {["home", "about", "tech-stack", "portfolio", "contact"].map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item)}
                className="mobile-nav-item text-xl font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {item.charAt(0).toUpperCase() + item.slice(1).replace("-", " ")}
              </button>
            ))}
          </nav>

          <div className="mt-10 flex space-x-4">
            <a
              href="https://github.com/ranggacey"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-foreground"
            >
              <Github className="h-6 w-6" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-foreground">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-foreground">
              <Instagram className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
