const initialState = {
    todos: []
}

// Funcion del reducer con parametros del estado del inicial state en caso de no mandarse ninguno
function todoReducer (state=initialState, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                state: state.todos.push({
                    id: state.todos.length,
                    msg: action.payload.msg,
                    done: false
                })
            }
        case 'TODO_DONE':
            console.log(action.payload)
            return {
                ...state,
                todos: state.todos.map(elem => {
                    if (elem.id === action.payload.id) {
                        return {
                            ...elem,
                            done: !elem.done
                        }
                    }
                    return elem
                })
            }
        default:
            return state
    }
}

// Acceder a los datos del store viaje de vuelta de la info
const selectCurrentTodos = state => {
    return state.todoReducer.todos
}

export {todoReducer, selectCurrentTodos}