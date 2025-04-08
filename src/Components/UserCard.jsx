import 'bootstrap/dist/css/bootstrap.min.css';

function UserCard({ user }) {
  const getRoleColor = (role) => {
    switch (role) {
      case 'admin':
        return 'bg-danger'; 
      case 'user':
        return 'bg-success'; 
      case 'moderator':
        return 'bg-warning'; 
      default:
        return 'bg-secondary'; 
    }
  };

  return (
    <div className="card text-center shadow-sm" style={{ width: '18rem' }}>
      <div className="d-flex justify-content-center mt-3">
        <img
          src={user.image}
          alt={`${user.username}'s profile`}
          className="rounded-circle"
          style={{ width: '100px', height: '100px', objectFit: 'cover' }}
        />
      </div>
      <div className="card-body">
      <span className={`badge ${getRoleColor(user.role)} text-capitalize`}>
          {user.role}
        </span>
        <p className="card-text m-2"><strong>Username:</strong>{user.username}</p>
        <p className="card-text mb-1"><strong>Email:</strong> {user.email}</p>
        <p className="card-text mb-1"><strong>Phone:</strong> {user.phone}</p>
        <p className="card-text mb-3"><strong>Birthdate:</strong> {user.birthDate}</p>
       
      </div>
    </div>
  );
}

export default UserCard;
