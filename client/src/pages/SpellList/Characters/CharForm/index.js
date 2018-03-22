import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
                playerName: this.props.playerName || "",
                playerClass: this.props.playerClass || ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.clearInput = this.clearInput.bind(this)
    }
    handleChange=(e)=>{
        let {name, value} = e.target;
        this.setState(prevState =>{
            return{
                ...prevState.state,
                [name]: value
            }
        })
    }
    clearInput(){
        this.setState({
            playerName: "",
            playerClass: ""       
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let {add, id} = this.props;
        if (add) {
            this.props.submit(this.state)
            this.clearInput();
        } else {
            this.props.submit(this.state, id);
            this.clearInput();
        }
    }
    render() {
        let { playerClass, playerName } = this.props
        return (
            <div  >
                <form className="characterForm" onSubmit={this.handleSubmit} >
                    <input className="formName" onChange={this.handleChange} value={playerName} name="playerName" type="text" placeholder="Character Name" />
                    <input className="formClass" onChange={this.handleChange} value={playerClass} name="playerClass" type="text" placeholder="Character Class" />
                    <button className="formButt" >Create New Character</button>
                </form>
            </div>
        )
    }
}
export default Form