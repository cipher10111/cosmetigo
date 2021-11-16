import { combineReducers } from 'redux'
import userReducers from './userReducers'
import productReducers from './productReducers'

const rootReducer = combineReducers({
  auth: userReducers,
  products: productReducers,
})

export default rootReducer
