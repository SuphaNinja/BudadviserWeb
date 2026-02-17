import { Link } from "react-router-dom";

export function BudadviserExclusives() {
    const exclusives = [
        {
            name: "Ultra King Size Joint (20g)",
            description: "Massive premium hand-rolled joint. Perfect for special occasions.",
            price: "From ฿XXXX",
            badge: "🔥 Only at Budadviser",
        },
        {
            name: "Budadviser Premium Grinder",
            description: "High-quality metal grinder with custom Budadviser engraving.",
            price: "฿XXXX",
            badge: "⭐ Exclusive Merch",
        },
        {
            name: "VIP Party Pack",
            description: "Curated selection of premium strains for group sessions.",
            price: "From ฿XXXX",
            badge: "🎉 Limited Edition",
        },
    ];

    return (
        <section className="bg-neutral-950 px-4 py-28 border-t border-white/5">

            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="text-center mb-24">
                    <h3 className="text-3xl sm:text-5xl font-extrabold text-white">
                        Budadviser Exclusives
                    </h3>

                    <div className="mt-5 h-[2px] w-24 bg-gradient-to-r from-transparent via-green-500 to-transparent mx-auto"></div>

                    <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                        Unique products you won’t find anywhere else in Pattaya.
                        Designed for true enthusiasts.
                    </p>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

                    {exclusives.map((product, i) => (
                        <div
                            key={i}
                            className="group bg-white/[0.04] border border-white/10 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-green-500/40 hover:shadow-xl hover:shadow-green-500/10"
                        >
                            {/* Badge */}
                            <span className="inline-block text-xs bg-green-600/20 text-green-400 px-3 py-1 rounded-full mb-5">
                                {product.badge}
                            </span>

                            {/* Product Name */}
                            <h4 className="text-white text-2xl font-semibold">
                                {product.name}
                            </h4>

                            {/* Description */}
                            <p className="text-gray-400 text-sm mt-4 leading-relaxed">
                                {product.description}
                            </p>

                            {/* Price */}
                            <p className="text-yellow-400 font-bold mt-6 text-lg">
                                {product.price}
                            </p>

                            {/* CTA */}
                            <Link
                                to="/shop"
                                className="mt-6 inline-block w-full text-center bg-green-600 hover:bg-green-500 text-white font-semibold py-3 rounded-xl transition-all duration-300 group-hover:scale-[1.02]"
                            >
                                View Product
                            </Link>
                        </div>
                    ))}

                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-20">
                    <Link
                        to="/shop"
                        className="inline-block bg-green-600 hover:bg-green-500 text-white font-bold px-12 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-green-600/20"
                    >
                        Explore Full Collection
                    </Link>
                </div>

            </div>

        </section>
    );
}
