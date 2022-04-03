import { combineReducers } from 'redux';

import productReducer from './products';
import cartReducer from './cart';
import filtersReducer from './filters';
import wishlistReducer from './wishlist';
import compareReducer from './compare';
import {
    authReducer, 
    userProfileReducer,
    signoutReducer
} from "./auth";


const rootReducer = combineReducers({
    productList: productReducer,
    cartList: cartReducer,
    filters: filtersReducer,
    wishList: wishlistReducer,
    compare: compareReducer,
    auth: authReducer,
    userProfile: userProfileReducer,
    userSignout: signoutReducer
});

export default rootReducer;