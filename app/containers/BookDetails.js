import { compose } from 'ramda'
import { connect } from 'react-redux'

import { getBookDetails } from '../actions/book'
import BookDetails from '../screens/BookDetails'
import WithDidMountAction from '../components/WithDidMountAction'

const mapStateToProps = ({ book, profile }) => ({
  bookInfo: book.bookDetails.info,
  chapters: book.bookDetails.chapters
})

const mapDispatchToProps = (dispatch, ownProps) => {
  const { params } = ownProps && ownProps.navigation.state
  const bookId = params && params.bookId

  return {
    handleDidMountAction: () => dispatch(getBookDetails(bookId))
  }
}

export default compose(connect(mapStateToProps, mapDispatchToProps), WithDidMountAction)(BookDetails)
