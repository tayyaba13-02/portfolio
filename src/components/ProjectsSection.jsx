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
            title: "Hospital Management System",
            description: "A comprehensive web application for managing hospital operations including patient records, staff management, and resource allocation.",
            tech: ["Java Servlets", "HTML/CSS", "SQL"],
            features: [
                "Add, view, update and delete Patients and Staff",
                "Room and bed allocation system",
                "Admin dashboard for user account management",
                "Secure authentication and authorization"
            ],
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
                                    <div className="flex flex-wrap gap-2">
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
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
