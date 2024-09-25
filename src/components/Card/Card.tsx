import { IProduct } from "@/interfaces/product";
import Link from "next/link";
import Image from "next/image";

interface ProductProps {
  product: IProduct;
}

const Card = ({ product }: ProductProps) => {
  return (
    <Link
      href={`/products/${product.id}`}
      /*className="text-quaternary rounded border-2 border-secondary p-4 hover:bg-secondary"*/
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <Image
        src={product.image}
        alt={product.name}
        width={200}
        height={200}
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
      />
      <div
        /*className="flex justify-between items-center"*/
        className="flex flex-col justify-between p-4 leading-normal"
      >
        <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {product.name}
        </h3>
        <p
          /*className="text-tertiary/50 text-base"*/
          className="mb-3 font-bold text-gray-700 dark:text-tertiary"
        >
          US${product.price}
        </p>
      </div>
    </Link>
  );
};

export default Card;
