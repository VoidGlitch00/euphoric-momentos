import React from 'react';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const {name, photo, price, details} = props.eachService;
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={photo}/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem className="fw-bold">{price} $</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Button as={Link} to="/services" style={{ backgroundColor: "#207398" }}>Select</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;