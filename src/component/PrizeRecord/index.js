import React from 'react';

const PrizeRecord = props => {
    return (
        <div style={{
            position: 'absolute',
            bottom: '50px',
            left: '20px',
            color: 'red',
            textAlign: 'left',
            width: '650px',
            fontFamily:'STKaiti'
        }}>
            <div style={{width: '100%', float: 'left', fontSize: '30px'}}>
                <p style={{float: 'left', height: '120px', marginBottom: '50px'}}>三等奖：</p><p
                style={{marginBottom: '0'}}>{props.gradeInfo['three']['numberList'].join(", ")}</p>
            </div>
            <div style={{width: '100%', float: 'left', fontSize: '40px'}}>
                <p style={{float: 'left', height: '50px'}}>二等奖：</p>
                <p>{props.gradeInfo['two']['numberList'].join(", ")}</p>
            </div>
            <div style={{width: '100%', float: 'left', fontSize: '50px'}}>
                <p style={{float: 'left', height: '50px'}}>一等奖：</p>
                <p>{props.gradeInfo['one']['numberList'].join(", ")}</p>
            </div>
        </div>
    )
};

export default PrizeRecord;