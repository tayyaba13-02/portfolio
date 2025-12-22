import React from 'react';

/**
 * AnimatedBackground Component
 * Renders an interactive background layer with a mouse-following radial gradient and floating particles.
 * @param {Object} mousePosition - Coordinates (x, y) relative to window percentage.
 * @param {Array} particles - Pre-generated particle data for floating elements.
 */
const AnimatedBackground = ({ mousePosition, particles }) => {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
            {/* MOUSE FOLLOW GRADIENT LAYER 
                Creates a subtle light spot that follows the cursor.
            */}
            <div
                className="absolute inset-0 opacity-30 transition-all duration-300"
                style={{
                    background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(14, 165, 233, 0.15) 0%, transparent 50%)`
                }}
            />

            {/* FLOATING PARTICLES 
                Iterates through the particles array to render individual floating circles with unique animations.
            */}
            {particles.map(particle => (
                <div
                    key={particle.id}
                    className="absolute rounded-full bg-cyan-500 opacity-20"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        animation: `float ${particle.duration}s ease-in-out infinite`,
                        animationDelay: `${particle.delay}s`
                    }}
                />
            ))}

            {/* STATIC AMBIENT GRADIENT OVERLAYS 
                Blurred decorative shapes that add depth and color to the background corners.
            */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        </div>
    );
};

export default AnimatedBackground;