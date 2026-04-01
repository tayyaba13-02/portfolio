import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * Main Application Component
 * Assembles the portfolio sections with premium transitions and global scroll tracking.
 */
function App() {
  // Navigation & Scroll State
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // Framer Motion Scroll Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Section highlighting logic
      const sections = ['home', 'experience', 'education', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /**
   * Universal smooth scroll function
   */
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-sky-500/30 selection:text-sky-200 font-poppins overflow-x-hidden">
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-sky-500 origin-left z-[60]"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <Navigation
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        scrolled={scrolled}
      />

      <main>
        {/* 1. Hero Area */}
        <HeroSection scrollToSection={scrollToSection} />

        {/* 2. Core Services */}
        <ServicesSection />

        {/* 3. The Journey (Experience & Skills) */}
        <ExperienceSection />

        {/* 4. Academic History */}
        <EducationSection />

        {/* 5. Project Showcase */}
        <ProjectsSection />

        {/* 6. Professional Contact */}
        <ContactSection />
      </main>

      {/* Premium Footer */}
      <footer className="py-20 border-t border-white/5 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="mb-10 inline-flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-sky-500/20 border border-sky-500/30 flex items-center justify-center font-bold text-sky-500">T</div>
            <span className="font-bold text-xl tracking-tight">Tayyaba Anwar</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 mb-10 text-sm text-gray-500 font-medium">
             <button onClick={() => scrollToSection('home')} className="hover:text-sky-500 transition-colors">Home</button>
             <button onClick={() => scrollToSection('experience')} className="hover:text-sky-500 transition-colors">Journey</button>
             <button onClick={() => scrollToSection('projects')} className="hover:text-sky-500 transition-colors">Projects</button>
             <button onClick={() => scrollToSection('contact')} className="hover:text-sky-500 transition-colors">Contact</button>
          </div>

          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Tayyaba Anwar. All rights reserved.
          </p>
        </div>
        
        {/* Background Decorative Glow */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-sky-500/5 blur-[100px] rounded-full" />
      </footer>
    </div>
  );
}

export default App;
