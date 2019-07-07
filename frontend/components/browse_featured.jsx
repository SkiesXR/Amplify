import React from 'react';
import { withRouter } from 'react-router-dom';


class BrowseFeatured extends React.Component {

    render() {

        return (
            <marquee>FUTURE HOME OF COOL STUFF</marquee>
        );
    }
}

export default withRouter(BrowseFeatured);