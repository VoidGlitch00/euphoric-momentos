import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const Service = () => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Cras justo odio</ListGroupItem>
                </ListGroup>
                <Card.Body>

                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;