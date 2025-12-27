import React from 'react';
import { Code } from 'lucide-react';

/**
 * SkillsSection Component
 * Visualizes technical expertise by categorizing skills into logical groups.
 */
const SkillsSection = () => {
    // Dataset of technical skills grouped by domain
    const skills = [
        {
            category: "Frontend",
            items: ["HTML", "CSS", "JavaScript", "React", "Angular"],
            color: "from-sky-400 to-cyan-500"
        },
        {
            category: "Backend",
            items: ["Java", "ASP.NET", "C#", "Python", "FastAPI"],
            color: "from-cyan-400 to-teal-500"
        },
        {
            category: "Database",
            items: ["SQL Server", "MongoDB", "TablePlus"],
            color: "from-teal-400 to-emerald-500"
        },
        {
            category: "Tools",
            items: ["Visual Studio", "Cursor", "Git", "GitHub", "Postman", "Sublime Text"],
            color: "from-emerald-400 to-green-500"
        }
    ];

    return (
        <section id="skills" className="py-20 px-4 relative">
            <div className="max-w-6xl mx-auto relative z-10">
                {/* Visual Header */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                        Technical Skills
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-sky-500 via-cyan-500 to-teal-500 mx-auto rounded-full" />
                </div>

                {/* SKILLS CATEGORY GRID */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="glass glass-hover rounded-2xl p-6 group transition-all duration-300 hover:scale-105"
                        >
                            {/* CATEGORY HEADER - Features icon and domain name */}
                            <div className="flex items-center gap-3 mb-6">
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center`}>
                                    <Code size={24} />
                                </div>
                                <h3 className={`text-xl font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                                    {skill.category}
                                </h3>
                            </div>

                            {/* SKILLS LIST - Individual skill tags inside each category */}
                            <div className="space-y-3">
                                {skill.items.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="glass px-4 py-2 rounded-lg text-gray-300 hover:text-white transition-all hover:bg-white/10 cursor-default"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* MOTIVATIONAL NOTE */}
                <div className="mt-12 text-center">
                    <p className="text-gray-400 text-lg">
                        Continuously learning and expanding my technical expertise
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
