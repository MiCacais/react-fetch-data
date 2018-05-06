import React from 'react';
import './Layout.css';
import logo from '../../assets/imgs/Rick_and_Morty.jpeg';

const layout = ( props ) => (
    <div>
        <div className="banner">
            <img src={logo} className="Logo" alt="logo"/>
        </div>
        <main className="Content">
            {props.children}
        </main>
    </div>
);

export default layout;