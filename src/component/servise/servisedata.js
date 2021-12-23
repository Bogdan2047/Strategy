import React from "react";
import './servisedata.css';

export const Servisedata = (props) =>{
    return(
        <div className='servisedata-block'>
            <div className='servise-block-two-name'>
                <span>{props.name}</span>
            </div>
            <div className='servise-block-two-text'>
                <span>{props.article}</span>
            </div>
        </div>
    )
}