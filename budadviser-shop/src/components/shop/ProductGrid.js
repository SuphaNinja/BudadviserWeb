import { ProductCard } from "./ProductCard";

export function ProductGrid({ products }) {
    return (
        <section className="px-4 py-20">

            <div className="max-w-6xl mx-auto">

                {products.length === 0 ? (
                    <div className="text-center text-gray-400 py-20">
                        No products found in this category.
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                )}

            </div>

        </section>
    );
}
