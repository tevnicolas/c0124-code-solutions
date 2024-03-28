import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Header } from './Header';
import { About } from './About';
import { Products } from './Products';
import { Catalog } from './Catalog';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Catalog />} />
        <Route path="/about" element={<About />} />
        <Route path="/products/:productId" element={<Products />} />
      </Route>
    </Routes>
  );
}

export default App;
