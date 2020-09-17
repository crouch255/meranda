import React, { Component } from 'react'
import IMG from '../assets/images/load.gif'

export default class Loading extends Component {
    render() {
        return (
            <div 
                className="position-relative"
                style={{
                    backgroundImage: "url("+ IMG +")",
                    backgroundSize: '300px',
                    height: '450px',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                }}
            />
        )
    }
}
