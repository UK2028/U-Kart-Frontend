import { Link } from "react-router-dom";

export const DashboardCard = ({item}) => {

    const { name, image_local, price } = item;

  return (
    <div className="flex justify-between text-lg dark:text-gray-200 p-4 mb-1" > 
        <Link to={`/products/${item.id}`} ><div className="flex flex-row items-center">
            <img className="max-h-24" src={require(`../../../${image_local}`)} alt="img" />
            <div className="flex flex-col justify-center items-around ml-4">
                <div>{name}</div>
                <div>${price}</div>
            </div>
        </div></Link>
    </div>
  )
}
