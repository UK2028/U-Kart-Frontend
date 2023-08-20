import { Link } from 'react-router-dom'
import heroImage from '../../../assets/images/hero.avif'

export const Hero = () => {
    return (
            <section className="max-w-screen-xl flex flex-col items-center bg-white lg:flex-row dark:bg-gray-800 mx-auto pb-[100px] pt-10">
                <div className="flex flex-col self-center my-5">
                    <h1 className="text-center lg:text-start text-5xl font-bold text-gray-900 dark:text-white">The Ultimate E-Book Store</h1>
                    <p className="text-center lg:text-start text-2xl font-normal text-gray-700 dark:text-gray-400 my-4 mr-2">U-Kart is the world's most popular and authoritative source for computer science ebooks. Find ratings and access to the newest books digitally.</p>
                    <div className='self-center lg:self-start'><Link to="/products"><button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 hover:ring-2 hover:ring-blue-500">Explore E-Books</button></Link></div>
                </div>
                <img className="max-h-96 rounded-lg lg:max-w-xl" src={heroImage} alt="hero"/>
            </section>
    )
}
