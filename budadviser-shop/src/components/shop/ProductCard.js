"use client";

import { useState } from "react";
import { addToCart } from "../../lib/cart";

export function ProductCard({ product }) {
    const [quantity, setQuantity] = useState(1);
    const [added, setAdded] = useState(false);

    const isWeed = !!product.pricePerGram;
    const price = product.pricePerGram ?? product.price;

    const handleAddToCart = () => {
        addToCart({
            id: product.id,
            name: product.name,
            category: product.mainCategory,
            unitPrice: price,
            quantity: quantity,
            unitLabel: isWeed ? "g" : "item",
        });

        setAdded(true);
        setTimeout(() => setAdded(false), 1200);
    };

    return (
        <div className="group bg-neutral-900 border border-white/10 rounded-3xl p-6 transition-all duration-300 hover:border-green-500/40 hover:shadow-xl hover:shadow-green-500/10">

            {/* Top Section */}
            <div className="flex justify-between gap-6">

                {/* Left Content */}
                <div className="flex-1">

                    {product.badge && (
                        <span className="inline-block text-xs bg-green-600/20 text-green-400 px-3 py-1 rounded-full mb-3">
                            {product.badge}
                        </span>
                    )}

                    <h3 className="text-xl font-semibold text-white">
                        {product.name}
                    </h3>

                    {product.rating && (
                        <p className="text-yellow-400 text-sm mt-1">
                            ⭐ {product.rating} ({product.reviews})
                        </p>
                    )}

                    {product.mainCategory === "weed" && (
                        <p className="text-sm text-gray-400 mt-2 capitalize">
                            {product.subCategory} • THC {product.thc}% • CBD {product.cbd}%
                        </p>
                    )}
                </div>

                {/* Image */}
                <div className="w-40 flex-shrink-0">
                    <div className="aspect-square rounded-2xl overflow-hidden">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                        />
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-6">

                {product.effects && (
                    <div className="flex flex-wrap gap-2 mb-4">
                        {product.effects.map((effect, i) => (
                            <span
                                key={i}
                                className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded-full"
                            >
                                {effect}
                            </span>
                        ))}
                    </div>
                )}

                <p className="text-gray-400 text-sm leading-relaxed">
                    {product.description}
                </p>

                {/* Price + Quantity + Button */}
                <div className="mt-6 flex items-center justify-between gap-4 flex-wrap">

                    <p className="text-yellow-400 font-bold text-lg">
                        {isWeed ? `฿${price} / g` : `฿${price}`}
                    </p>

                    {/* Quantity Selector */}
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setQuantity(q => Math.max(1, q - 1))}
                            className="bg-white/10 text-white px-3 py-1 rounded-lg"
                        >
                            −
                        </button>

                        <span className="w-6 text-center text-white">
                            {quantity}
                        </span>

                        <button
                            onClick={() => setQuantity(q => q + 1)}
                            className="bg-white/10 text-white px-3 py-1 rounded-lg"
                        >
                            +
                        </button>
                    </div>

                    {/* Add Button */}
                    <button
                        onClick={handleAddToCart}
                        className={`px-6 py-2 rounded-xl font-semibold transition-all duration-300 ${added
                                ? "bg-green-400 text-black"
                                : "bg-green-600 hover:bg-green-500 text-white"
                            }`}
                    >
                        {added ? "Added ✓" : "Add"}
                    </button>

                </div>
            </div>
        </div>
    );
}
