"use client"

import { useEffect, useState } from "react"
import { gsap } from "gsap"
import { useMobile } from "@/hooks/use-mobile"

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hidden, setHidden] = useState(true)
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    if (isMobile) return

    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setHidden(false)
    }

    const handleMouseDown = () => setClicked(true)
    const handleMouseUp = () => setClicked(false)

    const handleMouseEnterLink = () => setLinkHovered(true)
    const handleMouseLeaveLink = () => setLinkHovered(false)

    const handleMouseLeave = () => setHidden(true)

    document.addEventListener("mousemove", updatePosition)
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("mouseleave", handleMouseLeave)

    const links = document.querySelectorAll("a, button")
    links.forEach((link) => {
      link.addEventListener("mouseenter", handleMouseEnterLink)
      link.addEventListener("mouseleave", handleMouseLeaveLink)
    })

    // GSAP animation for smooth cursor movement
    gsap.set(".cursor", { xPercent: -50, yPercent: -50 })

    const cursor = document.querySelector(".cursor")
    const cursorFollower = document.querySelector(".cursor-follower")

    gsap.to(
      {},
      {
        duration: 0.01,
        repeat: -1,
        onRepeat: () => {
          if (cursor && cursorFollower) {
            gsap.to(cursor, {
              duration: 0.15,
              x: position.x,
              y: position.y,
            })

            gsap.to(cursorFollower, {
              duration: 0.5,
              x: position.x,
              y: position.y,
            })
          }
        },
      },
    )

    return () => {
      document.removeEventListener("mousemove", updatePosition)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mouseleave", handleMouseLeave)

      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleMouseEnterLink)
        link.removeEventListener("mouseleave", handleMouseLeaveLink)
      })
    }
  }, [position, isMobile])

  if (isMobile) return null

  return (
    <>
      <div
        className={`cursor custom-cursor fixed top-0 left-0 w-5 h-5 bg-white rounded-full z-50 pointer-events-none ${
          hidden ? "opacity-0" : "opacity-100"
        } ${clicked ? "scale-75" : "scale-100"} ${
          linkHovered ? "scale-150" : "scale-100"
        } transition-opacity transition-transform duration-300`}
      ></div>
      <div
        className={`cursor-follower custom-cursor fixed top-0 left-0 w-10 h-10 border border-white rounded-full z-50 pointer-events-none ${
          hidden ? "opacity-0" : "opacity-60"
        } ${clicked ? "scale-75" : "scale-100"} ${
          linkHovered ? "scale-150" : "scale-100"
        } transition-opacity transition-transform duration-300`}
      ></div>
    </>
  )
}
