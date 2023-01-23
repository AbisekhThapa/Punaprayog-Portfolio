import './App.scss';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './landingPage';
import ProductsLists from './components/productsLists/ProductsLists.js';
import NoCategoryError from './components/NoCategoryError';


const App = () => {
  return (
    <>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<LandingPage />} />
          <Route path='/:category' element={<ProductsLists />} />
          <Route path='/services' element={<NoCategoryError />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
