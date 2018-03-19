import React, { Component } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../redux/auth";
import { connect } from "react-redux";
import "./navbar.css"



class Navbar extends Component {
    render() {
        const isAuthenticated = this.props.isAuthenticated;
        return (
            <div className="navbar">
                <Link className="navlinkhome" to="/" >Home</Link>
                <Link className="navlinkspell" to="/spelllist" >Almighty Spellbook</Link>
                <Link className="navlinkabout" to="/about" >About</Link>
                {isAuthenticated ? <div >
                    <button onClick={this.props.logout}>Logout</button>
                </div> : null}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state.user;
}

export default connect(mapStateToProps, { logout })(Navbar); 