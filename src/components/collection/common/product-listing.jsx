import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';


//import { getTotal, getCartProducts } from '../../../reducers'
import { addToCart, addToWishlist, addToCompare } from '../../../actions'
import { getVisibleproducts } from '../../../services';
import ProductListItem from "./product-list-item";

export default function ProductListing({colSize}) {

    const [mounted, setMounted] = useState(false);
    const [limit, setLimit] = useState(5);
    const [hasMoreItems, setHasMoreItems] = useState(true);

    let {products, symbol} = useSelector(state=>state.productList);
    const filters = useSelector(state=>state.filters)
    const data = {products};
    products = getVisibleproducts(data, filters);
    const dispatch = useDispatch();

    const fetchMoreItems = () => {
        if (limit >= products.length) {
            setHasMoreItems(false);
            return;
        }
        // a fake async api call
        setTimeout(() => {
            setLimit(limit+5);
        }, 3000);


    }

    if(!mounted){
        fetchMoreItems();
    }

    useEffect(()=>{
        setMounted(true);
    }, []);


    return (
        <div>
            <div className="product-wrapper-grid">
                <div className="container-fluid">
                    {products.length > 0 ?
                        <InfiniteScroll
                            dataLength={limit} //This is important field to render the next data
                            next={fetchMoreItems}
                            hasMore={hasMoreItems}
                            loader={<div className="loading-cls"></div>}
                            endMessage={
                                <p className="seen-cls seen-it-cls">
                                    <b>Yay! You have seen it all</b>
                                </p>
                            }
                        >
                            <div className="row">
                                {products.slice(0, limit).map((product, index) =>
                                    <div className={`${colSize === 3 ? 'col-xl-3 col-md-6 col-grid-box' : 'col-lg-' + colSize}`} key={index}>
                                        <ProductListItem product={product} symbol={symbol}
                                            onAddToCompareClicked={() => dispatch(addToCompare(product))}
                                            onAddToWishlistClicked={() => dispatch(addToWishlist(product))}
                                            onAddToCartClicked={() => dispatch(addToCart(product, 1))} key={index} />
                                    </div>)
                                }
                            </div>
                        </InfiniteScroll>
                        :
                        <div className="row">
                            <div className="col-sm-12 text-center section-b-space mt-5 no-found" >
                                <img src={`${process.env.PUBLIC_URL}/assets/images/empty-search.jpg`} className="img-fluid mb-4" />
                                <h3>Sorry! Couldn't find the product you were looking For!!!    </h3>
                                <p>Please check if you have misspelt something or try searching with other words.</p>
                                <Link to={`${process.env.PUBLIC_URL}/`} className="btn btn-solid">continue shopping</Link>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
