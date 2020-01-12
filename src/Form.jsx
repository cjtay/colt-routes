import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Form.css';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { query: '' };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div className='Form'>
                <form>
                    <input
                        type='text'
                        name='query'
                        placeholder='enter parameter'
                        value={this.state.query}
                        onChange={this.handleChange}
                    />
                    <Link to={`/search/${this.state.query}`}>
                        Click via Link
                    </Link>
                </form>
            </div>
        );
    }
}

export default Form;
