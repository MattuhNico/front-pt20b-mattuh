"use client"

import { useContext } from "react";
import Button from "../Button/Button";
import { AuthContext } from "@/contexts/authContext";
import { useRouter } from "next/navigation";
import { IProduct } from "@/interfaces/product";

interface BuyButtonProps {
  product: IProduct;
}
const BuyButton = ({product}:BuyButtonProps) => {
  const {user} = useContext(AuthContext)
  const router = useRouter();
    const handleBuy = () => { 
        if(!user?.login) {
          router.push('/login')
        } else {
          const cart = JSON.parse(localStorage.getItem("cart") || "[]")
          if(!cart.some((p:IProduct)=>p.id === product?.id)){
            cart.push(product)
            localStorage.setItem("cart", JSON.stringify(cart));
            alert(`${product?.name} haz agregado este producto en tu carrito`)
          } else {
            alert(`${product?.name} este producto ya está en tu carrito`)
          }
        }
        
     }
  return (
    <button className="bg-secondary" onClick={handleBuy}>Comprar</button>
  )
}

export default BuyButton