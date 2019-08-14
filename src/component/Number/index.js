import React from 'react';
import {Card} from "react-bootstrap";

const Number = props => {

    return (
        <Card bg="danger" text="white" style={{width: '400px'}}>
            <Card.Body>
                <Card.Text style={{
                    fontSize: '180px',
                }}>
                    {props.number}
                </Card.Text>
            </Card.Body>
        </Card>
    )
};

export default Number;