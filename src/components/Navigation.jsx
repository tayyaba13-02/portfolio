import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText } from 'lucide-react';

/**
 * Navigation Component
 * Premium minimalist navbar with pink accents and smooth transitions.
 */
const Navigation = ({ activeSection, scrollToSection, scrolled }) => {
    const [isOpen, setIsOpen] = useState(false);

    // List of navigation links
    const menuItems = [
        { label: 'Home', id: 'home' },
        { label: 'Journey', id: 'experience' },
        { label: 'Education', id: 'education' },
        { label: 'Projects', id: 'projects' },
        { label: 'Contact', id: 'contact' }
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${scrolled
                ? 'bg-black/90 backdrop-blur-md border-white/5 py-3'
                : 'bg-transparent border-transparent py-5'}`}
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 flex justify-between items-center">

                {/* Logo Area */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-3 cursor-pointer group"
                    onClick={() => scrollToSection('home')}
                >
                    <div className="w-10 h-10 rounded-xl bg-sky-500/20 flex items-center justify-center font-bold text-white border border-sky-500/30 group-hover:bg-sky-500/40 transition-all duration-300">
                        T
                    </div>
                    <span className="text-white font-bold text-xl tracking-tight font-poppins">
                        Tayyaba<span className="text-sky-500/60 ml-1">Anwar</span>
                    </span>
                </motion.div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {menuItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`text-sm font-medium transition-all duration-300 hover:text-sky-500/60 font-poppins ${activeSection === item.id ? 'text-sky-500' : 'text-gray-400'
                                }`}
                        >
                            {item.label}
                        </button>
                    ))}
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="/assets/TayyabaAnwarAly_Resume.pdf"
                        target="_blank"
                        className="px-5 py-2 rounded-xl bg-sky-500/20 text-sky-500 text-sm font-semibold border border-sky-500/30 hover:bg-sky-500/30 transition-all flex items-center gap-2"
                    >
                        <FileText size={16} />
                        Resume
                    </motion.a>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 text-gray-400 hover:text-sky-500 transition-colors"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black/95 border-b border-white/5 overflow-hidden"
                    >
                        <div className="flex flex-col gap-6 px-10 py-10">
                            {menuItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => {
                                        scrollToSection(item.id);
                                        setIsOpen(false);
                                    }}
                                    className={`text-lg font-medium text-left transition-colors font-poppins ${activeSection === item.id ? 'text-sky-500' : 'text-gray-400'
                                        }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                            <a
                                href="/assets/TayyabaAnwarAly_Resume.pdf"
                                className="text-lg font-medium text-sky-500 font-poppins flex items-center gap-2"
                            >
                                <FileText size={20} />
                                Resume
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navigation;
