import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Home from './Components/Pages/Home/Home/Home';
import Login from './Components/Pages/Login/Login/Login';
import Register from './Components/Pages/Login/Register/Register';
import Header from './Components/Shared/Header/Header';
import AuthProvider from './Context/AuthProvider';


function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
        <Header></Header>
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
    
      </AuthProvider>
    </div>
  );
}

export default App;
