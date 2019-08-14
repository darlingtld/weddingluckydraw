import React from 'react';
import {Card} from "react-bootstrap";

const Number = props => {

    return (
        <Card bg="danger" text="white" style={{width: '18rem'}}>
            <Card.Body>
                <Card.Text style={{
                    fontSize: 'xx-large',
                    height: '18rem'
                }}>
                    {props.number}
                </Card.Text>
            </Card.Body>
        </Card>
    )
};

export default Number;