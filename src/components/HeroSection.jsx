import React from 'react';
import { Mail, Code, Briefcase, ChevronDown, Github, Linkedin } from 'lucide-react';
import profileImg from '../assets/profile.jpeg';

/**
 * HeroSection Component
 * The landing section of the portfolio, featuring a profile image, name, title, and major CTAs.
 */
const HeroSection = ({ scrollToSection }) => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20 relative">
            <div className="max-w-6xl mx-auto text-center relative z-10">
                {/* PROFILE PICTURE DISPLAY */}
                <div className="mb-8 inline-block relative">
                    <div className="w-40 h-40 rounded-full glass flex items-center justify-center shadow-2xl shadow-sky-500/50 relative overflow-hidden group">
                        <img
                            src={profileImg}
                            alt="Tayyaba Anwar"
                            className="w-full h-full object-cover relative z-10 transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>
                </div>

                {/* MAIN HEADING - Name with gradient text */}
                <h1 className="text-6xl sm:text-8xl font-bold mb-6 animate-in">
                    <span className="bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                        Tayyaba Anwar
                    </span>
                </h1>

                {/* SUBHEADING - Professional Title */}
                <div className="flex items-center justify-center gap-3 mb-8 animate-in" style={{ animationDelay: '0.2s' }}>
                    <Code className="text-sky-400" size={28} />
                    <p className="text-3xl sm:text-4xl text-gray-300">Software Developer</p>
                </div>

                {/* SUMMARY STATEMENT */}
                <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-in" style={{ animationDelay: '0.4s' }}>
                    BSIT Student | Full Stack Developer | Building innovative solutions with modern technologies
                </p>

                {/* CALL TO ACTION BUTTONS */}
                <div className="flex flex-wrap justify-center gap-4 mb-8 animate-in" style={{ animationDelay: '0.6s' }}>
                    {/* Primary CTA: Email contact */}
                    <a
                        href="mailto:tayyabaanwar43@gmail.com"
                        className="group relative px-8 py-4 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-cyan-500" />
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="relative flex items-center gap-2 font-semibold">
                            <Mail size={20} />
                            Get In Touch
                        </span>
                    </a>

                    {/* Secondary CTA: Scroll to projects showcase */}
                    <button
                        onClick={() => scrollToSection('projects')}
                        className="glass glass-hover px-8 py-4 rounded-xl font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105"
                    >
                        <Briefcase size={20} />
                        View Projects
                    </button>
                </div>

                {/* QUICK SOCIAL LINKS */}
                <div className="flex justify-center gap-4 mb-12 animate-in" style={{ animationDelay: '0.8s' }}>
                    <a
                        href="https://github.com/tayyaba13-02"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass glass-hover p-3 rounded-full text-gray-400 hover:text-white transition-all hover:scale-110 shadow-lg"
                        title="GitHub"
                    >
                        <Github size={24} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/tayyaba-anwar-aly"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass glass-hover p-3 rounded-full text-gray-400 hover:text-sky-400 transition-all hover:scale-110 shadow-lg"
                        title="LinkedIn"
                    >
                        <Linkedin size={24} />
                    </a>
                </div>

                {/* SCROLL INDICATOR - Encourages downward navigation */}
                <button
                    onClick={() => scrollToSection('about')}
                    className="animate-bounce inline-block"
                    aria-label="Scroll to about section"
                >
                    <ChevronDown size={40} className="text-cyan-400" />
                </button>
            </div>
        </section>
    );
};

export default HeroSection;
