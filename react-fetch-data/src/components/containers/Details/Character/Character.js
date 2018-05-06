import React from 'react';
import './Character.css';

const character = (props) => (
    <div className="float-xl-left">
        <div className="char">
            <img className="rounded-circle" src={props.img} alt={props.name} width="140" height="140"/>
            <h5>{props.name}</h5>
        </div>
    </div>
);

export default character;