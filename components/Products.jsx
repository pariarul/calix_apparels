"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Products = () => {
    const products = [
        {
            title: "Knits",
            desc: "High-quality T-Shirts & Polos in various gsm and finishes.",
            image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1780&auto=format&fit=crop",
        },
        {
            title: "Fleece",
            desc: "Premium Hoodies & Sweatshirts with superior comfort and durability.",
            image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1887&auto=format&fit=crop",
        },
        {
            title: "Performance",
            desc: "Advanced Activewear & Sportswear with moisture-wicking technology.",
            image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
        },
        {
            title: "Children",
            desc: "Soft and safe Kids & Infant Wear following strict safety standards.",
            image: "/images/kids_wear.png",
        },
        {
            title: "Womenswear",
            desc: "Fashion-forward tops and ensembles for the modern global consumer.",
            image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=1905&auto=format&fit=crop",
        },
        {
            title: "Eco-Friendly",
            desc: "Organic & Sustainable collections using GOTS certified materials.",
            image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070&auto=format&fit=crop",
        },
    ];

    return (
        <section id="products" className="section-padding bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="heading-m text-charcoal mb-4"
                    >
                        Core Collections
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-500 max-w-xl mx-auto text-lg"
                    >
                        Our industrial range covers every textile requirement for the global
                        market.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative h-[450px] overflow-hidden"
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                                style={{ backgroundImage: `url('${item.image}')` }}
                            ></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent opacity-80"></div>

                            <div className="absolute inset-0 p-10 flex flex-col justify-end">
                                <h3 className="text-3xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-gray-300 mb-6 text-sm font-light leading-relaxed">
                                    {item.desc}
                                </p>
                                <button className="flex items-center gap-2 text-white font-bold tracking-widest text-xs uppercase group/btn">
                                    Specifications <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
