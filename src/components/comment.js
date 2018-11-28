import React from 'react'
import toggle from '../decorators/toggle'

class Comment extends React.Component {
  render() {
    return (
      <div>
        {this.getButton()}
        {this.getComments()}
      </div>
    )
  }

  getComments() {
    const { article, isItemOpen } = this.props
    const comments = article.comments

    if (!comments) return null

    if (isItemOpen !== false) {
      return comments.map((comment) => (
        <li key={comment.id}>
          <h5>{comment.user}</h5>
          <p>{comment.text}</p>
        </li>
      ))
    }
  }

  getButton() {
    const { article, toggleSomeItem, isItemOpen } = this.props

    if (!article.comments) return

    return <button onClick={toggleSomeItem}>{!isItemOpen ? 'open' : 'close'} comments</button>
  }
}

export default toggle(Comment)
