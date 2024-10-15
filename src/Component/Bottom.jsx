// bottom
import React, { Component } from "react"

export default class Bottom extends Component {
    render() {
        return (
            <>
                <br /><br /><br /><br /> <br /> <br />
                <div className="mainbottom">
                    <div className="leftbottom">
                        <img src="https://cdn.sanity.io/images/czqk28jt/prod_bk_us/da421b826216c29608a2694126a5095f17be8676-630x622.png?w=1125&q=80&fit=max&auto=format" alt="qrcode" />
                    </div>
                    <div className="rightbottom">
                        <h1 style={{ fontSize: '48px' }}> Save $$$ <br /> With offers on demand</h1> <br />
                        <button className="bottombtn">Download on the <br /> AppStore</button>
                        <button className="bottombtn" style={{ marginLeft: '30px' }}>Get in on <br /> Googlepay</button> <br /><br />
                        <p>Apple and the Apple logo are trademarks of Apple Inc., registered in the U.S. and other <br /> countries. App Store is a service mark of Apple Inc. Google Play is a trademark of Google Inc. <br /> Terms apply.</p>
                    </div>
                </div>

                <div className="brown">
                    <h6>TM & Copyright 2024 Burger King Company LLC. All Rights Reserved.
                        |
                        <u style={{ cursor: 'pointer' }}>Do Not Sell Or Share My Personal Information</u> </h6>
                </div>
            </>
        )
    }
}