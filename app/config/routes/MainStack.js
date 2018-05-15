import { createDrawerNavigator, createStackNavigator } from 'react-navigation'
import BooksView from '../../containers/BooksView'
import Header from '../../components/Layout/Header'
import Drawer from '../../components/Layout/Drawer'

const stack = createStackNavigator(
  {
    Home: {
      screen: BooksView,
      navigationOptions: {
        title: 'Biblioteca'
      }
    },
    Custom: {
      screen: BooksView,
      navigationOptions: {
        title: 'Working'
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
