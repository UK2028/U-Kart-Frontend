import { Link } from "react-router-dom";

import { useUser } from "../../../context";

export const CartCard = ({item}) => {

  const { removeFromCart } = useUser(); 

  const { name, image_local, price } = item;

  return (
    <div className="flex justify-between text-lg dark:text-gray-200 border-b-2 border-gray-600 p-4" > 
        <div className="flex flex-row ">
        <Link to={`/products/${item.id}`} ><img className="max-h-24" src={require(`../../../${image_local}`)} alt="img" /></Link>
            <div className="flex flex-col items-start justify-around ml-4">
            <Link to={`/products/${item.id}`} ><div>{name}</div></Link>
                <button onClick={()=>removeFromCart(item)} className="bg-red-600 hover:bg-red-800 hover:ring-2 hover:ring-pink-500 text-white px-2 py-1 rounded-lg">Remove</button>
            </div>
        </div>
        <div>${price}</div>
    </div>
  )
}
