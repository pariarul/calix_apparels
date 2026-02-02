"use client";

import { motion } from "framer-motion";
import { Cookie, Info, ShieldCheck, Settings } from "lucide-react";

export default function CookiesPage() {
    const cookieTypes = [
        {
            icon: <ShieldCheck className="w-8 h-8 text-charcoal" />,
            title: "Essential Cookies",
            description: "These are necessary for the website to function and cannot be switched off. They are usually set in response to actions like logging in or filling forms."
        },
        {
            icon: <Info className="w-8 h-8 text-charcoal" />,
            title: "Performance Cookies",
            description: "These allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us know which pages are popular."
        },
        {
            icon: <Settings className="w-8 h-8 text-charcoal" />,
            title: "Functional Cookies",
            description: "These enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers."
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
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-gray-50 rounded-full">
                            <Cookie className="w-8 h-8 text-charcoal" />
                        </div>
                        <h1 className="text-sm font-bold tracking-[0.3em] uppercase text-gray-500">Cookie Policy</h1>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-charcoal mb-8">
                        Digital <span className="text-gray-400">Transparency.</span>
                    </h2>
                    <p className="text-xl text-gray-500 font-light leading-relaxed">
                        We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By using our website, you consent to our use of cookies in accordance with this policy.
                    </p>
                </motion.div>

                <div className="space-y-12">
                    {cookieTypes.map((type, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col md:flex-row gap-8 p-12 bg-gray-50 border border-gray-100 hover:border-charcoal transition-all duration-500"
                        >
                            <div className="flex-shrink-0">
                                {type.icon}
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-charcoal mb-4">{type.title}</h3>
                                <p className="text-gray-500 font-light leading-relaxed max-w-4xl">
                                    {type.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mt-24 max-w-4xl border-l border-gray-100 pl-12"
                >
                    <h3 className="text-2xl font-bold text-charcoal mb-6">Managing Your Preferences</h3>
                    <p className="text-gray-500 font-light leading-relaxed mb-8">
                        Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set, visit <a href="https://allaboutcookies.org" className="text-charcoal underline hover:text-gray-600 transition-colors">allaboutcookies.org</a>.
                    </p>
                    <div className="p-8 bg-gray-50 border border-dashed border-gray-300">
                        <h4 className="text-sm font-bold text-charcoal mb-2 uppercase tracking-widest">Last Updated</h4>
                        <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">February 02, 2026</p>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
