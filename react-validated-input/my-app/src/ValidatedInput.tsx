import { useState } from 'react';
import './ValidateInput.css';

export function ValidatedInput() {
  const [value, setValue] = useState('');
  return (
    <>
      <div className="mb-3">
        <label className="form-label">
          Password
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="password"
            className="form-control"
          />
          <i className={'fas fa-' + (value.length < 8 ? 'times' : 'check')}></i>
          <p className="error">
            {!value
              ? 'A password is required.'
              : value.length < 8
              ? 'Your password is too short.'
              : ''}
          </p>
        </label>
      </div>
    </>
  );
}
