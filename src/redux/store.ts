import {legacy_createStore} from 'redux'
import {counterReducer} from './counter-reducer';
import {loadState} from '../utils/localStorage';

export const store = legacy_createStore(counterReducer, loadState())

// @ts-ignore
window.store = store