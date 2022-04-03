import { createStore, applyMiddleware } from 'redux';

// middlewares
//import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'

// Import custom components
import rootReducer from '../reducers';
import thunk from 'redux-thunk';


function saveToLocalStorage(state) {
    try {
        localStorage.setItem("productList", JSON.stringify(state.productList));
        localStorage.setItem("cartList", JSON.stringify(state.cartList));
        localStorage.setItem("filters", JSON.stringify(state.filters));
        localStorage.setItem("wishList", JSON.stringify(state.wishList));
        localStorage.setItem("compare", JSON.stringify(state.compare));
        localStorage.setItem("auth", JSON.stringify(state.auth));
    }catch(e){
        console.log(e);
    }
}

function loadFromLocalStorage() {
    try {
        const productList = JSON.parse(localStorage.getItem("productList") ? localStorage.getItem("productList") : {});
        const cartList = JSON.parse(localStorage.getItem("cartList") ? localStorage.getItem("cartList") : {});
        const filters = JSON.parse(localStorage.getItem("filters") ? localStorage.getItem("filters") : {});
        const wishList = JSON.parse(localStorage.getItem("wishList") ? localStorage.getItem("wishList") : {});
        const compare = JSON.parse(localStorage.getItem("compare") ? localStorage.getItem("compare") : {});
        const auth = JSON.parse(localStorage.getItem("auth") ? localStorage.getItem("auth") : {});

        const parsedState = {
            productList, 
            cartList, 
            filters, 
            wishList, 
            compare, 
            auth
        };
        return parsedState;
    }catch (e) {
        console.log(e)
        return undefined
    }
}


const persistedState = loadFromLocalStorage()
const middlewares = [thunk, logger];


/**
 * Create a Redux store that holds the app state.
 */
const store = createStore(rootReducer, persistedState, applyMiddleware(...middlewares))/*compose(
    applyMiddleware(thunkMiddleware),

    //For working redux dev tools in chrome (https://github.com/zalmoxisus/redux-devtools-extension)
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : function (f) {
        return f;
    }
));
*/

const unsubscribe = store.subscribe(() => {
    saveToLocalStorage(store.getState());
});

export default store;