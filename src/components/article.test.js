import React from 'react'
import Enzyme, { render, mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Article from './article'
import DecoratedCommentList, { CommentList } from './comment-list'
import articles from '../fixtures'

Enzyme.configure({ adapter: new Adapter() })

// get first article to test
const article = articles[0]

describe('Article', () => {
  it('should try first article from the list', () => {
    const container = shallow(<Article article={article} />)
    expect(container.find('.test__article--body').length).toEqual(0)
  })

  it('should render comments closed by default from the comments list of first article', () => {
    const container = shallow(<CommentList comments={article.comments} />)
    expect(container.find('.comment-list__comment').length).toEqual(0)
  })

  // last test is not working (try to make it like in article-list.test) -
  // but had no enough of time to check why, so will be nice to get comments from mentor :)
  // it might be in how i'm using DecoratedCommentList
  // ps. third test works as expected - custom error from <Comment/>
  it('should open comment on click', () => {
    const container = mount(<DecoratedCommentList comments={article.comments} />)
    expect(container.find('.test__comments').length).toEqual(0)
    container
      .find('.test__comments-open-btn')
      .at(0)
      .simulate('click')
    expect(container.find('.test__comments').length).toEqual(1)
  })

  it('should load comments on mount', () => {
    let callackWasCalled = false
    mount(
      <DecoratedCommentList
        comments={article.comments}
        fetchAllComments={() => (callackWasCalled = true)}
      />
    )
    expect(callackWasCalled).toBe(true)
  })
})
