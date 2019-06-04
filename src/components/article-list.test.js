import React from 'react'
import Enzyme, {mount, render, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ArticleList from './article-list'
import articles from '../fixtures'
import ArticleListWithAccordion from './article-list';

Enzyme.configure({ adapter: new Adapter() });

describe('ArticleList', () => {
  it('should render article list', () => {
    const container = render(<ArticleList articles = {articles}/>)

    expect(container.find('.test__article-list--item').length).toEqual(articles.length)
  });

  it('should render articles by default', () => {
    const container = render(<ArticleListWithAccordion articles = {articles}/>)

    expect(container.find('.test__article-list--item').length).toEqual(0)
  });

  it('should open an article an click', () => {
    const container = mount(<ArticleListWithAccordion atrticles={articles} />)

    container.find('.test__article-btn').at(0).simulate('click')

    expect(container.find('.test__article-list--item').length).toEqual(1)
  });
  
  it('should trigger data fetching on mount', (done) => {
    mount(<ArticleList articles = {[]} toggleOpenItems = {() => {}} fetchData={done}/>)
  })
});