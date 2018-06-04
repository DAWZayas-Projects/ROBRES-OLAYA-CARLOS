import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

import Book from '../components/Book'

const mapDispatchToProps = dispatch => ({
  handleOnPress: bookId =>
    dispatch(NavigationActions.navigate({
      routeName: 'BookDetails',
      params: { bookId },
      key: 'BookDetails'
    }))
})

export default connect(_ => ({}), mapDispatchToProps)(Book)
