import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { signinSchema } from "../../validation/signinSchema";
import { getUserProfile, signin } from "../../actions/authActions";
import ReactLoading from "react-loading";
import withAuth from "../../protection/withAuth";

const Signin = () => {
    const [userLoading, setUserLoading] = useState(true);
    const { loading, success, error, token, user } = useSelector(state => state.auth);
    //const {loading: userLoading, user} = useSelector(state=>state.userProfile);
    const dispatch = useDispatch();

    useEffect(() => {
        if(user){
            setUserLoading(true);
            window.location.assign("/")
        }
        else {
            setUserLoading(false);
        }
    }, [error, user]);

    return (
        <div>            
            <section className="login-page section-b-space">
                <div className="container">
                { userLoading ? (<ReactLoading className={"signinloader"} type="spin" color="#f0b54d" height={"200px"} width="20%"/>) : (
                    <div className="row">
                        <div className="col-lg-6">
                            <h3>Se connecter</h3>
                            <div className="theme-card">
                                <Formik
                                    initialValues={{
                                        login: "",
                                        password: ""
                                    }}
                                    validationSchema={signinSchema}
                                    onSubmit={values => {
                                        dispatch(signin(values));
                                    }}
                                >
                                    {({ errors, touched }) => (
                                        <Form className="theme-form">
                                            <div className="form-group">
                                                <label htmlFor="login">Username or Email</label>
                                                <Field
                                                    type="text"
                                                    className={`form-control${errors.login && touched.login ? " is-invalid" : ""}`}
                                                    id="login"
                                                    name="login"
                                                    placeholder="Username or Email"
                                                    autoComplete="off"
                                                />
                                                {errors.login && touched.login ? (
                                                    <div className="invalid-feedback">{errors.login}</div>
                                                ) : null}
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="password">Mot de passe</label>
                                                <Field
                                                    type="password"
                                                    className={`form-control${errors.password && touched.password ? " is-invalid" : ""}`}
                                                    id="password"
                                                    name="password"
                                                    placeholder="Mot de passe"
                                                    autoComplete="off"
                                                />
                                                {errors.password && touched.password ? (
                                                    <div className="invalid-feedback">{errors.password}</div>
                                                ) : null}
                                            </div>
                                            <div className="form-group text-right">
                                                <Link to="/forget-password">Mot de passe oublié ?</Link>
                                            </div>
                                            <div className="form-group">
                                                <button type="submit" className="btn btn-solid">Se connecter</button>
                                                {
                                                    loading ? (
                                                        <ReactLoading className={"inputloader"} type="spin" color="#f0b54d" width="5%"/>
                                                        ) : null
                                                }
                                            </div>
                                            {
                                                error ? (
                                                    <div className="form-group">
                                                        <div className="alert alert-danger">{error}</div>
                                                    </div>
                                                ) : null
                                            }
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                        <div className="col-lg-6 right-login">
                            <h3>Nouveau client</h3>
                            <div className="theme-card authentication-right">
                                <h6 className="title-font">Céer un compte</h6>
                                <p>
                                    Créez un compte gratuit dans notre magasin. L'inscription est 
                                    simple et rapide. Elle vous permet de pouvoir commander sur 
                                    notre boutique. Pour commencer à magasiner, cliquez sur le bouton 
                                    créer un compte.
                                </p>
                                <Link to="/signup" className="btn btn-solid">
                                    Create an Account
                                </Link>
                            </div>
                        </div>
                    </div>)}
                </div>
            </section>
        </div>
    );
}

export default Signin;