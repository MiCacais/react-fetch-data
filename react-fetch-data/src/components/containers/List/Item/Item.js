import React from 'react';
import './Item.css';

const item = (props) => (
    <article>
        <div className="Info">
            <div className="btn btn-outline-secondary btn-block">{props.id} {props.title}</div>
        </div>
    </article>
);

export default item;