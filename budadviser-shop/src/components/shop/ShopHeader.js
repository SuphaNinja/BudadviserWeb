import { useSearchParams } from "react-router-dom";

export function ShopHeader() {
    const [searchParams, setSearchParams] = useSearchParams();

    const currentCategory = searchParams.get("category") || "all";

    const handleCategoryChange = (category) => {
        if (category === "all") {
            setSearchParams({});
        } else {
            setSearchParams({ category });
        }
    };

    const baseStyle =
        "px-5 py-2 rounded-full text-sm font-semibold transition";

    const activeStyle =
        "bg-green-600 text-white shadow-lg shadow-green-600/20";

    const inactiveStyle =
        "bg-white/10 text-white hover:bg-white/20";

    return (
        <section className="px-4 pt-32 pb-16 border-b border-white/5 bg-neutral-950">

            <div className="max-w-6xl mx-auto text-center">

                <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
                    Premium Weed & Accessories in Pattaya
                </h1>

                <p className="mt-4 text-green-400 font-semibold text-lg">
                    Order Online • 24/7 Delivery • Discreet Service
                </p>

                <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                    Browse top-quality cannabis strains including Sativa, Indica and Hybrid,
                    plus exclusive Budadviser products and premium accessories.
                    Add to cart and send your order directly via WhatsApp.
                </p>

                {/* Category Nav */}
                <div className="mt-10 flex flex-wrap justify-center gap-3">

                    <button
                        onClick={() => handleCategoryChange("all")}
                        className={`${baseStyle} ${currentCategory === "all" ? activeStyle : inactiveStyle
                            }`}
                    >
                        All Products
                    </button>

                    <button
                        onClick={() => handleCategoryChange("weed")}
                        className={`${baseStyle} ${currentCategory === "weed" ? activeStyle : inactiveStyle
                            }`}
                    >
                        Weed
                    </button>

                    <button
                        onClick={() => handleCategoryChange("accessories")}
                        className={`${baseStyle} ${currentCategory === "accessories" ? activeStyle : inactiveStyle
                            }`}
                    >
                        Accessories
                    </button>

                    <button
                        onClick={() => handleCategoryChange("exclusive")}
                        className={`${baseStyle} ${currentCategory === "exclusive" ? activeStyle : inactiveStyle
                            }`}
                    >
                        Exclusives
                    </button>

                </div>

            </div>
        </section>
    );
}
