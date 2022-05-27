import { useState } from 'react'
import { sortBy } from 'sort-by-typescript'
import User from '../components/User'
import IUser from '../interfaces/IUser'

type IProps = {
  users: IUser[]
}
const UsersList: React.FC<IProps> = ({ users }): JSX.Element => {
  const [query, setQuery] = useState<string>('')

  const showingUsers: IUser[] =
    query === ''
      ? users
      : users.filter((user: IUser): boolean => {
          const fullName = `${user.name.first} ${user.name.last}`
          return fullName.toLowerCase().includes(query.trim().toLowerCase())
        })
  return (
    <div className="list-users">
      <div className="list-users-top">
        <input
          type="text"
          className="search-users"
          placeholder="search users"
          value={query}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setQuery(event.target.value)
          }
        />
      </div>
      {showingUsers.length !== users.length && (
        <div className="showing-users">
          <span>
            Now showing {showingUsers.length} of {users.length}
          </span>
          <button onClick={() => setQuery('')}>Show all</button>
        </div>
      )}
      <div className="row users-container">
        {showingUsers.sort(sortBy('name.first')).map(
          (user: IUser): JSX.Element => (
            <div className="col-md-6" key={user.login.uuid}>
              <User user={user} />
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default UsersList
