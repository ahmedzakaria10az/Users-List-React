import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { userdata } from './assets/data'; 
import UserList from './Components/UserList'; 

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(userdata);

  const handleSearch = () => {
    if (searchTerm) {
      setFilteredUsers(userdata.filter(user => user.email.includes(searchTerm)));
    } else {
      setFilteredUsers(userdata);
    }
  };

  const handleReset = () => {
    setSearchTerm('');
    setFilteredUsers(userdata);
  };

  return (
    <div className="App">
      <h1>User List</h1>
      <input 
        type="text" 
        placeholder="Search by email" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      <button onClick={handleSearch}>Search</button>
      {searchTerm && <button onClick={handleReset}>Reset</button>}
      <UserList users={filteredUsers} />
    </div>
  );
}

export default App;
