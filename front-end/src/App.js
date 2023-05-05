import { Route, Switch } from 'react-router-dom';
import LoginPage from './Pages/loginPage';
import RegisterPage from './Pages/registerPage';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ LoginPage } />
      <Route exact path="/login" component={ LoginPage } />
      <Route path="/register" component={ RegisterPage } />
    </Switch>
  );
}

export default App;
