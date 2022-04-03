import {
    FETCH_PRODUCTS_BEGIN,
    RECEIVE_PRODUCTS,
} from "../constants/ActionTypes";
import axios from "axios";


const loadProducts = () => async (dispatch) => {
    try {
        dispatch({
            type: FETCH_PRODUCTS_BEGIN
        })
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }
        const {data} = await axios.get("/api/products", config);
        dispatch({
            RECEIVE_PRODUCTS,
            payload: {...data, symbol: "TND"}
        })
    }
    catch(error) {
        console.log(error);
    }
}