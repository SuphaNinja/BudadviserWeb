import { useSearchParams } from "react-router-dom";
import { products } from "../data/Products";

import { ShopHeader } from "../components/shop/ShopHeader";
import { ProductGrid } from "../components/shop/ProductGrid";
import { Header } from "../components/home/Header";
import { Footer } from "../components/home/Footer";

export function Shop() {
    const [searchParams] = useSearchParams();
    const category = searchParams.get("category");

    const filteredProducts = products.filter((product) => {
        if (!category) return true;
        return product.mainCategory === category;
    });

    return (
        <div className="bg-neutral-950 min-h-screen text-white">
            <Header />
            <ShopHeader />

            {/* PASS FILTERED PRODUCTS HERE */}
            <ProductGrid products={filteredProducts} />

            <Footer />
        </div>
    );
}
