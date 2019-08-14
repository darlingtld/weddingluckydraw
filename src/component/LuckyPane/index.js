import React, {Component} from 'react';
import Number from "../Number";
import {Button, Image} from "react-bootstrap";
import startImg from '../../asset/start1.png';

class LuckyPane extends Component {
    interval = null;

    state = {
        number: 0
    }

    startRolling() {
        this.setState({
            isNumberRolling: true
        });
        this.interval = setInterval(() => {
            const number = this.getRandomInt(0, 200);
            this.setState({number: number})

        }, 100);
    }

    stopRolling() {
        clearInterval(this.interval);
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    render() {
        return (
            <div>
                <Number number={this.state.number}/>
                <div style={{marginTop: '10px'}}>
                    <Button variant="primary" style={{marginRight: '5px'}}
                            onClick={() => this.startRolling()}>Start</Button>
                    <Button variant="danger" style={{marginLeft: '5px'}}
                            onClick={() => this.stopRolling()}>Stop</Button>
                </div>
            </div>
        )
    }
}

export default LuckyPane;