import React from 'react';
import {withTranslate} from 'react-redux-multilingual'

// Custom Components
import HeaderOne from "./common/headers/header-one";
import HeaderTwo from "./common/headers/header-two";
import HeaderThree from "./common/headers/header-three";
import HeaderFour from "./common/headers/header-four";
import HeaderFive from "./common/headers/header-five";

import FooterOne from "./common/footers/footer-one";
import FooterTwo from "./common/footers/footer-two";
import FooterThree from "./common/footers/footer-three";
import FooterFour from "./common/footers/footer-four";


function App(props) {
    return (
        <div>
            <HeaderThree logoName={'ayenlogo2.png'}/>
            {props.children}
            <FooterOne logoName={'logo.png'}/>
        </div>
    );
}

export default withTranslate(App);
