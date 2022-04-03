import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Slider from 'react-slick';
import '../common/index.scss';

// import custom Components
import RelatedProduct from "../common/related-product"
import DetailsWithPrice from "./common/product/details-price";
import DetailsTopTabs from "./common/details-top-tabs";
import { addToCart, addToCartUnsafe, addToWishlist } from '../../actions'
import ImageZoom from './common/product/image-zoom'
import SmallImages from './common/product/small-image'




const LeftImage = ({ match }) => {

    const productId = match.params.id;

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [vertical, setVertical] = useState(true);
    let slider1 = undefined;
    let slider2 = undefined;

    const { products: _products } = useSelector(state => state.productList);
    const dispatch = useDispatch();
    const item = _products.find(el => el._id == productId);
    const symbol = "TND";

    useEffect(() => {
        setNav1(slider1);
        setNav2(slider2);
        return () => {
            if (window.innerWidth > 576) {
                setVertical(true);
            } else {
                setVertical(false);
            }
        }
    }, []);

    let products = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true
    };
    let productsnav = {
        vertical: vertical,
        verticalSwiping: vertical,
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.product-right-slick',
        arrows: false,
        infinite: true,
        centerMode: false,
        dots: false,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div>
            {/*Section Start*/}
            {(item) ?
                <section >
                    <div className="collection-wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1 col-sm-2 col-xs-12 p-0">
                                    <SmallImages item={item} settings={productsnav} navOne={nav1} />
                                </div>
                                <div className="col-lg-5 col-sm-10 col-xs-12  order-up">
                                    <Slider {...products} asNavFor={nav2} ref={slider => (slider1 = slider)} className="product-right-slick">
                                        {item.variants.map((vari, index) =>
                                            <div key={index}>
                                            {console.log(vari.images)}
                                                <ImageZoom image={vari.images} className="img-fluid image_zoom_cls-0" />
                                            </div>
                                        )}
                                    </Slider>
                                </div>
                                <DetailsWithPrice symbol={symbol} item={item} navOne={nav1} addToCartClicked={addToCart} BuynowClicked={addToCartUnsafe} addToWishlistClicked={addToWishlist} />
                            </div>
                        </div>
                    </div>
                </section> : ''}
            {/*Section End*/}

            <section className="tab-product m-0">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-lg-12">
                            <DetailsTopTabs item={item} />
                        </div>
                    </div>
                </div>
            </section>

            <RelatedProduct />

        </div>
    )
}


export default LeftImage;