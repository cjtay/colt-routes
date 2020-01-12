import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Food from './Food';
import About from './About';
import Contact from './Contact';
import Dog from './Dog';
import Param from './Param';
import Nav from './Nav';
import Form from './Form';
import Search from './Search';
import './App.css';

// Use component - will create a new function, call component-will-mount, everytime when it is clicked. Best use this when you don't have a prop to pass.
// Use render - when you have a prop to pass..it will just render instead of creating a new component.

function App() {
    return (
        <div className="App">
            <Nav />
            <Form />
            <Switch>
                <Route exact path="/" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route
                    exact
                    path="/dog"
                    render={() => <Dog name="Render Method" />}
                />
                <Route
                    exact
                    path="/param/:name"
                    render={routeProps => (
                        <Param additionalProps="abcByex`" {...routeProps} />
                    )}
                />
                <Route exact path="/param2/:name" component={Param} />
                <Route exact path="/search/:word" component={Search} />
                <Route component={() => <h1>Error Page not found</h1>} />
            </Switch>
            <Nav />
        </div>
    );
}

export default App;
