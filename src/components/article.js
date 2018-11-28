import React from 'react'
import Comment from './comment'

function Article(props) {
  const { article, isOpen, toggleOpen } = props
  return (
    <article>
      <h3>{article.title}</h3>
      <button onClick={toggleOpen}>{isOpen ? 'close' : 'open'} article</button>
      {getBody(props)}
      <Comment article={article} />
    </article>
  )
}

function getBody({ isOpen, article }) {
  if (!isOpen) return null

  return <section>{article.text}</section>
}

export default Article
