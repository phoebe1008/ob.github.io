import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import ProductAPP from './reducer/index.js'

const loggerMiddleware = createLogger()

export default function configureStore(preloadedState) {
  return createStore(
    ProductAPP,
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  )
}