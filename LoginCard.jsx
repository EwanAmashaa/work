import React, { useState, useContext } from 'react';
import { UserContext } from '../contexts/UserProvider';

const dummyUsers = [
  { username: 'user', password: 'userpass', type: 'user' },
  { username: 'admin', password: 'adminpass', type: 'admin' },
];

function LoginCard() {
  const { setUser } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const user = dummyUsers.find(u => u.username === username && u.password === password);
    if (user) {
      setUser(user);
      setError('');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-card">
      <h2>Login</h2>
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
      <button onClick={handleLogin}>Login</button>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default LoginCard;
