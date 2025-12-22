import React from 'react';
import { Award, Target } from 'lucide-react';

/**
 * AboutSection Component
 * Displays a personal biography, core strengths, and specific interests.
 */
const AboutSection = () => {
    // List of personal/professional strengths
    const strengths = [
        'Strong IT foundation',
        'Quick learner',
        'Problem solver',
        'Team player',
        'Adaptable'
    ];

    // List of technical interests with custom color gradients for visual variety
    const interests = [
        { name: 'Web Development', gradient: 'from-sky-500 to-cyan-500' },
        { name: 'Learning New Tech', gradient: 'from-cyan-500 to-teal-500' },
        { name: 'Problem Solving', gradient: 'from-teal-500 to-emerald-500' },
        { name: 'UI/UX Design', gradient: 'from-emerald-500 to-green-500' },
        { name: 'Data Structures', gradient: 'from-sky-500 to-teal-500' },
        { name: 'Software Engineering', gradient: 'from-cyan-500 to-blue-500' }
    ];

    return (
        <section id="about" className="py-20 px-4 relative">
            <div className="max-w-6xl mx-auto relative z-10">
                {/* SECTION HEADER */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                        About Me
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-sky-500 via-cyan-500 to-teal-500 mx-auto rounded-full" />
                </div>

                {/* MAIN GRID - Two Columns for Objective and Strengths */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* CAREER OBJECTIVE CARD */}
                    <div className="glass glass-hover rounded-2xl p-8 transition-all duration-300 hover:scale-105">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center">
                                <Target size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-sky-400">Objective</h3>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                            Motivated BSIT student seeking opportunities to apply theoretical knowledge in practical environments.
                            Passionate about creating innovative solutions and learning from industry professionals to grow as a developer.
                        </p>
                    </div>

                    {/* STRENGTHS LIST CARD */}
                    <div className="glass glass-hover rounded-2xl p-8 transition-all duration-300 hover:scale-105">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center">
                                <Award size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-cyan-400">Strengths</h3>
                        </div>
                        <div className="space-y-3">
                            {strengths.map((strength, i) => (
                                <div key={i} className="flex items-center gap-3 group">
                                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 group-hover:w-4 transition-all" />
                                    <span className="text-gray-300 group-hover:text-white transition-colors">
                                        {strength}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* INTERESTS & PASSIONS TAG CLOUD */}
                <div className="mt-8 glass glass-hover rounded-2xl p-8 transition-all duration-300 hover:scale-105">
                    <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-sky-400 to-teal-400 bg-clip-text mb-6">
                        Interests & Passions
                    </h3>
                    <div className="flex flex-wrap gap-4">
                        {interests.map((interest, i) => (
                            <div
                                key={i}
                                className="group relative px-6 py-3 rounded-xl overflow-hidden transition-all hover:scale-110 cursor-pointer"
                            >
                                {/* Gradient Background and Blur effects on hover */}
                                <div className={`absolute inset-0 bg-gradient-to-r ${interest.gradient} opacity-20 group-hover:opacity-30 transition-opacity`} />
                                <div className={`absolute inset-0 bg-gradient-to-r ${interest.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity`} />
                                <span className="relative text-gray-300 group-hover:text-white font-medium transition-colors">
                                    {interest.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
