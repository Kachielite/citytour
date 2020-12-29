import React from 'react';
import './Details.css';

const DetailButton = props =>{
    return(
        <div className="detail-button">
            <button onClick={props.displayDetails}><p style={{width:"max-content", padding:"5px"}}>Get Details</p></button>
        </div>
    )
}

export default DetailButton;