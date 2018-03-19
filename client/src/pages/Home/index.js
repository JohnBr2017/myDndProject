import React, { Component } from 'react'
import SignIn from "../SignIn/index"
import SignUp from "../SignUp/index"

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            signin: true,
            signup: false
        }
        this.handleSignIn = this.handleSignIn.bind(this)
        this.handleSignUp = this.handleSignUp.bind(this)
    }
    handleSignIn()  {
        this.setState({
            signin: true,
            signup: false
        })
    }    
    handleSignUp()  {
        this.setState({
            signin: false,
            signup: true
        })
    }
    render() {
        let signin = { display: this.state.signin ? "block" : "none" };
        let signup = { display: this.state.signup ? "block" : "none" }
        return (
            <div>
                <h1 className="title">Welcome to the Mystical Tools</h1>
                <p className="titleP">Spells? We got spells, this book currently has every spell in the Dungeons and Dragons, 5th edition, players handbook.</p>
                <p className="titleP">Come back for future updates.</p>
                <button onClick={this.handleSignIn} >Sign In</button>
                <button onClick={this.handleSignUp} >Sign Up</button>
                <div style={signin}>
                    <SignIn />
                </div>

                <div style={signup}>
                    <SignUp />
                </div>
            </div>
        )
    }
}
export default Home