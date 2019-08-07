import React from 'react';

class Search extends React.Component {
    render() {
        return(
            <div className="search-container">
                <div className="search-inputBox">
                    <div className="search-contentSpacing">
                        <input type="text" placeholder="Start typing..."/>
                    </div>
                </div>
                <div className="search-content-empty">
                    
                </div>
            </div>
        );
    }
}

export default Search;