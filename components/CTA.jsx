"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTA = () => {
    return (
        <section className="section-padding bg-charcoal text-white relative overflow-hidden">
            {/* Visual flair */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-[-20deg] translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="max-w-3xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-bold tracking-tighter mb-8"
                    >
                        Partnership for Scale
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed mb-12"
                    >
                        Sourcing is a relationship. Let&apos;s build a foundation on quality,
                        trust, and consistent global delivery. Experience the Calix
                        difference.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-6"
                    >


                        {/* WhatsApp */}
                        <a
                            href="https://wa.me/919087949574"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-charcoal px-10 py-5 font-bold tracking-widest uppercase hover:bg-gray-100 transition-all flex items-center justify-center gap-3"
                        >
                            START ORDER PROCESS
                            <ArrowRight size={20} />
                        </a>

                        {/* Call */}
                        <a
                            href="tel:+919087949574"
                            className="border border-white/20 text-white px-10 py-5 font-bold tracking-widest uppercase hover:bg-white/10 transition-all flex items-center justify-center gap-3"
                        >
                            FULL CAPABILITIES

                        </a>


                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
