import { useProductsList } from "../../../context";

export const FilterBar = ({setShow}) => {
  
  const { state, dispatch } = useProductsList();
  
  return (
    <div className="absolute top-0 left-0 z-40 bg-gray-200 dark:bg-gray-600 dark:text-white text-center w-[250px] p-2">
        <div className="flex flex-row justify-between items-center">
            <div className="text-2xl">FILTERS</div>
            <div onClick={()=>{setShow(false);}} className="p-1 border border-gray-400 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-400"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-x h-5" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg></div>
        </div>
        <hr className="h-px my-2 bg-black border-0 dark:bg-white"></hr>
        <div className="text-start dark:text-white my-5">
            <h1 className="text-lg font-semibold">Sort By</h1>
            <input type="radio" value="lowToHigh" onChange={(e)=>dispatch({type:"SORT",payload:{sortType:e.target.value}})} checked={state.sort==="lowToHigh"} name="sortByPrice" id="lowToHigh"/>
            <label className="ml-1" htmlFor="lowToHigh">Price Low to High</label>
            <br />
            <input type="radio" value="highToLow" onChange={(e)=>dispatch({type:"SORT",payload:{sortType:e.target.value}})} checked={state.sort==="highToLow"} name="sortByPrice" id="highToLow"/>
            <label className="ml-1" htmlFor="highToLow">Price High to Low</label>
        </div>
        <div className="text-start dark:text-white my-5">
            <h1 className="text-lg font-semibold">Ratings</h1>
            <input type="radio" onChange={()=>dispatch({type:"RATING",payload:{ratingValue:4}})} checked={state.rating===4} name="ratings" id="rating4AndAbove" />
            <label className="ml-1" htmlFor="rating4AndAbove">Rating 4 and Above</label>
            <br />
            <input type="radio" onChange={()=>dispatch({type:"RATING",payload:{ratingValue:3}})} checked={state.rating===3} name="ratings" id="rating3AndAbove" />
            <label className="ml-1" htmlFor="rating3AndAbove">Rating 3 and Above</label>
            <br />
            <input type="radio" onChange={()=>dispatch({type:"RATING",payload:{ratingValue:2}})} checked={state.rating===2} name="ratings" id="rating2AndAbove" />
            <label className="ml-1" htmlFor="rating2AndAbove">Rating 2 and Above</label>
            <br />
            <input type="radio" onChange={()=>dispatch({type:"RATING",payload:{ratingValue:1}})} checked={state.rating===1} name="ratings" id="rating1AndAbove" />
            <label className="ml-1" htmlFor="rating1AndAbove">Rating 1 and Above</label>
        </div>
        <div className="text-start dark:text-white my-5">
        <h1 className="text-lg font-semibold">Other Filters</h1>
        <input type="checkbox" onChange={()=>dispatch({type:"BEST_SELLER",payload:{bestSeller:!state.best_seller}})} checked={state.best_seller===true} id="bestSellersOnly" />
        <label className="ml-1" htmlFor="bestSellersOnly">Best sellers Only</label>
        <br />
        <input type="checkbox" onChange={()=>dispatch({type:"IN_STOCK",payload:{inStock:!state.in_stock}})} checked={state.in_stock===true} id="inStockOnly" />
        <label className="ml-1" htmlFor="inStockOnly">INSTOCK Only</label>
        </div>
        <div className="text-center mb-4">
            <button onClick={()=>dispatch({type:"CLEAR_FILTER"})} className="border border-black rounded-lg px-6 py-2 dark:border-white hover:bg-gray-300 dark:hover:bg-gray-500">Clear Filter</button>
        </div>
    </div>
  )
}


// import { useEffect, useRef } from "react";
// import { useProductsList } from "../../../context";

// export const FilterBar = ({setShow, filterObject, setFilterObject}) => {

//   const initialiseListRef  = useRef(useProductsList());
//   const render = useRef(false);

//   useEffect( () => {
//     const getProductsByFilter = async () => {
//       const res = await fetch('https://u-kart-backend-node.onrender.com/products/filter',{
//         method: 'POST',
//         headers: {"Content-Type":"application/json"},
//         body: JSON.stringify(filterObject)
//       });
//       const result = await res.json();
//       initialiseListRef.current.initialiseList(result.DATA);
//     };
//     if(render.current)
//     {
//       getProductsByFilter();
//     }  
//   }, [filterObject] )
  
//   return (
//     <div className="absolute top-0 left-0 z-40 bg-gray-200 dark:bg-gray-600 dark:text-white text-center w-[250px] p-2">
//         <div className="flex flex-row justify-between items-center">
//             <div className="text-2xl">FILTERS</div>
//             <div onClick={()=>{setShow(false);}} className="p-1 border border-gray-400 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-400"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-x h-5" viewBox="0 0 16 16">
//   <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
// </svg></div>
//         </div>
//         <hr className="h-px my-2 bg-black border-0 dark:bg-white"></hr>
//         <div className="text-start dark:text-white my-5">
//             <h1 className="text-lg font-semibold">Sort By</h1>
//             <input type="radio" onChange={()=>{setFilterObject({...filterObject,sort:Number(1)});render.current=true;}} checked={filterObject.sort===1} name="sortByPrice" id="lowToHigh"/>
//             <label className="ml-1" htmlFor="lowToHigh">Price Low to High</label>
//             <br />
//             <input type="radio" onChange={()=>{setFilterObject({...filterObject,sort:Number(-1)});render.current=true;}} checked={filterObject.sort===-1} name="sortByPrice" id="highToLow"/>
//             <label className="ml-1" htmlFor="highToLow">Price High to Low</label>
//         </div>
//         <div className="text-start dark:text-white my-5">
//             <h1 className="text-lg font-semibold">Ratings</h1>
//             <input type="radio" name="ratings" onChange={()=>{setFilterObject({...filterObject,rating:4});render.current=true;}} checked={filterObject.rating===4} id="rating4AndAbove" />
//             <label className="ml-1" htmlFor="rating4AndAbove">Rating 4 and Above</label>
//             <br />
//             <input type="radio" name="ratings" onChange={()=>{setFilterObject({...filterObject,rating:3});render.current=true;}} checked={filterObject.rating===3} id="rating3AndAbove" />
//             <label className="ml-1" htmlFor="rating3AndAbove">Rating 3 and Above</label>
//             <br />
//             <input type="radio" name="ratings" onChange={()=>{setFilterObject({...filterObject,rating:2});render.current=true;}} checked={filterObject.rating===2} id="rating2AndAbove" />
//             <label className="ml-1" htmlFor="rating2AndAbove">Rating 2 and Above</label>
//             <br />
//             <input type="radio" name="ratings" onChange={()=>{setFilterObject({...filterObject,rating:1});render.current=true;}} checked={filterObject.rating===1} id="rating1AndAbove" />
//             <label className="ml-1" htmlFor="rating1AndAbove">Rating 1 and Above</label>
//         </div>
//         <div className="text-start dark:text-white my-5">
//         <h1 className="text-lg font-semibold">Other Filters</h1>
//         <input type="checkbox" onChange={()=>{setFilterObject({...filterObject,best_seller:!filterObject.best_seller});render.current=true;}} checked={filterObject.best_seller} id="bestSellersOnly" />
//         <label className="ml-1" htmlFor="bestSellersOnly">Best sellers Only</label>
//         <br />
//         <input type="checkbox" onChange={()=>{setFilterObject({...filterObject,in_stock:!filterObject.in_stock});render.current=true;}} checked={filterObject.in_stock} id="inStockOnly" />
//         <label className="ml-1" htmlFor="inStockOnly">INSTOCK Only</label>
//         </div>
//         <div className="text-center mb-4">
//             <button onClick={()=>{setFilterObject({rating:'',sort:'',best_seller: false,in_stock: false});render.current=true;}} className="border border-black rounded-lg px-6 py-2 dark:border-white hover:bg-gray-300 dark:hover:bg-gray-500">Clear Filter</button>
//         </div>
//     </div>
//   )
// }
