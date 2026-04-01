import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Sparkles, Music, Terminal, Zap } from 'lucide-react';

/**
 * ProjectCard Component
 * Individual project showcase with full description, features, and tech stack.
 */
const ProjectCard = ({ project, index }) => (
    <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-4 py-16 border-b border-zinc-800 last:border-0 group"
    >
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 group-hover:text-sky-500/80 transition-colors font-poppins">
            {project.title}
        </h2>

        {/* Short Description */}
        <p className="text-gray-400 mb-8 text-lg leading-relaxed font-poppins">
            {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-3 mb-10">
            {project.tech.map((tech, idx) => (
                <span
                    key={idx}
                    className="px-4 py-2 rounded-lg bg-zinc-900 border border-white/5 text-sm text-gray-300 font-medium"
                >
                    {tech}
                </span>
            ))}
        </div>

        {/* Features */}
        <div className="mb-10">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Sparkles size={18} className="text-sky-500/60" />
                Key Features
            </h3>
            <ul className="grid md:grid-cols-2 gap-4 text-gray-400">
                {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-sky-500/40 mt-1.5 shrink-0" />
                        {feature}
                    </li>
                ))}
            </ul>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-4">
            {project.links?.github && (
                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl text-white bg-sky-500/30 hover:bg-sky-500/40 border border-sky-500/20 transition flex items-center gap-2 font-medium"
                >
                    <Github size={18} />
                    View Source
                </motion.a>
            )}
            {project.links?.demo && (
                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl text-white bg-zinc-800 hover:bg-zinc-700 transition flex items-center gap-2 font-medium"
                >
                    <ExternalLink size={18} />
                    Live Demo
                </motion.a>
            )}
        </div>
    </motion.section>
);

/**
 * ProjectsSection Component
 * Displays a curated selection of projects with a premium minimal aesthetic.
 */
const ProjectsSection = () => {
    const projects = [
        {
            title: "EduVerse AI (Capstone FYP)",
            description: "An AI-powered multi-tenant e-learning platform allowing independent institutional operations with personalized adaptive learning assistants.",
            tech: ["Angular", "FastAPI", "MongoDB", "LangChain", "LLMs", "AWS"],
            features: [
                "Multi-Tenancy: Secure data isolation for multiple institutions.",
                "AI Learning Assistant: Smart content summarization and Q&A.",
                "Course Management: Comprehensive tools for material organization.",
                "Scalable Architecture: Cloud-native design hosted on AWS."
            ],
            links: {
                github: "https://github.com/Muhammad-Hassan-522/EduVerse-AI-backend.git",
                demo: ""
            }
        },
        {
            title: "Nexus Music",
            description: "A premium music streaming application with a sleek Emerald Design System and privacy-first anonymous identity.",
            tech: ["FastAPI", "React", "MongoDB", "Framer Motion", "Tailwind CSS", "Zustand"],
            features: [
                "Emerald UI/UX: High-contrast dark theme with glassmorphism.",
                "Anonymous Identity: Privacy-first browser-based Identity Key.",
                "YouTube Import: Search and import songs with full metadata.",
                "PWA Experience: Installable on Desktop/Mobile with offline support."
            ],
            links: {
                github: "https://github.com/tayyaba13-02/Nexus",
                demo: "https://tayyabaaly-nexus.hf.space/"
            }
        },
        {
            title: "SnapSecure AI",
            description: "A professional privacy-focused web application designed to surgically detect and blur sensitive data in screenshots.",
            tech: ["FastAPI", "React", "Tesseract OCR", "OpenCV"],
            features: [
                "AI-Powered OCR: Fast and accurate text extraction.",
                "Surgical Redaction: Precise Gaussian blurring for sensitive fields.",
                "Privacy First: Secure local processing with no storage.",
                "Modern UI: Responsive interface built for professional speed."
            ],
            links: {
                github: "https://github.com/tayyaba13-02/SnapSecure-AI",
                demo: "https://huggingface.co/spaces/tayyabaaly/SnapSecureAI"
            }
        },
        {
            title: "TailorNow",
            description: "An innovative digital marketplace connecting customers with professional tailors for urgent and scheduled services.",
            tech: ["ASP.NET MVC", "C#", "SQL Server", "JavaScript"],
            features: [
                "Tailor Booking: Real-time system for booking and scheduling.",
                "Multi-role Dashboards: Portals for Customers, Tailors, and Admins.",
                "Payment Integration: Secure handling of service transactions.",
                "Auth System: Robust user registration and authentication."
            ],
            links: {
                github: "https://github.com/tayyaba13-02/TailorNow",
                demo: "https://huggingface.co/spaces/tayyabaaly/TailorNow"
            }
        }
    ];

    return (
        <section id="projects" className="bg-black py-24 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* SECTION HEADER */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-poppins">
                        My <span className="text-sky-500/40">Creations</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg font-poppins italic">
                        A curated selection of projects demonstrating my ability to design, build, and deliver scalable, user-focused software solutions.
                    </p>
                </motion.div>

                {/* PROJECTS LIST */}
                <div className="space-y-4">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>

            {/* Background Decorative Element */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-sky-500/5 to-transparent pointer-events-none" />
        </section>
    );
};

export default ProjectsSection;
