import React from 'react';
import { Formik, Form, Field } from "formik";
import { forgetPasswordSchema } from "../../validation/forgetPasswordSchema";

export default function ForgetPassword() {

    return (
        <div>
            <section className="pwd-page section-b-space">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="title4">
                            <h2 className="title-inner4">Réinitialiser le mot de passe</h2>
                            <div className="line">
                            <span>
                            </span>
                            </div>
                        </div>
                            <Formik
                                initialValues={{
                                    email: ""
                                }}

                                validationSchema={forgetPasswordSchema}

                                onSubmit={(values)=>{
                                    console.log(values);
                                }}
                            >
                                {({errors, touched})=> (
                                <Form className="theme-form">
                                    <div className="form-row">
                                        <div className="col-md-12">
                                            <Field 
                                                type="text" 
                                                className={`form-control${errors.email && touched.email ? " is-invalid" : ""}`}
                                                id="email"
                                                placeholder="Entrer Votre Email" 
                                                name="email"
                                                autoComplete="off"
                                            />
                                            { errors.email && touched.email ? (
                                                <div className='invalid-feedback'>{errors.email}</div>
                                            ) : null }
                                        </div>
                                        <button type="submit" className="btn btn-solid">Envoyer</button>
                                    </div>
                                </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}