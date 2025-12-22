import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

/**
 * ContactSection Component
 * Provides multiple ways for users to reach out, featuring links to email, phone, and social platforms.
 */
const ContactSection = () => {
    // Contact channel definitions with associated styling and links
    const contactInfo = [
        {
            icon: <Mail size={28} />,
            title: "Email",
            value: "tayyabaanwar43@gmail.com",
            href: "mailto:tayyabaanwar43@gmail.com",
            gradient: "from-sky-500 to-cyan-500",
            shadowColor: "shadow-sky-500/50"
        },
        {
            icon: <Phone size={28} />,
            title: "Phone",
            value: "03270780031",
            href: "tel:03270780031",
            gradient: "from-cyan-500 to-teal-500",
            shadowColor: "shadow-cyan-500/50"
        },
        {
            icon: <MapPin size={28} />,
            title: "Location",
            value: "Lahore, Pakistan",
            href: null,
            gradient: "from-teal-500 to-emerald-500",
            shadowColor: "shadow-teal-500/50"
        }
    ];

    // Social media links configuration
    const socialLinks = [
        {
            name: 'GitHub',
            icon: <Github size={24} />,
            href: 'https://github.com/tayyaba13-02',
            color: 'hover:text-white',
            hoverBg: 'hover:bg-gray-800'
        },
        {
            name: 'LinkedIn',
            icon: <Linkedin size={24} />,
            href: 'https://www.linkedin.com/in/tayyaba-anwar-aly',
            color: 'hover:text-sky-400',
            hoverBg: 'hover:bg-sky-500/10'
        }
    ];

    return (
        <section id="contact" className="py-20 px-4 relative">
            <div className="max-w-4xl mx-auto relative z-10">
                {/* Section Branding Header */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                        Let's Connect
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-sky-500 via-cyan-500 to-teal-500 mx-auto rounded-full" />
                </div>

                {/* INTRODUCTORY BLAZE / TEXT */}
                <div className="glass rounded-2xl p-8 mb-8">
                    <p className="text-center text-gray-300 text-lg leading-relaxed">
                        I'm actively seeking opportunities to apply my skills and contribute to innovative projects.
                        Whether you have a project in mind or just want to connect, I'd love to hear from you!
                    </p>
                </div>

                {/* CONTACT CARDS GRID */}
                <div className="grid md:grid-cols-3 gap-6">
                    {contactInfo.map((contact, index) => {
                        // Dynamically choose between an anchor (link) or a div based on href existence
                        const CardWrapper = contact.href ? 'a' : 'div';
                        const cardProps = contact.href ? { href: contact.href } : {};

                        return (
                            <CardWrapper
                                key={index}
                                {...cardProps}
                                className="glass glass-hover rounded-2xl p-6 group transition-all duration-300 hover:scale-105 text-center block"
                            >
                                {/* ICON CONTAINER with branding gradient */}
                                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${contact.gradient} flex items-center justify-center group-hover:shadow-lg ${contact.shadowColor} transition-all`}>
                                    {contact.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">
                                    {contact.title}
                                </h3>
                                <p className="text-sm text-gray-400 break-all">
                                    {contact.value}
                                </p>
                            </CardWrapper>
                        );
                    })}
                </div>

                {/* SOCIAL MEDIA / FIND ME SECTION */}
                <div className="mt-12 text-center">
                    <p className="text-gray-400 mb-6 text-2xl font-semibold">Find Me On...</p>
                    <div className="flex justify-center gap-6">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`glass glass-hover p-4 rounded-xl text-gray-400 transition-all duration-300 hover:scale-110 flex items-center gap-3 ${social.color} ${social.hoverBg}`}
                                title={social.name}
                            >
                                {social.icon}
                                <span className="font-medium">{social.name}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
