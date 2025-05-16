"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { SplitText } from "gsap/SplitText"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const subheadingRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    // Register SplitText plugin
    gsap.registerPlugin(SplitText)

    const ctx = gsap.context(() => {
      // Create text splitting
      const headingSplit = new SplitText(headingRef.current, { type: "chars, words" })
      const subheadingSplit = new SplitText(subheadingRef.current, { type: "chars, words" })

      // Hero animations
      const tl = gsap.timeline({ delay: 3.5 })

      // Animate heading
      tl.from(headingSplit.chars, {
        opacity: 0,
        y: 50,
        rotationX: -90,
        stagger: 0.02,
        duration: 0.8,
        ease: "back.out(1.7)",
      })

      // Animate subheading
      tl.from(
        subheadingSplit.words,
        {
          opacity: 0,
          y: 20,
          stagger: 0.05,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.3",
      )

      // Animate CTA
      tl.from(
        ctaRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.3",
      )

      // Animate scroll indicator
      tl.from(
        ".scroll-indicator",
        {
          opacity: 0,
          y: -20,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.3",
      )

      // Create parallax effect
      gsap.to(".parallax-bg", {
        y: "30%",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: aboutSection, offsetY: 80 },
        ease: "power3.inOut",
      })
    }
  }

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="parallax-bg absolute -top-20 -left-20 w-64 h-64 rounded-full bg-purple-500/20 blur-3xl"></div>
        <div className="parallax-bg absolute top-1/3 -right-20 w-80 h-80 rounded-full bg-blue-500/20 blur-3xl"></div>
        <div className="parallax-bg absolute -bottom-20 left-1/3 w-72 h-72 rounded-full bg-pink-500/20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <h1 ref={headingRef} className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-glow">
          Rangga Figo Hidayat
        </h1>

        <p ref={subheadingRef} className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto mb-10">
          Creative Developer & Digital Craftsman
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-0"
            onClick={() => {
              const portfolioSection = document.getElementById("portfolio")
              if (portfolioSection) {
                gsap.to(window, {
                  duration: 1,
                  scrollTo: { y: portfolioSection, offsetY: 80 },
                  ease: "power3.inOut",
                })
              }
            }}
          >
            View My Work
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={() => {
              const contactSection = document.getElementById("contact")
              if (contactSection) {
                gsap.to(window, {
                  duration: 1,
                  scrollTo: { y: contactSection, offsetY: 80 },
                  ease: "power3.inOut",
                })
              }
            }}
          >
            Contact Me
          </Button>
        </div>

        <div className="scroll-indicator">
          <div className="mouse"></div>
          <span className="text-sm text-foreground/60">Scroll Down</span>
          <ChevronDown className="h-4 w-4 animate-bounce text-foreground/60" />
        </div>
      </div>
    </section>
  )
}
