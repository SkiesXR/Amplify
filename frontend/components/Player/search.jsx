import React from 'react';

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            input: '',            
        };
    }

    componentDidMount() {
        // this.props.receiveSearchResults();
    }

    update(field) {
        let that = this;
        return function(e) {
            that.setState({
                [field]: e.currentTarget.value
            });
            that.props.fetchSearchResults(e.currentTarget.value);
        }
    }

    render() {
        const { results = {} } = this.props;
        // let inputClass = Object.values(results).every(value => (value === undefined)) ? "result-dn" : "result-d";
        let searchResults = Object.entries(results).filter(([k,v]) => {return v != undefined}) || [];
        // debugger;
        let shownResults = searchResults.map(result => {
            // debugger;
            switch(result[0]) {
                case "albums":
                    return (
                        // debugger;
                    <div id="results-albums">
                        <div>{result[1].title}</div>
                    </div>
                    );
                    break;
                case "artists":
                    return (
                        // debugger;
                        <div id="results-artists">
                            <div>{result[1].name}</div>
                        </div>
                        );
                    break;
                case "genres":
                    return (
                        // debugger;
                        <div id="results-genres">
                            <div>{result[1].category}</div>
                        </div>
                        );
                    break;
                case "shows":
                    return (
                        // debugger;
                        <div id="results-shows">
                            <div>{result[1].title}</div>
                        </div>
                        );
                    break;
            }
        });
        // let searchResults = Object.keys(results).map(key => {  
        //     return (
        //         // <div className={ inputClass }>
        //         <div id="results-artists">
        //             <div>{ result[0] }</div>
        //         </div>
        //     );
        

        return(
            <div className="search-container">
                <div className="search-inputBox">
                    <div className="search-contentSpacing">
                        <input 
                            type="text"
                            value={ this.state.input }
                            placeholder="Start typing..."
                            onChange={this.update('input')}/>
                    </div>
                </div>
                {/* <div className="search-content-empty"> */}
                <div className={ Object.values(results).every(value => (value === undefined)) ? "search-content-empty" : "search-content-full" }>
                    <span id="search-amplify-header">Search Amplify</span>
                    <span id="search-amplify-subheader">Find your favorite songs, artists, albums, podcasts and playlists.</span>
                </div>
                <div className="search-results-main">
                    { shownResults }
                </div>
            </div>
        );
    }
}

export default Search;