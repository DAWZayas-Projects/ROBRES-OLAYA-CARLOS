import React from 'react'
import { Icon } from 'native-base'
import { createDrawerNavigator, createStackNavigator } from 'react-navigation'
import { BooksView, MyBooksView, BookDetails, BookmarksView } from '../../containers'
import ProfilePageView from '../../screens/ProfilePageView'

import Header from '../../components/Layout/Header'
import Drawer from '../../components/Layout/Drawer'

const createIcon = (icon, color) => <Icon name={icon} style={{ color }} />

const LibraryStack = createStackNavigator(
  {
    Library: { screen: BooksView },
    BookDetails: { screen: BookDetails }
  },
  {
    headerMode: 'float',
    navigationOptions: {
      header: Header,
      title: 'Biblioteca'
    }
  }
)

const ProfileStack = createStackNavigator(
  {
    screen: ProfilePageView
  },
  {
    headerMode: 'float',
    navigationOptions: {
      header: Header,
      title: 'Perfil'
    }
  }
)

const BookmarksStack = createStackNavigator(
  {
    screen: BookmarksView
  },
  {
    headerMode: 'float',
    navigationOptions: {
      header: Header,
      title: 'Mis marcapáginas'
    }
  }
)

const MyBooksStack = createStackNavigator(
  {
    screen: MyBooksView
  },
  {
    headerMode: 'float',
    navigationOptions: {
      header: Header,
      title: 'Mis libros'
    }
  }
)

export default createDrawerNavigator(
  {
    LibraryStack: {
      screen: LibraryStack,
      navigationOptions: {
        drawerLabel: 'Mi biblioteca',
        drawerIcon: ({ tintColor }) => createIcon('book', tintColor)
      }
    },
    Bookmarks: {
      screen: BookmarksStack,
      navigationOptions: {
        drawerLabel: 'Mis marcapáginas',
        drawerIcon: ({ tintColor }) => createIcon('bookmarks', tintColor)
      }
    },
    MyBooks: {
      screen: MyBooksStack,
      navigationOptions: {
        drawerLabel: 'Mis libros',
        drawerIcon: ({ tintColor }) => createIcon('create', tintColor)
      }
    },
    Profile: {
      screen: ProfileStack,
      navigationOptions: {
        drawerLabel: 'Mi perfil',
        drawerIcon: ({ tintColor }) => createIcon('person', tintColor)
      }
    }
  },
  {
    contentComponent: Drawer,
    contentOptions: {
      inactiveTintColor: '#123456',
      inactiveLabelStyle: { color: '#12345699' },
      activeTintColor: '#123456',
      activeBackgroundColor: '#12345633',
      activeLabelStyle: { color: '#123456' },
      itemsContainerStyle: { paddingTop: 0 },
      itemStyle: {
        height: 60,
        borderBottomWidth: 0.5,
        borderBottomColor: '#CCC'
      }
    }
  }
)
