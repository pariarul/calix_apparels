"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, CheckCircle } from "lucide-react";

export default function SecurityPage() {
    const securityFeatures = [
        {
            icon: <Shield className="w-8 h-8 text-charcoal" />,
            title: "Data Protection",
            description: "We employ industry-standard encryption protocols to protect all client data and intellectual property related to designs and manufacturing processes."
        },
        {
            icon: <Lock className="w-8 h-8 text-charcoal" />,
            title: "Secure Infrastructure",
            description: "Our manufacturing facilities are monitored 24/7 with advanced surveillance and access control systems to ensure the safety of our workforce and assets."
        },
        {
            icon: <Eye className="w-8 h-8 text-charcoal" />,
            title: "Vulnerability Management",
            description: "Regular security audits and vulnerability assessments are conducted to identify and mitigate potential risks in our digital and physical ecosystems."
        },
        {
            icon: <CheckCircle className="w-8 h-8 text-charcoal" />,
            title: "Compliance & Audits",
            description: "We strictly adhere to international security standards and undergo periodic third-party audits to maintain our certifications and client trust."
        }
    ];

    return (
        <main className="min-h-screen bg-white pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-3xl mb-16"
                >
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-charcoal mb-8">
                        Security & <span className="text-gray-400">Trust.</span>
                    </h1>
                    <p className="text-xl text-gray-500 font-light leading-relaxed">
                        At Calix Apparels, security is built into every layer of our operations. From protecting sensitive design data to ensuring the safety of our manufacturing facilities, we prioritize the integrity of our partnership.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {securityFeatures.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="p-10 bg-gray-50 border border-gray-100 hover:border-charcoal transition-all duration-500 group"
                        >
                            <div className="mb-6 group-hover:scale-110 transition-transform duration-500">
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-charcoal mb-4">{feature.title}</h3>
                            <p className="text-gray-500 font-light leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-24 p-12 bg-charcoal text-white text-center"
                >
                    <h2 className="text-3xl font-bold mb-6">Partner with Confidence</h2>
                    <p className="max-w-2xl mx-auto text-gray-400 font-light mb-8">
                        Our commitment to security is unwavering. We continuously evolve our protocols to meet the highest global standards of safety and data integrity.
                    </p>
                    <a
                        href="mailto:security@calixapparels.com"
                        className="inline-block px-8 py-4 border border-white text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-charcoal transition-all"
                    >
                        Contact Security Team
                    </a>
                </motion.div>
            </div>
        </main>
    );
}
