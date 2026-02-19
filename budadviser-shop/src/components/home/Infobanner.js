// components/home/OrderInfoBanner.jsx
import { Sparkles } from "lucide-react";

export function OrderInfoBanner({ total }) {
    if (!total || total <= 0) return null;

    return (
        <div className="max-w-7xl mx-auto bg-black px-4  pb-2 flex justify-center">
            <div className="flex items-center gap-2 text-green-400 text-sm sm:text-base font-semibold">
                <Sparkles className="w-4 h-4" />
                <span>Limited Time Offer — 20% OFF your whole order!</span>
            </div>
        </div>
    );
}
