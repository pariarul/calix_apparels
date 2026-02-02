"use client";
import React from "react";
import { motion } from "framer-motion";

const markets = [
    { region: "Europe", percentage: "45%", countries: "Germany, France, UK, Italy, Netherlands" },
    { region: "North America", percentage: "30%", countries: "USA, Canada" },
    { region: "Oceania", percentage: "15%", countries: "Australia, New Zealand" },
    { region: "Middle East", percentage: "10%", countries: "UAE, Qatar, Saudi Arabia" },
];

const Market = () => {
    return (
        <section id="markets" className="section-padding bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="w-full lg:w-1/2">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-sm font-semibold tracking-widest uppercase text-gray-500 mb-4 block"
                        >
                            Global Presence
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="heading-m text-charcoal mb-6"
                        >
                            Exporting Excellence to Over 20+ Countries
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-body mb-10"
                        >
                            Our manufacturing prowess reaches across continents. We understand international trends
                            and delivery requirements, making us a preferred partner for global retail giants.
                        </motion.p>

                        <div className="space-y-6">
                            {markets.map((m, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                    className="group"
                                >
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="font-bold text-charcoal">{m.region}</span>
                                        <span className="text-gray-500 text-sm font-medium">{m.percentage}</span>
                                    </div>
                                    <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: m.percentage }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.5, ease: "easeOut" }}
                                            className="h-full bg-charcoal"
                                        />
                                    </div>
                                    <p className="text-xs text-gray-400 mt-2 italic group-hover:text-gray-600 transition-colors">
                                        {m.countries}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="relative aspect-square md:aspect-video lg:aspect-square bg-gray-50 rounded-3xl flex items-center justify-center p-8 overflow-hidden"
                        >
                            {/* Abstract World Map Representation */}
                            <div className="absolute inset-0 opacity-10 pointer-events-none">
                                <svg className="w-full h-full" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M150 100 Q 200 50 250 100 T 350 100" stroke="currentColor" strokeWidth="2" />
                                    <circle cx="200" cy="150" r="4" fill="currentColor" />
                                    <circle cx="400" cy="100" r="4" fill="currentColor" />
                                    <circle cx="600" cy="180" r="4" fill="currentColor" />
                                    <circle cx="300" cy="250" r="4" fill="currentColor" />
                                </svg>
                            </div>

                            <div className="relative z-10 text-center">
                                <div className="text-7xl font-bold text-charcoal mb-2">20+</div>
                                <div className="text-xl font-medium text-gray-500 uppercase tracking-widest">Global Markets</div>
                            </div>

                            {/* Decorative elements */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-dashed border-gray-200 rounded-full pointer-events-none"
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-dotted border-gray-200 rounded-full pointer-events-none"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Market;
