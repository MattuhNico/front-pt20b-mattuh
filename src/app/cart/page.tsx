"use client"

import { AuthContext } from "@/contexts/authContext";
import { IProduct } from "@/interfaces/product";
import { useContext, useState } from "react";

const Page = () => {

  const {user} = useContext(AuthContext)
  const [cart, setCart] = useState(
    typeof window !== "undefined" 
    ? JSON.parse(localStorage.getItem("cart") || "[]") 
    : []);
  

  const handleOrder = () => { 
    const url = process.env.NEXT_PUBLIC_API_URL + "/orders" || "http://localhost:3001/orders";
    const products = cart.map((product:IProduct)=>product.id)
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: user?.token as string,
      },
      body: JSON.stringify({
        userId: JSON.stringify(user?.user.userId),
        products: products,
      }),
    })
      .then((res) =>
        res.json().then((json) => {
          console.log(json);
          localStorage.setItem("cart", JSON.stringify([]));
          setCart([]);
          alert("Pedido finalizado");
        })
      )
      .catch((error) => console.error(error));
   }

  
  return (
    <main className="container">
      <h1>Carrito</h1>
      <div className="flex justify-between items-center">
        <h6 className="">Total productos: {cart.length}</h6>
        <h6>Total U$D: $</h6>
        <button className="bg-secondary text-quaternary p-4 rounded" onClick={handleOrder}>Finalizar orden</button>
      </div>
      <div className="mt-8 flex flex-col gap-2 text-2xl">
        {cart.map((product: IProduct, i: number)=>(<div key={i}>{`${i+1}) ${product.name} (U$D ${product.price})`}</div>))}
      </div>
    </main>
  )
}

export default Page