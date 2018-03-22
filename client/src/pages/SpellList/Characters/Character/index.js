import React, { Component } from 'react'
import { inputChange, getPlayerList, deletedSpell } from "../../../../redux/players"
import { getSpellById } from "../../../../redux/spells"
import { connect } from "react-redux"
import CharacterSpells from "./CharacterSpells"

class Character extends Component {
    constructor(props) {
        super(props)
        this.state = {
            playerName: "",
            playerClass: "",
        }
        this.deleteSpell = this.deleteSpell.bind(this)
    }
    deleteSpell(index) {
        this.props.deletedSpell(this.props.player, index);
    }
    render() {
        let { playerName, playerClass, characterId, deleteCharacter, listOfSpells, filterPlayer } = this.props
        if (filterPlayer === characterId) {
            return (
                <div className="characterSection">
                        <button className="deleteButton" onClick={() => deleteCharacter(characterId)} >Delete: {playerName} {playerClass} </button>
                    <h2 className="playerName">{playerName}</h2>
                    {/* <h3>{characterId}</h3> */}
                    <h3 className="playerClass">{playerClass}</h3>
                    <div className="playerSpells">
                        {listOfSpells
                            .sort((a, b) => a.spellName !== b.spellName ? a.spellName.toLowerCase() < b.spellName.toLowerCase() ? -1 : 1 : 0)
                            .map((spell, i) => {
                                let { spellName, description, higher_level, page, range, components, material, ritual, duration, concentration, casting_time, level, school, classes, _id } = spell
                                return <CharacterSpells key={i} spellName={spellName} description={description} higher_level={higher_level} page={page} range={range} components={components} material={material} ritual={ritual} duration={duration} concentration={concentration} casting_time={casting_time} level={level} school={school.name} classes={classes} spellId={_id} deleteSpell={this.deleteSpell} index={i} ></CharacterSpells>
                            })
                        }
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
        active: state.active,
        playerList: state.players
    }
}

export default connect(mapStateToProps, { inputChange, getPlayerList, getSpellById, deletedSpell })(Character)
