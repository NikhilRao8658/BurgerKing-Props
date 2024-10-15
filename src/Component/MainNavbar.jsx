//navbar

import React, { Component } from "react";

export default class MainNavbar extends Component {
    render() {
        return (
            <>
                <div className="navbar">
                    <div className="threeline">
                        <span><i className="fa-solid fa-bars"></i></span>
                    </div>
                    <div className="logoname">
                        <h1 id="head1">Burger King</h1>
                    </div>
                   
                    <div className="btn">
                    
                        <span id="user"><i className="fa-solid fa-user"></i></span>
                        <button id="btn1" style={{ color: " rgb(235, 226, 211,1)", fontWeight: 'bold' }}>View Cart</button>
                    </div>
                </div>
            </>
        )
    }
}