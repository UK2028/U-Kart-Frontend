import { createContext, useContext, useReducer } from "react";
import { UserReducer } from "../reducer";
import axios from "axios";

import { useRefreshtoken } from '../hooks/useRefreshtoken';

const initialState = {
    email: "",
    name: "",
    _id: "",
    cartList: [],
    total: 0,
    accessToken: "",
    orders: []
}

const userContext = createContext(initialState);

export const UserProvider = ({children}) => {

    const [ state, dispatch ] = useReducer(UserReducer,initialState);

    const refresh = useRefreshtoken();

    const setUser = async (data) => {
        return dispatch({type: "SET_USER", payload: data });
    }

    const setToken = async (token) => {
        return dispatch({type: "SET_ACCESS_TOKEN", payload: {token} });
    }

    const logoutUser = () => {
        return dispatch({type: "LOGOUT_USER"});
    }

    const addToCart = async (product) => {
        try
        {
            const reqOpt = {
                method: "POST",
                baseURL: 'https://u-kart-backend-node.onrender.com',
                url: '/add_to_cart',
                data: {
                    product
                },
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${state.accessToken}`
                },
                withCredentials: 'include'
            }

            const res = await axios(reqOpt);

            if(res.status===200)
            {
                return dispatch({
                    type:"ADD_TO_CART",
                    payload: {
                        products: res.data.cartList,
                        total: res.data.total
                    }
                })
            }
            
        }
        catch(error)
        {
            if(error.response.status===403||error.response.status===401)
            {
                const refreshToken = await refresh();

                setToken(refreshToken.accessToken);
                
                const reqOpt = {
                    method: "POST",
                    baseURL: 'https://u-kart-backend-node.onrender.com',
                    url: '/add_to_cart',
                    data: {
                        product
                    },
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${refreshToken.accessToken}`
                    },
                    withCredentials: 'include'
                }
    
                const res = await axios(reqOpt);
    
                if(res.status===200)
                {
                    return dispatch({
                        type:"ADD_TO_CART",
                        payload: {
                            products: res.data.cartList,
                            total: res.data.total
                        }
                    })
                }
            }
        }
        
    }

    const removeFromCart = async (product) => {
        try
        {
            const reqOpt = {
                method: "POST",
                baseURL: 'https://u-kart-backend-node.onrender.com',
                url: '/remove_from_cart',
                data: {
                    product
                },
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${state.accessToken}`
                },
                withCredentials: 'include'
            }
    
            const res = await axios(reqOpt);
    
            if(res.status===200)
            {
                return dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: {
                        products: res.data.cartList,
                        total: res.data.total
                    }})
            }
        }
        catch(error)
        {
            if(error.response.status===403||error.response.status===401)
            {
                const refreshToken = await refresh();

                setToken(refreshToken.accessToken);
                
                const reqOpt = {
                    method: "POST",
                    baseURL: 'https://u-kart-backend-node.onrender.com',
                    url: '/remove_from_cart',
                    data: {
                        product
                    },
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${refreshToken.accessToken}`
                    },
                    withCredentials: 'include'
                }
    
                const res = await axios(reqOpt);
    
                if(res.status===200)
                {
                    return dispatch({
                        type:"REMOVE_FROM_CART",
                        payload: {
                            products: res.data.cartList,
                            total: res.data.total
                        }
                    })
                }
            }
        }
    }

    const setOrders = async (orderId,amount) => {

        try {
            
            const reqOpt = {
                method: "POST",
                baseURL: 'https://u-kart-backend-node.onrender.com',
                url: '/order_list',
                data: {
                    userId: state._id,
                    cartList: state.cartList,
                    orderId,
                    amount
                },
                headers: {
                    "Content-Type": "application/json"
                }
            }

            const res = await axios(reqOpt);

            if(res.status===200)
            {
                const ordersList = res.data.List; 

                return dispatch({ type: "SET_ORDERS", payload: { List: ordersList } })
            }

        } catch (error) {
            console.log(error);
        }

    }


    const value = { 
        email: state.email,
        name: state.name,
        _id: state._id,
        cartList: state.cartList,
        total: state.total,
        accessToken: state.accessToken,
        orders: state.orders,
        setUser,
        setToken,
        logoutUser,
        addToCart,
        removeFromCart,
        setOrders
    };

    return <userContext.Provider value={value}>
        {children}
    </userContext.Provider>
}

export const useUser = () => useContext(userContext);