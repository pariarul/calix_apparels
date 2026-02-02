"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const About = () => {
    return (
        <section id="about" className="section-padding bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="text-xs font-bold tracking-[0.3em] text-gray-400 mb-6 uppercase">
                            Our Legacy
                        </div>
                        <h2 className="heading-m text-charcoal mb-8">
                            Manufacturing with <br /> Absolute Integrity
                        </h2>
                        <div className="space-y-6 text-body max-w-xl text-gray-500">
                            <p>
                                Calix Apparels has been a cornerstone of ethical textile
                                manufacturing for over two decades. Operating from India&apos;s
                                knitwear capital, we combine artisanal craftsmanship with
                                scalable industrial efficiency to meet global export standards.
                            </p>
                            <p>
                                Our philosophy is simple: precision in every stitch,
                                transparency in every relationship, and excellence in every
                                shipment. We don&apos;t just export garments; we deliver brand
                                confidence to the world&apos;s most discerning retailers.
                            </p>
                        </div>
                        <motion.button
                            whileHover={{ x: 10 }}
                            className="mt-10 flex items-center gap-3 text-charcoal font-bold tracking-widest uppercase text-sm border-b-2 border-charcoal pb-2"
                        >
                            OUR STORY <ArrowRight size={18} />
                        </motion.button>
                    </motion.div>

                    {/* Abstract geometric decoration or image placeholder */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[500px] bg-gray-50 overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558444479-c8a51bc730ad?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700"></div>
                        <div className="absolute inset-0 bg-charcoal/5"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
