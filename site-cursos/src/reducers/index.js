import { combineReducers } from "redux";
import contatoReducer from './contato-reducer'

const reducers = combineReducers({
    contato : contatoReducer
})

export default reducers