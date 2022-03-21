import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavbarMenu from './components/Navbar';
import UpdateProduct from './components/UpdateProduct';
import ShowProduct from './components/ShowProduct';
import ProductDetails from './components/ProductDetails'
import AddPrdt from './components/AddPrdt';

function App() {
  return (
    <div className="App">
        <div>
          <Router>
          <NavbarMenu />
            <Switch>
            <Route exact path="/" component={ShowProduct} />
            <Route exact path="/addprdt" component={AddPrdt} />
              <Route exact path="/:id/update" component={UpdateProduct} />
              <Route exact path="/:id/" component={ProductDetails} />
            </Switch>
          </Router>
        </div>
    </div>
  );
}

export default App;
