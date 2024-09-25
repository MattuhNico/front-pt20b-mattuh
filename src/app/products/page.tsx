"use client";

import Card from "@/components/Card/Card";
import CardList from "@/components/CardList/CardList";
import { IProduct } from "@/interfaces/product";
import { getProductsService } from "@/services/productsService";
import { useEffect, useState } from "react";

const PageHome: React.FC = () => {
  const [data, setData] = useState<IProduct[]>([]);
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = `${process.env.NEXT_PUBLIC_API_URL}/products`;
        const products = await getProductsService(url);
        setData(products);
        setHasError(false);
      } catch (error) {
        setHasError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (hasError) {
    return <p>Error loading products. Please try again later.</p>;
  }

  return (
    <main className="container">
      <CardList>
        {data.map((product: IProduct, i: number) => (
          <Card key={i} product={product} />
        ))}
      </CardList>
    </main>
  );
};

export default PageHome;
