import defaultArticles from '../fixtures'
import { FILTER_ARTICLES } from '../constants'

export default (articleState = defaultArticles, action) => {
  const { type, payload } = action

  switch (type) {
    case FILTER_ARTICLES:
      return articleState.filter((article) => article.title !== payload.title)

    default:
      return articleState
  }
}
