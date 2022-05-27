import { useState } from 'react'

type IProps = {
  onSubmit: (numberOfUser?: number) => Promise<void>
}

const Form: React.FC<IProps> = ({ onSubmit }) => {
  const [numberOfUser, setNumberOfUser] = useState(1)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumberOfUser(Number(event.target.value))
  }

  return (
    <form
      className="number-of-users-form"
      onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        onSubmit(numberOfUser)
      }}
    >
      <div className="form-group">
        <label htmlFor="number-of-users">Number of Users</label>
        <input
          type="number"
          min={1}
          max={200}
          id="number-of-users"
          className="form-control"
          defaultValue={numberOfUser}
          onChange={handleChange}
        />
      </div>
      <div className="form-actions">
        <button type="submit" className="btn btn-primary">
          Fetch Users
        </button>
      </div>
    </form>
  )
}

export default Form
