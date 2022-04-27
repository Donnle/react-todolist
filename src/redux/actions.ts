import {ADD_TODO, REMOVE_ALL_TODOS, REMOVE_TODO} from "./constants";

export const addTodo = (todoText: string) => ({type: ADD_TODO, payload: {todoText}})
export const removeTodo = ({id}: any) => ({type: REMOVE_TODO, payload: {id}})
export const removeAllTodos = () => ({type: REMOVE_ALL_TODOS})
