

export default function ProductPageDetail({ product }) {
    return (
        <main className="min-h-screen bg-background-dark px-4 py-10 text-white md:px-10">
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col gap-8 lg:flex-row">
                    <div className="flex-1">
                        <img src={product.image} alt={product.name} className="h-full w-full object-cover rounded-2xl" />
                    </div>
                    <div className="flex-1">
                        <h1 className="text-3xl font-bold">{product.name}</h1>
                        <p className="text-xl font-semibold">${product.price.toFixed(2)}</p>
                        <p className="mt-4 text-gray-300">{product.description}</p>
                    </div>
                </div>
            </div>
        </main>
    );
}