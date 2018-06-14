import { compose } from 'ramda'
import { connect } from 'react-redux'

import { getAllBooks } from '../actions/book'
import BooksView from '../screens/BooksView'
import WithDidMountAction from '../components/WithDidMountAction'

const mapStateToProps = ({ book, profile }) => ({
  books: book.books
    .map(({ info }) => info)
    .filter(({ authorId }) => authorId === profile.info.userId)
})

const mapDispatchToProps = dispatch => ({
  handleDidMountAction: () => dispatch(getAllBooks())
})

export default compose(connect(mapStateToProps, mapDispatchToProps), WithDidMountAction)(BooksView)
