import { useState } from 'react';

export default function ValidatedInput() {
  const [password, setPassword] = useState('');

  const xmark = <i className="fa-solid fa-xmark" style={{ color: 'red' }}></i>;
  const check = (
    <i className="fa-solid fa-check" style={{ color: 'green' }}></i>
  );

  const error =
    !/\d/.test(password) && password.length >= 8
      ? 'Password must contain a number.'
      : !/[A-Z]/.test(password) && password.length >= 8
      ? 'Password must contain an uppercase letter.'
      : !/[!@#$%^&*()]/.test(password) && password.length >= 8
      ? 'Password must contain a special character.'
      : password.length < 8 && password.length > 0
      ? 'Your password is too short.'
      : password.length >= 8
      ? ''
      : 'A password is required.';

  const icon = error === '' ? check : xmark;

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
      <p>{error}</p>
    </form>
  );
}
