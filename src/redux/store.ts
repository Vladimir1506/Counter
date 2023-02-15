import {legacy_createStore, combineReducers} from 'redux'
import {counterReducer} from './counter-reducer';
import {loadState, saveState} from '../utils/localStorage';


const rootReducer = combineReducers({counter: counterReducer})

export const store = legacy_createStore(rootReducer, loadState())

store.subscribe(() => saveState({...store.getState()}))

export type AppStateType = ReturnType<typeof rootReducer>
// @ts-ignore
window.store = store