import {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [post, setPost] = useState({})

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => {
        setLoading(false)

        setPost(response.data)
        setError('')
      })
      .catch(error => {
        setLoading(false)
        setPost({})
        setError('Something went Wrong!')
      })
  }, [])
  return (
    <div>
      <h4>Using useState and useEffect</h4>
      {loading ? 'Loading' : post.title}
      {error ? error : null}
    </div>
  )
}
export default DataFetching
