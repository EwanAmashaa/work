import React, { useState, useContext } from 'react';
import { UserContext } from '../contexts/UserProvider';

function Profile() {
  const { user, setUser } = useContext(UserContext);
  const [username, setUsername] = useState(user ? user.username : '');
  const [password, setPassword] = useState('');

  const handleSave = () => {
    setUser({ ...user, username, password });
  };

  if (!user) return <p>Please log in to view this page.</p>;

  return (
    <div className="profile">
      <h2>Profile</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleSave}>Save Changes</button>
    </div>
  );
}

export default Profile;
