"use client"

import { AuthContext } from "@/contexts/authContext";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import UserWidget from "../UserWidget/UserWidget";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const {user, logout} = useContext(AuthContext)

  function getMenuClasses() {
    let menuClasses = [];

    if (isOpen) {
      menuClasses = [
        "flex",
        "absolute",
        "top-[65px]",
        "bg-gray-800",
        "w-full",
        "p-4",
        "left-0",
        "gap-8",
        "flex-col"
      ];
    } else {
      menuClasses.push("hidden", "md:flex");
    }
    return menuClasses.join(" ");
  }

  return (
    <nav className="flex-nowrap fixed flex top-0 z-999 w-full text-white sm:p-6 md:flex md:justify-between bg-primary">
      <section className="container mx-auto flex justify-between items-center">
        <Link href={"/"}>
          {/* <Image
          src={
            "https://dcdn.mitiendanube.com/stores/004/155/320/themes/common/logo-1213684924-1705949203-6ac99d2baf962531c0a740e066c0b0fe1705949203-320-0.webp"
          }
          alt="Logo Casa Escalada"
          width={120}
          height={120}
        ></Image> */}
          MoviAir
        </Link>
        <div className={getMenuClasses()}>
          <Link href="/" className="mx-2 hover:text-tertiary">
            Inicio
          </Link>
          <Link href="/us" className="mx-2 hover:text-tertiary">
            Nosotros
          </Link>
          <Link href="/products" className="mx-2 hover:text-tertiary">
            Productos
          </Link>
          <Link href="/contact" className="mx-2 hover:text-tertiary">
            Contacto
          </Link>
  
          <Link href="/login" className="mx-2 hover:text-tertiary">
            Iniciar Sesión
          </Link>
          <Link href="/cart" className="mx-2 hover:text-tertiary">
            Carrito
          </Link>

          <UserWidget />
        </div>
        <div className="md:hidden flex items-center bg-secondary">
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >

          </button>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
