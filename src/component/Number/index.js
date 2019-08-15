import React from 'react';
import {Card, Image} from "react-bootstrap";
import outline from '../../asset/outline.png';

const Number = props => {

    return (
        <div>
            <Image src={outline} width='400px'/>
            <div style={{
                fontSize: '180px',
                marginTop: '-430px'
            }}>{props.number}</div>
        </div>
    )
};

export default Number;