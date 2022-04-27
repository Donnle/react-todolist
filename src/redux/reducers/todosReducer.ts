import produce from "immer";
import {ADD_TODO, REMOVE_ALL_TODOS, REMOVE_TODO, TODOS} from "../constants";
import {ITodo} from "../../components/App/App";


const initialState = {
  entities: JSON.parse(localStorage.getItem(TODOS)!) || []
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: any) => {
  const {type, payload} = action
  switch (type) {
    case ADD_TODO:
      return produce(state, (draft: any) => {
        const {todoText, id} = payload
        draft.entities.unshift({id, todoText})
      })
    case REMOVE_TODO:
      return produce(state, (draft: any) => {
        const {id} = payload
        draft.entities = draft.entities.filter((todo: ITodo) => todo.id !== id)
      })
    case REMOVE_ALL_TODOS:
      return produce(state, (draft: any) => {
        draft.entities = []
      })
    default:
      return state
  }
}
