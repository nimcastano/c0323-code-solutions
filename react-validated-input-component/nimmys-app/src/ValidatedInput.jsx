import { useState } from 'react';

export default function ValidatedInput() {
  const [password, setPassword] = useState('');

  let icon = <i className="fa-solid fa-xmark" style={{ color: 'red' }}></i>;
  const check = (
    <i className="fa-solid fa-check" style={{ color: 'green' }}></i>
  );

  let error = 'A password is required.';

  if (password.length < 8 && password.length > 0) {
    error = 'Your password is too short.';
  } else if (password.length >= 8) {
    icon = check;
    error = '';
  }

  return (
    <form className="form">
      <label className="label">Password</label>
      <div>
        <input
          type="password"
          name="password"
          value={password}
          className="textbox"
          onChange={(e) => setPassword(e.target.value)}></input>
        <span>{icon}</span>
      </div>
      <p> {error}</p>
    </form>
  );
}
