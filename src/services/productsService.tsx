import { IProduct } from "@/interfaces/product";

export const getProductsService = async (url: string): Promise<IProduct[]> => {
  try {
    const response = await fetch(url, { next: { revalidate: 0 } });

    if (!response.ok) {
      throw new Error(`Error fetching products: ${response.statusText}`);
    }

    const products: IProduct[] = await response.json();
    return products;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw error; // Rethrow the error so it can be handled by the caller
  }
};

export const getProductById = async (
  url: string,
  id: string
): Promise<IProduct | undefined> => {
  try {
    const products = await getProductsService(url);
    return products.find((item: IProduct) => item.id.toString() === id);
  } catch (error) {
    console.error("Failed to fetch product by ID:", error);
    return undefined;
  }
};
