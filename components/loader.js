"use client"

import { useEffect, forwardRef } from "react"
import { gsap } from "gsap"

const Loader = forwardRef((props, ref) => {
  useEffect(() => {
    const tl = gsap.timeline()

    // Animate the loader text
    tl.from(".loader-text span", {
      y: 100,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out",
    })

    // Animate the progress bar
    tl.to(
      ".progress-bar",
      {
        width: "100%",
        duration: 1.5,
        ease: "power3.inOut",
      },
      0,
    )
  }, [])

  return (
    <div ref={ref} className="loader-wrapper">
      <div className="flex flex-col items-center justify-center">
        <div className="loader-text mb-8 overflow-hidden">
          <h1 className="text-4xl md:text-6xl font-bold flex">
            {"WELCOME".split("").map((letter, index) => (
              <span key={index} className="inline-block">
                {letter}
              </span>
            ))}
          </h1>
        </div>

        <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden">
          <div className="progress-bar h-full w-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
        </div>
      </div>
    </div>
  )
})

Loader.displayName = "Loader"

export default Loader
