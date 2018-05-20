import { createDrawerNavigator, createStackNavigator } from 'react-navigation'
import BooksView from '../../containers/BooksView'
import BookmarksView from '../../screens/BookmarksView'
import ProfilePageView from '../../screens/ProfilePageView'
// import TextEditorView from '../../screens/TextEditorView'

import Header from '../../components/Layout/Header'
import Drawer from '../../components/Layout/Drawer'

const stack = createStackNavigator(
  {
    Library: {
      screen: BooksView,
      navigationOptions: {
        title: 'Biblioteca'
      }
    },
    Bookmarks: {
      screen: BookmarksView,
      navigationOptions: {
        title: 'Marcapáginas'
      }
    },
    Profile: {
      screen: ProfilePageView,
      navigationOptions: {
        title: 'Mi perfil'
      }
    }
  },
  {
    headerMode: 'float',
    navigationOptions: {
      header: Header
    }
  }
)

export default createDrawerNavigator(
  {
    stack
  },
  {
    contentComponent: Drawer
  }
)
