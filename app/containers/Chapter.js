import { connect } from 'react-redux'

import { setBookmark } from '../actions/profile'
import { confirmChanges } from '../actions/book'
import Chapter from '../components/Chapter'

const mapStateToProps = ({ profile, book }, ownProps) => {
  const thisBookId = book.bookDetails.info.bookId

  return {
    hasBookmark: !!profile.aditionalInfo.bookmarks.find(({ bookId, chapterId }) => bookId === thisBookId && chapterId === ownProps.id),
    userId: profile.info.userId,
    bookId: thisBookId
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleSetBookmark: (userId, bookId) =>
    dispatch(setBookmark({
      userId,
      chapterId: ownProps.id,
      chapterTitle: ownProps.title,
      bookId
    })),
  handleConfirmChages: bookId => (chapterTitle, data) =>
    dispatch(confirmChanges({
      bookId,
      chapterId: ownProps.id,
      chapterTitle,
      data
    }))
})

const mergeProps = (stateProps, dispatchProps, ownProps) =>
  Object.assign({}, ownProps, stateProps, {
    ...dispatchProps,
    handleSetBookmark: () => dispatchProps.handleSetBookmark(stateProps.userId, stateProps.bookId),
    handleConfirmChages: dispatchProps.handleConfirmChages(stateProps.bookId)
  })

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Chapter)
