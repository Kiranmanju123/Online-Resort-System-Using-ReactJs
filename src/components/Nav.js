import React, { Component } from 'react'
import logo from '../images/logo.svg';
import {Link} from 'react-router-dom'
import { FaAlignRight } from "react-icons/fa";


export default class Nav extends Component {
    state={
        isOpen:false
    }
    handleToggle = () => {
        this.setState({isOpen:!this.state.isOpen})
    }
    render() {
        return (
            <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <Link to="/">
                        <img src={logo} alt="Beach Resort"/>
                    </Link>
                    <button type="button" className="nav-btn" onClick={this.handleToggle}>
                        <FaAlignRight className="nav-icon"/>
                    </button>
                </div>
               
              
            </div>

        </nav>
        )
    }
}
