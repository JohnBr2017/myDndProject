import React, { Component } from "react";
import { connect } from "react-redux";
import SpellBook from "./SpellBook"
import Characters from "./Characters"


class SpellList extends Component {
    render() {
        const isAuthenticated = this.props.isAuthenticated;
        return (
            <div className="spellpage">
                {isAuthenticated ?
                    <div className="characters">
                        <Characters></Characters>
                    </div> : null}
                <div className="spellbook">
                    <SpellBook> </SpellBook>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state.user;
}

export default connect(mapStateToProps, {})(SpellList); 
