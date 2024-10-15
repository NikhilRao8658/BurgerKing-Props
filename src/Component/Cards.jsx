
import React, { Component } from 'react';

export default class Cards extends Component {
    render() {
        return (
            <div id="main">
                <div style={{ backgroundColor: 'white', borderRadius: '20px', position: 'relative' }} id="inner">
                    <img style={{ width: "580px", height: "300px", borderRadius: '20px' }} src={this.props.imgSrc} alt={this.props.alt}></img>
                    <h2 style={{ marginLeft: '15px', marginTop: '15px' }}>{this.props.heading}</h2>
                    <p style={{ width: "560px", marginLeft: '15px', marginTop: '15px' }}>
                        {this.props.bpara}
                    </p>
                    <p style={{ marginLeft: '15px', marginTop: '15px' }}>{this.props.term}</p> <br /><br />
                    <button style={{ position: 'absolute', left: '450px', bottom: '20px' }} id="bbtn">{this.props.btn}</button> <br />
                </div>
            </div>
        );
    }
}
