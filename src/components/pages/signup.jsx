import React, { useState, useEffect } from 'react';
//import Breadcrumb from "../common/breadcrumb";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import { signupSchema } from '../../validation/signupSchema';
import { signup } from '../../actions/authActions';
import czips from "../../api/tunisia_zip.json";
import { v1 as uuidv1 } from "uuid";
import ReactLoading from "react-loading";


export default function Signup({ history }) {

    const [userLoading, setUserLoading] = useState(true);

    const {loading, success, error, token, user } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const provinces = Object.keys(czips);
    const [zips, setZips] = useState(czips.ARIANA);

    const handleProvChange = (e, props) => {
        props.setValues({
            ...props.values,
            prov: e.target.value
        })
        setZips(czips[e.target.value]);
    }

    useEffect(()=>{
        if(user) {
            setUserLoading(true);
            window.location.assign("/");
        }
        else {
            setUserLoading(false);
        }
    }, [error, success, user])

    return (
        <div>
            <section className="register-page section-b-space">
                <div className="container">
                { userLoading ? (<ReactLoading className={"signinloader"} type="spin" color="#f0b54d" height={"200px"} width="20%"/>):(
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>Créer un Compte</h3>
                            <div className="theme-card">
                                <Formik
                                    initialValues={{
                                        firstName: "",
                                        lastName: "",
                                        email: "",
                                        password: "",
                                        rpassword: "",
                                        tel: "",
                                        prov: "",
                                        addr: "",
                                        zip: "",
                                        birthDate: ""
                                    }}

                                    validationSchema={signupSchema}

                                    onSubmit={values => {
                                        dispatch(signup(values));
                                        console.log("values sent !");
                                    }}
                                >
                                    {(/*{ errors, touched }*/props) => (
                                        <Form className="theme-form">
                                            <div className="form-row">
                                                <div className="col-md-6">
                                                <label htmlFor="firstName">Nom</label>
                                                    <Field
                                                        type="text"
                                                        className={`form-control${props.errors.firstName && props.touched.firstName ? " is-invalid":""}`}
                                                        id="firstName"
                                                        placeholder="Nom"
                                                        name="firstName"
                                                        autoComplete={"off"}
                                                    />
                                                    {props.errors.firstName && props.touched.firstName ? (
                                                        <div className={"invalid-feedback"}>{props.errors.firstName}</div>
                                                    ) : null}
                                                </div>
                                                <div className="col-md-6">
                                                    <label htmlFor="lastName">Prénom</label>
                                                    <Field
                                                        type="text"
                                                        className={`form-control${props.errors.lastName && props.touched.lastName ? " is-invalid":""}`}
                                                        id="lastName"
                                                        placeholder="Prénom"
                                                        name="lastName"
                                                        autoComplete={"off"}
                                                    />
                                                    {props.errors.lastName && props.touched.lastName ? (
                                                        <div className={"invalid-feedback"}>{props.errors.lastName}</div>
                                                    ) : null}
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="col-md-6">
                                                    <label htmlFor="email">E-mail</label>
                                                    <Field
                                                        type="email"
                                                        className={`form-control${props.errors.email && props.touched.email ? " is-invalid":""}`}
                                                        id="email"
                                                        placeholder="Email"
                                                        name="email"
                                                        autoComplete={"off"}
                                                    />
                                                    {props.errors.email && props.touched.email ? (
                                                        <div className={"invalid-feedback"}>{props.errors.email}</div>
                                                    ) : null}
                                                </div>
                                                <div className="col-md-6">
                                                    <label htmlFor="tel">Téléphone</label>
                                                    <Field
                                                        type="text"
                                                        className={`form-control${props.errors.tel && props.touched.tel ? " is-invalid":""}`}
                                                        id="tel"
                                                        placeholder="Téléphone"
                                                        name="tel"
                                                        autoComplete={"off"}
                                                    />
                                                    {props.errors.tel && props.touched.tel ? (
                                                        <div className={"invalid-feedback"}>{props.errors.tel}</div>
                                                    ) : null}
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="col-md-6">
                                                    <label htmlFor="prov">Province</label>
                                                    <Field
                                                        as="select"
                                                        className={`form-control${props.errors.prov && props.touched.prov ? " is-invalid":""}`}
                                                        id="prov"
                                                        placeholder="Province"
                                                        name="prov"
                                                        autoComplete={"off"}
                                                        onChange={(e)=>{handleProvChange(e, props)}}
                                                    >
                                                        {provinces ? provinces.map((province)=>{
                                                            return <option key={uuidv1()} value={province}>{province.toLowerCase()}</option>
                                                        }) : null}
                                                    </Field>
                                                    {props.errors.addr && props.touched.addr ? (
                                                        <div className={"invalid-feedback"}>{props.errors.addr}</div>
                                                    ) : null}
                                                </div>
                                                <div className="col-md-6">
                                                    <label htmlFor="zip">Code Postal</label>
                                                    <Field
                                                        as="select"
                                                        className={`form-control${props.errors.zip && props.touched.zip ? " is-invalid":""}`}
                                                        id="zip"
                                                        placeholder="Code Postal"
                                                        name="zip"
                                                        autoComplete={"off"}
                                                    >
                                                        {zips ? zips.map(zip=>{
                                                            return <option key={uuidv1()} value={zip}>{zip}</option>
                                                        }) : null}
                                                    </Field>
                                                    {props.errors.zip && props.touched.zip ? (
                                                        <div className={"invalid-feedback"}>{props.errors.zip}</div>
                                                    ) : null}
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="col-md-6">
                                                        <label htmlFor="addr">Addresse</label>
                                                        <Field
                                                            type="addr"
                                                            className={`form-control${props.errors.addr && props.touched.addr ? " is-invalid":""}`}
                                                            id="addr"
                                                            placeholder="Addresse"
                                                            name="addr"
                                                            autoComplete={"off"}
                                                        />
                                                        {props.errors.addr && props.touched.addr ? (
                                                            <div className={"invalid-feedback"}>{props.errors.addr}</div>
                                                        ) : null}
                                                    </div>
                                                <div className="col-md-6">
                                                    <label htmlFor="birthDate">Date de naissance</label>
                                                    <Field
                                                        type="date"
                                                        className={`form-control${props.errors.birthDate && props.touched.birthDate ? " is-invalid":""}`}
                                                        id="birthDate"
                                                        placeholder="Date de naissance"
                                                        name="birthDate"
                                                        autoComplete={"off"}
                                                    />
                                                    {props.errors.birthDate && props.touched.birthDate ? (
                                                        <div className={"invalid-feedback"}>{props.errors.birthDate}</div>
                                                    ) : null}
                                                </div>
                                            </div>
                                            <div className={"form-row"}>
                                                <div className="col-md-6">
                                                    <label htmlFor="password">Mot de passe</label>
                                                    <Field
                                                        type="password"
                                                        className={`form-control${props.errors.password && props.touched.password ? " is-invalid":""}`}
                                                        id="review"
                                                        placeholder="Mot de passe"
                                                        name="password"
                                                        autoComplete={"off"}
                                                    />
                                                    {props.errors.password && props.touched.password ? (
                                                        <div className={"invalid-feedback"}>{props.errors.password}</div>
                                                    ) : null}
                                                </div>
                                                <div className="col-md-6">
                                                    <label htmlFor="rpassword">Répéter mot de passe</label>
                                                    <Field
                                                        type="password"
                                                        className={`form-control${props.errors.rpassword && props.touched.rpassword ? " is-invalid":""}`}
                                                        id="review"
                                                        placeholder="Répéter mot de passe"
                                                        name="rpassword"
                                                        autoComplete={"off"}
                                                    />
                                                    {props.errors.rpassword && props.touched.rpassword ? (
                                                        <div className={"invalid-feedback"}>{props.errors.rpassword}</div>
                                                    ) : null}
                                                </div>
                                            </div>
                                            <div className='form-row'>
                                                <button type="submit" className="btn btn-solid">Créer un compte</button>
                                            </div>
                                            <div className='form-row'>
                                                {
                                                    error ? (
                                                        <div className='col-md-12 text-center'>
                                                            <div className='alert alert-danger'>{error}</div>
                                                        </div>
                                                    ) : null
                                                }
                                                {
                                                    success ? (
                                                        <div className='col-md-12 text-center'>
                                                            <div className='alert alert-success'>compte creé avec succès</div>
                                                        </div>
                                                    ) : null
                                                }
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>)}
                </div>
            </section>
        </div>
    )
}