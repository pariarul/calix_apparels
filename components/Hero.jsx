"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20">
            {/* Background patterns/elements for a premium feel */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#000_1px,transparent_1px)] bg-[length:40px_40px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-100 rounded-full text-xs font-bold tracking-[0.2em] text-gray-500 mb-8 uppercase"
                >
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    EST. 2003 • TIRUPPUR, INDIA
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-charcoal mb-8 leading-[0.9]"
                >
                    Global Textile <br />
                    <span className="text-gray-300">Excellence.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="max-w-2xl mx-auto text-xl md:text-2xl text-gray-500 font-light leading-relaxed mb-12"
                >
                    Trusted manufacturer delivering ethically produced, export-grade
                    garments for the world&apos;s leading fashion and lifestyle brands.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <a
                        href="https://wa.me/919385363878"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-10 py-5 bg-charcoal text-white font-bold tracking-widest hover:bg-gray-800 transition-all flex items-center justify-center gap-3">
                        OUR CAPABILITIES
                    </a>
                    <a href="tel:+9193853 63878" className="w-full sm:w-auto px-10 py-5 border border-gray-200 text-charcoal font-bold tracking-widest hover:bg-gray-50 transition-all flex items-center justify-center gap-3">
                        BULK QUOTE <ArrowRight size={20} />
                    </a>
                </motion.div>
            </div>

            {/* Aesthetic Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-charcoal/50 to-transparent"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
