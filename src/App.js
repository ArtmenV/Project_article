/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import Select from 'react-select'
import {findDOMNode} from 'react-dom'
import ArticleList from './components/article-list'
import ArticlesChart from './components/articles-chart'
import articles from './fixtures'
import UserForm from './components/user-form'

class App extends Component {
  state = {
    openItem: null
  }

  render() {
    return (
      <div>
        <UserForm />
        <Select options = {this.options} value = {this.state.openItem} onChange = {this.handleSelect}/>
          <ArticleList  articles = {articles} ref = {this.setArticleListRef}/>
          <ArticlesChart articles = {articles} />
      </div>
    )
  }

  get options() {
    return articles.map(article => ({
      label: article.title,
      value: article.id
    }))
  }

  handleSelect = openItem => this.setState({ openItem })

  setArticleListRef = ref => {
    console.log('---', ref, findDOMNode(ref))
    //   setTimeout(() => {
    //     ref.setState({ openItemId: articles[0].id})
    // }, 1000)
    }
  }


  
export default App
