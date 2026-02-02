"use client";

import { motion } from "framer-motion";
import { ShieldCheck, HardHat, Handshake } from "lucide-react";

const Values = () => {
    const values = [
        {
            icon: <HardHat className="text-charcoal" size={40} />,
            title: "Export-Grade Manufacturing",
            desc: "State-of-the-art facilities meeting international quality and compliance standards across all product lines.",
        },
        {
            icon: <ShieldCheck className="text-charcoal" size={40} />,
            title: "Certified & Audit-Ready",
            desc: "ISO systems, social compliance audits, and environmental certifications ensuring total buyer confidence.",
        },
        {
            icon: <Handshake className="text-charcoal" size={40} />,
            title: "Reliable Partnership",
            desc: "Long-term sourcing relationships built on transparency, ethics, and delivery consistency since 2003.",
        },
    ];

    return (
        <section id="infrastructure" className="section-padding bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8">
                    {values.map((value, index) => (
                        <motion.div
                            key={value.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white p-12 border border-gray-100 hover:border-charcoal/20 transition-all duration-500 group"
                        >
                            <div className="mb-8 transform group-hover:scale-110 transition-transform duration-500 origin-left">
                                {value.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-charcoal mb-4">
                                {value.title}
                            </h3>
                            <p className="text-gray-500 leading-relaxed font-light">
                                {value.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Values;
