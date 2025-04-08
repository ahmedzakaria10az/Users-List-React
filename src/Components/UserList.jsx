import UserCard from './UserCard';

function UserList({ users }) {
  return (
    <div className="container">
      <div className="row">
        {users.map((user, index) => (
          <div key={index} className="col-md-4 mb-4">
            <UserCard user={user} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserList;