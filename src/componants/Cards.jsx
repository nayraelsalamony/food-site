import React from "react";
import { Card, Button ,ListGroup } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

function Cards(props) {
    let { title, img ,price} = props;

    let navigate = useNavigate();

    let navigateProfile = () => {
        navigate('/profile');
    }

    return (
        <Card className='col-4 mx-3 text-center border-3 mb-5 my-5 px-3' style={{ width: '350px', borderRadius: "20PX" }}>
            <Card.Img variant="top" src={img} style={{ height: '200px' }} />
            <Card.Body>
                <Card.Title className='my-3 fw-bold'>{title}</Card.Title>
                <Card.Text className='my-3'>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <ListGroup variant="flush">
                    <ListGroup.Item>prise is {price}</ListGroup.Item>
                </ListGroup>
                <Button variant="primary" className='my-3 fw-bold px-3' onClick={navigateProfile}>Contact</Button>
            </Card.Body>
        </Card>
    )
}

export default Cards;