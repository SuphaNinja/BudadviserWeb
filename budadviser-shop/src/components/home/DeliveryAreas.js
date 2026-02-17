import { Link } from "react-router-dom";

export function DeliveryAreas() {
    return (
        <section className="bg-neutral-950 px-4 py-20 border-t border-white/5">

            <div className="max-w-5xl mx-auto text-center">

                {/* Header */}
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
                    Delivery Areas in Pattaya
                </h3>

                <div className="mt-4 h-[2px] w-20 bg-green-500 mx-auto rounded-full"></div>

                {/* SEO Paragraph */}
                <p className="mt-6 text-gray-400 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
                    We provide fast and discreet weed delivery across Pattaya and surrounding areas.
                    Whether you’re staying in a hotel, condo, or private residence,
                    our 24/7 cannabis delivery service covers Central Pattaya, South Pattaya,
                    North Pattaya, Jomtien, Pratumnak Hill, Naklua, and East Pattaya.
                </p>

                <p className="mt-4 text-gray-500 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
                    Looking for weed delivery in Jomtien? Cannabis delivery in Pratumnak?
                    Late-night weed delivery in Central Pattaya? We’ve got you covered —
                    day or night.
                </p>

                {/* CTA */}
                <div className="mt-10">
                    <Link
                        to="/shop"
                        className="inline-block bg-green-600 hover:bg-green-500 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
                    >
                        Browse Menu & Order
                    </Link>
                </div>

            </div>

        </section>
    );
}
