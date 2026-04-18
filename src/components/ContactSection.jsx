import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, FileText, Send } from 'lucide-react';

/**
 * ContactCard Component
 * Individual card for social and contact methods.
 */
const ContactCard = ({ title, value, href, icon: Icon, delay }) => (
    <motion.a
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group border border-white/10 rounded-2xl p-6 bg-white/5 hover:bg-sky-500/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-500/10"
    >
        <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-400 group-hover:text-sky-300/60 transition-colors uppercase tracking-widest">{title}</p>
            <Icon size={18} className="text-gray-500 group-hover:text-sky-500 transition-colors" />
        </div>
        <p className="text-white font-medium group-hover:text-sky-500/80 transition-colors truncate">
            {value}
        </p>
    </motion.a>
);

/**
 * ContactSection Component
 * Professional contact area with narrative call-to-action and social grids.
 */
const ContactSection = () => {
    const contactLinks = [
        {
            title: "Email",
            value: "tayyabaanwar43@gmail.com",
            href: "mailto:tayyabaanwar43@gmail.com",
            icon: Mail
        },
        {
            title: "GitHub",
            value: "github.com/tayyaba13-02",
            href: "https://github.com/tayyaba13-02",
            icon: Github
        },
        {
            title: "LinkedIn",
            value: "linkedin.com/in/tayyaba-anwaraly",
            href: "https://www.linkedin.com/in/tayyaba-anwaraly/",
            icon: Linkedin
        },
        {
            title: "Resume",
            value: "Download PDF",
            href: "/assets/TayyabaAnwarAly_Resume.pdf",
            icon: FileText
        }
    ];

    return (
        <section id="contact" className="min-h-screen bg-black px-6 py-24 relative overflow-hidden">
            {/* 1. UPPER CTA BLOCK */}
            <div className="max-w-5xl mx-auto w-full bg-gradient-to-br from-zinc-900 via-zinc-900/80 to-sky-950/20 rounded-3xl p-12 md:p-20 relative overflow-hidden mb-24 border border-white/5">
                {/* Floating Soft Glows */}
                <div className="absolute -top-40 -left-40 w-120 h-120 bg-sky-500/10 blur-3xl rounded-full animate-pulse" />
                <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-sky-500/5 blur-2xl rounded-full animate-pulse" />

                <div className="relative z-10">
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-xs sm:text-sm tracking-[0.3em] text-sky-300/50 font-semibold mb-6 uppercase font-poppins"
                    >
                        Available for Opportunities
                    </motion.p>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8 font-poppins"
                    >
                        Let’s
                        <span className="block text-sky-500/40">Connect.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-gray-400 max-w-xl text-lg leading-relaxed mb-10 font-poppins"
                    >
                        Looking for a dedicated developer to join your team or collaborate on a high-impact project? I'm ready to bring my technical expertise and problem-solving mindset to our next big challenge.
                    </motion.p>
                </div>
            </div>

            {/* 2. CONTACT DETAILS GRID */}
            <div className="max-w-4xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 flex items-center gap-4 font-poppins">
                        <span className="w-10 h-1 bg-sky-500/40 rounded-full"></span>
                        Get In Touch
                    </h2>
                    <p className="text-gray-300 leading-relaxed max-w-2xl font-poppins">
                        I’m open to <span className="text-white font-semibold italic">software engineering roles</span>, 
                        <span className="text-white font-semibold italic ml-1">full-stack development</span>, and 
                        <span className="text-white font-semibold italic ml-1">AI-integrated projects</span>. Let's build something extraordinary together.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 gap-6 mb-12">
                    {contactLinks.map((link, index) => (
                        <ContactCard
                            key={index}
                            {...link}
                            delay={index * 0.1}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ContactSection;
