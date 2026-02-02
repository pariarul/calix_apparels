"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, MapPin, Mail, Phone } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Products", href: "#products" },
        { name: "Infrastructure", href: "#infrastructure" },
        { name: "Quality", href: "#quality" },
        { name: "Certifications", href: "#certifications" },
        { name: "Markets", href: "#markets" },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? "glass-nav py-3" : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center relative">

                {/* Mobile: Menu Toggle (Left) */}
                <div className="lg:hidden flex-1">
                    <button
                        onClick={() => setIsOpen(true)}
                        className="text-charcoal p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors"
                        aria-label="Open Menu"
                    >
                        <Menu size={28} />
                    </button>
                </div>

                {/* Brand / Logo (Center on mobile, Left on desktop) */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 lg:flex-none lg:justify-start justify-center flex-[2] lg:flex-1"
                >
                    <div className="relative h-10 w-10 overflow-hidden rounded-lg">
                        <Image
                            src="/logo.jpeg"
                            alt="Calix Logo"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <span className="text-xl md:text-2xl font-black tracking-tighter text-charcoal whitespace-nowrap">
                        CALIX APPARELS
                    </span>
                </motion.div>

                {/* Desktop Menu (Right) */}
                <div className="hidden lg:flex items-center justify-end flex-1 space-x-8">
                    {navLinks.map((link, index) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="text-xs font-bold text-gray-500 hover:text-charcoal transition-colors uppercase tracking-[0.2em]"
                        >
                            {link.name}
                        </motion.a>
                    ))}
                    <motion.button
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-charcoal text-white px-6 py-3 text-xs font-bold tracking-widest uppercase rounded-none flex items-center gap-2 hover:bg-black transition-all shadow-lg shadow-charcoal/10"
                    >
                        BULK QUOTE <ArrowRight size={14} />
                    </motion.button>
                </div>

                {/* Mobile: Placeholder for right side balance */}
                <div className="lg:hidden flex-1 flex justify-end">
                    {/* Empty div to balance the centered logo */}
                </div>
            </div>

            {/* Mobile Sidebar (Drawer) */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] lg:hidden"
                        />

                        {/* Sidebar Content */}
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed left-0 top-0 bottom-0 w-[85%] max-w-sm bg-white z-[70] lg:hidden flex flex-col shadow-2xl"
                        >
                            <div className="p-8 flex flex-col h-full">
                                {/* Sidebar Header */}
                                <div className="flex justify-between items-center mb-12">
                                    <div className="flex items-center gap-3">
                                        <div className="relative h-8 w-8 overflow-hidden rounded-md">
                                            <Image src="/logo.jpeg" alt="Logo" fill className="object-cover" />
                                        </div>
                                        <span className="font-black tracking-tighter text-lg text-charcoal">CALIX</span>
                                    </div>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="p-2 -mr-2 text-gray-400 hover:text-charcoal"
                                    >
                                        <X size={24} />
                                    </button>
                                </div>

                                {/* Navigation Links */}
                                <div className="flex flex-col space-y-6">
                                    {navLinks.map((link, index) => (
                                        <motion.a
                                            key={link.name}
                                            href={link.href}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 + index * 0.05 }}
                                            onClick={() => setIsOpen(false)}
                                            className="text-2xl font-bold text-charcoal hover:text-gray-400 transition-colors"
                                        >
                                            {link.name}
                                        </motion.a>
                                    ))}
                                </div>

                                <div className="mt-auto pt-10 border-t border-gray-100">
                                    {/* Location & Info Section */}
                                    <div className="space-y-6">
                                        <div className="flex items-start gap-4">
                                            <div className="p-2 bg-gray-50 rounded-lg text-charcoal shrink-0">
                                                <MapPin size={18} />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Office Location</p>
                                                <p className="text-sm font-medium text-charcoal">Tiruppur, Tamil Nadu, India</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="p-2 bg-gray-50 rounded-lg text-charcoal shrink-0">
                                                <Mail size={18} />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Email Inquiry</p>
                                                <p className="text-sm font-medium text-charcoal">contact@calixapparels.com</p>
                                            </div>
                                        </div>
                                    </div>

                                    <button className="w-full mt-10 bg-charcoal text-white py-4 font-bold tracking-widest uppercase text-xs flex items-center justify-center gap-2 hover:bg-black transition-all">
                                        GET A BULK QUOTE <ArrowRight size={14} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
