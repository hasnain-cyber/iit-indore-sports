import React from "react";
import Home from '../Webpages/HomePage/Home'
import {BrowserRouter as Router, Route} from "react-router-dom";
import Council from "../Webpages/Council/Council";

function App() {
    return (
        <Router>
            <div>
                <Route path="/" exact component={Home}/>
                <Route path="/council" exact component={Council}/>
            </div>
        </Router>
    );
}

export default App;
