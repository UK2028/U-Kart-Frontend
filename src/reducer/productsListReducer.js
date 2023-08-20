
export const productsListReducer = ( state, action ) => {
    const { type, payload } = action;

    switch(type){

        case "INITIALISE_LIST":
            return { ...state, productsList: payload.products };
        
        case "SORT":
            return { ...state, sort: payload.sortType }

        case "RATING":
            return { ...state, rating: payload.ratingValue }

        case "BEST_SELLER":
            return { ...state, best_seller: payload.bestSeller  }

        case "IN_STOCK":
            return { ...state, in_stock: payload.inStock  }

        case "CLEAR_FILTER":
            return { ...state, sort: null, rating: null, best_seller: false, in_stock: false}

        default:
            return state;
    }
}