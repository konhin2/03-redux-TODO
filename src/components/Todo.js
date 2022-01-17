import { useState } from 'react';
import {addTask, taskDone} from './../store/Todo/actions'
import {connect} from 'react-redux'
import { selectCurrentTodos } from '../store/Todo/reducer';

const mapStateToProps = state => {
    return {
        todos: selectCurrentTodos(state)
    }
}

const Todo = ({todos, addTask, taskDone}) => {
    console.log(todos);
    const [newTodo, setNewTodo] = useState({
        msg: '',
    })
    const handleOnChange = event => {
        return setNewTodo({
            ...newTodo,
            msg: event.target.value
        })
    }
    const handleOnSibmit = async(event) => {
        event.preventDefault()
        setNewTodo({
            msg: ''
        })
        return addTask(newTodo)
    }
    return (
        <div>
            <form onSubmit={e => handleOnSibmit(e)}>
                <label>Task to do</label>
                <br/>
                <input type='text' onChange={e => handleOnChange(e)} value={newTodo.msg} />
                <button type='submit'>Add</button>
            </form>
            {
                todos.length > 0 ?
                <ol>
                    {
                        todos.map((elem, i) => {
                            if (!elem.done) {
                                return(
                                    <li style={{cursor: 'pointer', marginTop: '1em'}} key={i} onClick={() => taskDone({id:elem.id})}>{elem.msg}</li>
                                )
                            }
                            return(
                                <li style={{cursor: 'pointer', marginTop: '1em', textDecoration: 'line-through', color: 'red'}} key={i} onClick={() => taskDone({id:elem.id})}>{elem.msg}</li>
                            )
                        })
                    }
                </ol>
                : <p>No TODO yet</p>
            }
        </div>
    )
}

// Nos conectamos desde este componente hacia el store al igual que las funciones, en los parametros del conecte se pasa lo que quieres obtener del store y despues lo que quires enviar
export default connect(mapStateToProps, {addTask, taskDone})(Todo)
