import shop from '../api/shop'
import * as types from '../constants/ActionTypes'
import store from "../store";
import { toast  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import axios from 'axios';

export const fetchProductsBegin = () => async (dispatch) => {
    dispatch({
        type: types.FETCH_PRODUCTS_BEGIN
    });
}



export const receiveProducts =  products => async (dispatch) => {
    dispatch({
        type: types.RECEIVE_PRODUCTS,
        products
    })
};

export const getAllProducts = () => async (dispatch) => {
    try{
        fetchProductsBegin();
        /*
        shop.getProducts(products => {
            dispatch(receiveProducts(products));
            return products;
        })*/
        const {token} = JSON.parse(localStorage.getItem("auth") || "{}");
        const config = {
            headers: {
                'Accept': 'application/json',
		 'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }
        const {data} = await axios.get("/api/product/", config);
        dispatch(receiveProducts(data));
    }
    catch(error) {
        console.log(error);
    }
}
export const fetchSingleProduct =  productId => async (dispatch) =>{
    dispatch({type: types.FETCH_SINGLE_PRODUCT,
    productId
    })
};




//it seems that I should probably use this as the basis for "Cart"
export const addToCart = (product,qty) => async (dispatch) => {
    toast.success("Item Added to Cart");
    dispatch(addToCartUnsafe(product, qty))

}
export const addToCartAndRemoveWishlist = (product,qty) => async (dispatch) => {
    toast.success("Item Added to Cart");
    dispatch(addToCartUnsafe(product, qty));
    dispatch(removeFromWishlist(product));
}
export const addToCartUnsafe = (product, qty) => async (dispatch)=> {
    dispatch({
        type: types.ADD_TO_CART,
        product,
        qty
    })
};
export const removeFromCart =  product_id => async (dispatch) => {
    toast.error("Item Removed from Cart");
    dispatch({
        type: types.REMOVE_FROM_CART,
        product_id
    })
};
export const incrementQty =  (product,qty) => async (dispatch) => {
    toast.success("Item Added to Cart");
    dispatch(addToCartUnsafe(product, qty))

}
export const decrementQty =  productId => async (dispatch) => {
    toast.warn("Item Decrement Qty to Cart");

    dispatch({
    type: types.DECREMENT_QTY,
    productId})
};



//it seems that I should probably use this as the basis for "Wishlist"
export const addToWishlist =  (product) => async (dispatch) => {
    toast.success("Item Added to Wishlist");
    dispatch(addToWishlistUnsafe(product))

}
export const addToWishlistUnsafe =  (product) => ({
    type: types.ADD_TO_WISHLIST,
    product
});
export const removeFromWishlist =  product_id => async (dispatch) => {
    toast.error("Item Removed from Wishlist");
    dispatch({
        type: types.REMOVE_FROM_WISHLIST,
        product_id
    })
};


//Compare Products
export const addToCompare =  (product) => async (dispatch) => {
    toast.success("Item Added to Compare");
    dispatch(addToCompareUnsafe(product))

};

export const addToCompareUnsafe=  (product) => async (dispatch) => {
    dispatch({
        type: types.ADD_TO_COMPARE,
        product
    });
};


export const removeFromCompare =  product_id => async (dispatch) => {
    dispatch({
        type: types.REMOVE_FROM_COMPARE,
        product_id
    })
};


// Filters
export const filterBrand =  (brand) => async (dispatch) =>{
    dispatch({
        type: types.FILTER_BRAND,
        brand
    });
};


export const filterColor =  (color) => async (dispatch)=>{
    dispatch({
        type: types.FILTER_COLOR,
        color
    });
};

export const filterPrice =  (value) => async (dispatch)=>{
    dispatch({
        type: types.FILTER_PRICE,
        value
    });
};

export const filterSort =  (sort_by) => async (dispatch)=> {
    dispatch({
        type: types.SORT_BY,
        sort_by
    })
};


// Currency
export const changeCurrency =  (symbol) => async (dispatch)=> {
    dispatch({
        type: types.CHANGE_CURRENCY,
        symbol
    })
};

