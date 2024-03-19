import './App.css';
import { ButtonContainer } from './ButtonContainer';
import { Header } from './Header';
import { ImageCaption } from './ImageCaption';
import { ImageContainer } from './ImageContainer';
import { ImageDescription } from './ImageDescription';

function App() {
  return (
    <>
      <Header />
      <ImageContainer />
      <ImageCaption />
      <ImageDescription />
      <ButtonContainer />
    </>
  );
}

export default App;
