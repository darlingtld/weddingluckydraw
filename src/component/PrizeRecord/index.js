import React from 'react';

const PrizeRecord = props => {
    console.log(props);
    return (
        <div style={{
            position: 'absolute',
            bottom: '100px',
            left: '20px',
            color: 'white',
            textAlign: 'left'
        }}>
            <p style={{fontSize:'large'}}>三等奖：{props.gradeInfo['three'].join(", ")}</p>
            <p style={{fontSize:'x-large'}}>二等奖：{props.gradeInfo['two'].join(", ")}</p>
            <p style={{fontSize:'xx-large'}}>一等奖：{props.gradeInfo['one'].join(", ")}</p>
        </div>
    )
};

export default PrizeRecord;