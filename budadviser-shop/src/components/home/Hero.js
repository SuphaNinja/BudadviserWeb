import { Link } from "react-router-dom";
import heroBanner from "../../assets/HERO.png";

export function Hero() {
    return (
        <section className="relative w-full min-h-[85vh] sm:min-h-[90vh] overflow-hidden">

            {/* Background Image */}
            <img
                src={heroBanner}        
                alt="24/7 Weed Delivery in Pattaya"
                className="absolute inset-0 w-full h-full object-cover scale-105"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/95"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-20 sm:py-0 min-h-[85vh] sm:min-h-[90vh]">

                {/* Headline */}
                <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight drop-shadow-xl max-w-3xl">
                    24/7 Weed Delivery in Pattaya
                </h1>

                {/* Subheadline */}
                <p className="mt-5 text-lg sm:text-xl text-green-400 font-semibold">
                    Order Online • Fast Delivery • Discreet Service
                </p>

                {/* Supporting Text */}
                <p className="mt-4 text-sm sm:text-base text-gray-300 max-w-md leading-relaxed">
                    Browse our premium cannabis selection, add products to your cart,
                    and send your order for confirmation via WhatsApp.
                    We deliver anywhere in Pattaya — day or night.
                </p>

                {/* CTA */}
                <div className="mt-10 w-full max-w-sm">

                    <Link
                        to="/shop"
                        className="block w-full bg-green-600 hover:bg-green-500 text-white font-bold py-4 rounded-full shadow-xl shadow-green-600/20 transition-all duration-300 hover:scale-105 text-lg"
                    >
                        🛒 Browse Menu
                    </Link>

                </div>

                {/* Trust Line */}
                <div className="mt-8 text-xs sm:text-sm text-gray-400 space-y-1">
                    <p>🚚 Delivery Available 24/7 in Pattaya</p>
                    <p>🏪 Lounge Open Daily 12:00 – 00:00</p>
                </div>

            </div>
        </section>
    );
}
