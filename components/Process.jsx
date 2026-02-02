"use client";

import { motion } from "framer-motion";

const Process = () => {
    const steps = [
        {
            title: "Design & Sampling",
            desc: "Custom development to buyer specifications with precision pattern making.",
        },
        {
            title: "Material Sourcing",
            desc: "Quality-approved fabrics and trims sourced from certified ethical vendors.",
        },
        {
            title: "Production",
            desc: "Export-grade manufacturing execution using automated modern machinery.",
        },
        {
            title: "Quality Control",
            desc: "Multi-stage inspection protocols ensuring zero-defect delivery.",
        },
        {
            title: "Compliance & Audit",
            desc: "Full documentation and international certifications for every batch.",
        },
        {
            title: "Logistics & Export",
            desc: "Timely global shipment delivery with sophisticated tracking systems.",
        },
    ];

    return (
        <section id="quality" className="section-padding bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    <div className="lg:w-1/3 lg:sticky lg:top-32">
                        <div className="text-xs font-bold tracking-[0.3em] text-gray-400 mb-6 uppercase">
                            Our Methodology
                        </div>
                        <h2 className="heading-m text-charcoal mb-8">Engineering Flow</h2>
                        <p className="text-body text-gray-500">
                            Precision and compliance at every stage of the manufacturing
                            lifecycle. We maintain total control over the supply chain to
                            ensure consistent excellence.
                        </p>
                    </div>

                    <div className="lg:w-2/3 space-y-4">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-8 border border-gray-100 flex gap-8 items-center group hover:border-charcoal transition-all"
                            >
                                <div className="text-4xl font-bold text-gray-100 group-hover:text-charcoal/10 transition-colors">
                                    0{index + 1}
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-charcoal mb-2">
                                        {step.title}
                                    </h4>
                                    <p className="text-gray-500 font-light text-sm tracking-wide">
                                        {step.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
