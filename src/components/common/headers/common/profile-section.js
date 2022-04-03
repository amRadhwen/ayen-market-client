import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { userSignout } from '../../../../actions/authActions';
import { Link } from "react-router-dom";

export default function Profilesection({handleSignout}) {
    const {user} = useSelector(state=>state.auth);
    const profile_pic = user && user.avatar ? `${process.env.REACT_APP_API_ADDR+user.avatar}` : `${process.env.PUBLIC_URL}/assets/images/icon/users.png`;

    return(
        <div className='profile-section'>
            <ul className='profile-section-list'>
                <li><Link to="/wishlist"><img src={`${process.env.PUBLIC_URL}/assets/images/icon/empty-fav.png`} alt="fav.png"/></Link></li>
                <li><Link to="/notifications"><img src={`${process.env.PUBLIC_URL}/assets/images/icon/empty-not.png`} alt="notif.png"/></Link></li>
                <li><Link to="/shops"><img src={`${process.env.PUBLIC_URL}/assets/images/icon/empty-shop.png`} alt="shop.png"/></Link></li>
                <li><Link to="/products"><img src={`${process.env.PUBLIC_URL}/assets/images/icon/product.png`} alt="product.png"/></Link></li>
                <li><Link to="/dashboard"><img className="profile_avatar" src={profile_pic} alt="profile.png"/></Link></li>
                <li><Link onClick={handleSignout} to="/signout"><img src={`${process.env.PUBLIC_URL}/assets/images/icon/signout.png`} alt={"signout.png"} /></Link></li>
            </ul>
        </div>
    )
}
