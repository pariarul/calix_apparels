"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ArrowRight,
  MapPin,
  Mail,
  Info,
  Package,
  Factory,
  BadgeCheck,
  Globe,
  Award
} from "lucide-react";
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
        { name: "About", href: "#about" ,icon:Info},
        { name: "Products", href: "#products" ,icon:Package},
        { name: "Infrastructure", href: "#infrastructure" ,icon:Factory},
        { name: "Quality", href: "#quality" ,icon:BadgeCheck},
        { name: "Certifications", href: "#certifications", icon: Award },
        { name: "Markets", href: "#markets",icon:Globe },
    ];

    const legalLinks = [
        { name: "Security", href: "/security" },
        { name: "Cookies", href: "/cookies" },
        { name: "Sitemap", href: "/sitemap" },
    ];

    return (
        <nav className="fixed w-full z-50">
            {/* Top Bar - Only on Desktop */}
            <div className={`hidden lg:block transition-all duration-500 overflow-hidden ${scrolled ? 'h-0 opacity-0' : 'h-10 opacity-100 bg-charcoal text-white/60 border-b border-white/5'}`}>
                <div className="max-w-7xl mx-auto px-12 h-full flex justify-between items-center text-[10px] font-bold tracking-[0.2em] uppercase">
                    <div className="flex gap-8">
                        {legalLinks.map((link) => (
                            <a key={link.name} href={link.href} className="hover:text-white transition-colors">
                                {link.name}
                            </a>
                        ))}
                    </div>
                    <div className="flex gap-8">
                        <span className="flex items-center gap-2"><MapPin size={10} /> Tiruppur, India</span>
                        <span className="flex items-center gap-2"><Mail size={10} /> sales@calixapparels.com</span>
                    </div>
                </div>
            </div>

            <div
                className={`transition-all duration-500 ${scrolled ? "glass-nav py-3" : "bg-white/10 backdrop-blur-sm lg:bg-transparent py-6"
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

                    {/* Desktop Menu (Right) */}
                    <div className="hidden lg:flex items-center justify-end flex-1 space-x-8">
                        {navLinks.map((link, index) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className={`text-xs font-bold transition-colors uppercase tracking-[0.2em] ${scrolled ? "text-gray-500 hover:text-charcoal" : "text-white/70 hover:text-white"}`}
                            >
                                {link.name}
                            </motion.a>
                        ))}
                        <a href="tel:+9193853 63878">
                            <motion.button
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`px-6 py-3 text-xs font-bold tracking-widest uppercase transition-all shadow-lg flex items-center gap-2 ${scrolled
                                    ? "bg-charcoal text-white hover:bg-black shadow-charcoal/10"
                                    : "bg-white text-charcoal hover:bg-gray-100 shadow-white/10"
                                    }`}
                            >
                                BULK QUOTE <ArrowRight size={14} />
                            </motion.button>
                        </a>
                    </div>

                    {/* Mobile: Placeholder for right side balance */}
                    <div className="lg:hidden flex-1 flex justify-end">
                        {/* Empty div to balance the centered logo */}
                    </div>
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
                            className="fixed left-0 top-0 bottom-0 w-[75%] max-w-sm bg-white z-[70] lg:hidden flex flex-col shadow-2xl"
                        >
                            <div className="p-8 flex flex-col h-full">
                                {/* Sidebar Header */}
                                <div className="flex justify-between items-center mb-12">
                                    <div className="flex items-center gap-3">
                                        <a href="/" className="relative h-8 w-8 overflow-hidden rounded-md">
                                            <Image src="/logo.jpeg" alt="Logo" fill className="object-cover" />
                                        </a>
                                      <a href="/">  <span className="font-black tracking-tighter text-lg text-charcoal">CALIX APPARELS</span> </a>
                                    </div>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="p-2 -mr-2 text-gray-400 hover:text-charcoal"
                                    >
                                        <X size={24} />
                                    </button>
                                </div>

                                {/* Navigation Links */}
                                <div className="flex flex-col space-y-10 ">
{navLinks.map(({ name, href, icon: Icon }, index) => (
  <motion.a
    key={name}
    href={href}
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.1 + index * 0.05 }}
    onClick={() => setIsOpen(false)}
    className="flex items-center gap-4 text-2xl font-bold text-charcoal hover:text-gray-400"
  >
    {Icon && <Icon size={22} />}
    {name}
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
                                                <p className="text-sm font-medium text-charcoal">Tiruppur, India</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="p-2 bg-gray-50 rounded-lg text-charcoal shrink-0">
                                                <Mail size={18} />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Email Inquiry</p>
                                                <p className="text-sm font-medium text-charcoal">sales@calixapparels.com</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Small Legal Links for Mobile */}
                                    <div className="mt-8 pt-8 border-t border-gray-50 flex gap-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                                        <Link href="/security" onClick={() => setIsOpen(false)}>Security</Link>
                                        <Link href="/cookies" onClick={() => setIsOpen(false)}>Cookies</Link>
                                        <Link href="/sitemap" onClick={() => setIsOpen(false)}>Sitemap</Link>
                                    </div>

                                    <a href="tel:+9193853 63878"
                                     className="w-full mt-10 bg-charcoal text-white py-4 font-bold tracking-widest uppercase text-xs flex items-center justify-center gap-2 hover:bg-black transition-all">
                                        GET A BULK QUOTE <ArrowRight size={14} />
                                    </a>
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
