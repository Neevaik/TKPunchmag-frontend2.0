"use client";

import { useRef, useState } from "react";
import { MOCK_PRODUCTS } from "@/lib/mockData";
import ProductSection from "@/features/shop/components/ProductSection";
import ErrorState from "@/components/ui/ErrorState";

export default function ProductCarousel({ topRatedProducts, error }) {

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;

    if (!container) return;

    const scrollAmount = 320;

    container.scrollBy({
      left:
        direction === "left"
          ? -scrollAmount
          : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="border-y border-border-dark bg-[#120c0c] py-12">
      <div className="mb-8 flex items-center justify-between px-4 md:px-10 lg:px-40">
        <h2 className="flex items-center gap-3 text-2xl font-black uppercase tracking-tighter text-white md:text-3xl">
          <span className="material-symbols-outlined text-primary">workspace_premium</span>
          Top Contenders
        </h2>
      </div>

      {error ? (
        <ErrorState title="Impossible de charger les produits" message="Une erreur est survenue lors de la récupération des produits." />) : (
        <ProductSection topRatedProducts={topRatedProducts} />
      )}
    </section>
  );
}