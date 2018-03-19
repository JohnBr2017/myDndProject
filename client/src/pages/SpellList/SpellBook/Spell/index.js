import React, { Component } from 'react'
import { connect } from "react-redux"
import { getSpellById } from "../../../../redux/spells";
import { getPlayerList, addSpell } from "../../../../redux/players";


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
        }
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
        let { spellName, description, higher_level, page, range, components, material, ritual, duration, casting_time, level, school, classes, schoolFilter, levelFilter, classFilter, spellId } = this.props;
        if ((schoolFilter === school || schoolFilter === "all")
            && (level.includes(levelFilter) || levelFilter === "all")
            && (classes.includes(classFilter) || classFilter === "all")

        ) {
            return (
                <div className="spell">
                    <h1 className="name">{spellName}</h1>
                    <button  onClick={() => this.handleSpell(this.props.oneSpell)} value={spellId}>add spell to player</button>
                    <h2>{spellId}</h2>
                    <p className="page">Page{page}</p>
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

    }
}

export default connect(mapStateToProps, { getSpellById, getPlayerList, addSpell })(Spell)