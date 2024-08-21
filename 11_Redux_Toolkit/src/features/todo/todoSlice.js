import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 1, text: "Hello world"}]
}


export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload // it will bring  info about the event being occured
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer

// action.payload contains the text for the new to-do item. For example, if you dispatch addTodo("Buy milk"), the payload would be "Buy milk", and the new to-do item will have "Buy milk" as its text.

// state.todos = state.todos.filter((todo) => todo.id !== action.payload )


// Here, action.payload contains the id of the to-do item that should be removed. For example, if you dispatch removeTodo(1), the payload would be 1, and the to-do item with id equal to 1 would be removed from the todos array.