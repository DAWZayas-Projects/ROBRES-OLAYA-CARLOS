import React from 'react'
import { compose, isEmpty } from 'ramda'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

import { getBookDetails } from '../actions/book'
import BookDetails from '../screens/BookDetails'
import WithDidMountAction from '../components/WithDidMountAction'

const BookDetailsContainer = props => !isEmpty(props.bookInfo) && <BookDetails {...props} />

const mapStateToProps = ({ book, profile }) => ({
  bookInfo: book.bookDetails.info,
  chapters: book.bookDetails.chapters,
  owner: book.bookDetails.info.authorId === profile.info.userId
})

const mapDispatchToProps = (dispatch, ownProps) => {
  const { params } = ownProps && ownProps.navigation.state
  const bookId = params && params.bookId

  return {
    handleDidMountAction: () => dispatch(getBookDetails(bookId)),
    handleChangeTitle: ({ title, category, author }) =>
      dispatch(NavigationActions.setParams({
        params: {
          title,
          category,
          author
        },
        key: 'LibraryStack'
      }))
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) =>
  Object.assign({}, ownProps, stateProps, {
    ...dispatchProps,
    handleChangeTitle: dispatchProps.handleChangeTitle(stateProps.bookInfo)
  })

export default compose(
  connect(mapStateToProps, mapDispatchToProps, mergeProps),
  WithDidMountAction
)(BookDetailsContainer)
