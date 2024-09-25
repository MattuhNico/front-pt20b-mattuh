import Button from "@/components/Button/Button";
import BuyButton from "@/components/BuyButton/BuyButton";
import { getProductById } from "@/services/productsService";
import Image from "next/image";
import { notFound } from "next/navigation";

const page = async ({ params }: { params: { id: string } }) => {
  const url = `${process.env.API_URL}/products`;
 const product = await getProductById(url, params.id);

  if (product === undefined) {
    notFound();
  }
  return (
    <main className="container text-quaternary">
      <h1>{product.name}</h1>
      <div className="flex gap-10">
        <Image
          src={product.image}
          alt={product.name}
          width={320}
          height={320}
          className="rounded-full"
        />
        <div className="flex flex-col gap-4">
          <p className="text-2xl font-bold text-end">US${product.price}</p>
        <div className="flex justify-between items-center">
          <p className="text-end font-bold pr-1 text-tertiary">{product.stock} En Stock</p>
          <BuyButton product={product}/>
        </div>
        <p className="py-4 text-xl">{product.description}</p>
      </div>
      </div>
    </main>
  );
};

export default page;
