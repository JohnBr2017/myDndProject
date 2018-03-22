import React, { Component } from 'react'
import SignIn from "../SignIn/index"
import SignUp from "../SignUp/index"
import {connect} from "react-redux"

import "./home.css"

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hidden: true,
        }
        this.toggleSignInSignUp = this.toggleSignInSignUp.bind(this)
    }
    toggleSignInSignUp() {
        this.setState({
            hidden: !this.state.hidden,
        })
    }
    render() {
        let signin = { display: this.state.hidden ? "block" : "none" };
        let signup = { display: !this.state.hidden ? "block" : "none" };
        const isAuthenticated = this.props.isAuthenticated;
        return (
            <div className="homePage" >
                <div className="homeInfo" >
                    <h1 className="title">Welcome to the Mystical Tools</h1>
                    <p className="titleP">Spells? We got spells, atleast all that is allowed under the Open-Gaming License (OGL).</p>
                    <p className="titleP">Come back for future updates.</p>
                </div>
                {isAuthenticated ?  
                <div className="signInOrOut">
                <h1 className="welcomeUser">Welcome {this.props.username.toUpperCase()}</h1>
                </div> : null}
                {isAuthenticated ?  null : <div className="signInOrOut" >
                    <button className="signupinbutt" style={signup} onClick={this.toggleSignInSignUp} >Sign In</button>
                    <button className="signupinbutt" style={signin} onClick={this.toggleSignInSignUp} >Sign Up</button>
                    <div style={signin}>
                        <SignIn />
                    </div>
                    <div style={signup}>
                        <SignUp />
                    </div>
                </div> }
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return state.user;
}

export default connect(mapStateToProps, {}) (Home)