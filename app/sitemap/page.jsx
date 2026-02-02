"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Network, Home, Box, FileText, Globe, Info, Mail, Factory, ShieldCheck, Globe2 } from "lucide-react";

export default function SitemapPage() {
    const sitemapData = [
        {
            title: "Navigation",
            icon: <Home className="w-5 h-5" />,
            links: [
                { label: "Home", href: "/" },
                { label: "About Us", href: "/#about" },
                { label: "Infrastructure", href: "/#infrastructure" },
                { label: "Products", href: "/#products" },
            ]
        },
        {
            title: "Business",
            icon: <Box className="w-5 h-5" />,
            links: [
                { label: "Quality & Compliance", href: "/#quality" },
                { label: "Certifications", href: "/#certifications" },
                { label: "Global Markets", href: "/#markets" },
            ]
        },
        {
            title: "Legal & Info",
            icon: <FileText className="w-5 h-5" />,
            links: [
                { label: "Security", href: "/security" },
                { label: "Cookie Policy", href: "/cookies" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
            ]
        },
        {
            title: "Support",
            icon: <Mail className="w-5 h-5" />,
            links: [
                { label: "FAQ", href: "/#faq" },
                { label: "Contact Us", href: "/#contact" },
            ]
        }
    ];

    return (
        <main className="min-h-screen bg-white pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-4 mb-8 text-charcoal">
                        <Network className="w-10 h-10" />
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">Site Map.</h1>
                    </div>
                    <p className="text-xl text-gray-500 font-light max-w-2xl leading-relaxed">
                        A comprehensive directory of Calix Apparels digital infrastructure. Quickly navigate through our sections and specialized service pages.
                    </p>
                </motion.div>

                {/* Quick Access */}
                <section className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Link href="/#products" className="group p-10 border border-gray-100 hover:shadow-xl transition-all">
                        <Box className="w-8 h-8 text-charcoal mb-4 group-hover:scale-110 transition" />
                        <h3 className="font-bold text-lg mb-2">Product Catalogue</h3>
                        <p className="text-sm text-gray-500">
                            Browse our export-quality apparel collections and manufacturing capabilities.
                        </p>
                    </Link>

                    <Link href="/#certifications" className="group p-10 border border-gray-100 hover:shadow-xl transition-all">
                        <FileText className="w-8 h-8 text-charcoal mb-4 group-hover:scale-110 transition" />
                        <h3 className="font-bold text-lg mb-2">Certifications</h3>
                        <p className="text-sm text-gray-500">
                            View our compliance, sustainability, and international certifications.
                        </p>
                    </Link>

                    <Link href="/#contact" className="group p-10 border border-gray-100 hover:shadow-xl transition-all">
                        <Mail className="w-8 h-8 text-charcoal mb-4 group-hover:scale-110 transition" />
                        <h3 className="font-bold text-lg mb-2">Business Enquiries</h3>
                        <p className="text-sm text-gray-500">
                            Connect with our export and sourcing team for partnership opportunities.
                        </p>
                    </Link>
                </section>



                {/* Company Snapshot */}
                <section className="mt-32 p-16 bg-gray-50 border border-gray-100">
                    <h2 className="text-3xl font-bold tracking-tight mb-6 text-charcoal">
                        Calix Apparels at a Glance
                    </h2>
                    <p className="text-gray-600 max-w-3xl leading-relaxed mb-10">
                        Established in Tiruppur, India, Calix Apparels is a vertically integrated
                        garment manufacturer delivering ethically produced, export-grade apparel
                        to global brands. Our operations combine scale, quality, and compliance
                        to meet international standards.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <p className="text-3xl font-bold text-charcoal">20+</p>
                            <p className="text-xs uppercase tracking-widest text-gray-500 mt-2">Years Experience</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-charcoal">35+</p>
                            <p className="text-xs uppercase tracking-widest text-gray-500 mt-2">Export Markets</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-charcoal">500K+</p>
                            <p className="text-xs uppercase tracking-widest text-gray-500 mt-2">Monthly Capacity</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-charcoal">100%</p>
                            <p className="text-xs uppercase tracking-widest text-gray-500 mt-2">Ethical Production</p>
                        </div>
                    </div>
                </section>


                {/* Manufacturing Focus */}
                <section className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="text-center p-10 border border-gray-100">
                        <Factory className="w-10 h-10 mx-auto mb-4 text-charcoal" />
                        <h3 className="font-bold mb-2">In-House Production</h3>
                        <p className="text-sm text-gray-500">
                            Complete control from fabric sourcing to finishing ensures consistent quality.
                        </p>
                    </div>

                    <div className="text-center p-10 border border-gray-100">
                        <ShieldCheck className="w-10 h-10 mx-auto mb-4 text-charcoal" />
                        <h3 className="font-bold mb-2">Compliance First</h3>
                        <p className="text-sm text-gray-500">
                            Fully audited facilities meeting global social and environmental standards.
                        </p>
                    </div>

                    <div className="text-center p-10 border border-gray-100">
                        <Globe2 className="w-10 h-10 mx-auto mb-4 text-charcoal" />
                        <h3 className="font-bold mb-2">Global Supply Chain</h3>
                        <p className="text-sm text-gray-500">
                            Reliable exports supporting brands across Europe, USA, and Asia.
                        </p>
                    </div>
                </section>


                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-32 p-16 bg-gray-50 border border-gray-100 text-center"
                >
                    <h2 className="text-2xl font-bold text-charcoal mb-4">Can't find what you're looking for?</h2>
                    <p className="text-gray-500 font-light mb-8 max-w-xl mx-auto">
                        Our team is here to assist you with any specific queries regarding our manufacturing capabilities or global supply chain solutions.
                    </p>
                    <Link
                        href="/#contact"
                        className="inline-block px-10 py-4 bg-charcoal text-white text-xs font-bold tracking-widest uppercase hover:bg-gray-800 transition-all rounded-sm"
                    >
                        Get In Touch
                    </Link>
                </motion.div>
            </div>
        </main>
    );
}
