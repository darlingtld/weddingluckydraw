import React, {Component} from 'react';
import Number from "../Number";
import {Image} from "react-bootstrap";
import startImg from '../../asset/start1.png';
import stopImg from '../../asset/stop.png';

class LuckyPane extends Component {
    interval = null;

    state = {
        number: 0,
        isNumberRolling: false
    }

    startRolling() {
        this.setState({
            isNumberRolling: true
        });
        if (!this.interval) {
            this.interval = setInterval(() => {
                const number = this.getRandomInt(0, 200);
                this.setState({number: number})

            }, 100);
        }
    }

    stopRolling() {
        this.setState({
            isNumberRolling: false
        });
        clearInterval(this.interval);
        this.interval = null;
        this.props.gradeInfo[this.props.gradeInfo['currentLevel']].push(this.state.number);
        this.props.changeGradeInfo(this.props.gradeInfo);
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
                <div style={{
                    position: 'fixed',
                    width: '20%',
                    marginTop: '140px'
                }}>
                    {!this.state.isNumberRolling ?
                        <Image src={startImg} width='180px' onClick={() => this.startRolling()}/> :
                        <Image src={stopImg} width='180px' onClick={() => this.stopRolling()} style={{
                            height: '90px',
                            width: '135px',
                            marginTop: '20px'
                        }}/>
                    }
                </div>
            </div>
        )
    }
}

export default LuckyPane;