import ProductPageDetail from "@/features/product/ProductPageDetail";

export default async function Page({ params }) {
    const { id } = await params;
    return <ProductPageDetail id={id} />;
}