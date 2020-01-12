import React, { Component } from "react";

class Param extends Component {
    render() {
        return (
            <div>
                <h1>This is to demo Route Params</h1>
                <p>The parameter name is {this.props.match.params.name}</p>
                <p>The additional prop is {this.props.additionalProps}</p>
            </div>
        );
    }
}

export default Param;
