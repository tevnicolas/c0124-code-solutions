import { FormEvent } from 'react';

export function RegistrationFormUncontrolled() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formValues = Object.fromEntries(formData);
    console.log('uncontrolled: ', formValues);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" name="user"></input>
      </label>
      <label>
        Password:
        <input type="password" name="pass"></input>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
