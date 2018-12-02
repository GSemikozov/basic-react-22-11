import React from 'react'
import PropTypes from 'prop-types'

function Comment({ comment }) {
  return (
    <div className="comment-list__comment">
      {comment.text} <b>by {comment.user}</b>
    </div>
  )
}

Comment.propTypes = {
  // just try false value to display custom error
  comment: PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {
    if (!/matchme/.test(propValue[key])) {
      return new Error(
        'Invalid prop `' +
          propFullName +
          '` supplied to' +
          ' `' +
          componentName +
          '`. Validation failed.'
      )
    }
  })
}

export default Comment
