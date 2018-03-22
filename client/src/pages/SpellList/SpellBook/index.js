import React, { Component } from "react";

import { connect } from "react-redux";

import { getSpellList } from "../../../redux/spells";
import Spell from "./Spell";

class SpellBook extends Component {
    constructor() {
        super();
        this.state = {
            school: "all",
            level: "all",
            classes: "all",

        };
        this.filterClass = this.filterClass.bind(this)
        this.filterLevel = this.filterLevel.bind(this)
        this.filterSchool = this.filterSchool.bind(this)
    }
    componentDidMount() {
        this.props.getSpellList();
    }
    filterSchool = (e) => {
        let { value } = e.target;
        this.setState({ school: value });
    }
    filterLevel = (e) => {
        let { value } = e.target;
        this.setState({ level: value });
    }
    filterClass = (e) => {
        let { value } = e.target;
        this.setState({ classes: value });
    }

    render() {
        let { spellList } = this.props;
        return (
            <div className="book">
                <div className="spellOptions">
                    <select className="classSelection" onChange={this.filterClass}>
                        <option value="all">Class</option>
                        <option value="Bard">Bard</option>
                        <option value="Cleric">Cleric</option>
                        <option value="Druid">Druid</option>
                        <option value="Paladin">Paladin</option>
                        <option value="Ranger">Ranger</option>
                        <option value="Sorcerer">Sorcerer</option>
                        <option value="Warlock">Warlock</option>
                        <option value="Wizard">Wizard</option>
                    </select>
                    <select className="levelSelection" onChange={this.filterLevel}>
                        <option value="all">Spell Level</option>
                        <option value="Cantrip">Cantrip</option>
                        <option value="1">Level: 1</option>
                        <option value="2">Level: 2</option>
                        <option value="3">Level: 3</option>
                        <option value="4">Level: 4</option>
                        <option value="5">Level: 5</option>
                        <option value="6">Level: 6</option>
                        <option value="7">Level: 7</option>
                        <option value="8">Level: 8</option>
                        <option value="9">Level: 9</option>
                    </select>
                    <select className="schoolSelection" onChange={this.filterSchool}>
                        <option value="all">School</option>
                        <option value="Abjuration">Abjuration</option>
                        <option value="Conjuration">Conjuration</option>
                        <option value="Divination">Divination</option>
                        <option value="Enchantment">Enchantment</option>
                        <option value="Evocation">Evocation</option>
                        <option value="Illusion">Illusion</option>
                        <option value="Necromancy">Necromancy</option>
                        <option value="Transmutation">Transmutation</option>
                    </select>
                </div>
                <div className="spellBook">
                    {spellList
                        .sort((a, b) => a.spellName !== b.spellName ? a.spellName.toLowerCase() < b.spellName.toLowerCase() ? -1 : 1 : 0)
                        .map((spell, i) => {
                            let { spellName, description, higher_level, page, range, components, material, ritual, duration, casting_time, level, school, classes, _id } = spell;
                            return <Spell className="spellPage" key={i} spellName={spellName} description={description} higher_level={higher_level} page={page} range={range} components={components} material={material} ritual={ritual} duration={duration}  casting_time={casting_time} level={level} school={school} classes={classes} schoolFilter={this.state.school} levelFilter={this.state.level} classFilter={this.state.classes} spellId={_id} oneSpell={spell}
                            ></Spell>
                        })}
                </div>
            </div>
        )
    }
}




const mapStateToProps = (state) => {
    return {
        spellList: state.spells,
    }
}

export default connect(mapStateToProps, { getSpellList })(SpellBook);
