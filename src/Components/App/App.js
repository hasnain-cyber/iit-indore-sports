import React from "react";
import Home from "../Webpages/Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Council from "../Webpages/Council/Council";
import HallOfFame from "../Webpages/HallOfFame/HallOfFame";
import Explore from "../Webpages/Explore/Explore";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route path={"/"} exact component={Home} />
				<Route path={"/council"} exact component={Council} />
				<Route path={"/hallOfFame"} exact component={HallOfFame} />
				<Route path={"/explore"} exact component={Explore} />
			</Switch>
			<Footer/>
		</Router>
	);
}

export default App;
