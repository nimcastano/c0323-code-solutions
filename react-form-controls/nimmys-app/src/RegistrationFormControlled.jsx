import { useState } from 'react';

export default function RegistrationFormControlled() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`{ username: ${username}, password: ${password} }`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}></input>
      </label>
      <label>
        Password
        <input
          type="text"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}></input>
      </label>
      <label>
        <button type="submit">Sign Up</button>
      </label>
    </form>
  );
}
