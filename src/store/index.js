// Importamos los metodos necesarios
import {createStore, combineReducers} from 'redux'// solo estos se importan de la libreria de redux
import {todoReducer} from './Todo/reducer'

// Combinaos todos los reducers del app en un solo objeto
const reducers = combineReducers({
    todoReducer
})


// Crear objeto maestro pasandole el objeto de todos los reducers del app
const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store