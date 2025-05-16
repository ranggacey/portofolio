"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Github, Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const formRef = useRef(null)
  const infoRef = useRef(null)

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

      // Form animation
      gsap.from(formRef.current, {
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      })

      // Info animation
      gsap.from(infoRef.current, {
        opacity: 0,
        x: 50,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      })

      // Social icons animation
      gsap.from(".social-icon", {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".social-icons",
          start: "top 90%",
          toggleActions: "play none none none",
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="contact" ref={sectionRef} className="py-20 md:py-32 bg-secondary/5 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 ref={headingRef} className="text-3xl md:text-4xl font-bold inline-block section-heading mx-auto">
            Get In Touch
          </h2>
          <p className="mt-6 text-lg text-foreground/80 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Card ref={formRef} className="p-6 md:p-8 bg-background/50 backdrop-blur-sm border border-border/50">
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" className="bg-background/50" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Your email" className="bg-background/50" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input id="subject" placeholder="Subject" className="bg-background/50" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea id="message" placeholder="Your message" rows={5} className="bg-background/50" />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-0"
              >
                Send Message
              </Button>
            </form>
          </Card>

          <div ref={infoRef} className="space-y-8">
            <Card className="p-6 bg-background/50 backdrop-blur-sm border border-border/50">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/50 p-3 rounded-full">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-foreground/70">Email</h4>
                    <p className="text-base">rangga@example.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-secondary/50 p-3 rounded-full">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-foreground/70">Phone</h4>
                    <p className="text-base">+62 123 456 7890</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-secondary/50 p-3 rounded-full">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-foreground/70">Location</h4>
                    <p className="text-base">Jakarta, Indonesia</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-background/50 backdrop-blur-sm border border-border/50">
              <h3 className="text-2xl font-semibold mb-6">Follow Me</h3>

              <div className="social-icons flex gap-4">
                <a
                  href="https://github.com/ranggacey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon bg-secondary/50 p-3 rounded-full hover:bg-secondary transition-colors"
                >
                  <Github className="h-6 w-6" />
                </a>

                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon bg-secondary/50 p-3 rounded-full hover:bg-secondary transition-colors"
                >
                  <Facebook className="h-6 w-6" />
                </a>

                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon bg-secondary/50 p-3 rounded-full hover:bg-secondary transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
