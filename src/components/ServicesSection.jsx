import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Layout } from 'lucide-react';

/**
 * ServiceCard Component
 * Individual card for each service with hover effects and animations.
 */
const ServiceCard = ({ icon: Icon, title, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        viewport={{ once: true }}
        whileHover={{ y: -10, borderColor: 'rgba(236, 72, 153, 0.4)' }}
        className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 backdrop-blur-sm transition-all duration-300 group"
    >
        <div className="w-14 h-14 rounded-2xl bg-sky-500/10 flex items-center justify-center mb-6 group-hover:bg-sky-500/20 transition-colors">
            <Icon className="text-sky-500/60 group-hover:text-sky-500 transition-colors" size={28} />
        </div>
        <h3 className="text-xl font-bold text-white mb-4 font-poppins">{title}</h3>
        <p className="text-gray-400 leading-relaxed font-poppins text-sm italic">
            {description}
        </p>
    </motion.div>
);

/**
 * ServicesSection Component
 * Displays professional services offered by the developer.
 */
const ServicesSection = () => {
    const services = [
        {
            icon: Code,
            title: "Full Stack Architecture",
            description: "Developing cohesive web ecosystems using React, Next.js, and modern backends for performance and scalability."
        },
        {
            icon: Server,
            title: "Scalable Backend Solutions",
            description: "Building resilient API systems and database layers designed for security and high availability."
        },
        {
            icon: Layout,
            title: "Strategic UI/UX Design",
            description: "Crafting intuitive, research-driven interfaces that blend visual sophistication with seamless user workflows."
        }
    ];

    return (
        <section className="py-24 bg-black relative">
            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-white text-3xl sm:text-4xl font-bold mb-6 border-l-4 border-sky-500/40 pl-5 font-poppins">
                        Core Services
                    </h2>
                    <p className="text-gray-500 max-w-2xl font-poppins">
                        Delivering high-quality digital solutions through specialized expertise in modern web technologies.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            {...service}
                            delay={index * 0.2}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
