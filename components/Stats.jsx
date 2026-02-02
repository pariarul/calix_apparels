"use client";

import { motion } from "framer-motion";

const Stats = () => {
    const stats = [
        { label: "Years Experience", value: "20+" },
        { label: "Export Markets", value: "35+" },
        { label: "Monthly Capacity", value: "500K+" },
        { label: "Ethical Production", value: "100%" },
    ];

    return (
        <section className="bg-charcoal text-white py-20 border-y border-white/10">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center lg:text-left"
                        >
                            <div className="text-4xl md:text-5xl font-bold tracking-tighter mb-2">
                                {stat.value}
                            </div>
                            <div className="text-xs uppercase tracking-[0.3em] text-gray-400 font-bold">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
