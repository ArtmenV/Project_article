import React, { Component } from 'react'
import Comment from './comment' 
import PropTypes from 'prop-types'
import toggleOpen from '../decorators/toggleOpen'

class CommentList extends Component {
static propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired
    text: PropTypes.string.isRequired
  }).isRequired,
  isOpen: PropTypes.bool,
  toggleOpen: PropTypes.func.isRequired
}

  render() {
    const { isOpen, toggleOpen } = this.props
    const text = isOpen ? 'hide comments' : 'show comments'
    return (
      <div>
        <button onClick={toggleOpen}>{text}</button>
        {this.getBody()}
      </div>
    )
  }

  getBody() {
    const { comments, isOpen } = this.props
    if(!isOpen) return null

    const body = comments.length ? (
      <ul>
        {comments.map((comment) => (
          <li key ={comment.id}>
            <Comment comment = {comment}/>
          </li>
        ))}
      </ul>
     ) : (
       <h3>No comment yet</h3>
     )
     return <div>{body}</div>
  }
}

export default toggleOpen(CommentList)