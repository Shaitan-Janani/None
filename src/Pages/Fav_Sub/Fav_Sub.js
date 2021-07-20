import React from 'react'
import { Card, Container, Row, Col, Button, Image } from 'react-bootstrap'
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom"
import { Interest_Arts } from '../Interest/Interest_Arts'
import { Interest_CS } from '../Interest/Interest_CS'
import { Interest_Phy } from '../Interest/Interest_Phy'
import { Interest_Bio } from '../Interest/Interest_Bio'


export const Fav_Sub = () => {
    return (
        <div>
		<Container>
		<Row>
			<Col md = {6}>
				<Card style={{ width: '18rem' }} bg-secondary mb-3>
					<Card.Img variant="top" src="holder.js/100px180" />
					<Card.Body>
						<Card.Title>Computer Science</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the bulk of
							the card's content.
						</Card.Text>
						<Button variant="light"><Link to = "/Interest_CS">Click Here! </Link></Button>
					</Card.Body>
				</Card>
			</Col>
			<Col md = {6}>
				<Card style={{ width: '18rem' }}>
					<Card.Img variant="top" src="holder.js/100px180" />
					<Card.Body>
						<Card.Title>Physics</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the bulk of
							the card's content.
						</Card.Text>
						<Button variant="light"><Link to = "/Interest_Phy">Click Here!</Link></Button>
					</Card.Body>
				</Card>
			</Col>
			<Col md = {6}>
				<Card style={{ width: '18rem' }}>
					<Card.Img variant="top" src="holder.js/100px180" />
					<Card.Body>
						<Card.Title>Biology</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the bulk of
							the card's content.
						</Card.Text>
						<Button variant="light"><Link to="/Interest_Bio">Click Here!</Link></Button>
					</Card.Body>
				</Card>
			</Col>
			<Col md = {6}>
				<Card style={{ width: '18rem' }}>
					<Card.Img variant="top" src="holder.js/100px180" />
					<Card.Body>
						<Card.Title>Arts</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the bulk of
							the card's content.
						</Card.Text>
						<Button variant="light"><Link to ="/Interest_Arts">Click Here!</Link></Button>
					</Card.Body>
				</Card>
			</Col>
		</Row>
		</Container>
		<Router>
			<Switch>
				<Route exact path = "/Interest_CS" component = {Interest_CS}/>
				<Route exact path = "/Interest_Phy" component = {Interest_Phy}/>
				<Route exact path = "/Interest_Bio" component = {Interest_Bio}/>
				<Route exact path = "/Interest_Arts" component = {Interest_Arts}/>
			</Switch>
		</Router>
        </div>
    )
}
