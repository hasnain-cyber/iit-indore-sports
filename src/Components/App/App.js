import React from "react";
import Home from '../Webpages/Home'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import IndividualSportPage from "../Webpages/IndividualSportPage/IndividualSportPage";

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path='/CRICKET' exact component={IndividualSportPage}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
