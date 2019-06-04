/* eslint-disable no-unused-vars */
import React, { PureComponent } from 'react'

class Article extends PureComponent {
  render() {
    const { article, isOpen, toggleOpen } = this.props
      return (
        <div>
          <div>
            <h3 ref = {this.setTitleRef}>{article.title}</h3>
              <button onClick = {this.handleBtnClick} className= "test__article-btn">{isOpen ? 'close' : 'open'}</button>
            </div>
            {isOpen && <section>{article.text}</section>}
        </div>
      )
    }  

    setTitleRef = (titleRef) => console.log(titleRef)

    handleBtnClick = () => this.props.toggleOpen(this.props.article.id)
  }

export default Article