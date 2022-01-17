const addTask = (payload) => {
    return {
        type: 'ADD_TODO',
        payload
    }
}

const taskDone = (payload) => {
    return {
        type: 'TODO_DONE',
        payload
    }
}

export {addTask, taskDone}