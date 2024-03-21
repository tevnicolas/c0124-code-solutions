import './App.css';
import { HotButton } from './HotButton';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  function handleClick(): void {
    setCount(count + 1);
  }
  let color = 'black';
  if (count < 3) {
    color = 'black';
  } else if (count < 6) {
    color = 'navy';
  } else if (count < 9) {
    color = 'lavender';
  } else if (count < 12) {
    color = 'red';
  } else if (count < 15) {
    color = 'orange';
  } else if (count < 18) {
    color = 'yellow';
  } else {
    color = 'white';
  }
  return (
    <HotButton
      label={'Hot Button ' + count}
      onHotButtonClick={handleClick}
      color={color}
    />
  );
}

export default App;
