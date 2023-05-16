import { Route, Switch } from 'react-router-dom';
import LoginPage from './Pages/loginPage';
import RegisterPage from './Pages/registerPage';
import ProductsPage from './Pages/productsPage';
import './App.css';
import CheckoutPage from './Pages/checkoutPage';
import OrdersPage from './Pages/ordersPage';
import DetailsOrdersPage from './Pages/orderDetailsPage';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ LoginPage } />
      <Route exact path="/login" component={ LoginPage } />
      <Route path="/register" component={ RegisterPage } />
      <Route path="/products" component={ ProductsPage } />
      <Route path="/checkout" component={ CheckoutPage } />
      <Route path="/orders" component={ OrdersPage } />
      <Route path="/order/:id" component={ DetailsOrdersPage } />
    </Switch>
  );
}

export default App;
