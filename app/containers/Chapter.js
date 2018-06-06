import { connect } from 'react-redux'

import { setBookmark } from '../actions/profile'
import Chapter from '../components/Chapter'

const mapStateToProps = ({ profile, book }, ownProps) => ({
  hasBookmark: !!profile.aditionalInfo.bookmarks.find(({ chapterId }) => chapterId === ownProps.id),
  userId: profile.info.userId,
  bookId: book.bookDetails.info.bookId
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleSetBookmark: (userId, bookId) =>
    dispatch(setBookmark({
      userId, chapterId: ownProps.id, chapterTitle: ownProps.title, bookId
    }))
})

const mergeProps = (stateProps, dispatchProps, ownProps) =>
  Object.assign({}, ownProps, stateProps, {
    ...dispatchProps,
    handleSetBookmark: () => dispatchProps.handleSetBookmark(stateProps.userId, stateProps.bookId)
  })

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Chapter)
