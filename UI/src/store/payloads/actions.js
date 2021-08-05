import {CHANGE_TITLE, 
        CHANGE_STOCK, 
        CHANGE_PRICE, 
        CHANGE_DESCRIPTION, 
        CHANGE_BRAND, 
        CHARGE_IMAGE,
        SET_ALL_PRODUCTS,
        ADD_TO_CART,
        EMPTY_CART }
from '../actions/actionTypes';

export function setTitle(title){
    return {type: CHANGE_TITLE, payload: { title } };
}

export function setStock(stock){
    return {type: CHANGE_STOCK, payload: { stock } };
}

export function setPrice(price){
    return {type: CHANGE_PRICE, payload: { price } };
}

export function setDescription(description){
    return {type: CHANGE_DESCRIPTION, payload: { description } };
}

export function setBrand(brand){
    return {type: CHANGE_BRAND, payload: { brand } };
}

export function setImage(file){
    
    return {type: CHARGE_IMAGE, payload: file };
}

export function setAllProducts(arrayProd){
    
    return {type: SET_ALL_PRODUCTS, payload: {arrayProd} };
}

export function addToCart(item){
    
    return {type: ADD_TO_CART, payload: {item} };
}

export function emptyCart(){
    
    return {type: EMPTY_CART};
}