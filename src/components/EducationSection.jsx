import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Calculator, Calendar } from 'lucide-react';

/**
 * EducationCard Component
 * Modern minimalist card for educational milestones.
 */
const EducationCard = ({ edu, index }) => (
    <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        viewport={{ once: true }}
        className="glass glass-hover rounded-3xl p-8 relative overflow-hidden group border border-white/5 bg-zinc-900/30 backdrop-blur-md"
    >
        {/* Soft background glow */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-sky-500/5 rounded-full blur-2xl group-hover:bg-sky-500/10 transition-all duration-500" />

        <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8">
                <div className="flex items-start gap-5 mb-4 md:mb-0">
                    <div className="w-14 h-14 rounded-2xl bg-sky-500/10 flex items-center justify-center shrink-0 group-hover:bg-sky-500/20 transition-colors">
                        {edu.icon}
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2 font-poppins leading-tight">
                            {edu.degree}
                        </h3>
                        <p className="text-sky-500/60 font-medium font-poppins tracking-wide">
                            {edu.institution}
                        </p>
                    </div>
                </div>

                <div className="px-4 py-2 rounded-xl bg-zinc-900 border border-white/5 flex items-center gap-2">
                    <Calendar size={14} className="text-sky-500/60" />
                    <span className="text-gray-400 text-sm font-medium">{edu.duration}</span>
                </div>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
                <div className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-zinc-900/50 border border-sky-500/20">
                    <Calculator size={18} className="text-sky-500/60" />
                    <span className="text-white font-bold font-poppins">{edu.grade}</span>
                </div>
                
                {edu.status && (
                    <div className="px-6 py-3 rounded-2xl bg-sky-500/20 border border-sky-500/30">
                        <span className="text-sky-100 font-bold font-poppins">{edu.status}</span>
                    </div>
                )}
            </div>
        </div>
    </motion.div>
);

/**
 * EducationSection Component
 * Displays academic background with a premium pink/black aesthetic.
 */
const EducationSection = () => {
    const education = [
        {
            degree: "Bachelor of Science in Information Technology",
            institution: "Punjab University (PUCIT)",
            duration: "2022 - Present",
            grade: "CGPA: 3.47 / 4.0",
            status: "8th Semester",
            icon: <GraduationCap size={28} className="text-sky-500" />
        },
        {
            degree: "FSC (Pre-Engineering)",
            institution: "Punjab Group of Colleges",
            duration: "2020 - 2022",
            grade: "Marks: 1038 / 1100",
            status: null,
            icon: <BookOpen size={28} className="text-sky-500" />
        }
    ];

    return (
        <section id="education" className="py-24 bg-black px-6 sm:px-10 lg:px-20 relative">
            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-white text-3xl sm:text-4xl font-bold mb-6 border-l-4 border-sky-500/40 pl-5 font-poppins">
                        Academic Background
                    </h2>
                    <p className="text-gray-500 max-w-2xl font-poppins italic">
                        Chronological overview of my educational journey and formal qualifications.
                    </p>
                </motion.div>

                <div className="grid gap-8">
                    {education.map((edu, index) => (
                        <EducationCard key={index} edu={edu} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EducationSection;
