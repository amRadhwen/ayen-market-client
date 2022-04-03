import React from "react";
import withAuth from "../../protection/withAuth";
import CollectionLeftSidebar from "../collection/collection-left-sidebar";

const VendorProfile = () => {

    return (
        <div id="vendor-profile">
            <div>
                <div className="vendor-cover">
                    <div className="bg-size" />
                </div>
                <section className="vendor-profile pt-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="profile-left">
                                    <div className="profile-image">
                                        <div>
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/vendor-profile.png`}
                                                alt="" className="img-fluid media" />
                                            <h3>Fashion Store</h3>
                                            <div className="rating">
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" /><i className="fa fa-star" />
                                                <i className="fa fa-star" /><i className="fa fa-star" />
                                            </div>
                                            <h6>750 followers | 10 review</h6>
                                        </div>
                                    </div>
                                    <div className="profile-detail">
                                        <div><p>Based in United States, Fashion store has been an Multikart member since
                                            May 15, 2017. Fashion Store are engaged in all kinds of western clothing. In
                                            garment field we have maintained 3 years exporting experience. company
                                            insist in the principle of "Customer first, Quality uppermost".Based in
                                            United States, Fashion store has been an </p><p>Based in United States,
                                                Fashion store has been an Multikart member since May 15, 2017. Fashion Store
                                                are engaged in all kinds of western clothing. In garment field we have
                                                maintained 3 years exporting experience. company insist in the principle of
                                                "Customer first, Quality uppermost"</p></div>
                                    </div>
                                    <div className="vendor-contact">
                                        <div><h6>follow us:</h6>
                                            <div className="footer-social">
                                                <ul>
                                                    <li><a href="https://www.facebook.com" target="_blank"><i
                                                        className="fa fa-facebook" aria-hidden="true" /></a></li>
                                                    <li><a href="https://plus.google.com" target="_blank"><i
                                                        className="fa fa-google-plus" aria-hidden="true" /></a></li>
                                                    <li><a href="https://twitter.com" target="_blank"><i
                                                        className="fa fa-twitter" aria-hidden="true" /></a></li>
                                                    <li><a href="https://www.instagram.com" target="_blank"><i
                                                        className="fa fa-instagram" aria-hidden="true" /></a></li>
                                                </ul>
                                            </div>
                                            <h6>if you have any query:</h6>
                                            <a href="#" className="btn btn-solid btn-sm">contact seller</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <CollectionLeftSidebar />
        </div>
    )
}

export default withAuth(VendorProfile);