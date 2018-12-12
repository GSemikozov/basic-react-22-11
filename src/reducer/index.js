import { combineReducers } from 'redux'
import counterReducer from './counter'
import articles from './articles'
import filteredArticles from './filtered-articles'

export default combineReducers({
  counter: counterReducer,
  articles,
  filteredArticles
})
