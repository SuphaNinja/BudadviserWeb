export function WhyChooseUs() {
    return (
        <section className="bg-neutral-950 px-4 py-28 border-t border-white/5">

            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="text-center mb-24">
                    <h3 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
                        Why Choose Budadviser
                    </h3>

                    <div className="mt-5 h-[2px] w-24 bg-gradient-to-r from-transparent via-green-500 to-transparent mx-auto"></div>

                    <p className="mt-8 text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                        We are more than just delivery. Budadviser combines a physical lounge in Pattaya,
                        premium cannabis selection, and professional 24/7 delivery service —
                        giving you reliability, quality, and peace of mind every time you order.
                    </p>
                </div>

                {/* Trust Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

                    {/* Card */}
                    <div className="group bg-white/[0.04] border border-white/10 rounded-3xl p-10 transition-all duration-300 hover:border-green-500/40 hover:-translate-y-1">
                        <div className="text-5xl mb-6">🌿</div>
                        <h4 className="text-white font-semibold text-2xl">
                            Premium, Carefully Selected Strains
                        </h4>
                        <p className="text-gray-400 text-sm mt-4 leading-relaxed">
                            We focus on quality over quantity — offering fresh,
                            potent, and well-curated strains for every preference.
                        </p>
                    </div>

                    {/* Card */}
                    <div className="group bg-white/[0.04] border border-white/10 rounded-3xl p-10 transition-all duration-300 hover:border-green-500/40 hover:-translate-y-1">
                        <div className="text-5xl mb-6">🏪</div>
                        <h4 className="text-white font-semibold text-2xl">
                            Established Lounge in Pattaya
                        </h4>
                        <p className="text-gray-400 text-sm mt-4 leading-relaxed">
                            Visit us daily from 12:00 – 00:00 at our physical location.
                            We operate professionally and transparently.
                        </p>
                    </div>

                    {/* Card */}
                    <div className="group bg-white/[0.04] border border-white/10 rounded-3xl p-10 transition-all duration-300 hover:border-green-500/40 hover:-translate-y-1">
                        <div className="text-5xl mb-6">🚚</div>
                        <h4 className="text-white font-semibold text-2xl">
                            Reliable 24/7 Delivery
                        </h4>
                        <p className="text-gray-400 text-sm mt-4 leading-relaxed">
                            No matter the time, we deliver across Pattaya quickly
                            and efficiently with responsive support.
                        </p>
                    </div>

                    {/* Card */}
                    <div className="group bg-white/[0.04] border border-white/10 rounded-3xl p-10 transition-all duration-300 hover:border-green-500/40 hover:-translate-y-1">
                        <div className="text-5xl mb-6">🔒</div>
                        <h4 className="text-white font-semibold text-2xl">
                            Safe, Discreet & Professional
                        </h4>
                        <p className="text-gray-400 text-sm mt-4 leading-relaxed">
                            Your privacy matters. Orders are handled discreetly,
                            securely, and with full professionalism.
                        </p>
                    </div>

                </div>

                {/* Credibility Strip */}
                <div className="mt-24 border-t border-white/5 pt-10 text-center">
                    <p className="text-gray-500 text-sm sm:text-base">
                        Serving locals and tourists across Pattaya with trusted cannabis delivery.
                    </p>
                </div>

            </div>

        </section>
    );
}
