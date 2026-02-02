"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, MapPin, Linkedin, Instagram, Twitter, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
const Footer = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-white border-t border-gray-100 pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid lg:grid-cols-4 gap-16 mb-24">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        {/* Brand / Logo (Center on mobile, Left on desktop) */}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-3 lg:flex-none lg:justify-start justify-center flex-[2] lg:flex-1"
                        >
                            <div className="relative h-10 w-10 overflow-hidden rounded-lg shadow-inner">
                                <a href="/"> <Image
                                    src="/logo.jpeg"
                                    alt="Calix Logo"
                                    fill
                                    className="object-cover"
                                /></a>
                            </div>
                            <a href="/"> <span className={`text-xl md:text-2xl font-black tracking-tighter transition-colors duration-500 ${scrolled ? "text-charcoal" : "text-charcoal lg:text-white"}`}>
                                CALIX APPARELS
                            </span></a>
                        </motion.div>
                        <p className="text-gray-500 font-light leading-relaxed mb-8">
                            A global leader in ethical garment manufacturing, blending
                            artisanal quality with industrial-scale efficiency since 2003.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="p-3 bg-gray-50 text-gray-400 hover:text-charcoal hover:bg-gray-100 transition-all rounded-full">
                                <Linkedin size={18} />
                            </a>
                            <a href="#" className="p-3 bg-gray-50 text-gray-400 hover:text-charcoal hover:bg-gray-100 transition-all rounded-full">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="p-3 bg-gray-50 text-gray-400 hover:text-charcoal hover:bg-gray-100 transition-all rounded-full">
                                <Twitter size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-bold tracking-[0.2em] uppercase text-charcoal mb-8">
                            Quick Links
                        </h4>
                        <ul className="space-y-4 text-sm font-medium text-gray-500">
                            <li><a href="#about" className="hover:text-charcoal transition-colors">About Us</a></li>
                            <li><a href="#infrastructure" className="hover:text-charcoal transition-colors">Infrastructure</a></li>
                            <li><a href="#quality" className="hover:text-charcoal transition-colors">Quality & Compliance</a></li>
                            <li><a href="#certifications" className="hover:text-charcoal transition-colors">Certifications</a></li>
                            <li><a href="#products" className="hover:text-charcoal transition-colors">Products</a></li>
                            <li><a href="#markets" className="hover:text-charcoal transition-colors">Markets</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-sm font-bold tracking-[0.2em] uppercase text-charcoal mb-8">
                            Support
                        </h4>
                        <ul className="space-y-4 text-sm font-medium text-gray-500">
                            <li><a href="#" className="hover:text-charcoal transition-colors">FAQ</a></li>
                            <li><a href="#" className="hover:text-charcoal transition-colors">Contact Us</a></li>
                            <li><a href="#" className="hover:text-charcoal transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-charcoal transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-sm font-bold tracking-[0.2em] uppercase text-charcoal mb-8">
                            Newsletter
                        </h4>
                        <p className="text-sm text-gray-500 mb-6">Receive industry updates and capacity alerts.</p>
                        <div className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="bg-gray-50 border border-gray-100 px-4 py-3 text-sm focus:outline-none focus:border-charcoal transition-all"
                            />
                            <button className="bg-charcoal text-white py-3 text-xs font-bold tracking-widest uppercase hover:bg-gray-800 transition-all">
                                SUBSCRIBE
                            </button>
                        </div>
                    </div>
                </div>

                {/* Contact Strip */}
                <div className="flex flex-col md:flex-row justify-between items-center py-12 border-y border-gray-100 mb-12 gap-8 text-center md:text-left">
                    <div className="flex items-center gap-4">
                        <div className="p-4 bg-gray-50 rounded-full text-charcoal">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Location</div>
                            <div className="text-sm font-medium text-charcoal">Tiruppur, Tamil Nadu, India</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="p-4 bg-gray-50 rounded-full text-charcoal">
                            <Mail size={24} />
                        </div>
                        <div>
                            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email</div>
                            <div className="text-sm font-medium text-charcoal"> sales@calixapparels.com</div>
                        </div>
                    </div>
                    <button
                        onClick={scrollToTop}
                        className="p-4 bg-charcoal text-white hover:bg-gray-800 transition-all rounded-full group"
                    >
                        <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 gap-4">
                    <div>© 2026 Calix Apparels. Crafted for the World.</div>
                    <div className="flex gap-8">
                        <Link href="/security" className="hover:text-charcoal transition-colors">Security</Link>
                        <Link href="/cookies" className="hover:text-charcoal transition-colors">Cookies</Link>
                        <Link href="/sitemap" className="hover:text-charcoal transition-colors">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
