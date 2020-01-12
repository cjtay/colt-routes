import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

class Nav extends Component {
    render() {
        return (
            <div className='Nav'>
                <NavLink
                    to='/'
                    className='navlink'
                    exact
                    activeClassName='active'
                >
                    Home
                </NavLink>
                <NavLink
                    to='/contact'
                    className='navlink'
                    exact
                    activeClassName='active'
                >
                    Contact
                </NavLink>
                <NavLink
                    to='/dog'
                    className='navlink'
                    exact
                    activeClassName='active'
                >
                    Dog
                </NavLink>
                <NavLink
                    to='/param/123render'
                    className='navlink'
                    exact
                    activeClassName='active'
                >
                    Params
                </NavLink>
                <NavLink
                    to='/param2/123component'
                    className='navlink'
                    exact
                    activeClassName='active'
                >
                    Params2
                </NavLink>
            </div>
        );
    }
}

export default Nav;
