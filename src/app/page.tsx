import CardList from "@/components/CardList/CardList";
import Card from "@/components/Card/Card";
import Hero from "@/components/Hero/Hero";
import {products} from "@/mocks/prducts"

const page = () => {
  const featuredProducts = products.slice(0, 3);
  return (
    <>
      <Hero />
      <main className="container">
        <CardList>
          {featuredProducts.map((product, i)=>(
            <Card product={product} key={i} />
          ))}
        </CardList>
      </main>
    </>
  )
}

export default page;
