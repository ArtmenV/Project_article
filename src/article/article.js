/* eslint-disable no-unused-vars */
import React, { PureComponent } from 'react'
import {deleteArticle} from '../ac'
import CSSTransition from 'react-addons-css-transition-group'
import {connect} from 'react-redux'
import './style.css'

class Article extends PureComponent {
  render() {
    const { article, isOpen, toggleOpen } = this.props
      return (
        <div>
          <div>
            <h3 ref = {this.setTitleRef}>{article.title}</h3>
              <button onClick = {this.handleBtnClick} className= "test__article-btn">{isOpen ? 'close' : 'open'}</button>
              <button onClick= {this.handleDelete}>
                delete me
              </button>
            </div>
            <CSSTransition
              transitionName = "article"
              transitionEnterTimeout = {700}
              transitionLeaveTimeout = {700}
              >
            {isOpen && <section>{article.text}</section>}
            </CSSTransition>
        </div>
      )
    }
    handleDelete = () => {
      const { article, deleteArticle } = this.props
      deleteArticle(article.id)
    }

    setTitleRef = (titleRef) => console.log(titleRef)

    handleBtnClick = () => this.props.toggleOpen(this.props.article.id)
  }

export default connect(null, {deleteArticle})(Article)