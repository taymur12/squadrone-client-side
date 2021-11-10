import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Home from './Components/Pages/Home/Home/Home';
import Login from './Components/Pages/Login/Login/Login';
import Register from './Components/Pages/Login/Register/Register';


function App() {
  return (
    <div>
      <Router>
      <Switch>
        <Route exact path='/'>
        <Home></Home>
          </Route>
        <Route path='/home'>
        <Home></Home>
          </Route>
        <Route path='/login'>
        <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
      </Switch>
      </Router>
    
    
    </div>
  );
}

export default App;
