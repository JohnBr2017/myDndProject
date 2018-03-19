import axios from "axios";
const playerUrl = "/api/player/"
let playerAxios = axios.create();

playerAxios.interceptors.request.use((config)=>{  
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

export function getPlayerList() {
    return dispatch => {
        dispatch({
            type: "IS_LOADING"
        })
        playerAxios.get(playerUrl)
            .then(response => {
                dispatch({
                    type: "GET_PLAYER_LIST",
                    payload: response.data
                });
            });
    }
}
export function addNewCharacter(newPlayer) {
    return function (dispatch) {
        playerAxios.post(playerUrl, newPlayer)
            .then(response => {
                dispatch({
                    type: "ADD_NEW_CHARACTER",
                    newCharacter: response.data
                })
            })
            .catch(err => {
                console.error(err)
            })
    }
}
export function addSpell(player, spell) {
    return function (dispatch) {
        player.listOfSpells.push(spell)
        playerAxios.put(playerUrl + player._id, { value: player })
            .then(response => {
                dispatch({
                    type: "ADD_SPELL_TO_PLAYER",
                    updatedCharacter: response.data
                })
            })
    }
}
export function inputChange(id, value) {
    return dispatch => {
        playerAxios.put(playerUrl + id, { value })
            .then(response =>
                dispatch({
                    type: "TOGGLE_ACTIVE",
                    prevState: response.data
                }))
            .catch(err =>
                console.log(err))
    }
}

export function deletedCharacter(id) {
    return function (dispatch) {
        playerAxios.delete(playerUrl + id, id)
            .then(response => {
                dispatch({
                    type: "DELETE_THE_CHARACTER",
                    id
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}
export function deletedSpell(player, index) {
    return function (dispatch) {
        player.listOfSpells.splice((index), 1)
        playerAxios.put(playerUrl + player._id, { value: player })
            .then(response => {
                dispatch({
                    type: "DELETE_THE_SPELL",
                    updatedCharacter: response.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}

const players = (prevState = [], action) => {
    switch (action.type) {
        case "GET_PLAYER_LIST":
            return action.payload
        case "ADD_NEW_CHARACTER":
            return [...prevState, action.newCharacter];
        case "DELETE_THE_CHARACTER":
            return prevState.filter((character) => {
                return character._id !== action.id;
            })
        case "ADD_SPELL_TO_PLAYER":
            return prevState.map((newSpell) => {
                return newSpell._id === action.updatedCharacter._id ?
                    action.updatedCharacter :
                    newSpell;
            })
        case "TOGGLE_ACTIVE":
            return prevState.map((player) => {
                return player._id === action.prevState._id ?
                    action.prevState :
                    player;
            })
        case "DELETE_THE_SPELL":
            return prevState.map((newSpell) => {
                return newSpell._id === action.updatedCharacter._id ?
                    action.updatedCharacter :
                    newSpell;
            })
        default:
            return prevState;
    }
}




export default players;