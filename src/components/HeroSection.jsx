import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Briefcase, FileText } from 'lucide-react';
import profileImg from '../assets/profile.jpeg';

/**
 * HeroSection Component
 * A premium 2-column hero section with pink accents and framer-motion animations.
 */
const HeroSection = ({ scrollToSection }) => {
    return (
        <section
            id="home"
            className="min-h-screen bg-black flex items-center pt-20 sm:pt-24 relative overflow-hidden"
        >
            {/* Background Glow - Top Left */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className="absolute -top-32 -left-32 sm:-top-40 sm:-left-40 w-96 sm:w-125 h-96 sm:h-125 bg-sky-500/20 blur-[100px] rounded-full z-0"
            />

            <div className="max-w-6xl mx-auto px-10 sm:px-16 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10 w-full">
                {/* LEFT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center lg:text-left"
                >
                    {/* Accent Line + Role */}
                    <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                        <motion.span
                            initial={{ width: 0 }}
                            animate={{ width: 40 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="h-0.5 bg-sky-400/80"
                        />
                        <p className="text-sky-400/80 tracking-[0.2em] text-xs sm:text-sm font-medium uppercase font-poppins">
                            Full Stack Developer
                        </p>
                    </div>

                    {/* Name */}
                    <h1 className="text-sky-50 text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-tight mb-6 font-poppins">
                        Tayyaba
                        <span className="block text-sky-500/40">Anwar</span>
                    </h1>

                    {/* Description */}
                    <p className="text-gray-400 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg leading-relaxed mb-10 font-poppins">
                        Dedicated to crafting sophisticated digital ecosystems that prioritize <span className="text-sky-400/80 font-semibold underline decoration-sky-500/20 underline-offset-4">technical precision</span> and user-centric design. With <span className="text-sky-400/80 font-semibold">1.5 years</span> of hands-on development, I transform complex ideas into seamless, high-performance web applications.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-5">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => scrollToSection('projects')}
                            className="px-8 py-4 bg-sky-500/40 cursor-pointer hover:bg-sky-500/50 text-white rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-sky-500/20 font-semibold border border-sky-500/30"
                        >
                            <Briefcase size={20} />
                            View Projects
                        </motion.button>

                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="mailto:tayyabaanwar43@gmail.com"
                            className="px-8 py-4 border border-sky-500/40 text-sky-500/60 hover:bg-sky-500/10 rounded-xl transition-all text-center font-semibold flex items-center justify-center gap-2"
                        >
                            <Mail size={20} />
                            Contact Me
                        </motion.a>
                    </div>

                    {/* Social Links */}
                    <div className="mt-10 flex justify-center lg:justify-start gap-6">
                        <motion.a
                            whileHover={{ y: -5, color: '#0ea5e9' }}
                            href="https://github.com/tayyaba13-02"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 transition-colors"
                        >
                            <Github size={24} />
                        </motion.a>
                        <motion.a
                            whileHover={{ y: -5, color: '#0ea5e9' }}
                            href="https://www.linkedin.com/in/tayyaba-anwar-aly"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 transition-colors"
                        >
                            <Linkedin size={24} />
                        </motion.a>
                    </div>
                </motion.div>

                {/* RIGHT IMAGE */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="flex justify-center lg:justify-end relative"
                >
                    {/* Background Decorative Circles */}
                    <div className="absolute inset-0 flex items-center justify-center -z-10">
                        <div className="w-64 h-64 sm:w-80 sm:h-80 bg-sky-500/10 rounded-full blur-3xl animate-pulse" />
                    </div>

                    <div className="relative group">
                        {/* Image Frame */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-sky-500/40 to-teal-500/40 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                        
                        <img
                            src={profileImg}
                            alt="Tayyaba Anwar"
                            className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-cover rounded-full shadow-2xl transition-all duration-700 bg-zinc-900 border border-white/5"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
