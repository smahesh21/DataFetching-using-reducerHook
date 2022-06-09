import {useEffect, useReducer} from 'react'
import axios from 'axios'

const initialState = {
  loading: true,
  error: '',
  post: {},
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCHING_SUCCESS':
      return {
        loading: false,
        post: action.payload,
        error: '',
      }
    case 'FETCHING_FAILURE':
      return {
        loading: false,
        post: {},
        error: 'Something went Wrong!',
      }
    default:
      return state
  }
}

function DataFetchingTwo() {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => {
        dispatch({payload: response.data, type: 'FETCHING_SUCCESS'})
      })
      .catch(error => {
        dispatch({type: 'FETCHING_FAILURE'})
      })
  }, [])
  return (
    <div>
      <h4>Using useReducer and useEffect</h4>
      {state.loading ? 'Loading' : state.post.title}
      {state.error ? error : null}
    </div>
  )
}

export default DataFetchingTwo
