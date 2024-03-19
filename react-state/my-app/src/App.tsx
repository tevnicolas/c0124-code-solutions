import { Header } from './Header';
import { ImageContainer } from './ImageContainer';
import { ImageCaption } from './ImageCaption';
import { ImageDescription } from './ImageDescription';
import { ButtonContainer } from './ButtonContainer';
import './App.css';

const headerText = 'React Image Bank';
const imageSrc = ['/jacky.jpg', '/pbrain.png'];
const imageCap = ['A Beautiful Jackhammer', 'A Beautiful Potato Brain'];
const imageDescrip = [
  'Concrete is obliterated by this fella!',
  'So smart and so incredibly starchy!',
];

function App() {
  return (
    <>
      <Header headerText={headerText} />
      <ImageContainer imageSrc={imageSrc} />
      <ImageCaption imageCap={imageCap} />
      <ImageDescription imageDescrip={imageDescrip} />
      <ButtonContainer buttonText={'Click for Next Image'} />
    </>
  );
}

export default App;
