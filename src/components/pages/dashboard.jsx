import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userSignout } from '../../actions/authActions';
import { Link } from 'react-router-dom';
import { SIGNIN_RESET } from '../../constants/ActionTypes';
import ReactLoading from "react-loading";


const Dashboard = () => {

    const [loading, setLoading] = useState(true);

    const {user} = useSelector(state=>state.auth);
    const dispatch = useDispatch();

    const handleSignout = (e) => {
        e.preventDefault();
        dispatch({
            type: SIGNIN_RESET
        })
        localStorage.removeItem("auth");
        window.location.assign("/signin");
    }

    useEffect(()=>{
        if(user)
            setLoading(false);
    });

    return (
        <div className='user-dashboard'>
            <div className="title4" style={{ marginTop: "50px" }}>
                <h2 className="title-inner4">Dashboard</h2>
                <div className="line">
                    <span></span>
                </div>
            </div>
            {/*Dashboard section*/}
            <section className="section-b-space">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="account-sidebar">
                                <Link className="popup-btn">
                                    mon compte
                                </Link>
                            </div>
                            <div className="dashboard-left">
                                <div className="collection-mobile-back">
                                    <span className="filter-back">
                                        <i className="fa fa-angle-left" aria-hidden="true"></i> Retour
                                    </span>
                                </div>
                                <div className="block-content">
                                    <ul>
                                        <li className="active"><a href='#account-infos'>Informations du compte</a></li>
                                        <li><a href="#address-book">Address Book</a></li>
                                        <li><a href="#my-orders">My Orders</a></li>
                                        <li><a href="#my-wishlist">My Wishlist</a></li>
                                        <li><a href="#newsletter">Newsletter</a></li>
                                        <li><a href="#account">Mon Compte</a></li>
                                        <li><a href="#reset-password">Change Password</a></li>
                                        <li className="last">
                                            <a href="#" onClick={handleSignout}>Déconnexion</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="dashboard-right">
                                <form>
                                { loading ? <ReactLoading className={"dashboard-loading"} type="spin" color="#f0b54d" width="20%"/> : (
                                <div className="dashboard">
                                    <div className="page-title">
                                        <h2>Mon Compte</h2>
                                    </div>
                                    <div className="row avatar">
                                        <div className="col-sm-12">
                                        <input type="file" id="avatar-input" name="avatar" />
                                            {
                                                user ? user.avatar ? <img onClick={()=>{document.getElementById("avatar-input").click()}} src={`${process.env.REACT_APP_API_ADDR + user.avatar}`} alt="avatar.png" /> : <img onClick={()=>{document.getElementById("avatar-input").click()}} src={`${process.env.PUBLIC_URL}/assets/images/icon/upload.png`} alt={"upload.png"} /> : <ReactLoading className={"avatar-loading"} type="spin" color="#f0b54d" width="5%"/>
                                            }
                                        </div>
                                        <div className='col-sm-12'>
                                            <a style={{marginTop: "10px"}} className='btn btn-danger'>Remove</a>
                                        </div>
                                    </div>
                                    <div className="box-account box-info">
                                        <div className="box-head">
                                            <h2>Account Information</h2>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="box">
                                                    <div className="box-title">
                                                        <h3>Contact Information</h3>
                                                        <a href="#">Edit</a>
                                                    </div>
                                                    <div className="box-content">
                                                        <h6>MARK JECNO</h6>
                                                        <h6>MARk-JECNO@gmail.com</h6>
                                                        <h6><a href="#">Change Password</a></h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="box">
                                                    <div className="box-title">
                                                        <h3>Newsletters</h3>
                                                        <a href="#">Edit</a>
                                                    </div>
                                                    <div className="box-content">
                                                        <p>
                                                            You are currently not subscribed to any newsletter.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="box">
                                                <div className="box-title">
                                                    <h3>Address Book</h3>
                                                    <a href="#">Manage Addresses</a>
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <h6>Default Billing Address</h6>
                                                        <address>
                                                            You have not set a default billing address.<br />
                                                            <a href="#">Edit Address</a>
                                                        </address>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <h6>Default Shipping Address</h6>
                                                        <address>
                                                            You have not set a default shipping address.<br />
                                                            <a href="#">Edit Address</a>
                                                        </address>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>)}
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Dashboard