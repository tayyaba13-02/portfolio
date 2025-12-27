import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

/**
 * Navigation Component
 * Provides a sticky header with smooth-scrolling links and a mobile-responsive menu.
 */
const Navigation = ({ activeSection, scrollToSection, scrolled }) => {
    // State to toggle the mobile menu visibility
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // List of navigation links corresponding to section IDs
    const menuItems = ['Home', 'About', 'Education', 'Projects', 'Skills', 'Contact'];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled
            ? 'bg-slate-950/95 backdrop-blur-xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] h-16'
            : 'bg-transparent h-20'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Navbar Container - Adjusts height based on scroll state */}
                <div className={`flex justify-between items-center transition-all duration-500 ${scrolled ? 'h-16' : 'h-20'}`}>
                    {/* Brand Logo / Name */}
                    <div className="text-2xl font-bold bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                        Tayyaba Anwar
                    </div>

                    {/* Desktop Menu - Hidden on small screens */}
                    <div className="hidden md:flex space-x-1">
                        {menuItems.map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item.toLowerCase())}
                                className={`px-4 py-2 rounded-lg transition-all duration-300 ${activeSection === item.toLowerCase()
                                    ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-lg shadow-sky-500/50'
                                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                                    }`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Button - Visible only on small screens */}
                    <button
                        className="md:hidden glass rounded-lg p-2 hover:bg-white/10 transition-all"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu - Slide-out/Toggle effect */}
            {isMenuOpen && (
                <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-t border-white/10 shadow-2xl absolute w-full left-0">
                    <div className="px-4 py-4 space-y-2">
                        {menuItems.map((item) => (
                            <button
                                key={item}
                                onClick={() => {
                                    scrollToSection(item.toLowerCase());
                                    setIsMenuOpen(false); // Close menu after selection
                                }}
                                className={`block w-full text-left px-4 py-3 rounded-lg transition-all ${activeSection === item.toLowerCase()
                                    ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white'
                                    : 'text-gray-300 hover:bg-white/10 hover:text-white'
                                    }`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navigation;
