import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import withAuth from '../../protection/withAuth';
import ReactLoading from "react-loading";
import uuid from "uuid/dist/v1";

const Products = () => {

    const {products} = useSelector(state=>state.productList);

    const products_display = products ? (
        products.map((product, index)=>{
            return (
                <div className="col-lg-3 col-md-6">
                    <div className="collection-block" key={uuid()}>
                        <img src={`${process.env.REACT_APP_API_ADDR+product.cover}` || `${process.env.PUBLIC_URL}/assets/images/collection/1.jpg`}
                            className="img-fluid" alt="" />
                        <div className="collection-content">

                            <h3>{product.name}</h3>
                            <h4>{product.price} TND</h4>
                            <p>{product.description.substr(0, 73).concat("...")}</p>
                            <span>{product.shortDetails.substr(0,35).concat(".")}</span>
                            <div className="rating">
                                {
                                    Array.from(Array(product.rating).keys()).map(rt=>{
                                        return(<i key={uuid()} className="fa fa-star" />)
                                    })
                                }
                            </div>

                            <div className={"rating-num"}>{product.rating}</div>
                            <Link to={`products/${product._id}`} className="btn btn-outline">Acheter Maintenant</Link>
                        </div>
                    </div>
                </div>
            )
        })
    ): (<ReactLoading className={"productsloading"} type="spin" color="#f0b54d" height={"200px"} width="20%"/>);


    return (
        <div id={"main-products-page"}>
            {/*<Breadcrumb title={'Collection'}/>*/}
            <section className="collection section-b-space">
                <div className="container">
                    <div className="title2">
                        <h4>recent</h4>
                        <h2 className="title-inner2">Produits</h2>
                    </div>

                    <div className="row partition-collection">
                        {products_display}
                    </div>
                        {/*
                        <div className="col-lg-3 col-md-6">
                            <div className="collection-block">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/collection/1.jpg`}
                                    className="img-fluid" alt="" />
                                <div className="collection-content">

                                    <h3>fashion</h3>
                                    <h4>13.95 $</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry....</p>
                                    <span>Lorem ipsum dolor sit amet ipsum am.</span>
                                    <div className="rating">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" /><i className="fa fa-star" />
                                        <i className="fa fa-star" /><i className="fa fa-star" />
                                    </div>

                                    <div className={"rating-num"}>4.87</div>
                                    <a href="category-page.html" className="btn btn-outline">Acheter Maintenant</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="collection-block">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/collection/3.jpg`}
                                    className="img-fluid" alt="" />
                                <div className="collection-content">

                                    <h3>fashion</h3>
                                    <h4>13.95 $</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry....</p>
                                    <span>Lorem ipsum dolor sit amet ipsum am.</span>
                                    <div className="rating">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" /><i className="fa fa-star" />
                                        <i className="fa fa-star" /><i className="fa fa-star" />
                                    </div>
                                    <div className={"rating-num"}>4.87</div>
                                    <a href="category-page.html" className="btn btn-outline">Acheter Maintenant</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="collection-block">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/collection/5.jpg`}
                                    className="img-fluid" alt="" />
                                <div className="collection-content">

                                    <h3>fashion</h3>
                                    <h4>13.95 $</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry....</p>
                                    <span>Lorem ipsum dolor sit amet ipsum am.</span>
                                    <div className="rating">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" /><i className="fa fa-star" />
                                        <i className="fa fa-star" /><i className="fa fa-star" />
                                    </div>
                                    <div className={"rating-num"}>4.87</div>
                                    <a href="category-page.html" className="btn btn-outline">Acheter Maintenant</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="collection-block">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/collection/6.jpg`}
                                    className="img-fluid" alt="" />
                                <div className="collection-content">

                                    <h3>fashion</h3>
                                    <h4>13.95 $</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry....</p>
                                    <span>Lorem ipsum dolor sit amet ipsum am.</span>
                                    <div className="rating">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" /><i className="fa fa-star" />
                                        <i className="fa fa-star" /><i className="fa fa-star" />
                                    </div>
                                    <div className={"rating-num"}>4.87</div>
                                    <a href="category-page.html" className="btn btn-outline">Acheter Maintenant</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row partition-collection section-t-space">
                        <div className="col-lg-3 col-md-6">
                            <div className="collection-block">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/collection/7.jpg`}
                                    className="img-fluid" alt="" />
                                <div className="collection-content">

                                    <h3>fashion</h3>
                                    <h4>13.95 $</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry....</p>
                                    <span>Lorem ipsum dolor sit amet ipsum am.</span>
                                    <div className="rating">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" /><i className="fa fa-star" />
                                        <i className="fa fa-star" /><i className="fa fa-star" />
                                    </div>
                                    <div className={"rating-num"}>4.87</div>
                                    <a href="category-page.html" className="btn btn-outline">Acheter Maintenant</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="collection-block">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/collection/8.jpg`}
                                    className="img-fluid" alt="" />
                                <div className="collection-content">

                                    <h3>fashion</h3>
                                    <h4>13.95 $</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry....</p>
                                    <span>Lorem ipsum dolor sit amet ipsum am.</span>
                                    <div className="rating">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" /><i className="fa fa-star" />
                                        <i className="fa fa-star" /><i className="fa fa-star" />
                                    </div>
                                    <div className={"rating-num"}>4.87</div>
                                    <a href="category-page.html" className="btn btn-outline">Acheter Maintenant</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="collection-block">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/collection/9.jpg`}
                                    className="img-fluid" alt="" />
                                <div className="collection-content">

                                    <h3>fashion</h3>
                                    <h4>13.95 $</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry....</p>
                                    <span>Lorem ipsum dolor sit amet ipsum am.</span>
                                    <div className="rating">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" /><i className="fa fa-star" />
                                        <i className="fa fa-star" /><i className="fa fa-star" />
                                    </div>
                                    <div className={"rating-num"}>4.87</div>
                                    <a href="category-page.html" className="btn btn-outline">Acheter Maintenant</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="collection-block">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/collection/11.jpg`}
                                    className="img-fluid" alt="" />
                                <div className="collection-content">

                                    <h3>fashion</h3>
                                    <h4>13.95 $</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry....</p>
                                    <span>Lorem ipsum dolor sit amet ipsum am.</span>
                                    <div className="rating">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" /><i className="fa fa-star" />
                                        <i className="fa fa-star" /><i className="fa fa-star" />
                                    </div>
                                    <div className={"rating-num"}>4.87</div>
                                    <a href="category-page.html" className="btn btn-outline">Acheter Maintenant</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row partition-collection section-t-space">
                        <div className="col-lg-3 col-md-6">
                            <div className="collection-block">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/collection/7.jpg`}
                                    className="img-fluid" alt="" />
                                <div className="collection-content">

                                    <h3>fashion</h3>
                                    <h4>13.95 $</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry....</p>
                                    <span>Lorem ipsum dolor sit amet ipsum am.</span>
                                    <div className="rating">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" /><i className="fa fa-star" />
                                        <i className="fa fa-star" /><i className="fa fa-star" />
                                    </div>
                                    <div className={"rating-num"}>4.87</div>
                                    <a href="category-page.html" className="btn btn-outline">Acheter Maintenant</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="collection-block">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/collection/8.jpg`}
                                    className="img-fluid" alt="" />
                                <div className="collection-content">

                                    <h3>fashion</h3>
                                    <h4>13.95 $</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry....</p>
                                    <span>Lorem ipsum dolor sit amet ipsum am.</span>
                                    <div className="rating">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" /><i className="fa fa-star" />
                                        <i className="fa fa-star" /><i className="fa fa-star" />
                                    </div>
                                    <div className={"rating-num"}>4.87</div>
                                    <a href="category-page.html" className="btn btn-outline">Acheter Maintenant</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="collection-block">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/collection/9.jpg`}
                                    className="img-fluid" alt="" />
                                <div className="collection-content">

                                    <h3>fashion</h3>
                                    <h4>13.95 $</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry....</p>
                                    <span>Lorem ipsum dolor sit amet ipsum am.</span>
                                    <div className="rating">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" /><i className="fa fa-star" />
                                        <i className="fa fa-star" /><i className="fa fa-star" />
                                    </div>
                                    <div className={"rating-num"}>4.87</div>
                                    <a href="category-page.html" className="btn btn-outline">Acheter Maintenant</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="collection-block">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/collection/11.jpg`}
                                    className="img-fluid" alt="" />
                                <div className="collection-content">

                                    <h3>fashion</h3>
                                    <h4>13.95 $</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry....</p>
                                    <span>Lorem ipsum dolor sit amet ipsum am.</span>
                                    <div className="rating">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" /><i className="fa fa-star" />
                                        <i className="fa fa-star" /><i className="fa fa-star" />
                                    </div>
                                    <div className={"rating-num"}>4.87</div>
                                    <a href="category-page.html" className="btn btn-outline">Acheter Maintenant</a>
                                </div>
                            </div>
                        </div>
                    </div>*/}
                </div>
            </section>

        </div>
    )
}

export default withAuth(Products);