import { useSearchParams } from "react-router-dom";
import { useState,useEffect,useRef } from "react";
import { useTitle } from '../../hooks/useTitle';
import { useProductsList } from "../../context";

import { ProductCard } from "../../components"
import { FilterBar } from "./components/FilterBar"

export const ProductsList = () => {

  const [show, setShow] = useState(false);
  const { filteredList } = useProductsList();
  // const dispatchRef = useRef(useProductsList());
  const initialiseListRef = useRef(useProductsList());
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("name") || "";

  // const [ filterObject, setFilterObject ] = useState({
  //   rating:'',
  //   sort:'',
  //   best_seller: false,
  //   in_stock: false
  // });

  useTitle("Products/U-Kart");

  useEffect( () => {
    const fetchProducts = async () => {
      const res = await fetch(`https://u-kart-backend-node.onrender.com/products?name=${searchTerm}`,{method:"GET"});
      const result = await res.json();
      // dispatchRef.current.dispatch({type:"INITIALISE_LIST", payload: {
        // products: result.DATA
    // }})
    initialiseListRef.current.initialiseList(result.DATA);
    }
    fetchProducts();
  }, [searchTerm] )

  return (
    <main className="min-h-[90vh] bg-white dark:bg-gray-800 px-5 relative">
      <section className="max-w-screen-xl mx-auto pb-10">
        <div className="flex flex-row justify-between py-5 mb-5">
          <h1 className="text-3xl font-bold dark:text-gray-200 underline underline-offset-8 ">All eBooks({filteredList.length})</h1>
          <div onClick={()=>setShow(!show)} className="flex flex-col justify-center py-3 px-4 border border-gray-400 rounded-lg bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-300">
            <span className="w-1 h-1 mb-1 rounded-lg bg-black"></span>
            <span className="w-1 h-1 mb-1 rounded-lg bg-black"></span>
            <span className="w-1 h-1 rounded-lg bg-black"></span>
          </div>
        </div>
        <div className="flex flex-row justify-center flex-wrap">
            { filteredList && filteredList.map( product => <ProductCard key={product.id} product={product} /> ) }
        </div>
      </section>
      {/* { show && <FilterBar setShow={setShow} filterObject={filterObject} setFilterObject={setFilterObject}/> } */}
      { show && <FilterBar setShow={setShow} /> }
    </main>
  )
}
