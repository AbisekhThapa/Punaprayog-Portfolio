import './App.scss';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './landingPage';
import ProductsLists from './components/productsLists/ProductsLists.js';
// import NoCategoryError from './components/NoCategoryError';
import Footer from './components/footer/footer.js';


const App = () => {
  return (
    <>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<LandingPage />} />
          <Route path='/:category' element={<ProductsLists />} />
          {/* <Route element={<NoCategoryError />} /> */}
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
