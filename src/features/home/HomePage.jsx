import Footer from "@/components/layout/Footer";
import Hero from "@/features/home/components/Hero";
import WhyWeFight from "@/features/home/components/WhyWeFight";
import ProductCarousel from "@/features/home/components/TopProductCard";
import AthleteSpotlight from "@/features/home/components/AthleteSpotlight";

import { getTopRatedProducts } from "@/lib/api/productsApi";

export default async function Home() {

  const { products, error } = await getTopRatedProducts();

  return (
    <>
      <main>
        <Hero />
        <WhyWeFight />
        <ProductCarousel topRatedProducts={products} error={error} />
        <AthleteSpotlight />
      </main>
      <Footer />
    </>
  );
}