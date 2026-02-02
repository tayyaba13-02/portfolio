import React from 'react';
import { Briefcase, Zap } from 'lucide-react';

/**
 * ExperienceSection Component
 * Showcases professional experience and internships.
 */
const ExperienceSection = () => {
    const experiences = [
        {
            role: "Full Stack Developer",
            company: "ARCH TECHNOLOGIES",
            duration: "Dec 2025 - Jan 2026",
            description: [
                "Architected and implemented responsive user interfaces using modern frameworks, ensuring seamless performance across all device types.",

                "Applied comprehensive full-stack technical skills to solve complex real-world problems and deliver high-quality software solutions."
            ],
            icon: <Briefcase size={28} />,
            gradient: "from-emerald-500 to-green-600",
            textColor: "text-emerald-400"
        }
    ];

    return (
        <section id="experience" className="py-20 px-4 relative">
            <div className="max-w-6xl mx-auto relative z-10">
                {/* Visual Header */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
                        Experience
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 mx-auto rounded-full" />
                </div>

                {/* EXPERIENCE CARDS LIST */}
                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="glass glass-hover rounded-2xl p-8 relative overflow-hidden group transition-all duration-300 hover:scale-105"
                        >
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${exp.gradient} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity`} />

                            <div className="relative">
                                {/* CARD TOP ROW - Role and Company */}
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                                    <div className="flex items-start gap-4 mb-4 md:mb-0">
                                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${exp.gradient} flex items-center justify-center flex-shrink-0`}>
                                            {exp.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-white mb-2">
                                                {exp.role}
                                            </h3>
                                            <p className={`text-xl ${exp.textColor}`}>
                                                {exp.company}
                                            </p>
                                        </div>
                                    </div>

                                    {/* DURATION TAG */}
                                    <div className="glass px-4 py-2 rounded-lg">
                                        <span className="text-gray-300">{exp.duration}</span>
                                    </div>
                                </div>

                                {/* DESCRIPTION BULLETS */}
                                <div className="space-y-3">
                                    {exp.description.map((point, idx) => (
                                        <div key={idx} className="flex items-start gap-3 text-gray-400">
                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                                            <p className="leading-relaxed">{point}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
