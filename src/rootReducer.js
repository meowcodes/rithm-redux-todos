const INITIAL_STATE = { todos: [] };

function rootReducer(state = INITIAL_STATE, action) {
    console.log("IN REDUCER", state, action);

    switch (action.type) {
        case "ADD":
            let addATodo = [...state.todos, action.payload];
            console.log({todos: addATodo});
            return { todos: addATodo };

        case "DELETE":
            let deleteATodo = state.todos.filter(t => t.id !== action.payload.id);
            return { todos: deleteATodo };

        default:
            return state;
    }
}

export default rootReducer;