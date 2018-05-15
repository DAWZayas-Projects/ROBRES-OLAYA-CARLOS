import { connect } from 'react-redux'

import BooksView from '../screens/BooksView'

const mapStateToProps = ({ book }) => ({
  books: book.books
})

export default connect(mapStateToProps)(BooksView)
