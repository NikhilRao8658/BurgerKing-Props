//top display
import React, { Component } from "react";

export default class OrderBox extends Component {
    render() {
        return (
            <>
                <br /><br />
                <div className="topdiv">
                    <div className="leftside">
                        <h1 id="order" style={{ color: 'rgb(80, 35, 20)' }}>Start your <br /> BK® order.</h1> <br />
                        <button className="orderbtn">Order Pickup</button><br /> <br />
                        <button id="orderbtn2">Order Delivery</button>
                    </div>
                    <div className="rightside">
                        <img src="https://cdn.sanity.io/images/czqk28jt/prod_bk_us/97876c636e357c965a26f603f0a10bf3dd0d3f29-800x450.png?w=1125&q=90&fit=max&auto=format" alt="" />

                    </div>
                </div>
                <br /><br />
            </>
        )
    }
}