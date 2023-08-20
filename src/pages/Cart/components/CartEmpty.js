import { Link } from "react-router-dom"

export const CartEmpty = () => {
    return (
        <section className="min-h-[63vh] max-w-screen-xl mx-auto pt-10">
            <div className='max-w-4xl mx-auto flex flex-col items-center py-5 border border-gray-800 dark:border-gray-200 rounded-lg'>
                <div className='text-green-500 pb-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-cart h-20" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                </div>
                <div className='flex flex-col place-items-center text-xl dark:text-white pb-3'>
                    <p className=''>Oops! Your cart looks empty!</p>
                    <p className=''>Add eBooks to your cart from our store collection.</p>
                </div>
                <Link to="/products"><button >
                    <div className='flex flex-wrap text-white bg-blue-600 p-4 rounded-lg hover:ring-2 hover:ring-blue-500'>
                        <span className='text-lg pr-2'>Continue Shopping</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-cart-check h-6" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </svg>
                    </div>
                </button></Link>
            </div>
        </section>
    )
}
