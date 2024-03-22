import { FormEvent, useState } from 'react';

export function RegistrationFormControlled() {
  const [userValue, setUserValue] = useState('');
  const [passValue, setPassValue] = useState('');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log('controlled: ', 'user: ', userValue, 'pass: ', passValue);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          name="user"
          value={userValue}
          onChange={(e) => setUserValue(e.target.value)}></input>
      </label>
      <label>
        Password:
        <input
          type="password"
          name="pass"
          value={passValue}
          onChange={(e) => setPassValue(e.target.value)}></input>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
