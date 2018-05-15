import { GET_ALL_BOOKS_SUCCESS } from '../actions/books'

const initialState = {
  books: [
    {
      key: 1,
      title: 'Lengua',
      author: 'Cyn :3',
      category: 'Apuntes'
    },
    {
      key: 2,
      title: 'Sintaxis',
      author: 'Cyn :3',
      category: 'Ejercicios'
    },
    {
      key: 3,
      title: 'Informática',
      author: 'Garlas',
      category: 'Apuntes'
    },
    {
      key: 4,
      title: 'Le Fedeo',
      author: 'Panch'
    },
    {
      key: 5,
      title: 'Sintaxis',
      author: 'Cyn :3',
      category: 'Ejercicios'
    },
    {
      key: 6,
      title: 'Informática',
      author: 'Garlas',
      category: 'Apuntes'
    },
    {
      key: 7,
      title: 'Le Fedeo',
      author: 'Panch',
      category: undefined
    }
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_BOOKS_SUCCESS: {
      return state
    }
    default:
      return state
  }
}
