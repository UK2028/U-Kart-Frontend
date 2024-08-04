import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { useUser } from '../../context';
import { Search } from '../Sections/Search';
import LOGO from '../../assets/UK LOGO.jpg';
import { DropdownBoxLogOut } from '../Elements/DropdownBoxLogOut';
import { DropdownBoxLogIn } from '../Elements/DropdownBoxLogIn';

export const Header = () => {

  const { cartList } = useUser();

  const [ showSearch , setShowSearch ] = useState(false);
  const [ showDropdown, setShowDropdown  ] = useState(false);
  const [ darkMode, setDarkMode ] = useState(JSON.parse(localStorage.getItem("darkTheme")) || true);
  
  const userId = JSON.parse(localStorage.getItem("userId"));

  useEffect(() => {

    localStorage.setItem("darkTheme", JSON.stringify(darkMode));

    document.documentElement.removeAttribute("class");

    if (darkMode) {
      document.documentElement.classList.add("dark");
    }

  }, [darkMode])

  return (
    <>
      <header className="px-2 border-b border-gray-200 dark:border-gray-800 dark:bg-gray-900 ">
        <nav>
          <div className="flex flex-wrap justify-center xs:justify-between items-center mx-auto max-w-screen-xl py-4 relative">
            <Link onClick={()=>{setShowSearch(false);setShowDropdown(false);}} to="/" className="flex self-center ">
              <img src={LOGO} className="h-12 rounded-lg mr-3 border border-gray-400" alt="Logo" />
              <span className="ml-1 self-center text-3xl whitespace-nowrap dark:text-white">U-Kart</span>
            </Link>
            <div className="flex items-center py-4">
              <button onClick={() =>{ setDarkMode(!darkMode);setShowDropdown(false);setShowSearch(false);}} type="button" className=" border border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-800 rounded-lg text-sm p-2.5 mr-1">
                {darkMode ? <svg className=" h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path></svg> : <svg className=" h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg> }
              </button>
              <button onClick={() =>{ setShowSearch(!showSearch);setShowDropdown(false);}} type="button" className=" border border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-800 rounded-lg text-sm p-2.5 mx-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-search h-5" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </button>
              <Link to ="/cart" ><button type="button" onClick={()=>{setShowSearch(false);setShowDropdown(false);}} className=" border border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-800 rounded-lg text-sm p-2.5 mx-1 relative">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-cart-check h-5" viewBox="0 0 16 16">
                  <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>
                <div className='bg-red-500 text-white px-1 rounded-lg absolute top-0 right-1'>{cartList?cartList?.length:0}</div>
              </button></Link>
              <button type="button" onClick={()=>{setShowDropdown(!showDropdown);setShowSearch(false);}} className=" border border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-800 rounded-lg text-sm p-2.5 ml-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-person-circle h-5" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                </svg>
              </button>
            </div>
            { showDropdown && (userId ? <DropdownBoxLogIn setShowDropdown={setShowDropdown}/> : <DropdownBoxLogOut setShowDropdown={setShowDropdown}/> )}
          </div>
        </nav>
      </header>
      { showSearch && <Search setShowSearch={setShowSearch} /> }
    </>
  )
}
