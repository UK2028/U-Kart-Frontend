
export const UserReducer = ( state, action ) => {

    const { type, payload } = action;

    switch(type)
    {
        case "SET_USER":
            return { ...state, email: payload.user.email, name: payload.user.name, _id: payload.user._id, cartList: payload.cartList, total: payload.total, orders: payload.orders, accessToken: payload.token };

        case "SET_ACCESS_TOKEN":
            return { ...state, accessToken: payload.token };

        case "LOGOUT_USER":
            return { email: "", name: "", _id: "", cartList:[], total: 0, accessToken: "", orders: [] };

        case "ADD_TO_CART":
            return { ...state, cartList: payload.products, total: payload.total };
        
        case "REMOVE_FROM_CART":
            return { ...state, cartList: payload.products, total: payload.total };

        case "SET_ORDERS":
            return { ...state, cartList: [], total: 0, orders: payload.List };

        default:
            return state;
    }
}