import React, { Component } from "react";
import "./Default.css";

class Dog extends Component {
    static defaultProps = {
        name: "Tay"
    };

    render() {
        return (
            <div className='Default'>
                <h1>Dog Component</h1>
                <p>Dog's name is {this.props.name}</p>
            </div>
        );
    }
}

export default Dog;
