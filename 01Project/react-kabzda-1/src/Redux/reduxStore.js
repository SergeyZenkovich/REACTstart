import { combineReducers, createStore } from "redux";

import profileReducer from './profileReducer';
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer"



let reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    sidebar: sidebarReducer
});

let store = createStore(reducers);
window.store = store;
export default store;