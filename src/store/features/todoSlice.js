import { createSlice, nanoid } from "@reduxjs/toolkit";

// let's design our initialState
const initialState = {
    todos:[{id:1, text:"Go to the market"}]
}

/*  step 1 - initial state
    step 2 - createSlice, give it a name, the initialstate, and write reducers, 
    can also define the reducers at the same spot by directly using a callback in the object property.
    step 3 - export functionalities from slicename.action 
    step 4 - export default all the reducers 
*/

// declare reducer functionality in this function
const addTodoFunction = (state, action) =>{
    // creating todo
    const todo = {
        id: nanoid(),
        text: action.payload.text
    }
    // updating todos, adding current todo to existing 
    state.todos.push(todo) // this state denotes the initialValues state
}

// declare reducer functionality in this function
const removeTodoFunction = (state, action) =>{
    // remove a todo by comparing the id we got in the payload
    state.todos = state.todos.filter((todo) => todo.id !== action.payload.id)
}

const updateTodoFunction = (state, action) => {
    // update the text of a todo
    state.todos = state.todos.map((todo) => {
        if(todo.id === action.payload.id){
           todo.text = action.payload.text
        }
    })
}

// const updateTodoFunction = (state, action) => {
//     state.todos = state.todos.map((todo) => 
//         todo.id === action.payload.id 
//             ? { ...todo, text: action.payload.text }
//             : todo
//     );
// }


// let's create a slice now
const todoSlice = createSlice({
    name:"todo", // name of this slice
    initialState, // declaring the initial state
    // creating reducers and setting function
    reducers:{
        addTodo: addTodoFunction,
        removeTodo: removeTodoFunction,
        updateTodo: updateTodoFunction,
    }
})

export const {addTodo, removeTodo, updateTodo}  = todoSlice.actions

export default todoSlice.reducer