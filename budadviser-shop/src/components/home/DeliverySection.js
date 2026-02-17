import { Link } from "react-router-dom";

export function DeliverySection() {
    return (
        <section className="bg-neutral-950 px-4 py-24 border-t border-white/5">

            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="text-center mb-20">
                    <h3 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
                        24/7 Weed Delivery in Pattaya
                    </h3>

                    <div className="mt-4 h-1 w-20 bg-green-500 mx-auto rounded-full"></div>

                    <p className="mt-6 text-green-400 text-lg sm:text-xl font-medium">
                        Order Online • Fast Delivery • Discreet Service
                    </p>

                    <p className="mt-4 text-gray-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
                        Browse our premium cannabis selection online and place your order directly through our webshop.
                        We confirm your order via WhatsApp and deliver anywhere in Pattaya — 24/7.
                    </p>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-20">

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/10">
                        <div className="text-4xl mb-4">🛒</div>
                        <h4 className="text-white font-semibold text-xl">
                            Easy Online Ordering
                        </h4>
                        <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                            Add products to your cart and checkout in seconds.
                        </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/10">
                        <div className="text-4xl mb-4">⏱</div>
                        <h4 className="text-white font-semibold text-xl">
                            30–60 Min Delivery
                        </h4>
                        <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                            Fast delivery across Pattaya — hotels, condos, and homes.
                        </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/10">
                        <div className="text-4xl mb-4">🌙</div>
                        <h4 className="text-white font-semibold text-xl">
                            Open 24/7 Delivery
                        </h4>
                        <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                            Day or night — we are always available for delivery.
                        </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/10">
                        <div className="text-4xl mb-4">🔒</div>
                        <h4 className="text-white font-semibold text-xl">
                            Discreet & Professional
                        </h4>
                        <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                            Private packaging and smooth service every time.
                        </p>
                    </div>

                </div>

                {/* CTA */}
                <div className="text-center">
                    <Link
                        to="/shop"
                        className="inline-block w-full sm:w-auto bg-green-600 hover:bg-green-500 text-white font-bold px-12 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-green-600/20"
                    >
                        Browse Menu & Order Now
                    </Link>

                    <p className="text-gray-500 text-xs sm:text-sm mt-6">
                        Store open 12:00 – 24:00 • Delivery available 24/7
                    </p>
                </div>

            </div>

        </section>
    );
}
