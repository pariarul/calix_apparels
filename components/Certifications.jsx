"use client";
import React from "react";
import { motion } from "framer-motion";

const certifications = [
    {
        name: "OEKO-TEX® Standard 100",
        description: "One of the world's best-known labels for textiles tested for harmful substances. It stands for customer confidence and high product safety.",
        icon: (
            <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        name: "GRS (Global Recycled Standard)",
        description: "International, voluntary, full product standard that sets requirements for third-party certification of recycled content, chain of custody, and more.",
        icon: (
            <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 12V10C4 6.68629 6.68629 4 10 4H14C17.3137 4 20 6.68629 20 10V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20 12L22 10M20 12L18 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20 12V14C20 17.3137 17.3137 20 14 20H10C6.68629 20 4 17.3137 4 14V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 12L2 14M4 12L6 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        name: "BSCI (amfori)",
        description: "Business Social Compliance Initiative. We adhere to the highest standards of social responsibility, ensuring fair treatment of our workforce.",
        icon: (
            <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M23 21V19C22.9993 17.1137 21.6234 15.5263 19.75 15.21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 3.13C17.8699 3.44297 19.2435 5.02705 19.2435 6.91C19.2435 8.79295 17.8699 10.377 16 10.69" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        name: "SEDEX / SMETA",
        description: "One of the world's leading ethical audit formats, allowing businesses to assess their sites and suppliers to understand working conditions.",
        icon: (
            <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
];

const Certifications = () => {
    return (
        <section id="certifications" className="section-padding bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sm font-semibold tracking-widest uppercase text-gray-500 mb-4 block"
                    >
                        Compliance & Standards
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="heading-m text-charcoal mb-6"
                    >
                        Our Quality Benchmarks
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-body max-w-2xl mx-auto"
                    >
                        We adhere to rigorous international standards to ensure ethical production,
                        environmental safety, and superior product quality for our global partners.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                        >
                            <div className="text-charcoal mb-6 bg-gray-50 w-16 h-16 flex items-center justify-center rounded-xl">
                                {cert.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-charcoal">{cert.name}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {cert.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
                >
                    {/* These would be actual logo PNGs in a real project */}
                    <div className="text-2xl font-bold tracking-tighter">GOTS</div>
                    <div className="text-2xl font-bold tracking-tighter">ISO 9001</div>
                    <div className="text-2xl font-bold tracking-tighter">HIGG INDEX</div>
                    <div className="text-2xl font-bold tracking-tighter">CTPAT</div>
                </motion.div>
            </div>
        </section>
    );
};

export default Certifications;
