import './App.scss';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './landingPage';
import ProductsLists from './components/productsLists/ProductsLists.js';
import NoCategoryError from './components/NoCategoryError';
import Footer from './components/footer/footer.js';
import Navbar from './components/navbar/navbar';

const App = () => {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path='/' element={<LandingPage />} />
          <Route path='/:category' element={<ProductsLists />} />
          <Route element={<NoCategoryError />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
