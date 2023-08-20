import { useState, useEffect } from "react"
import { ProductCard } from "../../../components"

export const FeaturedProducts = () => {

  const [ featuredProducts, setFeaturedProducts ] = useState([]);

  useEffect( () => {
    const getFeaturedProducts = async () => {
      const res = await fetch("http://localhost:9090/features");
      const result = await res.json();
      setFeaturedProducts(result.DATA);
    };
    getFeaturedProducts();
  }, [] )

  return (
    <section className="pb-[100px] ">
        <div className="text-3xl font-bold dark:text-gray-200 underline underline-offset-8 text-center my-5">Featured eBooks</div>
        <div className="flex flex-col justify-center sm:flex-row">
            { featuredProducts && featuredProducts.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
    </section>
  )
}
