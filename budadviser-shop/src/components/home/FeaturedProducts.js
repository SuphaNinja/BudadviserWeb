import { Link } from "react-router-dom";
import { products } from "../../data/Products";

export function FeaturedProducts() {
    return (
        <section className="bg-neutral-950 px-4 py-16">

            {/* Section Header */}
            <div className="text-center mb-12">
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
                    Featured Buds
                </h3>
                <p className="text-green-400 mt-3 text-sm sm:text-base">
                    Our most loved premium strains
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {products.slice(0, 3).map((p, i) => (
                    <div
                        key={i}
                        className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-green-500/20"
                    >
                        {/* Product Image */}
                        <div className="h-52 overflow-hidden">
                            <img
                                src={p.image}
                                alt={p.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        {/* Card Content */}
                        <div className="p-6">

                            {/* Tag */}
                            <span className="inline-block text-xs bg-green-600/20 text-green-400 px-3 py-1 rounded-full mb-4">
                                {p.tag}
                            </span>

                            {/* Name */}
                            <h4 className="text-2xl font-bold text-white">
                                {p.name}
                            </h4>

                            {/* Strength */}
                            <p className="text-gray-400 mt-2">
                                {p.strength}
                            </p>

                            {/* Price */}
                            <p className="text-yellow-400 font-bold mt-4 text-lg">
                                {p.price}
                            </p>

                            {/* CTA */}
                            <button className="mt-6 w-full bg-green-600 hover:bg-green-500 text-white font-semibold py-3 rounded-xl transition-all duration-300">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-14">
                <Link
                    to="/shop"
                    className="inline-block bg-red-600 hover:bg-red-500 text-white font-bold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
                >
                    View Full Menu
                </Link>
            </div>

        </section>
    );
}
