'use client'
import { useEffect, useState } from "react"
import CardList from "../CardList/CardList";
import Card from "../Card/Card";
import { IProduct } from "@/interfaces/product";
import { products } from "@/mocks/prducts";

const ClientProducts = () => {
    const [data, setData] = useState<IProduct[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(()=>{
        setIsLoading(true);
        setTimeout(()=>{
            setData(products);
            setIsLoading(false);
            setHasError(false);
        }, 2000);
    }, []);

    if(isLoading) return <h1>Loading...</h1>
    if(hasError) return <h1>Ups!</h1>

  return (
    <CardList>
      {data.map((product, i) => (
        <Card key={i} product={product}></Card>
      ))}
    </CardList>
  );
}

export default ClientProducts