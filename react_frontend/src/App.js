import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import NavbarMenu from './components/Navbar';
import UpdateProduct from './components/UpdateProduct';
import ShowProduct from './components/ShowProduct';
import ProductDetails from './components/ProductDetails';
import AddPrdt from './components/AddPrdt';

function App() {
  return (
    <div className="App">
      <NavbarMenu />
      <Routes>
        <Route exact path="/" element={<ShowProduct />} />
        <Route exact path="/addprdt" element={<AddPrdt />} />
        <Route exact path="/:id/update" element={<UpdateProduct />} />
        <Route exact path="/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
