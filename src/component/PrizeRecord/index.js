import React from 'react';

const PrizeRecord = props => {
    return (
        <div style={{
            position: 'absolute',
            bottom: '50px',
            left: '20px',
            color: 'white',
            textAlign: 'left',
            width: '700px'
        }}>
            <div style={{width:'100%', float:'left'}}>
                <p style={{fontSize: '40px', float: 'left', height: '150px', marginBottom:'50px'}}>三等奖：</p><p
                style={{fontSize: '40px', marginBottom:'0'}}>{props.gradeInfo['three']['numberList'].join(", ")}</p>
            </div>
            <div style={{width:'100%', float:'left'}}>
                <p style={{fontSize: '50px', float: 'left', height: '50px'}}>二等奖：</p><p
                style={{fontSize: '50px'}}>{props.gradeInfo['two']['numberList'].join(", ")}</p>
            </div>
            <div style={{width:'100%', float:'left'}}>
                <p style={{fontSize: '60px', float: 'left', height: '50px'}}>一等奖：</p><p
                style={{fontSize: '60px'}}>{props.gradeInfo['one']['numberList'].join(", ")}</p>
            </div>
        </div>
    )
};

export default PrizeRecord;