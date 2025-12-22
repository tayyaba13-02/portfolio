import React from 'react';
import { GraduationCap, BookOpen } from 'lucide-react';

/**
 * EducationSection Component
 * Chronological timeline of academic achievements and qualifications.
 */
const EducationSection = () => {
    // Array containing educational milestones with branding details
    const education = [
        {
            degree: "Bachelor of Science in Information Technology",
            institution: "Punjab University (PUCIT)",
            duration: "2022 - Present",
            grade: "CGPA: 3.45 / 4.0",
            status: "7th Semester",
            icon: <GraduationCap size={28} />,
            gradient: "from-sky-500 to-cyan-500",
            borderColor: "border-sky-500/30",
            textColor: "text-sky-400"
        },
        {
            degree: "FSC (Pre-Engineering)",
            institution: "Punjab Group of Colleges",
            duration: "2020 - 2022",
            grade: "Marks: 1038 / 1100",
            status: null,
            icon: <BookOpen size={28} />,
            gradient: "from-cyan-500 to-teal-500",
            borderColor: "border-cyan-500/30",
            textColor: "text-cyan-400"
        }
    ];

    return (
        <section id="education" className="py-20 px-4 relative">
            <div className="max-w-6xl mx-auto relative z-10">
                {/* Visual Header */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                        Education
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-sky-500 via-cyan-500 to-teal-500 mx-auto rounded-full" />
                </div>

                {/* EDUCATION CARDS LIST */}
                <div className="space-y-8">
                    {education.map((edu, index) => (
                        <div
                            key={index}
                            className="glass glass-hover rounded-2xl p-8 relative overflow-hidden group transition-all duration-300 hover:scale-105"
                        >
                            {/* Subtle background glow that reacts to hover */}
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${edu.gradient} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity`} />

                            <div className="relative">
                                {/* CARD TOP ROW - Degree title and Institution */}
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                                    <div className="flex items-start gap-4 mb-4 md:mb-0">
                                        {/* Icon Container with Gradient Background */}
                                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${edu.gradient} flex items-center justify-center flex-shrink-0`}>
                                            {edu.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-white mb-2">
                                                {edu.degree}
                                            </h3>
                                            <p className={`text-xl ${edu.textColor}`}>
                                                {edu.institution}
                                            </p>
                                        </div>
                                    </div>

                                    {/* DURATION TAG */}
                                    <div className="glass px-4 py-2 rounded-lg">
                                        <span className="text-gray-300">{edu.duration}</span>
                                    </div>
                                </div>

                                {/* ACADEMIC STATS - CGPA/Marks and Current Status */}
                                <div className="flex flex-wrap gap-4">
                                    {/* Grade Display */}
                                    <div className={`glass px-6 py-3 rounded-xl border ${edu.borderColor}`}>
                                        <span className={`${edu.textColor} font-bold`}>
                                            {edu.grade}
                                        </span>
                                    </div>
                                    {/* Current Progress Status  */}
                                    {edu.status && (
                                        <div className={`px-6 py-3 rounded-xl bg-gradient-to-r ${edu.gradient}`}>
                                            <span className="font-bold">{edu.status}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EducationSection;
