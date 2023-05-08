import { Route, Switch } from 'react-router-dom';
import LoginPage from './Pages/loginPage';
import RegisterPage from './Pages/registerPage';
import ProductsPage from './Pages/productsPage';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ LoginPage } />
      <Route exact path="/login" component={ LoginPage } />
      <Route path="/register" component={ RegisterPage } />
      <Route path="/products" component={ ProductsPage } />
    </Switch>
  );
}

export default App;
