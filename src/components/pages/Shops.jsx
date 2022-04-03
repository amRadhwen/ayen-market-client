import React, { Component } from 'react';
import withAuth from '../../protection/withAuth';
import Breadcrumb from "../common/breadcrumb";
import { Link } from 'react-router-dom';

const Shops = () => {
    return (
        <div>
            {/*<Breadcrumb title={'Collection'}/>*/}
            <section className="collection section-b-space">
                <div className="container">
                    <div className="title2">
                        <h4>recent</h4>
                        <h2 className="title-inner2">Boutiques</h2>
                    </div>
                    <div className="row partition-collection">
                        <div className="col-lg-3 col-md-6">
                            <div className="collection-block">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/collection/1.jpg`} className="img-fluid" alt="" />
                                <div className="collection-content">
                                    <h4>(20 products)</h4>
                                    <h3>fashion</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry....</p>
                                    <Link to="/vendor-profile" className="btn btn-outline">Visiter Maintenant</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="collection-block">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/collection/3.jpg`} className="img-fluid" alt="" />
                                <div className="collection-content">
                                    <h4>(20 products)</h4>
                                    <h3>fashion</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry....</p>
                                    <Link to="/vendor-profile" className="btn btn-outline">Visiter Maintenant</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="collection-block">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/collection/5.jpg`} className="img-fluid" alt="" />
                                <div className="collection-content">
                                    <h4>(20 products)</h4>
                                    <h3>fashion</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry....</p>
                                    <Link to="/vendor-profile" className="btn btn-outline">Visiter Maintenant</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="collection-block">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/collection/6.jpg`} className="img-fluid" alt="" />
                                <div className="collection-content">
                                    <h4>(20 products)</h4>
                                    <h3>fashion</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry....</p>
                                    <Link to="/vendor-profile" className="btn btn-outline">Visiter Maintenant</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row partition-collection section-t-space">
                        <div className="col-lg-3 col-md-6">
                            <div className="collection-block">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/collection/7.jpg`} className="img-fluid" alt="" />
                                <div className="collection-content">
                                    <h4>(20 products)</h4>
                                    <h3>fashion</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry....</p>
                                    <Link to="/vendor-profile" className="btn btn-outline">Visiter Maintenant</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="collection-block">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/collection/8.jpg`} className="img-fluid" alt="" />
                                <div className="collection-content">
                                    <h4>(20 products)</h4>
                                    <h3>fashion</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry....</p>
                                    <Link to="/vendor-profile" className="btn btn-outline">Visiter Maintenant</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="collection-block">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/collection/9.jpg`} className="img-fluid" alt="" />
                                <div className="collection-content">
                                    <h4>(20 products)</h4>
                                    <h3>fashion</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry....</p>
                                    <Link to="/vendor-profile" className="btn btn-outline">Visiter Maintenant</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="collection-block">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/collection/11.jpg`} className="img-fluid" alt="" />
                                <div className="collection-content">
                                    <h4>(20 products)</h4>
                                    <h3>fashion</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry....</p>
                                    <Link to="/vendor-profile" className="btn btn-outline">Visiter Maintenant</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row partition-collection section-t-space">
                        <div className="col-lg-3 col-md-6">
                            <div className="collection-block">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/collection/7.jpg`} className="img-fluid" alt="" />
                                <div className="collection-content">
                                    <h4>(20 products)</h4>
                                    <h3>fashion</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry....</p>
                                    <Link to="/vendor-profile" className="btn btn-outline">Visiter Maintenant</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="collection-block">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/collection/8.jpg`} className="img-fluid" alt="" />
                                <div className="collection-content">
                                    <h4>(20 products)</h4>
                                    <h3>fashion</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry....</p>
                                    <Link to="/vendor-profile" className="btn btn-outline">Visiter Maintenant</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="collection-block">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/collection/9.jpg`} className="img-fluid" alt="" />
                                <div className="collection-content">
                                    <h4>(20 products)</h4>
                                    <h3>fashion</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry....</p>
                                    <Link to="/vendor-profile" className="btn btn-outline">Visiter Maintenant</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="collection-block">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/collection/11.jpg`} className="img-fluid" alt="" />
                                <div className="collection-content">
                                    <h4>(20 products)</h4>
                                    <h3>fashion</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry....</p>
                                    <Link to="/vendor-profile" className="btn btn-outline">Visiter Maintenant</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}


export default withAuth(Shops);