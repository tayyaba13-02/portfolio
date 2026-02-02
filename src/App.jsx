import React, { useState, useEffect, useMemo } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EducationSection from './components/EducationSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import ExperienceSection from './components/ExperienceSection';
import AnimatedBackground from './components/AnimatedBackground';

/**
 * Main Application Component
 * Manages the global state for navigation, scrolling, and interactive background elements.
 */
function App() {
  // State for tracking the currently visible section in the viewport
  const [activeSection, setActiveSection] = useState('home');

  // State for tracking if the user has scrolled down (used to style the navbar)
  const [scrolled, setScrolled] = useState(false);

  // State for tracking mouse movement to create interactive background effects
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  // useMemo ensures that background particles are only generated once to optimize performance
  const particles = useMemo(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5
    })), []);

  useEffect(() => {
    /**
     * Handles scroll events to update navbar styling and highlight active section
     */
    const handleScroll = () => {
      // Toggle 'scrolled' state based on vertical scroll distance
      setScrolled(window.scrollY > 50);

      // List of section IDs to monitor for viewport visibility
      const sections = ['home', 'about', 'education', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for better triggering

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          // Check if the current scroll position is within the bounds of the section
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    /**
     * Tracks mouse position relative to window dimensions
     */
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    // Attach event listeners for global window events
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup listeners on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  /**
   * Smoothly scrolls the window to a target section by its ID
   * @param {string} id - The ID of the HTML element to scroll to
   */
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Compensates for the fixed height of the Navigation bar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-cyan-500/30">
      {/* Interactive animated background that follows mouse movement */}
      <AnimatedBackground mousePosition={mousePosition} particles={particles} />


      <Navigation
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        scrolled={scrolled}
      />

      <main>
        {/* LANDING SECTION */}
        <HeroSection scrollToSection={scrollToSection} />

        {/* Professional transition divider between sections */}
        <div className="max-w-4xl mx-auto px-4 py-8 text-center relative overflow-hidden">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mb-8" />
          <p className="text-gray-300 italic text-2xl leading-relaxed font-light">
            "Combining technical expertise with a passion for problem-solving to build reliable software solutions."
          </p>
        </div>

        {/* BIOGRAPHY SECTION */}
        <AboutSection />

        <div className="max-w-4xl mx-auto px-4 py-8 text-center">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-teal-500/50 to-transparent mb-8" />
          <p className="text-gray-400 font-medium tracking-widest uppercase text-base">
            Constant Learning & Academic Excellence
          </p>
        </div>

        {/* ACADEMIC HISTORY SECTION */}
        <EducationSection />

        <div className="max-w-4xl mx-auto px-4 py-8 text-center">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent mb-8" />
          <p className="text-gray-400 font-medium tracking-widest uppercase text-base">
            Professional Experience & Growth
          </p>
        </div>

        {/* PROFESSIONAL EXPERIENCE SECTION */}
        <ExperienceSection />

        <div className="max-w-4xl mx-auto px-4 py-8 text-center">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-sky-500/50 to-transparent mb-8" />
          <p className="text-gray-300 italic text-2xl leading-relaxed font-light">
            "Transforming complex requirements into intuitive and efficient applications."
          </p>
        </div>

        {/* PROJECT SHOWCASE SECTION */}
        <ProjectsSection />

        <div className="max-w-4xl mx-auto px-4 py-8 text-center">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent mb-8" />
          <p className="text-gray-400 font-medium tracking-widest uppercase text-base">
            Modern Tech Stack & Skill Mastery
          </p>
        </div>

        {/* TECHNICAL SKILLS SECTION */}
        <SkillsSection />

        <div className="max-w-4xl mx-auto px-4 py-8 text-center">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mb-8" />
          <p className="text-gray-300 italic text-2xl leading-relaxed font-light">
            "I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions."
          </p>
        </div>

        {/* CONTACT INFORMATION SECTION */}
        <ContactSection />
      </main>

      {/* Global Footer */}
      <footer className="py-12 border-t border-white/5 text-center text-gray-500 glass">
        <p>© {new Date().getFullYear()} Tayyaba Anwar. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
