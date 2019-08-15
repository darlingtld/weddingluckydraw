import React, {Component} from 'react';

class Grade extends Component {

    state = {
        grade: '三等奖'
    };

    gradeUp() {
        switch (this.state.grade) {
            case "三等奖":
                this.setState({grade: '二等奖'});
                this.props.gradeInfo['currentLevel'] = 'two';
                this.props.changeGradeInfo(this.props.gradeInfo);
                break;
            case "二等奖":
                this.setState({grade: '一等奖'});
                this.props.gradeInfo['currentLevel'] = 'one';
                this.props.changeGradeInfo(this.props.gradeInfo);
                break;
            case "一等奖":
                this.setState({grade: '三等奖'});
                this.props.gradeInfo['currentLevel'] = 'three';
                this.props.changeGradeInfo(this.props.gradeInfo);
                break;
            default:
                this.setState({grade: '三等奖'});
                this.props.gradeInfo['currentLevel'] = 'three';
                this.props.changeGradeInfo(this.props.gradeInfo);
        }
    }

    render() {
        return (
            <div style={{
                float: 'right',
                writingMode: 'vertical-lr',
                position: 'absolute',
                bottom: 0,
                right: 0,
                fontSize: '100px',
                color: 'palegoldenrod',
                marginRight: '100px',
                marginBottom: '50px'
            }}
                 onClick={() => this.gradeUp()}>{this.state.grade}
            </div>
        )
    }
}

export default Grade;