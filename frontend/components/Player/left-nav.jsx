import React from 'react';
import { Link } from 'react-router-dom';


class LeftNav extends React.Component {

    render() {

        return (
            <div className="left-nav">
                <Link to="/browse/featured"><img id="amp-logo-left-nav" src="Amplify_White_Transparent.png"/></Link>
            </div>
        );
    }
}

export default LeftNav;