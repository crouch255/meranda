import React, { Component } from "react";
import { RiCloseLine } from 'react-icons/ri'
import { withRouter } from 'react-router-dom'

class SideBar extends Component {

    closeMenu = () => {
        document.getElementById('sidebar_wrap').style.right = '-100%'
    }

    render() {

        const btnStyle = {
            fontSize:'20px'
        }

        return (
        <div className="site-mobile-menu site-navbar-target" id="sidebar_wrap">
            <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close mt-3">
                <button className="btn shadow-none bg-transparent border-0 rounded-0 text-dark" onClick={this.closeMenu}>
                    <RiCloseLine size="2rem" />
                </button>
            </div>
            </div>
            <div className="site-mobile-menu-body">
            <ul className="site-nav-wrap">
                <li className="active">
                    <button 
                        className="bg-transparent rounded-0 shadow-none border-0 text-secondary nav-link text-left" 
                        style={btnStyle}
                        onClick={() => {
                            this.props.history.push('/')
                            this.closeMenu()
                        }}
                    >
                        Home
                    </button>
                </li>
                <li>
                    <button 
                        className="bg-transparent rounded-0 shadow-none border-0 text-secondary nav-link text-left" 
                        style={btnStyle}
                        onClick={() => {
                            this.props.history.push('/about-us')
                            this.closeMenu()
                        }}
                    >
                        About
                    </button>
                </li>
                <li>
                    <button 
                        className="bg-transparent rounded-0 shadow-none border-0 text-secondary nav-link text-left" 
                        style={btnStyle}
                        onClick={() => {
                            this.props.history.push('/trending')
                            this.closeMenu()
                        }}
                    >
                        Trending
                    </button>
                </li>
                <li>
                    <button 
                        className="bg-transparent rounded-0 shadow-none border-0 text-secondary nav-link text-left" 
                        style={btnStyle}
                        onClick={() => {
                            this.props.history.push('/contact-us')
                            this.closeMenu()
                        }}
                    >
                        Contact us
                    </button>
                </li>
            </ul>
            </div>
        </div>
        );
    }
}

export default withRouter(SideBar)