import { Link, useNavigate } from 'react-router-dom';

import { useUser } from '../../context';
import { Ratings } from '../../components';

export const ProductCard = ({ product }) => {

    const navigate = useNavigate();

    const { _id, cartList, addToCart, removeFromCart } = useUser();

    const productInCart = cartList?.some(item => item.id === product.id);

    const handleAddToCart = (product) => {
        if(product.in_stock)
        {
            if(JSON.parse(localStorage.getItem('userId'))===_id)
            {
                addToCart(product);
            }
            else
            {
                navigate('/login');
            }
        }
    }

    return (
        <>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-4 my-4" >
                <Link to={`/products/${product.id}`}>
                    <div className='relative'>
                        <img className="rounded-t-lg max-h-56 w-full" src={require(`../../${product.image_local}`)} alt="" />
                        {product.best_seller && <span className='absolute top-4 left-4 text-white px-2 py-1 rounded-lg bg-orange-600'>Best Seller</span>}
                    </div>
                </Link>
                <div className="p-5">
                    <Link to={`/products/${product.id}`}>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
                    </Link>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.overview}</p>
                    <Ratings key={product.id} rating={product.rating} />
                    <div className='flex justify-between items-center'>
                        <div className="text-3xl dark:text-gray-200 mr-5">${product.price}</div>
                        {!productInCart ? <button onClick={() => handleAddToCart(product)} className={`inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800  dark:bg-blue-600 ${product.in_stock ? "cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:ring-2 hover:ring-blue-500" : "disabled cursor-not-allowed"}`}>
                            Add To Cart
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-plus h-5" viewBox="0 0 16 16">
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                            </svg>
                        </button> :
                        <button onClick={() => removeFromCart(product)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 hover:ring-2 hover:ring-pink-500">
                            Remove From Cart
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-dash h-5" viewBox="0 0 16 16">
                                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                            </svg>
                        </button>}
                    </div>
                </div>
            </div>
        </>
    )
}
