"use client";

import { useMemo, useState } from "react";
import { MOCK_PRODUCTS } from "@/lib/mockData";
import ProductCard from "@/components/ui/ProductCard";

export default function CategoryPage({ slug }) {
    const [selectedBrand, setSelectedBrand] = useState("all");
    const [sortBy, setSortBy] = useState("featured");

    const categoryProducts = useMemo(() => {
        return MOCK_PRODUCTS.filter(
            (product) => product.category === slug
        );
    }, [slug]);

    const brands = [
        ...new Set(categoryProducts.map((product) => product.brand)),
    ];

    const filteredProducts = useMemo(() => {
        let products = [...categoryProducts];

        if (selectedBrand !== "all") {
            products = products.filter(
                (product) => product.brand === selectedBrand
            );
        }

        switch (sortBy) {
            case "price-low":
                products.sort((a, b) => a.price - b.price);
                break;

            case "price-high":
                products.sort((a, b) => b.price - a.price);
                break;

            case "rating":
                products.sort((a, b) => b.rating - a.rating);
                break;

            default:
                break;
        }

        return products;
    }, [categoryProducts, selectedBrand, sortBy]);

    return (
        <main className="min-h-screen bg-background-dark px-4 py-10 text-white md:px-10">
            <div className="mx-auto max-w-7xl">
                <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p className="text-sm uppercase tracking-widest text-primary">
                            Category
                        </p>

                        <h1 className="text-4xl font-black uppercase">
                            {slug.replace("-", " ")}
                        </h1>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        <select
                            value={selectedBrand}
                            onChange={(e) => setSelectedBrand(e.target.value)}
                            className="rounded-lg border border-border-dark bg-card-dark px-4 py-2 text-sm"
                        >
                            <option value="all">Toutes les marques</option>

                            {brands.map((brand) => (
                                <option key={brand} value={brand}>
                                    {brand}
                                </option>
                            ))}
                        </select>

                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="rounded-lg border border-border-dark bg-card-dark px-4 py-2 text-sm"
                        >
                            <option value="featured">Mis en avant</option>
                            <option value="price-low">Prix croissant</option>
                            <option value="price-high">Prix décroissant</option>
                            <option value="rating">Mieux notés</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                    {filteredProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            title={product.title}
                            subtitle={product.subtitle}
                            price={product.price}
                            rating={product.rating}
                            badge={product.badge}
                            brand={product.brand}
                            image={product.image}
                            description={product.description}
                        />
                    ))}
                </div>

                {filteredProducts.length === 0 && (
                    <div className="mt-20 text-center">
                        <h2 className="text-2xl font-bold">
                            Aucun produit trouvé
                        </h2>

                        <p className="mt-2 text-text-muted">
                            Essaye de modifier les filtres.
                        </p>
                    </div>
                )}
            </div>
        </main>
    );
}