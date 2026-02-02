"use client";

import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

const Sitemap = () => {
    const map = [
        {
            category: "Main",
            links: ["Home", "About", "Products", "Infrastructure"]
        },
        {
            category: "Compliance",
            links: ["Certifications", "Ethical Policy", "Quality Standards", "Sustainability"]
        },
        {
            category: "Support",
            links: ["Contact", "FAQ", "Global Markets", "Bulk Quote"]
        },
        {
            category: "Legal",
            links: ["Privacy Policy", "Terms of Service", "Security", "Cookies"]
        }
    ];

    return (
        <section id="sitemap" className="py-24 bg-charcoal text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 text-[20vw] font-black text-white/5 leading-none select-none pointer-events-none">
                    MAP
                </div>

                <div className="mb-20">
                    <h2 className="text-xs font-bold tracking-[0.3em] text-white/40 mb-6 uppercase">
                        Navigation Hub
                    </h2>
                    <h3 className="heading-m">
                        Complete Architecture
                    </h3>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24">
                    {map.map((section, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h4 className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/30 mb-8">
                                {section.category}
                            </h4>
                            <ul className="space-y-4">
                                {section.links.map((link, lIdx) => (
                                    <li key={lIdx}>
                                        <a
                                            href={`#${link.toLowerCase().replace(" ", "-")}`}
                                            className="group flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors"
                                        >
                                            <span className="w-0 group-hover:w-4 overflow-hidden transition-all duration-300">
                                                <MoveRight size={14} />
                                            </span>
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Sitemap;
