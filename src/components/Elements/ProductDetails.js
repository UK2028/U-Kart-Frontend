import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTitle } from '../../hooks/useTitle';

import { useUser } from '../../context';
import { Ratings } from './Ratings';

export const ProductDetails = () => {

    const { id } = useParams();
    const [productDetail, setProductDetail] = useState({});
    const navigate = useNavigate();

    const { _id, cartList, addToCart, removeFromCart } = useUser();

    const productInCart = cartList?.some(item => item.id === productDetail.id);

    useTitle(`${productDetail.name}/U-Kart`);

    useEffect(() => {
        const fetchProductDetail = async () => {
            const res = await fetch(`https://u-kart-backend-node.onrender.com/products/${id}`);
            const result = await res.json();
            setProductDetail(result.DATA);
        };
        fetchProductDetail();
    }, [id]);

    const handleAddToCart = (product) => {
        if(productDetail.in_stock)
        {
            if (JSON.parse(localStorage.getItem('userId')) === _id) {
                addToCart(product);
            }
            else {
                navigate('/login');
            }
        }
    }

    return (
        <main className="min-h-[90vh] bg-white dark:bg-gray-800 px-10">
            <section className="max-w-screen-xl mx-auto pb-10">
                <div className="p-10 text-center">
                    <h1 className="mb-2 text-3xl font-semibold text-gray-900 dark:text-gray-200">{productDetail.name}</h1>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-200">{productDetail.overview}</p>
                </div>
                <div className="flex flex-wrap justify-between max-xl:justify-around">
                    <div className='max-h-min max-w-xl my-10'>
                        <img src={productDetail.poster} alt={productDetail.name} />
                    </div>
                    <div className=' xl:ml-10 max-w-xl'>
                        <h1 className="my-4 text-4xl text-gray-900 dark:text-gray-200">${productDetail.price}</h1>
                        <Ratings key={productDetail.id} rating={productDetail.rating} />
                        <div className='my-4 flex flex-wrap'>
                            {productDetail.best_seller && <span className='bg-gray-200 text-lg dark:bg-gray-100 font-semibold text-yellow-500 dark:text-yellow-500 rounded-lg px-3
                        py-1 mr-4 max-lg:mb-2'>BEST SELLER</span>}
                            {productDetail.in_stock && <span className='bg-gray-200 text-lg dark:bg-gray-100 font-semibold text-green-600 rounded-lg px-3 py-1 mr-4 max-lg:mb-2'>INSTOCK</span>}
                            {!productDetail.in_stock && <span className='bg-gray-200 text-lg dark:bg-gray-100 font-semibold text-red-600 rounded-lg px-3 py-1 mr-4 max-lg:mb-2'>OUT OF STOCK</span>}
                            <span className='bg-gray-200 text-lg dark:bg-gray-100 font-semibold text-blue-600 rounded-lg px-3 py-1 mr-4 max-lg:mb-2'>{productDetail.size}MB</span>
                        </div>
                        <div className='my-4'>
                            {!productInCart ? <button onClick={() => handleAddToCart(productDetail)} className={`inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 dark:bg-blue-600 ${productDetail.in_stock ? "cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:ring-2 hover:ring-blue-500" : "disabled cursor-not-allowed"}`}>
                                Add To Cart
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-plus h-7" viewBox="0 0 16 16">
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>
                            </button> :
                                <button onClick={() => removeFromCart(productDetail)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 hover:ring-2 hover:ring-pink-500">
                                    Remove From Cart
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-dash h-7" viewBox="0 0 16 16">
                                        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                    </svg>
                                </button>}
                        </div>
                        <div className='max-w-screen-xl my-4'>
                            <p className='text-lg dark:text-gray-200'>
                                {productDetail.long_description}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
