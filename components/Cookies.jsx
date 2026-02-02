"use client";

import { motion } from "framer-motion";
import { Cookie, Info, Settings } from "lucide-react";

const Cookies = () => {
    return (
        <section id="cookies" className="py-24 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <div className="flex items-center gap-3 text-xs font-bold tracking-[0.3em] text-gray-400 mb-6 uppercase">
                            <Cookie size={16} /> Privacy Preference
                        </div>
                        <h3 className="heading-m text-charcoal mb-8">
                            How we use cookies to <br /> improve your experience
                        </h3>
                        <div className="space-y-6 text-gray-500 font-light leading-relaxed">
                            <p>
                                We prioritize your privacy. Calix Apparels uses essential cookies to ensure our website functions correctly and analytical cookies to understand how you interact with our platform.
                            </p>
                            <p>
                                By continuing to browse, you agree to our use of cookies as outlined in our Global Privacy Policy. You can manage your preferences or opt-out of non-essential cookies at any time.
                            </p>
                        </div>
                        <div className="flex gap-4 mt-10">
                            <button className="bg-charcoal text-white px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-black transition-all">
                                ACCEPT ALL
                            </button>
                            <button className="border border-gray-200 text-charcoal px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-gray-50 transition-all">
                                MANAGE SETTINGS
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {[
                            { title: "Essential", desc: "Required for site functionality and security.", icon: <Info size={20} /> },
                            { title: "Analytics", desc: "Helps us improve our services and layout.", icon: <Settings size={20} /> }
                        ].map((item, idx) => (
                            <div key={idx} className="p-8 bg-gray-50 border border-gray-100">
                                <div className="text-charcoal mb-4">{item.icon}</div>
                                <h4 className="text-sm font-bold text-charcoal uppercase tracking-widest mb-2">{item.title}</h4>
                                <p className="text-xs text-gray-400 leading-relaxed font-medium">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cookies;
