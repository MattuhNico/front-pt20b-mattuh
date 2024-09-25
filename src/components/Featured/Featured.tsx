import { products } from "@/mocks/prducts"
import Card from "../Card/Card";
import style from "./Featured.module.css"
import Grid from "../Grid/Grid";

const Featured = () => {
    const featured = products.slice(0, 3);
  return (
    <Grid>
        {featured.map((f, i)=> (
            <Card key={i} product={f}/>
        ))}
    </Grid>
  )
}

export default Featured