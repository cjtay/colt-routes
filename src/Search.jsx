import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div>
                <h1>Search Outcome</h1>
                <p>The parameter name is {this.props.match.params.word}</p>
            </div>
        );
    }
}

export default Search;
