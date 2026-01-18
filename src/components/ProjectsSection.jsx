import React from 'react';
import { Terminal, Zap } from 'lucide-react';

/**
 * ProjectsSection Component
 * Showcases key projects with descriptions, features, and technical stacks.
 */
const ProjectsSection = () => {
    // Array of project objects defining the content for the display grid
    const projects = [
        {
            title: "SnapSecure AI",
            description: "SnapSecure AI is a professional, privacy-focused web application designed to surgically detect and blur sensitive data in screenshots. Whether it's an email, a phone number, or a government ID, SnapSecure AI ensures your personal information stays private before you share it.",
            tech: ["FastAPI", "React", "Tesseract OCR", "OpenCV"],
            features: [
                "AI-Powered OCR: Fast and accurate text extraction from images.",
                "Surgical Redaction: Precise Gaussian blurring that only hides what needs to be hidden.",
                "Privacy First: Secure processing with no persistent data storage.",
                "Professional Design: A modern, responsive interface built for speed and clarity."
            ],
            architecture: "SnapSecure AI is split into two specialized components: Backend (FastAPI) for OCR and processing, and Frontend (React) for an intuitive UI.",
            links: {
                github: "https://github.com/tayyaba13-02/SnapSecure-AI",
                demo: "https://huggingface.co/spaces/tayyabaaly/SnapSecureAI"
            },
            gradient: "from-sky-500 to-cyan-500",
            icon: <Terminal className="w-8 h-8" />
        },
        {
            title: "TailorNow – Tailoring Services Platform",
            description: "An innovative web platform connecting customers with tailors for both urgent and regular tailoring services.",
            tech: ["ASP.NET MVC", "C#", "SQL Server", "JavaScript"],
            features: [
                "User registration and authentication",
                "Real-time tailor booking system",
                "Multi-role dashboards (Customer, Tailor, Admin)",
                "Commission tracking and payment integration"
            ],
            links: {
                github: "https://github.com/tayyaba13-02/TailorNow",
                demo: "https://huggingface.co/spaces/tayyabaaly/TailorNow"
            },
            gradient: "from-cyan-500 to-teal-500",
            icon: <Zap className="w-8 h-8" />
        }
    ];

    return (
        <section id="projects" className="py-20 px-4 relative">
            <div className="max-w-6xl mx-auto relative z-10">
                {/* SECTION HEADER */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                        Featured Projects
                    </h2>
                    <p className="text-gray-400 text-lg mb-4">I have many projects but these are my best works.</p>
                    <div className="h-1 w-24 bg-gradient-to-r from-sky-500 via-cyan-500 to-teal-500 mx-auto rounded-full" />
                </div>

                {/* PROJECT DISPLAY GRID */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="glass rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-300"
                        >
                            {/* PROJECT HEADER COLOR BAR - Dynamic gradient based on project data */}
                            <div className={`p-6 bg-gradient-to-r ${project.gradient} relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity" />
                                <div className="relative flex items-center gap-4">
                                    {/* Icon Container with backdrop blur */}
                                    <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                        {project.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                                </div>
                            </div>

                            {/* PROJECT BODY CONTENT */}
                            <div className="p-6">
                                {/* Short project pitch/description */}
                                <p className="text-gray-300 mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* FEATURE HIGHLIGHTS */}
                                <div className="mb-6">
                                    <h4 className="text-lg font-semibold text-white mb-3">
                                        Key Features
                                    </h4>
                                    <div className="space-y-2">
                                        {project.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                                                {/* Skill bullet with gradient branding */}
                                                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 mt-2 flex-shrink-0" />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* FULL TECH STACK TAGS */}
                                <div>
                                    <h4 className="text-lg font-semibold text-white mb-3">
                                        Tech Stack
                                    </h4>
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tech.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="glass px-4 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:border-white/20 transition-all font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* PROJECT LINKS */}
                                {project.links && (
                                    <div className="flex gap-4">
                                        {project.links.github && (
                                            <a
                                                href={project.links.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 glass glass-hover py-3 rounded-xl flex items-center justify-center gap-2 text-white font-medium transition-all hover:scale-105"
                                            >
                                                <Terminal size={18} />
                                                Code
                                            </a>
                                        )}
                                        {project.links.demo && (
                                            <a
                                                href={project.links.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 bg-gradient-to-r from-sky-500 to-cyan-500 py-3 rounded-xl flex items-center justify-center gap-2 text-white font-bold transition-all hover:scale-105 hover:shadow-lg hover:shadow-sky-500/25"
                                            >
                                                <Zap size={18} />
                                                Live Demo
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
