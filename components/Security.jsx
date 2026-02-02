"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, CheckCircle } from "lucide-react";

const Security = () => {
    const protocols = [
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Data Protection",
            desc: "GDPR compliant data handling for all global buyer specifications and designs."
        },
        {
            icon: <Lock className="w-6 h-6" />,
            title: "IP Security",
            desc: "Strict non-disclosure protocols to protect your brand's unique patterns and innovations."
        },
        {
            icon: <Eye className="w-6 h-6" />,
            title: "Transparency",
            desc: "Real-time audit trails for manufacturing processes and supply chain logistics."
        }
    ];

    return (
        <section id="security" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-xs font-bold tracking-[0.3em] text-gray-400 mb-6 uppercase">
                            Digital & Physical Integrity
                        </h2>
                        <h3 className="heading-m text-charcoal">
                            Enterprise-Grade Security <br /> for Global Partnerships
                        </h3>
                    </div>
                    <div className="flex items-center gap-4 text-sm font-bold text-charcoal bg-white px-6 py-4 border border-gray-100 shadow-sm">
                        <CheckCircle className="text-green-500 w-5 h-5" />
                        AUDIT-READY INFRASTRUCTURE
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {protocols.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-10 border border-gray-100 hover:shadow-xl transition-all duration-500 group"
                        >
                            <div className="text-charcoal mb-8 group-hover:scale-110 transition-transform duration-500 origin-left">
                                {item.icon}
                            </div>
                            <h4 className="text-xl font-bold text-charcoal mb-4 uppercase tracking-tight">
                                {item.title}
                            </h4>
                            <p className="text-gray-500 font-light leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Security;
