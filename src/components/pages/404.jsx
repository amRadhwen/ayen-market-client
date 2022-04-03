import React from 'react';
import Slider from 'react-slick';

export default function PageNotFound() {
    return (
        <div>
            <section className="p-0">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="error-section">
                                <h1>404</h1>
                                <h2>page introuvable</h2>
                                <a href={`${process.env.PUBLIC_URL}/`} className="btn btn-solid">Retour à l'acceuil</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}