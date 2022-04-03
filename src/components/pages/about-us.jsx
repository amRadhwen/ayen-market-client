import React, {Component} from 'react';
import Slider from 'react-slick';
/*
import Breadcrumb from "../common/breadcrumb";
import {Slider2, Team4} from "../../services/script"
 */

class aboutUs extends Component {

    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div id={"about-us"}>
                <section className="about-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 section-one">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/one.png`} alt={"one.png"}/>
                                <span>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore dolorem iste itaque quisquam recusandae? Animi beatae, consectetur culpa illum impedit incidunt iure laborum maxime, placeat quis, ratione velit veniam voluptas?
                                </span>
                            </div>
                            <div className="col-lg-12 section-two">
                                <span>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore dolorem iste itaque quisquam recusandae? Animi beatae, consectetur culpa illum impedit incidunt iure laborum maxime, placeat quis, ratione velit veniam voluptas?
                                </span>
                                <img src={`${process.env.PUBLIC_URL}/assets/images/two.png`} alt={"two.png"}/>
                            </div>
                            <div className="col-lg-12 section-three">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/three.png`} alt={"three.png"}/>
                                <span>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore dolorem iste itaque quisquam recusandae? Animi beatae, consectetur culpa illum impedit incidunt iure laborum maxime, placeat quis, ratione velit veniam voluptas?
                                </span>
                            </div>
                            <div className="col-lg-12 section-four">
                                <a href={"#"}>Créer votre boutique</a>
                                <div>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid aut, commodi dolorum eligendi ipsum labore laudantium mollitia nam nostrum quia repellat. Cumque eum impedit molestiae quidem sapiente sed voluptatem.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*<Breadcrumb title={'About Us'}/>

                <section className="about-page  section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="banner-section">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/about/about%20us.jpg`} className="img-fluid" alt=""/>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <h4>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                    doloremque laudantium</h4>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                    laudantium,</p>
                                <p>On the other hand, we denounce with righteous indignation and dislike men who are so
                                    beguiled and demoralized by the charms of pleasure of the moment, so blinded by
                                    desire, that they cannot foresee the pain and trouble that are bound to ensue; and
                                    equal blame belongs to those who fail in their duty through weakness of will, which
                                    is the same as saying through shrinking from toil and pain. These cases are
                                    perfectly simple and easy to distinguish. In a free hour, when our power of choice
                                    is untrammelled and when nothing prevents our being able to do what we like best,
                                    every pleasure is to be welcomed and every pain avoided. But in certain
                                    circumstances and owing to the claims of duty or the obligations of business it will
                                    frequently occur that pleasures have to be repudiated and annoyances accepted. The
                                    wise man therefore always holds in these matters to this principle of selection: he
                                    rejects pleasures to secure other greater pleasures, or else he endures pains to
                                    avoid worse pains.</p>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="testimonial small-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <Slider {...Slider2} className="slide-2 testimonial-slider no-arrow">
                                    <div>
                                        <div className="media">
                                            <div className="text-center">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/avtar.jpg`} alt="#" />
                                                    <h5>Mark Jecno</h5>
                                                    <h6>Designer</h6>
                                            </div>
                                            <div className="media-body">
                                                <p>you how all this mistaken idea of denouncing pleasure and praising
                                                    pain was born and I will give you a complete account of the system,
                                                    and expound the actual teachings.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="media">
                                            <div className="text-center">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/2.jpg`} alt="#" />
                                                    <h5>Mark Jecno</h5>
                                                    <h6>Designer</h6>
                                            </div>
                                            <div className="media-body">
                                                <p>you how all this mistaken idea of denouncing pleasure and praising
                                                    pain was born and I will give you a complete account of the system,
                                                    and expound the actual teachings.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="media">
                                            <div className="text-center">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/avtar.jpg`} alt="#" />
                                                    <h5>Mark Jecno</h5>
                                                    <h6>Designer</h6>
                                            </div>
                                            <div className="media-body">
                                                <p>you how all this mistaken idea of denouncing pleasure and praising
                                                    pain was born and I will give you a complete account of the system,
                                                    and expound the actual teachings.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="media">
                                            <div className="text-center">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/avtar.jpg`} alt="#" />
                                                    <h5>Mark Jecno</h5>
                                                    <h6>Designer</h6>
                                            </div>
                                            <div className="media-body">
                                                <p>you how all this mistaken idea of denouncing pleasure and praising
                                                    pain was born and I will give you a complete account of the system,
                                                    and expound the actual teachings.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="media">
                                            <div className="text-center">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/avtar.jpg`} alt="#" />
                                                    <h5>Mark Jecno</h5>
                                                    <h6>Designer</h6>
                                            </div>
                                            <div className="media-body">
                                                <p>you how all this mistaken idea of denouncing pleasure and praising
                                                    pain was born and I will give you a complete account of the system,
                                                    and expound the actual teachings.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="media">
                                            <div className="text-center">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/avtar.jpg`} alt="#" />
                                                    <h5>Mark Jecno</h5>
                                                    <h6>Designer</h6>
                                            </div>
                                            <div className="media-body">
                                                <p>you how all this mistaken idea of denouncing pleasure and praising
                                                    pain was born and I will give you a complete account of the system,
                                                    and expound the actual teachings.</p>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </section>


                <section id="team" className="team section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <h2>Our Team</h2>
                                <Slider {...Team4} className="team-4">
                                    <div>
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/team/1.jpg`} className="img-fluid" alt=""/>
                                        <h4>Hileri Keol</h4>
                                        <h6>CEo & Founder At Company</h6>
                                    </div>
                                    <div>
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/team/2.jpg`} className="img-fluid" alt=""/>
                                        <h4>Hileri Keol</h4>
                                        <h6>CEo & Founder At Company</h6>
                                    </div>
                                    <div>
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/team/3.jpg`} className="img-fluid" alt=""/>
                                        <h4>Hileri Keol</h4>
                                        <h6>CEo & Founder At Company</h6>
                                    </div>
                                    <div>
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/team/4.jpg`} className="img-fluid" alt=""/>
                                        <h4>Hileri Keol</h4>
                                        <h6>CEo & Founder At Company</h6>
                                    </div>
                                    <div>
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/team/1.jpg`} className="img-fluid" alt=""/>
                                        <h4>Hileri Keol</h4>
                                        <h6>CEo & Founder At Company</h6>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </section>


                <div className="container about-cls section-b-space">
                    <section className="service border-section small-section ">
                        <div className="row">
                            <div className="col-md-4 service-block">
                                <div className="media">
                                    <div dangerouslySetInnerHTML={{ __html: svgFreeShipping }} />
                                    <div className="media-body">
                                        <h4>free shipping</h4>
                                        <p>free shipping world wide</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 service-block">
                                <div className="media">
                                    <div dangerouslySetInnerHTML={{ __html: svgservice }} />
                                    <div className="media-body">
                                        <h4>24 X 7 service</h4>
                                        <p>online service for new customer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 service-block">
                                <div className="media">
                                    <div dangerouslySetInnerHTML={{ __html: svgoffer }} />
                                    <div className="media-body">
                                        <h4>festival offer</h4>
                                        <p>new online special festival offer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                */}

            </div>
        )
    }
}

export default aboutUs