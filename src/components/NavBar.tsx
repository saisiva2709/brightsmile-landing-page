
"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { LucideIcon, Home, CalendarCheck, Phone, User, Info } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items?: NavItem[]
  className?: string
}

export function NavBar({ className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState("Home")
  const [isMobile, setIsMobile] = useState(false)

  const items = [
    { name: 'Home', url: '#home', icon: Home },
    { name: 'Services', url: '#services', icon: Info },
    { name: 'About', url: '#about', icon: User },
    { name: 'Contact', url: '#contact', icon: Phone },
    { name: 'Book', url: '#appointment', icon: CalendarCheck }
  ]

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          if (sectionId) {
            const matchingItem = items.find(item => item.url === `#${sectionId}`);
            if (matchingItem) {
              setActiveTab(matchingItem.name);
            }
          }
        }
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    }
  }, [items])

  return (
    <div
      className={cn(
        "fixed bottom-4 md:top-4 left-1/2 -translate-x-1/2 z-50 md:pt-6",
        className,
      )}
    >
      <div className="flex items-center gap-2 md:gap-3 bg-white/90 border border-dental-blue backdrop-blur-lg py-1 px-3 rounded-full shadow-lg">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <a
              key={item.name}
              href={item.url}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab(item.name);
                const element = document.querySelector(item.url);
                if (element) {
                  window.scrollTo({
                    top: element.getBoundingClientRect().top + window.scrollY - 100,
                    behavior: "smooth"
                  });
                }
              }}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-3 md:px-6 py-2 rounded-full transition-colors",
                "text-foreground/80 hover:text-primary",
                isActive && "bg-muted text-primary",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                    <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </a>
          )
        })}
      </div>
    </div>
  )
}
