export function Reviews() {
    const reviews = [
        {
            name: "Michael T.",
            location: "UK Tourist",
            text: "Amazing quality and super fast delivery to my hotel in Central Pattaya. Very professional and discreet service. Highly recommend!",
        },
        {
            name: "Anna L.",
            location: "Bangkok Visitor",
            text: "Best weed delivery in Pattaya. Ordered late at night and got it within 40 minutes. Smooth experience from start to finish.",
        },
        {
            name: "David R.",
            location: "Jomtien",
            text: "Great strains and fair prices. The ordering process online was simple and they confirmed everything quickly via WhatsApp.",
        },
        {
            name: "Chris M.",
            location: "Australia",
            text: "Visited the lounge during the day and also tried delivery. Both were top quality. Definitely my go-to spot in Pattaya.",
        },
    ];

    return (
        <section className="bg-neutral-950 px-4 py-28 border-t border-white/5">

            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="text-center mb-20">
                    <h3 className="text-3xl sm:text-5xl font-extrabold text-white">
                        Trusted by Customers Across Pattaya
                    </h3>

                    <div className="mt-5 h-[2px] w-24 bg-gradient-to-r from-transparent via-green-500 to-transparent mx-auto"></div>

                    <p className="mt-6 text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                        With over 30 five-star reviews, Budadviser is one of the most trusted
                        weed delivery services in Pattaya.
                    </p>
                </div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

                    {reviews.map((review, i) => (
                        <div
                            key={i}
                            className="bg-white/[0.04] border border-white/10 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:border-green-500/40"
                        >
                            {/* Stars */}
                            <div className="text-green-400 text-lg mb-4">
                                ⭐⭐⭐⭐⭐
                            </div>

                            {/* Review Text */}
                            <p className="text-gray-300 text-sm leading-relaxed">
                                “{review.text}”
                            </p>

                            {/* Reviewer */}
                            <div className="mt-6">
                                <p className="text-white font-semibold">
                                    {review.name}
                                </p>
                                <p className="text-gray-500 text-xs">
                                    {review.location} • Google Review
                                </p>
                            </div>
                        </div>
                    ))}

                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-20">
                    <a
                        href="https://g.page/r/YOUR-GOOGLE-LINK"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-green-600 hover:bg-green-500 text-white font-semibold px-10 py-3 rounded-full transition-all duration-300 hover:scale-105"
                    >
                        View All Reviews on Google
                    </a>
                </div>

            </div>

        </section>
    );
}
