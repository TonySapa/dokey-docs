import consoleReducer from './reducers/consoleReducer'
import stylesReducer from './reducers/stylesReducer'
import contentReducer from './reducers/contentReducer'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
  console: consoleReducer,
  content: contentReducer,
  mainStyles: stylesReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store