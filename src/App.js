import React, {Component} from 'react';
import './App.css';
import LuckyPane from "./component/LuckyPane";
import {Image} from "react-bootstrap";
import moonFestImg from './asset/moon_fest.png';
import foreverLoveImg from './asset/forever_love.png';
import Grade from "./component/Grade";
import PrizeRecord from "./component/PrizeRecord";

class App extends Component {
    state = {
        gradeInfo: {
            currentLevel: 'three',
            three: [],
            two: [],
            one: []
        }
    };

    changeGradeInfo(gradeInfo) {
        this.setState({gradeInfo})
    }

    render() {
        console.log(this.state.gradeInfo);
        return (
            <div className="App">
                <div style={{width: '100%', position: 'fixed', height: '100%'}}>
                    <Image src={moonFestImg} width='20%' style={{
                        position: 'absolute',
                        top: 0,
                        left: 0
                    }}/>
                    <PrizeRecord gradeInfo={this.state.gradeInfo} />
                    <Grade gradeInfo={this.state.gradeInfo} changeGradeInfo={(gradeInfo) => this.changeGradeInfo(gradeInfo)}/>
                </div>
                <div className="App-body">
                    <Image src={foreverLoveImg} width='600px' height='125px' style={{marginTop: '-100px'}}/>
                    <LuckyPane gradeInfo={this.state.gradeInfo}
                               changeGradeInfo={(gradeInfo) => this.changeGradeInfo(gradeInfo)}/>
                </div>
            </div>
        );
    }
}

export default App;
