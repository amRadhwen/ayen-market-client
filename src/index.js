import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll-4';
import './index.scss';
import './app.css';

// Import custom components
import store from './store';
import { getAllProducts } from './actions'
//import Landing from './components/landing'

// Layout
//import Beauty from './components/layouts/beauty/main';

//Collection Pages
import CollectionLeftSidebar from "./components/collection/collection-left-sidebar";

// Product Pages
//import LeftSideBar from "./components/products/left-sidebar";
//import RightSideBar from "./components/products/right-sidebar";
//import NoSideBar from "./components/products/no-sidebar";
import LeftImage from "./components/products/left-image";
//import RightImage from "./components/products/right-image";
//import Accordian from "./components/products/accordian";
//import ColumnLeft from "./components/products/column-left";
//import ColumnRight from "./components/products/column-right";
//import Column from "./components/products/column";
//import Vertical from "./components/products/vertical";

// Features
import Layout from './components/app'
import Cart from './components/cart'
import Compare from './components/compare/index'
import wishList from './components/wishlist'
import checkOut from './components/checkout'
import orderSuccess from './components/checkout/success-page'

// Extra Pages
import Home from './components/pages/Home';
import Notification from "./components/pages/Notification";
import aboutUs from './components/pages/about-us'
import PageNotFound from './components/pages/404'
//import lookbook from './components/pages/lookbook'
import Signin from './components/pages/signin'
import Signup from './components/pages/signup'
import Search from './components/pages/search'
import Shops from './components/pages/Shops'
import ForgetPassword from './components/pages/forget-password'
import Contact from './components/pages/contact'
import Dashboard from './components/pages/dashboard'
import Faq from './components/pages/faq'
import VendorProfile from "./components/pages/vendor-profile";
import Products from "./components/pages/Products";

// Blog Pages
import RightSide from './components/blogs/right-sidebar'
import Details from './components/blogs/details'
import BlogPage from './components/blogs/blog-page'

// Theme Element
import ElementTitle from "./components/features/theme/element-title"
import ElementBanner from "./components/features/theme/element-banner";
import ElementSlider from "./components/features/theme/element-slider";
import ElementCategory from "./components/features/theme/element-category";
import ElementService from "./components/features/theme/element-service";
import ElementRatio from "./components/features/theme/element-ratio";

// Product Elements
import ElementProductBox from "./components/features/product/element-product-box"
import ElementProductSlider from "./components/features/product/element-product-slider"
import ElementProductNoSlider from "./components/features/product/element-product-no-slider"
import ElementMultipleSlider from "./components/features/product/element-multiple-slider"
import ElementProductTab from "./components/features/product/element-product-tab"

// Portfolio Features
import GridCols from "./components/features/portfolio/grid-cols"
import MasonaryGridCols from "./components/features/portfolio/masonary-grid-cols"
import withAuth from './protection/withAuth';
import isAuth from "./protection/isAuth";

function Root() {
    store.dispatch(getAllProducts());

    return (
        <Provider store={store}>
                <BrowserRouter basename={'/'}>
                    <ScrollContext>
                        <Layout>
                            <Switch>

                                <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
                                <Route path={`${process.env.PUBLIC_URL}/notifications`} component={Notification} />

                                {/*Routes For Features (Product Collection) */}
                                <Route path={`${process.env.PUBLIC_URL}/left-sidebar/collection`} component={CollectionLeftSidebar} />

                                <Route path={`${process.env.PUBLIC_URL}/signin`} component={Signin} />
                                <Route path={`${process.env.PUBLIC_URL}/signup`} render={props=><Signup {...props} />} />
                                <Route path={`${process.env.PUBLIC_URL}/search`} component={withAuth(Search)} />
                                <Route path={`${process.env.PUBLIC_URL}/shops`} component={Shops} />
                                <Route path={`${process.env.PUBLIC_URL}/forget-password`} component={isAuth(ForgetPassword)} />
                                <Route path={`${process.env.PUBLIC_URL}/contact`} component={Contact} />
                                <Route path={`${process.env.PUBLIC_URL}/dashboard`} component={withAuth(Dashboard)} />
                                <Route path={`${process.env.PUBLIC_URL}/faq`} component={Faq} />
                                <Route path={`${process.env.PUBLIC_URL}/vendor-profile`} component={VendorProfile} />
                                <Route path={`${process.env.PUBLIC_URL}/products/:id`} component={LeftImage} />
                                <Route path={`${process.env.PUBLIC_URL}/products`} component={Products} />
                                <Route path={`${process.env.PUBLIC_URL}/about-us`} component={aboutUs} />
                                <Route path={`${process.env.PUBLIC_URL}/cart`} component={Cart} />
                                <Route path={`${process.env.PUBLIC_URL}/wishlist`} component={withAuth(wishList)} />
                                {/*<Route path={`${process.env.PUBLIC_URL}/compare`} component={withAuth(Compare)} />*/}
                                <Route path={`${process.env.PUBLIC_URL}/checkout`} component={withAuth(checkOut)} />
                                {/*<Route path={`${process.env.PUBLIC_URL}/order-success`} component={withAuth(orderSuccess)} />*/}
                                {/*<Route path={`${process.env.PUBLIC_URL}/sales/orders`} component={aboutUs} />*/}


                                {/*Features*/}
                                {/*Theme Elements*/}
                                <Route path={`${process.env.PUBLIC_URL}/features/element-title`} component={withAuth(ElementTitle)} />
                                <Route path={`${process.env.PUBLIC_URL}/features/element-banner`} component={withAuth(ElementBanner)} />
                                <Route path={`${process.env.PUBLIC_URL}/features/element-slider`} component={withAuth(ElementSlider)} />
                                <Route path={`${process.env.PUBLIC_URL}/features/element-category`} component={withAuth(ElementCategory)} />
                                <Route path={`${process.env.PUBLIC_URL}/features/element-service`} component={withAuth(ElementService)} />
                                <Route path={`${process.env.PUBLIC_URL}/features/element-ratio`} component={withAuth(ElementRatio)} />

                                {/*Product Elements*/}
                                <Route path={`${process.env.PUBLIC_URL}/features/element-product-box`} component={withAuth(ElementProductBox)} />
                                <Route path={`${process.env.PUBLIC_URL}/features/element-product-slider`} component={withAuth(ElementProductSlider)} />
                                <Route path={`${process.env.PUBLIC_URL}/features/element-product-no-slider`} component={withAuth(ElementProductNoSlider)} />
                                <Route path={`${process.env.PUBLIC_URL}/features/element-product-multiple-slider`} component={withAuth(ElementMultipleSlider)} />
                                <Route path={`${process.env.PUBLIC_URL}/features/element-product-tab`} component={withAuth(ElementProductTab)} />

                                {/*Portfolios*/}
                                <Route path={`${process.env.PUBLIC_URL}/features/portfolio-grid/:columns`} component={withAuth(GridCols)} />
                                <Route path={`${process.env.PUBLIC_URL}/features/portfolio-masonary/:columns`} component={withAuth(MasonaryGridCols)} />

                                {/*Blog Pages*/}
                                <Route exact path={`${process.env.PUBLIC_URL}/blog`} component={RightSide} />
                                <Route path={`${process.env.PUBLIC_URL}/blog/details`} component={withAuth(Details)} />

                                <Route path="*" component={PageNotFound} />

                            </Switch>
                        </Layout>
                    </ScrollContext>
                </BrowserRouter>
        </Provider>
    );
}

ReactDOM.render(<Root />, document.getElementById('root'));


