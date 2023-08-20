import { createContext, useContext, useReducer } from "react";
import { productsListReducer } from "../reducer/productsListReducer";

const initialstate = {
    productsList: [],
    sort: null,
    rating: null,
    best_seller: false,
    in_stock: false
}

const productsListContext = createContext(initialstate);

export const ProductsListProvider = ({children}) => {

    const [ state, dispatch ] = useReducer(productsListReducer, initialstate);

    const initialiseList = (products) => {
        dispatch({type:"INITIALISE_LIST",payload:{products}})
    };

    const sortByPrice = (products) => {
        if(state.sort==="lowToHigh")
        {
            return [...products].sort((a,b)=>a.price-b.price)
        }
        if(state.sort==="highToLow")
        {
            return [...products].sort((a,b)=>b.price-a.price)
        }
        return products;
    }

    const filterByRating = (products) => {
        if(state.rating)
        {
            return products.filter(product=>product.rating>=state.rating);
        }
        return products;
    }
    
    const filterByBestSeller = (products) => {
        if(state.best_seller)
        {
            return products.filter(product=>product.best_seller===state.best_seller);
        }
        return products;
    }

    const filterByInstock = (products) => {
        if(state.in_stock)
        {
            return products.filter(product=>product.in_stock===state.in_stock);
        }
        return products;        
    }

    const list = filterByInstock(filterByBestSeller(filterByRating(sortByPrice(state.productsList))));

    const value = {
        state,
        dispatch,
        initialiseList,
        filteredList: list,
    }
    return (<productsListContext.Provider value={value} >
        {children}
    </productsListContext.Provider>)
}

export const useProductsList = () => useContext(productsListContext);