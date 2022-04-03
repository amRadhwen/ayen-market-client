import React, {Component} from 'react';

import Breadcrumb from "../common/breadcrumb";

class Search extends Component {

    constructor (props) {
        super (props)

    }

    render (){


        return (
            <div>
                {/*Search section*/}
                <section className="authentication-page section-b-space">
                    <div className="container">
                        <section className="search-block">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 offset-lg-3">
                                    <div className="title4">
                                        <h2 className="title-inner4">Searchs</h2>
                                        <div className="line">
                                        <span>
                                        </span>
                                        </div>
                                    </div>
                                        <form className="form-header">
                                            <div className="input-group">
                                                <input type="text" className="form-control"
                                                       aria-label="Amount (to the nearest dollar)"
                                                       placeholder="Search Products......" />
                                                    <div className="input-group-append">
                                                        <button className="btn btn-solid"><i
                                                            className="fa fa-search"></i>Search
                                                        </button>
                                                    </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>

            </div>
        )
    }
}

export default Search