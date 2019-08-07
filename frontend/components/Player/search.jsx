import React from 'react';

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };
    }

    componentDidMount() {
        // this.props.receiveSearchResults();
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    render() {
        return(
            <div className="search-container">
                <div className="search-inputBox">
                    <div className="search-contentSpacing">
                        <input 
                            type="text"
                            value={ this.state.input }
                            placeholder="Start typing..."
                            onChange={ this.update('input') }/>
                    </div>
                </div>
                <div className="search-content-empty">
                    <span id="search-amplify-header">Search Amplify</span>
                    <span id="search-amplify-subheader">Find your favorite songs, artists, albums, podcasts and playlists.</span>
                </div>
            </div>
        );
    }
}

export default Search;