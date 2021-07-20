import React from 'react'

export const Introduction_to_3D_Printing = () => {
    return (
        <div>
        <Container>
		<Row>
			<Col md = {6}>
				<Card style={{ width: '18rem' }}>
					<Card.Img variant="top" src="holder.js/100px180" />
					<Card.Body>
						<Card.Title>Introduction_to_3D_Printing</Card.Title>
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
