import {CHANGE_TITLE, 
        CHANGE_STOCK,
        CHANGE_PRICE, 
        CHANGE_DESCRIPTION, 
        CHANGE_BRAND , 
        CHARGE_IMAGE,
        SET_ALL_PRODUCTS,
        ADD_TO_CART,
        EMPTY_CART
    } from '../actions/actionTypes';


const initialState = {
    
    title:"",
    stock:"",
    price:"",
    description:"",
    brand:"",
    images:[],
    products:[],
    cart:[],


    
}

export function rootReducer(state = initialState, action) {
    switch (action.type) {
            case CHANGE_TITLE: 
            return {
                ...state,
                title: action.payload.title
            }
            case CHANGE_STOCK: 
            return {
                ...state,
                stock : action.payload.stock
            }
            case CHANGE_PRICE: 
            return {
                ...state,
                price : action.payload.price
            }
            case CHANGE_DESCRIPTION: 
            return {
                ...state,
                description : action.payload.description
            }
            case CHANGE_BRAND: 
            return {
                ...state,
                brand : action.payload.brand
            }
            case CHARGE_IMAGE: 
            return {
                ...state,
            }
            case SET_ALL_PRODUCTS: 
            return {
                ...state,
                products:  action.payload.arrayProd
            }
            case ADD_TO_CART: 
            return {
                ...state,
                cart:  state.cart.concat(action.payload.item)
            }
            case EMPTY_CART: 
            return {
                ...state,
                cart:  []
            }
            default:
            return state;

    }
}