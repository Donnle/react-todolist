import {createStore} from "redux";
import reducers from "./reducers";
import {loadState, saveState} from "./localStorage";


const persistedState = loadState()
export const store = createStore(reducers, persistedState)
store.subscribe(() => saveState(store.getState().todos.entities))
