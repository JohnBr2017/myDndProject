import React, { Component } from 'react'
import { getSpellById } from "../../../../../redux/spells";
import { connect } from "react-redux"

class CharacterSpells extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hidden: true
        }
        this.handleModal = this.handleModal.bind(this)
    }
    handleModal() {
        this.setState({
            hidden: !this.state.hidden
        })
    }

    render() {
        let spellModal = { display: !this.state.hidden ? "block" : "none" }
        let { spellName, description, higher_level, range, components, material, ritual, duration, casting_time, level, school, classes, deleteSpell, index
            // , page, spellId
        } = this.props
        return (
            <div className="playersSpells" >
                <h1 onClick={this.handleModal} className="sName">{spellName}</h1>
                <button className="deletePlaySpell" onClick={() => deleteSpell(index)} >
                    Delete: {spellName} </button>
                <div style={spellModal} onClick={this.handleModal} className="backdrop" />
                <div style={spellModal} >
                    <div className="spell">
                        <h1 className="spellName">{spellName}</h1>
                        {/* <button onClick={this.handleModal} >Click to close</button>
                         <h2>{spellId}</h2>
                        <p className="page">Page{page}</p> */}
                        <p className="range">Range{range}</p>
                        <p className="components">Components{components}</p>
                        <p className="material">Material{material}</p>
                        <p className="ritual">Ritual{ritual}</p>
                        <p className="duration">Duration{duration}</p>
                        <p className="casting_time">Casting Time{casting_time}</p>
                        <p className="level">Level{level}</p>
                        <p className="school">School{school}</p>
                        <p className="classes">Classes {classes.join(", ")}</p>
                        <div className="description">Description{description.map((x, i) => <p key={i}>{x}</p>)}</div>
                        <div className="higher_level">Higher Level{higher_level.map((x, i) => <p key={i}>{x}</p>)}</div>
                    </div>
                </div>
            </div>


        )
    }
}


const mapStateToProps = (state) => {
    return {
        spells: state.spells,
    }
}

export default connect(mapStateToProps, { getSpellById })(CharacterSpells);

// <div >
// <h1 onClick={this.handleModal} className="name">{spellName}</h1>
// <div style={spellModal} onClick={this.handleModal} className="backdrop" />
// <div style={spellModal} >
//     <div className="spell">
//         <h1 className="spellName">{spellName}</h1>
//         {isAuthenticated ?
//             <button className="spelladdbuttons" onClick={() => this.handleSpell(this.props.oneSpell)} value={spellId}>add spell to player</button> : null}

//         <p className="range">Range: {range}</p>
//         <p className="components">Components: {components}</p>
//         <p className="material">{material}</p>
//         <p className="ritual">Ritual: {ritual}</p>
//         <p className="duration">Duration: {duration}</p>
//         <p className="casting_time">Casting Time: {casting_time}</p>
//         <p className="level">Level: {level}</p>
//         <p className="school">{school}</p>
//         <p className="classes">Classes: {classes.join(", ")}</p>
//         <div className="description">{description.map((x, i) => <p key={i}>{x}</p>)}</div>
//         <div className="higher_level">{higher_level.map((x, i) => <p key={i}>{x}</p>)}</div>
//     </div>
// </div>
// </div>