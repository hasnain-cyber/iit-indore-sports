import React from "react";
import Home from '../Webpages/Home'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={Home}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
