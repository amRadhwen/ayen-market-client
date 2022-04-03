import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {SlideUpDown} from "../../../services/script";
import LogoImage from "../headers/common/logo";
import {withTranslate} from "react-redux-multilingual";

class FooterOne extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let contentwidth = window.innerWidth;
        if ((contentwidth) < 750) {
            SlideUpDown('footer-title');
        } else {
            let elems = document.querySelectorAll(".footer-title");
            [].forEach.call(elems, function (elemt) {
                let el = elemt.nextElementSibling;
                el.style = "display: block";
            });
        }
    }


    render() {
        let {translate} = this.props;
        return (
            <footer className="footer-dark">
                <div>
                    <div className="container">
                        <section className="small-section">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h4 className={"footer-main-title"}>NEWSLETTER</h4>
                                </div>
                                <div className="col-lg-12">
                                    <h1 className={"footer-newsletter-special-offer"}>15% De Réduction Pour Les
                                        Membres</h1>
                                    <p className={"footer-newsletter-desc"}>
                                        Vous pouvez vous désinscrire à tout moment. Vous trouverez <br/>pour cela nos
                                        informations de contact dans les conditions d'utilisations de notre site.
                                    </p>
                                </div>
                                <div className={"col-lg-12 footer-newsletter-form-section"}>
                                    <form className={"footer-newsletter-form"}>
                                        <input type="text" id={"newsletter-email"}/>
                                        <button type={"submit"}>S'abonner</button>
                                    </form>
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/icon/top.png`} alt={"top.png"}/>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <section className="section-b-space footer-main-menu">
                    <div className="container">
                        <div className="row footer-theme partition-f">
                            <div className="col">
                                <div className="sub-title">
                                    <div className="footer-title">
                                        <h4>Products</h4>
                                    </div>
                                    <div className="footer-content">
                                        <ul>
                                            <li><a href="#">Furniture</a></li>
                                            <li><a href="#">Decoration</a></li>
                                            <li><a href="#">Storage</a></li>
                                            <li><a href="#">Baby and Child</a></li>
                                            <li><a href="#">Connected home</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="sub-title">
                                    <div className="footer-title">
                                        <h4>Rooms</h4>
                                    </div>
                                    <div className="footer-content">
                                        <ul>
                                            <li><a href="#">Living room</a></li>
                                            <li><a href="#">Dining room</a></li>
                                            <li><a href="#">Cooked</a></li>
                                            <li><a href="#">Badroom</a></li>
                                            <li><a href="#">Bathroom</a></li>
                                            <li><a href="#">Office</a></li>
                                            <li><a href="#">Laundry</a></li>
                                            <li><a href="#">Garage</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="sub-title">
                                    <div className="footer-title">
                                        <h4>Services</h4>
                                    </div>
                                    <div className="footer-content">
                                        <ul>
                                            <li><a href="#">Click and collect</a></li>
                                            <li><a href="#">Conception</a></li>
                                            <li><a href="#">Installation</a></li>
                                            <li><a href="#">Advices</a></li>
                                            <li><a href="#">Gift card</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="sub-title">
                                    <div className="footer-title">
                                        <h4>About</h4>
                                    </div>
                                    <div className="footer-content">
                                        <ul>
                                            <li><a href="#">Our story</a></li>
                                            <li><a href="#">Our stories</a></li>
                                            <li><a href="#">Our partners</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="sub-title">
                                    <div className="footer-title">
                                        <h4>We respect our planet</h4>
                                    </div>
                                    <div className="footer-content">
                                        <p className={"footer-content-desc"}>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
                                            distinctio
                                            dolores eligendi.
                                        </p>
                                        <a style={{"color": "white"}} href={"#"} id={"learn-more-link"}>Learn more &gt;</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"row"}>
                            <div className={"col-lg-12 footer-social-media-links"}>
                                <a href={"#"}><img src={`${process.env.PUBLIC_URL}/assets/images/icon/Facebook.png`}/></a>
                                <a href={"#"}><img src={`${process.env.PUBLIC_URL}/assets/images/icon/Twitter.png`}/></a>
                                <a href={"#"}><img src={`${process.env.PUBLIC_URL}/assets/images/icon/Linkedin.png`}/></a>
                                <a href={"#"}><img src={`${process.env.PUBLIC_URL}/assets/images/icon/Instagram.png`}/></a>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="sub-footer footer-main-subfooter">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 subfooter-left">
                                <a href={"#"}><i className="fa fa-copyright" aria-hidden="true"></i> 2021 Ayen, Inc</a>
                            </div>
                            <div className={"col-lg-4 subfooter-right"}>
                                <a href={"#"}>Privacy policy</a>
                                <a href={"#"}>Term of service</a>
                                <a href={"#"}>Language</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default withTranslate(FooterOne);
