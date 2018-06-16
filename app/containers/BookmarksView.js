import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

import { setBookmark } from '../actions/profile'
import BookmarksView from '../screens/BookmarksView'

const mapStateToProps = ({ book, profile }) => ({
  bookmarks: profile.aditionalInfo.bookmarks.map(bookmark => ({
    ...book.books.find(bk => bk.info.bookId === bookmark.bookId).info,
    chapterId: bookmark.chapterId,
    chapterTitle: bookmark.chapterTitle
  }))
})

const mapDispatchToProps = dispatch => ({
  handleDeleteBookmark: bookmark => dispatch(setBookmark(bookmark)),
  handleOnPress: bookId =>
    dispatch(NavigationActions.navigate({
      routeName: 'BookDetails',
      params: { bookId }
    }))
})

export default connect(mapStateToProps, mapDispatchToProps)(BookmarksView)
