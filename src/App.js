import React from "react";
import { Card, Row, Col, Container, Button, Image } from "react-bootstrap";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Fav_Sub } from "./Pages/Fav_Sub/Fav_Sub";

export default function App() {
return (
	<div>
		<Router>
			<Link to = "/Fav_Sub">
			<h1>Lets Go!</h1>
			</Link>
			<Switch>
				<Route exact path = "/Fav_Sub" component = {Fav_Sub} />
				<Route path = "/" />
			</Switch>
		</Router>
		

	</div>
	


	
	);
}
