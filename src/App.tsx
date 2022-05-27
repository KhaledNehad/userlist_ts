import { useState, useEffect } from 'react'
import axios from 'axios'
import IUser from './interfaces/IUser'
import Loading from './components/Loading'
import UsersList from './containers/UsersList'
import Form from './components/Form'

function App() {
  const [users, setUsers] = useState<IUser[] | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const fetchUsers = async (numberOfUser: number = 1) => {
    try {
      setLoading(true)
      const response = await axios.get(
        `https://randomuser.me/api/?results=${numberOfUser}&nat=us,ca`
      )
      const users = response.data.results
      setUsers(users)
      setLoading(false)
      setError(null)
    } catch (error) {
      setLoading(false)
      setError((error as Error).message)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <div className="App">
      <header className="App-header">User List</header>
      <main>
        <Form onSubmit={fetchUsers} />
        {loading && <Loading />}
        {!loading && users && <UsersList users={users} />}
        {!loading && error && <h4 className="error">{error}</h4>}
      </main>
    </div>
  )
}

export default App
