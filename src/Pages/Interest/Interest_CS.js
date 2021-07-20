import React from 'react'
import { Card, Container, Row, Col, Button, Image } from 'react-bootstrap'
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom"
import { Topic_Prog } from '../Topic/Topic_Prog'
import { Topic_AI } from '../Topic/Topic_AI'

export const Interest_CS = () => {
    return (
        <div>
		<Router>
        <Container>
		<Row>
			<Col md = {6}>
				<Card style={{ width: '18rem' }}>
					<Card.Img variant="top" src="holder.js/100px180" />
					<Card.Body>
						<Card.Title>Programming</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the bulk of
							the card's content.
						</Card.Text>
						<Button variant="light"><Link to = "/Topic_Prog">Click Here!</Link></Button>
					</Card.Body>
				</Card>
			</Col>
			<Col md = {6}>
				<Card style={{ width: '18rem' }}>
					<Card.Img variant="top" src="holder.js/100px180" />
					<Card.Body>
						<Card.Title>Game Development</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the bulk of
							the card's content.
						</Card.Text>
						<Button variant="primary">Click Here!</Button>
					</Card.Body>
				</Card>
			</Col>
			<Col md = {6}>
				<Card style={{ width: '18rem' }}>
					<Card.Img variant="top" src="holder.js/100px180" />
					<Card.Body>
						<Card.Title>Photoshop</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the bulk of
							the card's content.
						</Card.Text>
						<Button variant="primary">Click Here!</Button>
					</Card.Body>
				</Card>
			</Col>
			<Col md = {6}>
				<Card style={{ width: '18rem' }}>
					<Card.Img variant="top" src="holder.js/100px180" />
					<Card.Body>
						<Card.Title>3D-Printing</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the bulk of
							the card's content.
						</Card.Text>
						<Button variant="primary">Click Here!</Button>
					</Card.Body>
				</Card>
			</Col>
            <Col md = {6}>
				<Card style={{ width: '18rem' }}>
					<Card.Img variant="top" src="holder.js/100px180" />
					<Card.Body>
						<Card.Title>Website Design</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the bulk of
							the card's content.
						</Card.Text>
						<Button variant="primary">Click Here!</Button>
					</Card.Body>
				</Card>
			</Col>
			<Col md = {6}>
				<Card style={{ width: '18rem' }}>
					<Card.Img variant="top" src="holder.js/100px180" />
					<Card.Body>
						<Card.Title>Artificial Intelligence</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the bulk of
							the card's content.
						</Card.Text>
						<Button variant="light"><Link to = "/Topic_AI">Click Here!</Link></Button>
					</Card.Body>
				</Card>
			</Col>
		</Row>
		</Container>
		<Switch>
			<Route exact path = "/Topic_Prog" component = {Topic_Prog} />
			<Route exact path = "/Topic_AI" component = {Topic_AI} />
		</Switch>
		</Router>	
        </div>
    )
}
