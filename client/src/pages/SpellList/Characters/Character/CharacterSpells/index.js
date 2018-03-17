import React, { Component } from 'react'
import { getSpellById } from "../../../../../redux/spells";
import { connect } from "react-redux"

class CharacterSpells extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        let { spellName,
            //  description, higher_level, page, range, components, material, ritual, duration, concentration, casting_time, level, school, classes, spellId, 
             deleteSpell, index } = this.props
        return (
            <div className="spell">
                 <button onClick={() => deleteSpell(index)} >X</button> 
                <h1 className="spellName">{spellName}</h1>
                {/* <h2>{spellId}</h2>
                <p className="page">{page}</p>
                <p className="range">{range}</p>
                <p className="components">{components}</p>
                <p className="ritual">{ritual}</p>
                <p className="duration">{duration}</p>
                <p className="concentration">{concentration}</p>
                <p className="casting_time">{casting_time}</p>
                <p className="level">{level}</p>
                <p className="school">{school}</p>
                <div className="classes">{classes.map((x, i) => <p key={i}>{x}</p>)}</div> 
                <p className="material">{material}</p>
                <div className="description">Description{description.map((x, i) => <p key={i}>{x}</p>)}</div>
        <div className="higher_level">Higher Level{higher_level.map((x, i) => <p key={i}>{x}</p>)}</div> */}
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