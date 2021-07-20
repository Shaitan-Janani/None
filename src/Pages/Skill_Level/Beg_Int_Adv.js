import React from 'react'
import { Card, Container, Row, Col, Button, Image } from 'react-bootstrap'

export const Beg_Int_Adv = () => {
    return (
        <div>
        <Container>
		<Row>
			<Col md = {6}>
				<Card style={{ width: '18rem' }}>
					<Card.Img variant="top" src="holder.js/100px180" />
					<Card.Body>
						<Card.Title>Beginner</Card.Title>
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
						<Card.Title>Intermediate</Card.Title>
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
						<Card.Title>Advance</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the bulk of
							the card's content.
						</Card.Text>
						<Button variant="primary">Click Here!</Button>
					</Card.Body>
				</Card>
			</Col>
		</Row>
		</Container>
        </div>
    )
}
