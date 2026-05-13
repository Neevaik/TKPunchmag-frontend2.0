export async function getTopRatedProducts() {
    try {
        const response = await fetch("http://localhost:5000/product/top-rated",
            {
                next: { revalidate: 60 },
            }
        );

        const data = await response.json();
        return {
            products: data,
            error: false,
        };
    } catch (error) {
        return {
            products: [],
            error: true,
        };
    }
}