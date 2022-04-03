import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withTranslate } from "react-redux-multilingual";

class NavBar extends Component {
    state = {
        navClose: { right: "0px" },
    };

    componentWillMount() {
        if (window.innerWidth < 750) {
            this.setState({ navClose: { right: "-410px" } });
        }
        if (window.innerWidth < 1199) {
            this.setState({ navClose: { right: "-300px" } });
        }
    }

    openNav() {
        this.setState({ navClose: { right: "0px" } });
    }

    closeNav() {
        this.setState({ navClose: { right: "-410px" } });
    }

    render() {
        const { translate } = this.props;
        return (
            <div>
                <div className="main-navbar">
                    <div id="mainnav">
                        <div
                            className="toggle-nav"
                            onClick={this.openNav.bind(this)}
                        >
                            <i className="fa fa-bars sidebar-bar" />
                        </div>
                        <ul className="nav-menu" style={this.state.navClose}>
                            <li
                                className="back-btn"
                                onClick={this.closeNav.bind(this)}
                            >
                                <div className="mobile-back text-right">
                                    <span>Back</span>
                                    <i
                                        className="fa fa-angle-right pl-2"
                                        aria-hidden="true"
                                    />
                                </div>
                            </li>
                            <li>
                                <Link to={"/blog"} className="nav-link">
                                    Forum Ayen
                                    <span className="sub-arrow" />
                                </Link>
                            </li>
                            <li>
                                <Link to="/search" className="nav-link">
                                    Search
                                    <span className="sub-arrow" />
                                </Link>
                            </li>
                            <li>
                                <Link to="" className="nav-link">
                                    Maison et déco
                                    <span className="sub-arrow" />
                                </Link>
                            </li>
                            <li>
                                <Link to="" className="nav-link">
                                    Mariage et fêtes
                                    <span className="sub-arrow" />
                                </Link>
                            </li>
                            <li>
                                <Link to="" className="nav-link">
                                    Vêtements et chaussures
                                    <span className="sub-arrow" />
                                </Link>
                            </li>
                            <li>
                                <Link to="/about-us" className="nav-link">
                                    About-us
                                    <span className="sub-arrow" />
                                </Link>
                            </li>
                            <li>
                                <Link to="/faq" className="nav-link">
                                    FAQ
                                    <span className="sub-arrow" />
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="nav-link">
                                    Contact    
                                    <span className="sub-arrow" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default withTranslate(NavBar);
