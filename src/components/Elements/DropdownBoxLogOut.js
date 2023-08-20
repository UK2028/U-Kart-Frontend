import { Link } from 'react-router-dom';

export const DropdownBoxLogOut = ({setShowDropdown}) => {
  return (
    <div onClick={()=>setShowDropdown(false)} className="w-52 text-lg text-gray-800 bg-gray-200 dark:bg-gray-700 p-2 dark:text-gray-200 z-50 absolute top-24 right-5 rounded-lg rounded-tr-none shadow-2xl">
        <div className=" w-0 h-0 border-b-gray-200 dark:border-b-gray-700 border-b-[18px] border-l-[20px] border-r-0 border-l-transparent absolute right-0 -top-4"></div>
        <ul className="divide-y divide-gray-400 dark:divide-gray-500">
            <Link to ='/products'><li className="py-2 px-1 ">All eBooks</li></Link>
            <Link to ='/login'><li className="py-2 px-1 ">Login</li></Link>
            <Link to ='/register'><li className="py-2 px-1 ">Register</li></Link>
        </ul>
    </div>
  )
}
