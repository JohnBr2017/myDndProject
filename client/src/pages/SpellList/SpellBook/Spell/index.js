import React, { Component } from 'react'
import { connect } from "react-redux"
import { getSpellById } from "../../../../redux/spells";
import { getPlayerList, addSpell } from "../../../../redux/players";
import "./spell.css"


class Spell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: [],
            higher_level: [],
            page: "",
            range: "",
            components: "",
            material: "",
            ritual: "",
            duration: "",
            casting_time: "",
            level: "",
            school: "",
            classes: "",
            hidden: true
        }
        this.handleModal = this.handleModal.bind(this)
    }
    handleModal() {
        this.setState({
            hidden: !this.state.hidden
        })
    }

    handleSpell(spell) {
        let { playerList } = this.props;
        for (let i = 0; i < playerList.length; i++) {
            if (playerList[i].active === true) {
                this.props.addSpell(playerList[i], spell)
            }
        }
    }


    render() {
        let spellModal = { display: !this.state.hidden ? "block" : "none" }
        const isAuthenticated = this.props.user.isAuthenticated;
        let { spellName, description, higher_level, range, components, material, ritual, duration, casting_time, level, school, classes, schoolFilter, levelFilter, classFilter, spellId
            // page,
        } = this.props;
        if ((schoolFilter === school || schoolFilter === "all")
            && (level.includes(levelFilter) || levelFilter === "all")
            && (classes.includes(classFilter) || classFilter === "all")
        ) {
            return (
                <div >
                    <h1 onClick={this.handleModal} className="name">{spellName}</h1>
                    <div style={spellModal} className="backdrop" />
                    <div style={spellModal} >
                        <div className="spell">
                            <h1 className="spellName">{spellName}</h1>
                            {isAuthenticated ?
                                <button className="spelladdbuttons" onClick={() => this.handleSpell(this.props.oneSpell)} value={spellId}>add spell to player</button> : null}
                            <button className="spellmodalbuttons" onClick={this.handleModal} >Click to close</button>
                            {/* <h2>{spellId}</h2>
                        <p className="page">Page{page}</p> */}
                            <p className="range">Range: {range}</p>
                            <p className="components">Components: {components}</p>
                            <p className="material">{material}</p>
                            <p className="ritual">Ritual: {ritual}</p>
                            <p className="duration">Duration: {duration}</p>
                            <p className="casting_time">Casting Time: {casting_time}</p>
                            <p className="level">Level: {level}</p>
                            <p className="school">{school}</p>
                            <p className="classes">Classes: {classes.join(", ")}</p>
                            <div className="description">{description.map((x, i) => <p key={i}>{x}</p>)}</div>
                            <div className="higher_level">{higher_level.map((x, i) => <p key={i}>{x}</p>)}</div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return null
        }
    }
}

const mapStateToProps = (state) => {
    return {
        singleSpell: state.spell,
        playerList: state.players,
        user: state.user
    }
}

export default connect(mapStateToProps, { getSpellById, getPlayerList, addSpell })(Spell)