import IUser from '../interfaces/IUser'

type IProps = {
  user: IUser
}

const User: React.FC<IProps> = ({ user }): JSX.Element => {
  return (
    <div className="d-flex align-items-center">
      <div className="flex-shrink-0">
        <img
          src={user.picture.large}
          className="card-img-top rounded-circle"
          alt={user.name.title}
        />
      </div>
      <div className="flex-grow-1 card-body">
        <h4 className="card-title">
          {user.name.first} {user.name.last}
        </h4>
        <h6 className="card-text">📧 {user.email}</h6>
        <p>
          🏠 {user.location.country} - {user.location.state} -{' '}
          {user.location.city}
        </p>
        <p>☎️ {user.phone}</p>
      </div>
    </div>
  )
}

export default User
