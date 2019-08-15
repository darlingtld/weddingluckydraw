import React, {Component} from 'react';
import Number from "../Number";
import {Image} from "react-bootstrap";
import startImg from '../../asset/start1.png';
import stopImg from '../../asset/stop.png';

class LuckyPane extends Component {

    interval = null;

    state = {
        number: 0,
        isNumberRolling: false,
        isMultipleNumberProcessRunning: false
    }

    startRolling() {
        this.setState({
            isNumberRolling: true,
        });
        if (!this.interval) {
            this.interval = setInterval(() => {
                this.setState({number: this.getUniqueNumber()})
            }, 100);
        }
    }

    stopRolling() {
        clearInterval(this.interval);
        this.interval = null;
        let numberForOneClick = this.props.gradeInfo[this.props.gradeInfo['currentLevel']]['numberForOneClick'];
        if (numberForOneClick === 1) {
            this.setState({
                isNumberRolling: false
            });
            this.props.gradeInfo[this.props.gradeInfo['currentLevel']]['numberList'].push(this.state.number);
            this.props.changeGradeInfo(this.props.gradeInfo);
        } else {
            if (this.state.isMultipleNumberProcessRunning) {
                return;
            }
            this.setState({isMultipleNumberProcessRunning: true});
            const numberForOneClickInterval = setInterval(() => {
                if (numberForOneClick-- <= 1) {
                    clearInterval(numberForOneClickInterval);
                    this.setState({
                        isNumberRolling: false,
                        isMultipleNumberProcessRunning: false
                    });
                }
                this.props.gradeInfo[this.props.gradeInfo['currentLevel']]['numberList'].push(this.state.number);
                this.props.changeGradeInfo(this.props.gradeInfo);
                if (numberForOneClick > 0) {
                    this.setState({number: this.getUniqueNumber()});

                }
            }, 1000);
        }

    }

    getUniqueNumber() {
        let number = this.getRandomInt(this.props.gradeInfo['minNumber'], this.props.gradeInfo['maxNumber']);
        while (this.props.gradeInfo['three']['numberList'].includes(number) || this.props.gradeInfo['two']['numberList'].includes(number) || this.props.gradeInfo['one']['numberList'].includes(number)) {
            number = this.getRandomInt(this.props.gradeInfo['minNumber'], this.props.gradeInfo['maxNumber']);
        }
        return number;
    }

    getRandomInt(min, max) {
        //cryptographic strong number from range [0, 1)
        let random = () => crypto.getRandomValues(new Uint32Array(1))[0] / 2 ** 32;
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(random() * (max - min + 1)) + min;
    }

    render() {
        return (
            <div>
                <Number number={this.state.number}/>
                <div style={{
                    position: 'fixed',
                    width: '400px',
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