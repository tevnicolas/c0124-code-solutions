import { useState } from 'react';

export function ToggleSwitch() {
  const [state, setState] = useState('');

  function handleClick(): void {
    if (!state) {
      setState('is-on');
    } else {
      setState('');
    }
  }

  return (
    <div onClick={handleClick} className={`toggle-switch ${state}`}>
      <div className="slider">
        <div className="switch"></div>
      </div>
      <span className="state-label"></span>
    </div>
  );
}
