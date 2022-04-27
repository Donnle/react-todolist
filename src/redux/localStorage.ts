import {TODOS} from "./constants";

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(TODOS)
    if (serializedState === null) return undefined
    else return JSON.parse(serializedState)
  } catch (e) {
    return undefined
  }
}

export const saveState = (state: any) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(TODOS, serializedState)
  } catch (e) {
    // Ignore errors
  }
}
