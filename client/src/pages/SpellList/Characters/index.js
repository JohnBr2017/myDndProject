import React, { Component } from "react";

import { connect } from "react-redux";

import { getPlayerList, addNewCharacter, deletedCharacter, inputChange } from "../../../redux/players";
import Character from "./Character"
import Form from "./CharForm"


class Characters extends Component {
    constructor() {
        super();
        this.state = {
            playerName: "",
            playerClass: "",
            _id: "",
            active: false,
            listOfSpells: ""
        };
        this.formSubmit = this.formSubmit.bind(this)
        this.deleteCharacter = this.deleteCharacter.bind(this)
        this.playerFilter = this.playerFilter.bind(this)
        this.clearInput = this.clearInput.bind(this)
    }
    clearInput(){
        this.setState = {
            playerName: "",
            playerClass: "",
            _id: "",
            active: false,
            listOfSpells: ""
        };
    }
    formSubmit(newPlayer) {
        this.props.addNewCharacter(newPlayer);
    }
    componentDidMount() {
        this.props.getPlayerList();
    }
    deleteCharacter(id) {
        this.props.deletedCharacter(id);
        this.clearInput()
    }
    playerFilter = (e) => {
        let { value  } = e.target;
        console.log(value)
        let list = this.props.playerList;
        for(let i = 0; i< list.length; i++){
            if(value === list[i]._id){
                list[i].active = true;

            }else{
                list[i].active = false
            }
        }
        this.setState({ _id: value });
    }

    render() {
        let { playerList } = this.props;
        return (
            <div>
                <Form add clear submit={this.formSubmit}></Form>
                <select onChange={this.playerFilter}>
                    <option value="none" >Characters</option>
                    {playerList
                        .sort((a, b) => a.playerName !== b.playerName ? a.playerName.toLowerCase() < b.playerName.toLowerCase() ? -1 : 1 : 0)
                        .map((player, i) => { 
                            let { playerName, playerClass, _id } = player;
                            return <option className="testing" key={i} value={_id} >{playerName}, {playerClass}</option>
                        })
                    }
                </select>
                {playerList
                    .map((player, i) => {
                        let { playerName, playerClass, _id, active, listOfSpells } = player;
                        return <Character key={i} playerName={playerName} playerClass={playerClass} characterId={_id} deleteCharacter={this.deleteCharacter} isActive={active} inputChange={inputChange} player={player} listOfSpells={listOfSpells} filterPlayer={this.state._id} ></Character>
                    })
                }
            </div>
        )
    }
}




const mapStateToProps = (state) => {
    return {
        playerList: state.players,
    }
}

export default connect(mapStateToProps, { getPlayerList, addNewCharacter, deletedCharacter, inputChange })(Characters);
