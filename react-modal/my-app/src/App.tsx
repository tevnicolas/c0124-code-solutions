import { useState } from 'react';
import './App.css';
import { Modal } from './Modal';

function App() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Delete Me!</button>
      <Modal
        children={
          <>
            Are you sure you want to delete?
            <button
              onClick={() => {
                alert('You deleted something!');
                setIsOpen(false);
              }}>
              Yes
            </button>
            <button onClick={() => setIsOpen(false)}>No</button>
          </>
        }
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}

export default App;
