import { compose } from 'ramda'
import { connect } from 'react-redux'

import { getUserBookmarks } from '../actions/book'
import BookmarksView from '../screens/BookmarksView'
import WithDidMountAction from '../components/WithDidMountAction'

const mapStateToProps = ({ book, profile }) => ({
  userBookmarks: profile.aditionalInfo.bookmarks,
  bookmarks: book.userBookmarks
})

const mapDispatchToProps = dispatch => ({
  handleDidMountAction: bookmarks => dispatch(getUserBookmarks(bookmarks))
})

const mergeProps = (stateProps, dispatchProps, ownProps) =>
  Object.assign({}, ownProps, stateProps, {
    ...dispatchProps,
    handleDidMountAction: () => dispatchProps.handleDidMountAction(stateProps.userBookmarks)
  })

export default compose(
  connect(mapStateToProps, mapDispatchToProps, mergeProps),
  WithDidMountAction
)(BookmarksView)
