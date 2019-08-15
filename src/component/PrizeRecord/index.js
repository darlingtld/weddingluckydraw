import React from 'react';

const PrizeRecord = props => {
    return (
        <div style={{
            position: 'absolute',
            bottom: '100px',
            left: '20px',
            color: 'white',
            textAlign: 'left',
            width: '600px'
        }}>
            <div style={{width:'100%', float:'left'}}>
                <p style={{fontSize: '30px', float: 'left', height: '70px'}}>三等奖：</p><p
                style={{fontSize: '30px'}}>{props.gradeInfo['three'].join(", ")}</p>
            </div>
            <div style={{width:'100%', float:'left'}}>
                <p style={{fontSize: '40px', float: 'left', height: '70px'}}>二等奖：</p><p
                style={{fontSize: '40px'}}>{props.gradeInfo['two'].join(", ")}</p>
            </div>
            <div style={{width:'100%', float:'left'}}>
                <p style={{fontSize: '50px', float: 'left', height: '70px'}}>一等奖：</p><p
                style={{fontSize: '50px'}}>{props.gradeInfo['one'].join(", ")}</p>
            </div>
        </div>
    )
};

export default PrizeRecord;