"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import ScrollToPlugin from "gsap/dist/ScrollToPlugin"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import TechStack from "@/components/tech-stack"
import Portfolio from "@/components/portfolio"
import Contact from "@/components/contact"
import Cursor from "@/components/cursor"
import Loader from "@/components/loader"

export default function Home() {
  const mainRef = useRef(null)
  const loaderRef = useRef(null)

  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

    // Initial animations
    const ctx = gsap.context(() => {
      // Loader animation
      const tl = gsap.timeline()

      tl.to(loaderRef.current, {
        opacity: 0,
        duration: 1,
        delay: 2.5,
        onComplete: () => {
          if (loaderRef.current) {
            loaderRef.current.style.display = "none"
          }
        },
      })

      // Reveal main content
      tl.from(
        mainRef.current,
        {
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.5",
      )

      // Setup smooth scrolling
      const sections = document.querySelectorAll("section")
      sections.forEach((section) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top 80%",
          toggleClass: "active",
          once: true,
        })
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <>
      <Loader ref={loaderRef} />
      <Cursor />
      <div ref={mainRef} className="min-h-screen bg-background text-foreground overflow-hidden">
        <Navbar />
        <main>
          <Hero />
          <About />
          <TechStack />
          <Portfolio />
          <Contact />
        </main>
      </div>
    </>
  )
}
